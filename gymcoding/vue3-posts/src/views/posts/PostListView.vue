<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
      @submit.prevent
    />
    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
        />
      </template>
    </AppGrid>
    <AppPagination
      :curret-page="params._page"
      :page-count="pageCount"
      @page="(page) => (params._page = page)"
    />
    <template v-if="posts && posts.length > 0">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import AppCard from "@/components/AppCard.vue";
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import AppPagination from "@/components/AppPagination.vue";
import AppGrid from "@/components/AppGrid.vue";
import PostFilter from "@/components/posts/PostFilter.vue";

import { getPosts, createPost } from "@/api/posts";
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _page: 1,
  _limit: 3,
  title_like: "",
});

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit)
);

// const fetchPosts = () => {
//   getPosts()
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => console.log(err));
// };

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    // console.dir(response)
    posts.value = data;
    totalCount.value = headers["x-total-count"];
  } catch (error) {
    console.log(error);
  }
};

watchEffect(fetchPosts);
// fetchPosts();

const goPage = (id) => {
  // router.push(`/posts/${id}`)
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
    // http://localhost:3000/posts/2?searchText=hello#world!
    // query: {
    //   searchText: 'hello'
    // },
    // hash: '#world!'
  });
};
</script>

<style lang="scss" scoped></style>
