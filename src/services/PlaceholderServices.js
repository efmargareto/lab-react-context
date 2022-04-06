import http from "./BaseServices";

export const getPost = () => http.get('posts')
export const getComment = () => http.get('comments')