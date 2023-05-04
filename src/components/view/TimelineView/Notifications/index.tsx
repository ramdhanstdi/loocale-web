import React, { useEffect, useState } from "react";
import { DisplayedNotificationInterface } from "src/models/Timeline";
import { useGetNotifications } from "src/services/Timeline";
import HeartOutlinedIcon from "@icons/heart_outlined_icon.svg";
import CommentIcon from "@icons/comment_icon.svg";
import { useRouter } from "next/router";
import NotificationIcon from "@icons/notification_icon.svg";

const Notifications = () => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [notifications, setNotifications] = useState<DisplayedNotificationInterface[]>([]);

  const { data: apiNotifications } = useGetNotifications();

  const router = useRouter();

  const handleClickNotificationIcon = () => {
    setOpenNotifications((prevState) => !prevState);
  };

	// ! handleClickEachNotification will always be recreated when clicked, need better
	// ! solution without using notifIndex
  const handleClickEachNotification = (notifIndex: number) => {
    setOpenNotifications(false);
    setNotifications((currentNotifs) => {
      const newNotifs = [...currentNotifs];
      if (notifIndex >= 0) {
        newNotifs[notifIndex] = { ...newNotifs[notifIndex], hasBeenSeen: true };
      }
      return newNotifs;
    });
    router.push(`/posts/${notifications[notifIndex].idPost}`);
  };

  useEffect(() => {
    // Load notification from localstorage
    const localNotificationsString = localStorage.getItem("notifs");
    if (apiNotifications) {
      // Compare notifications from localstorage to API, if different, that means its a new notification
      if (localNotificationsString) {
        const localNotificationsJSON = JSON.parse(
          localNotificationsString
        ) as DisplayedNotificationInterface[];

        const displayedNotifications: DisplayedNotificationInterface[] = [];
        for (let i = 0; i < apiNotifications.length; i++) {
          // If existing like notif and comment notif is the same from current API notifications
          const existingLikeNotifIsSame = localNotificationsJSON.find(
            (notif) =>
              apiNotifications[i].idPost === notif.idPost &&
              notif.type === "like" &&
              apiNotifications[i].likesCount === notif.count
          );
          const existingCommentNotifIsSame = localNotificationsJSON.find(
            (notif) =>
              apiNotifications[i].idPost === notif.idPost &&
              notif.type === "comment" &&
              apiNotifications[i].commentCount === notif.count
          );
          // If different
          if (!existingLikeNotifIsSame) {
            displayedNotifications.push({
              idPost: apiNotifications[i].idPost,
              count: apiNotifications[i].likesCount,
              hasBeenSeen: apiNotifications[i].likesCount > 0 ? false : true,
              postText: apiNotifications[i].postText,
              type: "like",
            });
          } else displayedNotifications.push(existingLikeNotifIsSame)
          if (!existingCommentNotifIsSame) {
            displayedNotifications.push({
              idPost: apiNotifications[i].idPost,
              count: apiNotifications[i].commentCount,
              hasBeenSeen: apiNotifications[i].commentCount > 0 ? false : true,
              postText: apiNotifications[i].postText,
              type: "comment",
            });
          } else displayedNotifications.push(existingCommentNotifIsSame)
        }
        setNotifications(displayedNotifications);
      } else {
        setNotifications(
          apiNotifications.flatMap((notif) => [
            {
              idPost: notif.idPost,
              count: notif.commentCount,
              hasBeenSeen: notif.commentCount > 0 ? false : true,
              postText: notif.postText,
              type: "comment",
            },
            {
              idPost: notif.idPost,
              count: notif.likesCount,
              hasBeenSeen: notif.likesCount > 0 ? false : true,
              postText: notif.postText,
              type: "like",
            },
          ])
        );
      }
    }
  }, [apiNotifications]);

  useEffect(() => {
    return () => {
      if (notifications.length) {
        localStorage.setItem("notifs", JSON.stringify(notifications));
      }
    };
  }, [notifications]);

  return (
    <div className="grow hover:cursor-pointer hover:bg-gray-200 p-1 rounded-full relative">
      <div className="relative">
        {/* DISPLAY RED DOT WHEN A NOTIFICATION HAS NOT BEEN SEEN */}
        {notifications.some((notif) => !notif.hasBeenSeen) && (
          <div className="w-[9px] h-[9px] rounded-full bg-secondary-500 absolute top-0 right-0" />
        )}
        <NotificationIcon onClick={handleClickNotificationIcon} />
      </div>
      {openNotifications && (
        <div className="absolute py-4 px-5 bg-white z-20 flex flex-col shadow-md rounded-xl">
          {notifications.every((notif) => notif.hasBeenSeen) && (
            <p className="text-xs text-primary-800 w-40">Kamu belum memiliki notifikasi baru</p>
          )}
          {notifications.map((notification, index) => (
            <div key={index} className="flex flex-col">
              {/* DISPLAY ONLY POST THAT HAVE LIKES */}
              {!notification.hasBeenSeen && (
                <div
                  className="flex gap-2 items-center text-xs text-primary-800 py-2 hover:underline"
                  onClick={() => handleClickEachNotification(index)}
                >
                  <div className="">
                    {notification.type === "like" ? (
                      <HeartOutlinedIcon width={22} height={22} />
                    ) : (
                      <CommentIcon width={22} height={22} />
                    )}
                  </div>
                  <p className="w-[120px]">
                    {notification.count} orang{" "}
                    {notification.type === "like" ? "menyukai " : "memberi komentar di "}
                    {`"${notification.postText}"`}
                  </p>
                  <div className="w-[9px] h-[9px] rounded-full bg-secondary-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
