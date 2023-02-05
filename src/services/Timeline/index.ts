import request from "../request";

const getPosts = () =>
  request
    .get("/posts")
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const likePost = (params: { postId: string }) =>
  request.post("/like-post", params);

export default getPosts;
