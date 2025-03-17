<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRoute, useRouter } from "vue-router";
import { useRouter } from "vue-router";
import { getPostById, deletePost } from "@/api/posts";
import { ref } from "vue";

const props = defineProps({
  id: Number,
});

// const route = useRoute();
const router = useRouter();
// const id = route.params.id;

/**
 * ref
 * 장) 객체 할당 가능
 * 장) 일관성 - 페이지 내 ref로 쓰는 것이 좋다고 함.
 *      ㄴ 하지만 팀내 코딩 컨벤션에 맞춰 해야 함!!
 * 단) form.value.title , form.value.content .. [ ".value" 으로 접근 가능 ]
 *
 * reactive
 * 장) form.title , form.content .. [ ".value" 없이 접근 가능 ]
 * 단) 객체 할당 블가능
 */
const post = ref({});

const fetchPost = async () => {
  try {
    // const data = getPostById(id);
    // const data = getPostById(props.id);
    const { data } = await getPostById(props.id);
    // post.value = { ...data };
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

fetchPost();

const remove = async () => {
  try {
    //if (confirm("삭제 하시겠습니까?") ) {
    if (confirm("삭제 하시겠습니까?") === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: "PostList" });
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => router.push({ name: "PostList" });

// const goEditPage = () => router.push({ name: "PostEdit", params: id });
const goEditPage = () =>
  router.push({ name: "PostEdit", params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
