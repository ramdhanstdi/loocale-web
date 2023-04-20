import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import SearchIcon from "@icons/search_icon.svg";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import Post from "@components/view/TimelineView/Post";
import { useQuery } from "@tanstack/react-query";
import getPosts, {
  getAllCities,
  getDiscoverPageOptions,
  useGetCategories,
  useGetPosts,
} from "src/services/Timeline";
import { CityDataInterface, PostDataInterface } from "src/models/Timeline";
import Image from "next/image";
import DiscoverHero from "@components/view/DiscoverView/DiscoverHero";
import DiscoverContainer from "@components/view/DiscoverView/DiscoverContainer";
import PopularTodayGrid from "@components/view/DiscoverView/PopularTodayGrid";
import ImageCard from "@components/design/ImageCard";
import { Autocomplete } from "@mui/material";
import ArrowBackIcon from "@icons/arrow_back_icon.svg";
import { useRouter } from "next/router";
import Head from "next/head";

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

const DiscoverPage = (props: any) => {
  const router = useRouter();

  const [hasUserSearched, setHasUserSearched] = useState(props.searchValue);
  const [searchOptions, setSearchOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string | null>(props.searchValue);

  const { data: postData } = useGetPosts(props.searchValue);

  const { data: categories } = useGetCategories();

  const getPopularTodayGrid = useCallback(() => {
    if (!categories) return [];
    return categories.slice(0, 6).map((community) => ({
      title: community.title,
      backgroundUrl: community.background,
      subtitle: "200 Unggahan",
      id: community.id,
    }));
  }, [categories]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue) {
        getDiscoverPageOptions(searchValue).then((res) => {
          setSearchOptions(res);
        });
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  return (
    <div className="relative">
      <Head>
        <title>Discover</title>
      </Head>
      <div className="flex w-screen h-screen">
        <LeftPanel />
        <div className="flex flex-col w-full gap-6 mx-8">
          <div className="mt-2 ml-2">
            <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
          </div>
          {hasUserSearched ? (
            <div className="ml-6">
              <div className="flex gap-5 items-center">
                <ArrowBackIcon
                  onClick={() => {
                    router.push("/discover");
                    setHasUserSearched(false);
                  }}
                />
                <div className="flex gap-5 w-[420px] items-center h-9 bg-white px-5 rounded-full border border-primary-500">
                  <Autocomplete
                    options={searchOptions}
                    onChange={(e, value) => {
                      setHasUserSearched(true);
                      if (!value) {
                        router.push("/discover?searchValue=");
                      } else router.push("/discover?searchValue=" + value);
                    }}
                    inputValue={searchValue!}
                    onInputChange={(e, value) => {
                      setSearchValue(value);
                    }}
                    filterOptions={(x) => x}
                    className="w-full"
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <input
                          {...params.inputProps}
                          placeholder="Cari kota atau aktivitas yang ingin kamu kepo-in..."
                          className="outline-none w-full placeholder:text-xs placeholder:italic h-9 border-r border-t border-b border-primary-800"
                        />
                      </div>
                    )}
                  />
                  <SearchIcon />
                </div>
              </div>
            </div>
          ) : (
            <DiscoverHero
              onChange={(e, value) => {
                setHasUserSearched(true);
                router.push("/discover?searchValue=" + value);
              }}
              searchOptions={searchOptions}
              searchValue={searchValue!}
              setSearchValue={setSearchValue}
            />
          )}
          <DiscoverContainer hasUserSearched={hasUserSearched}>
            <PostsContainer
              maxHeight={
                hasUserSearched ? "max-h-[calc(100vh-225px)]" : "max-h-[calc(100vh-290px)]"
              }
            >
              {hasUserSearched ? (
                <></>
              ) : (
                <>
                  <p className="mt-[14px] font-light text-primary-800 text-center mb-2">
                    Populer hari ini
                  </p>
                  <PopularTodayGrid>
                    {getPopularTodayGrid().map((card) => (
                      <ImageCard
                        backgroundUrl={card.backgroundUrl}
                        key={card.title}
                        className="text-center py-3 whitespace-nowrap text-white rounded-lg shadow-md"
                        onClick={() => {
                          setHasUserSearched(true);
                          router.replace("/discover?searchValue=" + card.title);
                        }}
                      >
                        <p className="font-bold relative z-50">{card.title}</p>
                        <p className="font-light text-xs relative z-50">{card.subtitle}</p>
                      </ImageCard>
                    ))}
                  </PopularTodayGrid>
                </>
              )}
              <div className="w-full pr-[154px] pl-[131px]">
                <p className="font-bold text-grayscale-400 text-xs max-w-[600px] mx-auto">
                  {hasUserSearched
                    ? `Menampilkan hasil pencarian untuk ${props.searchValue}`
                    : "Terbaru dari sekitarmu"}
                </p>
              </div>
              {postData ? (
                postData.map((post: PostDataInterface) => <Post key={post.id} {...post} />)
              ) : (
                <></>
              )}
            </PostsContainer>
          </DiscoverContainer>
        </div>
        <RightPanel />
      </div>
    </div>
  );
};

DiscoverPage.getInitialProps = async (route: any) => {
  const { searchValue } = route.query;
  return { searchValue: searchValue || "" };
};

export default DiscoverPage;
