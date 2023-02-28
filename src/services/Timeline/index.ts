import { useQuery } from "@tanstack/react-query";
import request from "../request";

const getPosts = () =>
  request
    .get("/posts")
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const likePost = (params: { postId: string }) =>
  request.post("/like-post", params);

export const getUser = () =>
  request
    .get("/users")
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const useGetUser = () => useQuery({ queryKey: ["getUser"], queryFn: getUser })

export default getPosts;
