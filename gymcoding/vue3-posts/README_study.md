# Vue3 완벽 마스터: 기초부터 실전까지 - "실전편"

## Vue Router
- [router, 교안](https://gymcoding.notion.site/VueRouter_2-777f4d5d58694ab88246df49599a1317)
### 설치
```javascript
npm install vue-router
```
```javascript
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

export {};
```

### 라우터 (router) 설정
```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
```
```javascript
// main.js
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

### 프로그래밍 방식 네비게이션
```HTML
<!-- html -->
<RouterLink :to="..."></RouterLink>
```

- 프로그래밍 방식 :: `router.push(...)`
```javascript
// 리터럴 문자열 경로
router.push('/users/eduardo')

// 경로가 있는 개체
router.push({ path: '/users/eduardo' })

// 이름을 가지는 라우트
router.push({ name: 'user', params: { username: 'eduardo' } })

// 쿼리와 함께 사용, 결과적으로 /register?plan=private가 됩니다.
router.push({ path: '/register', query: { plan: 'private' } })

// 해시와 함께 사용, 결과적으로 /about#team가 됩니다.
router.push({ path: '/about', hash: '#team' })
```

```javascript
const username = 'eduardo'
// URL을 수동으로 작성할 수 있지만 인코딩을 직접 처리해야 합니다.
router.push(`/user/${username}`) // -> /user/eduardo
// 위와 동일
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// 가능하면 `name`과 `params`를 사용하여 자동 URL 인코딩의 이점을 얻습니다.
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params`는 `path`와 함께 사용할 수 없습니다.
router.push({ path: '/user', params: { username } }) // -> /user
```

- `router.replace`
  - `router.push`와 같은 역할을 하지만 유일한 차이는 새로운 히스토리 항목에 추가하지 않고<br />
탐색한다는 것입니다. 이름에서 알 수 있듯이 현재 항목을 대체합니다.
  - `router.push` 메소드에 `replace: true`속성을 추가하여 동일하게 동작시킬 수 있습니다.
  ```javascript
  router.push({ path: '/home', replace: true })
  // equivalent to
  router.replace({ path: '/home' })
  ```

- `router.go(n)`
  - 이 메소드는 `window.history.go(n)`와 비슷하게 히스토리 스택에서 앞으로 또는 뒤로<br />
  이동하는 단계를 나타내는 하나의 정수를 매개 변수로 사용합니다.
  ```javascript
  // 한 단계 앞으로 갑니다. history.forward()와 같습니다. history.forward()와 같습니다.
  router.go(1)

  // 한 단계 뒤로 갑니다. history.back()와 같습니다.
  router.go(-1)

  // 3 단계 앞으로 갑니다.
  router.go(3)

  // 지정한 만큼의 기록이 없으면 자동으로 실패 합니다.
  router.go(-100)
  router.go(100)
  ```