import { queryClient } from "@pages/_app";
import { useMutation, useQuery } from "@tanstack/react-query";
import request from "../request";

const getPosts = () =>
  request
    .get("/posts")
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useGetPosts = () =>
  useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    refetchInterval: 10000,
  });

const addPost = (data: {
  postText: string;
  location: string;
  media_files: string[];
}) => {
  let formData = new FormData();
  formData.append("postText", data.postText);
  formData.append("location", data.location);
  for (let i = 0; i < data.media_files.length; i++) {
    formData.append("media_files", data.media_files[i]);
  }

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  return request
    .post("/create-post", formData, config)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const useAddPost = () =>
  useMutation({
    mutationKey: ["addPost"],
    mutationFn: addPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getPosts"] }),
  });

export const likePost = (params: { postId: string }) =>
  request.post("/like-post", params);

export const getUser = () =>
  request
    .get("/users")
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useGetUser = () =>
  useQuery({ queryKey: ["getUser"], queryFn: getUser });

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

export default getPosts;
