import axios from "axios";
// axios
const posts = [
  { id: 1, title: "제목1", content: "내용1", createdAt: "2020-01-01" },
  { id: 2, title: "제목2", content: "내용2", createdAt: "2020-02-02" },
  { id: 3, title: "제목3", content: "내용3", createdAt: "2020-03-03" },
  { id: 4, title: "제목4", content: "내용4", createdAt: "2020-04-04" },
  { id: 5, title: "제목5", content: "내용5", createdAt: "2020-05-05" },
];

export function getPosts(params) {
  return axios.get("http://localhost:5000/posts", { params });
}

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
  // 등록
  return axios.post(`http://localhost:5000/posts/`, data);
}

export function updatePost(id, data) {
  // 수정
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  // 삭제
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
