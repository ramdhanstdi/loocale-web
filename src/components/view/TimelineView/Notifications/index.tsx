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

  const handleClickEachNotification = (postId: number) => {
		setOpenNotifications(false);
    setNotifications((currentNotifs) => {
      const newNotifs = [...currentNotifs];
      const clickedNotifsIndex = newNotifs.findIndex((notif) => notif.idPost === postId);
      if (clickedNotifsIndex >= 0) {
        newNotifs[clickedNotifsIndex] = { ...newNotifs[clickedNotifsIndex], hasBeenSeen: true };
      }
      return newNotifs;
    });
		router.push(`/posts/${postId}`);
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
          const existingNotif = localNotificationsJSON.find(
            (notif) => apiNotifications[i].idPost === notif.idPost
          );
          // If existing notification the same, load the one from localStorage
          if (
            existingNotif &&
            existingNotif.likesCount === apiNotifications[i].likesCount &&
            existingNotif.commentCount === apiNotifications[i].commentCount
          ) {
            displayedNotifications.push({ ...existingNotif });
          } else {
            displayedNotifications.push({ ...apiNotifications[i], hasBeenSeen: false });
          }
        }
        setNotifications(displayedNotifications);
      } else {
        setNotifications(apiNotifications.map((notif) => ({ ...notif, hasBeenSeen: false })));
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
        {notifications.some(
          (notif) => !notif.hasBeenSeen && (notif.likesCount || notif.commentCount)
        ) && (
          <div className="w-[9px] h-[9px] rounded-full bg-secondary-500 absolute top-0 right-0" />
        )}
        <NotificationIcon onClick={handleClickNotificationIcon} />
      </div>
      {openNotifications && (
        <div className="absolute py-4 px-5 bg-white z-20 flex flex-col shadow-md rounded-xl">
					{notifications.every((notif) => notif.hasBeenSeen || (!notif.likesCount && !notif.likesCount)) && (
						<p className="text-xs text-primary-800 w-40">Kamu belum memiliki notifikasi baru</p>
					)}
          {notifications.map((notification) => (
            <div key={notification.idPost} className="flex flex-col">
              {/* DISPLAY ONLY POST THAT HAVE LIKES */}
              {notification.likesCount !== 0 && !notification.hasBeenSeen && (
                <div
                  className="flex gap-2 items-center text-xs text-primary-800 py-2 hover:underline"
                  onClick={() => handleClickEachNotification(notification.idPost)}
                >
                  <div className="">
                    <HeartOutlinedIcon width={22} height={22} />
                  </div>
                  <p className="w-[120px]">
                    {notification.likesCount} orang menyukai {`"${notification.postText}"`}
                  </p>
                  <div className="w-[9px] h-[9px] rounded-full bg-secondary-500" />
                </div>
              )}
              {/* DISPLAY ONLY POST THAT HAVE COMMENTS */}
              {notification.commentCount !== 0 && !notification.hasBeenSeen && (
                <div
                  className="flex gap-2 items-center text-xs text-primary-800 py-2 hover:underline"
                  onClick={() => handleClickEachNotification(notification.idPost)}
                >
                  <div className="">
                    <CommentIcon width={22} height={22} />
                  </div>
                  <p className="w-[120px]">
                    {notification.commentCount} orang memberi komentar di{" "}
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
