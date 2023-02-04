import request from "../request";

const getPosts = () => request.get("/posts");

export default getPosts