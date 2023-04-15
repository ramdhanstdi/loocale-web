import { queryClient } from "@pages/_app";
import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { CommunityListInterface } from "src/models/Home";
import { GetUserDataInterface, UserDataInterface } from "src/models/Timeline";
import request from "../request";

const getPosts = (searchValue: string = "") =>
  request
    .get(`/posts?searchValue=${searchValue}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useGetPosts = (searchValue: string = "") =>
  useQuery({
    queryKey: ["getPosts", searchValue],
    queryFn: () => getPosts(searchValue),
    //refetchInterval: 10000,
  });

const addPost = (data: {
  postText: string;
  location: string;
  media_files: File[];
  categories: CommunityListInterface[];
  location_detail: string;
}) => {
  let formData = new FormData();
  formData.append("postText", data.postText);
  formData.append("location", data.location);
  formData.append("location_detail", data.location_detail);
  for (let i = 0; i < data.media_files.length; i++) {
    formData.append("media_files", data.media_files[i], data.media_files[i].name);
  }

  for (let i = 0; i < data.categories.length; i++) {
    formData.append(`categories[${i}]`, String(data.categories[i].id));
  }

  console.log(formData);
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  return request
    .post("/create-post", formData, config)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const useAddPost = (onSuccessHandler: VoidFunction) =>
  useMutation({
    mutationKey: ["addPost"],
    mutationFn: addPost,
    onSuccess: () => {
      onSuccessHandler();
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
    },
  });

export const likePost = (params: { postId: string }) => request.post("/like-post", params);

export const useLikePost = () =>
  useMutation({
    mutationKey: ["likePost"],
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
    },
  });

export const getUser = () =>
  request
    .get<GetUserDataInterface>("/user")
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
			throw new Error(err)
    });

export const useGetUser = (options?: UseQueryOptions) =>
  useQuery({ queryKey: ["getUser"], queryFn: getUser });

export const getCategories = () =>
  request
    .get("/connect")
    .then((res) => res.data as CommunityListInterface[])
    .catch((err) => {
      console.error(err);
    });

export const useGetCategories = () =>
  useQuery({ queryKey: ["getCategories"], queryFn: getCategories });

export const addComment = (data: { commentText: string; postId: number }) =>
  request
    .post("/comment", data)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useAddComment = () =>
  useMutation({
    mutationKey: ["addComment"],
    mutationFn: addComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getPosts"] }),
  });

export const getAllCities = (cityName: string) =>
  request
    .get("/cities-name?name=" + cityName)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useGetAllCities = (cityName: string) =>
  useQuery({ queryKey: ["getAllCities", cityName], queryFn: () => getAllCities(cityName) });

export const getDiscoverPageOptions = (searchValue: string = "") =>
  request
    .get("/discover-page/options?searchValue=" + searchValue)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export default getPosts;
