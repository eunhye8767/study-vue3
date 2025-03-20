import { posts } from ".";

export function getPosts(params) {
  return posts.get("/", { params });
}

export function getPostById(id) {
  // return posts.get(`/${id}`);
  return posts.get(id);
}

export function createPost(data) {
  // 등록
  return posts.post(`/`, data);
}

export function updatePost(id, data) {
  // 수정
  return posts.put(id, data);
}

export function deletePost(id) {
  // 삭제
  return posts.delete(id);
}
