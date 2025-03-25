<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <div class="pt-4">
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goListPage"
          >
            목록
          </button>
          <button class="btn btn-primary">저장</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/api/posts";

import PostForm from "@/components/posts/PostForm.vue";

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

const save = () => {
  try {
    const data = {
      ...form.value,
      createdAt: Date.now(),
    };
    createPost(data);
    router.push({ name: "PostList" });
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => {
  router.push({
    name: "PostList",
  });
};
</script>

<style lang="scss" scoped></style>
