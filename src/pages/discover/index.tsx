import React, { ChangeEvent, useState } from "react";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import Post from "@components/view/TimelineView/Post";
import { useQuery } from "@tanstack/react-query";
import getPosts from "src/services/Timeline";
import { PostDataInterface } from "src/models/Timeline";
import Image from "next/image";
import DiscoverHero from "@components/view/DiscoverView/DiscoverHero";
import DiscoverContainer from "@components/view/DiscoverView/DiscoverContainer";
import PopularTodayGrid from "@components/view/DiscoverView/PopularTodayGrid";
import ImageCard from "@components/design/ImageCard";
import SearchBar from "@components/design/SearchBar";

const POPULAR_TODAY = [
  {
    title: "Cimahi",
    subtitle: "200 Unggahan",
    backgroundUrl: "/cimahi-bg.png",
  },
  {
    title: "Bandung",
    subtitle: "200 Unggahan",
    backgroundUrl: "/bandung-bg.png",
  },
  {
    title: "Kab. Nusantara",
    subtitle: "200 Unggahan",
    backgroundUrl: "/nusantara-bg.png",
  },
  {
    title: "Tegal",
    subtitle: "200 Unggahan",
    backgroundUrl: "/tegal-bg.png",
  },
  {
    title: "Solok",
    subtitle: "200 Unggahan",
    backgroundUrl: "/solok-bg.png",
  },
];

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

  const [hasUserSearched, setHasUserSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
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
      {hasUserSearched ? (
				<div className="fixed left-[240px] right-[381px] top-[100px]">
					<SearchBar value={searchValue} onChange={searchHandler} />
				</div>
      ) : (
        <DiscoverHero
          onClick={() => setHasUserSearched(true)}
          searchValue={searchValue}
          onChange={searchHandler}
        />
      )}
      <DiscoverContainer hasUserSearched={hasUserSearched}>
        <PostsContainer maxHeight="max-h-[calc(100vh-290px)]">
          {hasUserSearched ? (
            <></>
          ) : (
            <>
              <p className="mt-[14px] font-light text-primary-800 text-center mb-2">
                Populer hari ini
              </p>
              <PopularTodayGrid>
                {POPULAR_TODAY.map((card) => (
                  <ImageCard
                    backgroundUrl={card.backgroundUrl}
                    key={card.title}
                    className="text-center py-3 text-white rounded-lg shadow-md"
                  >
                    <p className="font-bold">{card.title}</p>
                    <p className="font-light text-xs">{card.subtitle}</p>
                  </ImageCard>
                ))}
              </PopularTodayGrid>
            </>
          )}
          <div className="w-full pr-[154px] pl-[131px]">
            <p className="font-bold text-grayscale-400 text-xs max-w-[600px] mx-auto">
              {hasUserSearched
                ? "Menampilkan hasil pencarian untuk Bandung"
                : "Terbaru dari sekitarmu"}
            </p>
          </div>
          {postData ? (
            postData.map((post: PostDataInterface) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <></>
          )}
        </PostsContainer>
      </DiscoverContainer>
    </div>
  );
};

export default DiscoverPage;
