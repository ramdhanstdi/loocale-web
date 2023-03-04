import React, { ChangeEvent, useEffect, useState } from "react";
import SearchIcon from "@icons/search_icon.svg";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import PostsContainer from "@components/view/TimelineView/PostsContainer";
import Post from "@components/view/TimelineView/Post";
import { useQuery } from "@tanstack/react-query";
import getPosts, { getAllCities } from "src/services/Timeline";
import { CityDataInterface, PostDataInterface } from "src/models/Timeline";
import Image from "next/image";
import DiscoverHero from "@components/view/DiscoverView/DiscoverHero";
import DiscoverContainer from "@components/view/DiscoverView/DiscoverContainer";
import PopularTodayGrid from "@components/view/DiscoverView/PopularTodayGrid";
import ImageCard from "@components/design/ImageCard";
import { Autocomplete } from "@mui/material";
import ArrowBackIcon from "@icons/arrow_back_icon.svg";

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
  });

  const [hasUserSearched, setHasUserSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [city, setCity] = useState<CityDataInterface | null>(null);
  const [citiesOption, setCitiesOption] = useState<CityDataInterface[]>([]);
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchCity) {
        getAllCities(searchCity).then((res) => {
          setCitiesOption(res);
        });
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchCity]);

  return (
    <div className="relative">
      <LeftPanel />
      <RightPanel />
      <div className="fixed left-[240px] right-[381px]">
        <Image src={"/NavbarLogo.svg"} width={140} height={52} alt="Loocale Logo" />
      </div>
      {hasUserSearched ? (
        <div className="fixed left-[240px] right-[381px] top-[100px]">
          <div className="flex gap-5 items-center">
            <ArrowBackIcon onClick={() => setHasUserSearched(false)}/>
            <div className="flex gap-5 w-[420px] items-center h-9 bg-white px-5 rounded-full border border-primary-500">
              <Autocomplete
                options={citiesOption}
                value={city}
                onChange={(e, value) => {
                  setHasUserSearched(true);
                  setCity(value);
                }}
                inputValue={searchCity}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option && option.name}
                onInputChange={(e, value) => setSearchCity(value)}
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
          setSearchCity={setSearchCity}
          onChange={(e, value) => {
            setHasUserSearched(true);
            setCity(value);
          }}
          citiesOption={citiesOption}
          city={city}
          searchCity={searchCity}
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
            postData.map((post: PostDataInterface) => <Post key={post.id} {...post} />)
          ) : (
            <></>
          )}
        </PostsContainer>
      </DiscoverContainer>
    </div>
  );
};

export default DiscoverPage;
