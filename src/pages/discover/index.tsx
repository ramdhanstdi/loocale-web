import React from "react";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import TimelineContainer from "@components/view/TimelineView/TimelineContainer";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import Post from "@components/view/TimelineView/Post";
import { useQuery } from "@tanstack/react-query";
import getPosts from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";
import Image from "next/image";
import DiscoverHero from "@components/view/DiscoverView/DiscoverHero";

const DiscoverPage = () => {
  const {
    data: postData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    refetchInterval: 10000,
  });
  return (
    <div className="relative">
      <LeftPanel />
      <RightPanel />
      <div className="fixed left-[240px] right-[381px]">
        <Image
          src={"/NavbarLogo.svg"}
          width={140}
          height={52}
          alt="Loocale Logo"
        />
      </div>
			<DiscoverHero />
      <TimelineContainer>
        <PostsContainer>
          {postData ? (
            postData.map((post: PostDataInterface) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <></>
          )}
        </PostsContainer>
      </TimelineContainer>
    </div>
  );
};

export default DiscoverPage;
