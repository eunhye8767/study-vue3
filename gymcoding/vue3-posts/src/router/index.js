import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostListView from "@/views/posts/PostListView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NestedView from "@/views/nested/NestedView.vue";
import NestedOneView from "@/views/nested/NestedOneView.vue";
import NestedTwoView from "@/views/nested/NestedTwoView.vue";
import NestedHomeView from "@/views/nested/NestedHomeView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostListView,
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreateView,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetailView,
    props: true,
    // props: (route) => {
    //   return {
    //     id: route.params.id,
    //   }
    // }
    // props: (route) => ({ id: parseInt(route.params.id) }),
  },
  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostEditView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/nested",
    name: "Nested",
    component: NestedView,
    children: [
      {
        path: "",
        name: "NestedHome",
        component: NestedHomeView,
      },
      {
        path: "one",
        name: "NestedOne",
        component: NestedOneView,
      },
      {
        path: "two",
        name: "NestedTwo",
        component: NestedTwoView,
      },
    ],
  },
  {
    path: "/test",
    name: "Test",
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
