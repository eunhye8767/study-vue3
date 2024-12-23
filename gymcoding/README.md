## Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"
- [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8/dashboard)

### VSCode 확장 프로그램 설치
- [indent-rainbox](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
    : `tab` 관련 표시 (길어졌을 때 용이)

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
    : 한 쪽만 변경해도 다른 한 쪽 동시 변경 가능.

- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
    : css를 어디에서 선언했는 지 쉽게 확인 가능.

- [HTML to CSS autocompletion](https://marketplace.visualstudio.com/items?itemName=solnurkarim.html-to-css-autocompletion)
    : `html`로 먼저 작성하고 `css` 작성할 때 자동으로 지원.

- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
    : `css` 선언 후, `html` 작성할 때 자동으로 지원.

- [volar - vue3 통합 === Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    : [vscode vue3 확장 플러그인 Volar 없을때 해결 방법 (Vue - Official)](https://pingfanzhilu.tistory.com/entry/Visual-Studio-Code-vscode-vue3-%ED%99%95%EC%9E%A5-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-Volar-%EC%97%86%EC%9D%84%EB%95%8C-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-Vue-Official)

- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
    : vscode에서 `vue` 자동 완성 기능.

### 프로젝트 구성 시 참고
- `npm init vue@3.1.9`으로 ESLint 버전 맞추기. (실제 강의 내용 버전과 동일)
- `vue` 설치 시, `npm install -g @vue/cli` 보단 `vite` 설치를 권장.
    - `vue cli` : 현재 유지 모드 관리.
    - `vite` : **매우 가볍고 빠른 빌드 도구 (공식 문서에서 권장)**
        - `npm init vue@latest` 설치
            ```javascript
            cd (product name)
            npm install
            npm run dev
            ```
        
        - [Vite Server Port 관련 참고](https://ko.vitejs.dev/config/server-options.html#server-port)
        - [Vite 3.0 출시 Server Port 관련 참고](https://vite.dev/blog/announcing-vite3.html#vite-cli)
        - [질문, npm run dev 했을때 자동 새로고침 문의드립니다](https://www.inflearn.com/community/questions/816512/npm-run-dev-%ED%96%88%EC%9D%84%EB%95%8C-%EC%9E%90%EB%8F%99-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8-%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4)
            - `vite.config.js`에 아래 빨간 네모 박스 부분 추가.
                ![vite error](./imgs/vite-error.png)
                ```javascript
                server: {
                    watch: {
                        usePolling: true,
                    }
                }
                ```

### Vue 프로젝트 설치
- [Vue3 공식 문서](https://vuejs.org/guide/quick-start.html)
- `npm create vue@latest`
    ```javascript
    ✔ Project name: … learn-vue3
    ✔ Add TypeScript? … No
    ✔ Add JSX Support? … No
    ✔ Add Vue Router for Single Page Application development? … No
    ✔ Add Pinia for state management? … No
    ✔ Add Vitest for Unit Testing? … No
    ✔ Add an End-to-End Testing Solution? › No
    ✔ Add ESLint for code quality? › Yes
    ✔ Add Prettier for code formatting? … Yes
    ```

- 다만 `npm init vue@3.1.9`로 설치하면, 아래와 같이 보여진다.
    ```javascript
    cd learn-vue3
    npm install
    npm run lint
    npm run dev
    ```

### 새로운 버전에 대한 ESLint, Prettier 
- ESLint Rule을 적용하시려면 `eslint.config.js` 해당 파일에 적용하시면 됩니다.
    ```javascript
    // eslint.config.js
    import js from '@eslint/js'
    import pluginVue from 'eslint-plugin-vue'
    import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

    export default [
        {
            name: 'app/files-to-lint',
            files: ['**/*.{js,mjs,jsx,vue}'],
        },

        {
            name: 'app/files-to-ignore',
            ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
        },

        js.configs.recommended,
        ...pluginVue.configs['flat/essential'],
        skipFormatting,
        {
            rules: {
            'no-console': 'warn', // console 메서드 사용시 경고(warn) 표시
            },
        },
    ]
    ```
- Prettier 룰을 적용하시려면 `.prettierrc.json` 파일에 적용하시면 됩니다.
    ```javascript
    // .prettierrc.json
    {
        "$schema": "https://json.schemastore.org/prettierrc", // Prettier 설정 스키마
        "semi": false, // 세미콜론 생략
        "singleQuote": true, // 작은따옴표 사용
        "arrowParens": "avoid" // 매개변수 하나일 때 괄호 생략
    }
    ```

- [질문, 강의에서 나오는 .eslintrc.cjs 파일과 현재 제 .eslintrc.cjs 파일의 내용이 다른데요?](https://www.inflearn.com/community/questions/946484/eslintrc-cjs-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94%EB%8D%B0-%EA%B0%95%EC%9D%98%ED%95%B4%EC%A3%BC%EC%8B%9C%EB%8A%94-%EC%BD%94%EB%93%9C%EC%99%80-%EC%A0%9C-%EC%BD%94%EB%93%9C%EA%B0%80-%EB%8B%A4%EB%A6%85%EB%8B%88%EB%8B%A4)

### vscode에서 ESLint 기반으로 Format On Save 설정하기
- vscode 설정 : settings.json
    ```javascript
    // 검사해야 하는 언어를 ESLint 확장에 알려줍니다.
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "html",
        "vue",
        "markdown"
    ],
    // vscode의 저장 이벤트에 대한 훅
    "editor.codeActionsOnSave": {
        // 저장 중인 파일의 문제를 수정하라는 메세지
        "source.fixAll.eslint": true,
    }
    ```

### 프로젝트 템플릿 자동 생성
- `vbase-3` 하게 되면 아래와 같이 보여진다.
  ```javascript
  <template>
    <div>

    </div>
  </template>

  <script>
  export default {
    setup () {
      

      return {}
    }
  }
  </script>

  <style lang="scss" scoped>

  </style>
  ```
<hr />

### COMPOSITION API
- **setup() 함수**
  ```javascript
  export default {
    props: {
      title: String,
    },

    // 첫번째 매개변수 => props
    // 두번째 매개변수 => context
    setup(props, context) {
      const counter = ref(0);
      const increment = () => {
        counter.value++;
      };

      console.log(props.title);

      // 속성($attrs와 동일한 비반응형 객체)
      console.log(context.attrs);

      // 슬롯($slots)에 해당하는 비반응성 객체
      console.log(context.slots);

      // 이벤트 발생($emit에 해당하는 함수)
      console.log(context.emit);

      // Public한 속성, 함수를 외부에 노출시에 사용
      console.log(context.expose);

      return { counter, increment };
    },
  };
  ```
  - `context` 경우, 구조 분해 할당을 사용 할 수 있다.
  ```javascript
  export default {
    setup(props, { attrs, slots, emit, expose }) {
      // 속성($attrs와 동일한 비반응형 객체)
      console.log(attrs);

      // 슬롯($slots)에 해당하는 비반응성 객체
      console.log(slots);

      // 이벤트 발생($emit에 해당하는 함수)
      console.log(emit);

      // Public한 속성, 함수를 외부에 노출시에 사용
      console.log(expose);
    }
  }
  ```

- **템플릿 문법**
  - `v-once` : 데이터가 변경되어 갱신(반응)되지 않는 일회성 보간을 수행<br/>
    ![보간법 캡쳐](./imgs/241220-1.png)
    ```html
    <template>
      <div>
        <p>문자열: {{ message }}</p>
        <h3>보간법</h3>
        <!-- v-once : 데이터가 변경되어 갱신(반응)되지 않는 일회성 보간을 수행 -->
        <p v-once>문자열: {{ message }}</p>
        <button @click="btnOnce">변경</button>
      </div>
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const message = ref('안녕하세요');
        const btnOnce = () => {
          message.value = `${message.value}!`;
        };
        return { message, btnOnce };
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

  - `v-html` : html을 그대로 출력 
    - 다만 XSS 취약점으로 쉽게 이어질 수 있어 매우 위험할 소지가 있다.
    - 따라서 신뢰할 수 있는 콘텐츠에서만 사용하고 **사용자가 제공한 콘텐츠에서는 절대 사용 불가**.<br />
    ![html 캡쳐](./imgs/241220-2.png)
    ```html
    <template>
      <h3>v-html</h3>
      <!-- v-html: html을 그대로 출력 -->
      <p>{{ rawHtml }}</p>
      <p v-html="rawHtml"></p>
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const rawHtml = ref('<strong>안녕하세요옹!</strong>');
        return { rawHtml };
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

  - `v-bind` : 실무에서 많이 사용 된다. title, disabled 등등<br />
    ![타이틀1](./imgs/241220-3.png)<br />
    ![타이틀2](./imgs/241220-4.png)<br />
    - `disabled`을 `true`로 할 경우, 사용 불가 / `false`로 할 경우 사용 가능.<br />
    ![disabled](./imgs/241220-5.png)
    ```html
    <template>
      <h3>속성 바인딩</h3>
      <div title="안녕하세요">마우스를 올려보세요.</div>
      <div v-bind:title="dynamicTitle">여기에 올려보세요오!!</div>
      <input type="text" value="이은혜" v-bind:disabled="isInputDisabled" />
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const dynamicTitle = ref('다이나믹 타이틀');
        const isInputDisabled = ref(true);
        return { dynamicTitle, isInputDisabled };
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

    - **자주 사용되는 `v-bind`는 `:`으로 사용된다.**
    - **앞으로 본 강의에서는 `:`으로 단축 속성을 사용한다.**
    ```html
    <input type="text" value="이은혜" :disabled="isInputDisabled" />
    ```

    - `v-bind`는 다중 속성 적용이 가능하다.<br />
      ![input 다중 속성](./imgs/241220-6.png)
    ```html
    <template>
      <input v-bind="attrs" />
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const attrs = ref({
          type: 'password',
          value: '1234',
          disabled: false,
        });
        return { attrs };
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

  - **자바스크립트 표현식 사용 가능**<br />
    ![자바스크립트 표현식](./imgs/241220-7.png)
    ```html
    <template>
      <h3>JAVASCRIPT</h3>
      {{ message.split('').reverse() }}
      <br />
      {{ isInputDisabled ? '예' : '아니오' }}
    </template>

    <script>
    import { ref } from 'vue';

    export default {
      setup() {
        const message = ref('안녕하세요');
        const isInputDisabled = ref(true);
        return { message, isInputDisabled };
      },
    };
    </script>

    <style lang="scss" scoped></style>
    ```

### 반응형 기초 (Reactivity)
- `reactive` 함수는 객체 타입에서만 동작.<br />그래서 기본타입(number, string, boolean)을 반응형으로 만들고자 할 때 `ref` 메소드를 사용
  - `ref ->  Object` : `count.value` 없이 `state.count`로 출력.
  - `ref -> Array` : `arr[0].value`로 출력.
  ```html
  <template>
    <div></div>
  </template>

  <script>
  import { reactive, ref } from 'vue';

  export default {
    setup() {
      // ref ->  Object
      const count = ref(0);
      const state = reactive({
        count,
      });
      count.value++;
      count.value++;

      console.log(count.value);
      console.log('state.count :', state.count);

      // ref -> Array
      const message = ref('Hello');
      const arr = reactive([message]);
      console.log('arr[0]', arr[0].value);
      return {};
    },
  };
  </script>

  <style lang="scss" scoped></style>
  ```

- `구조 분해 할당` : 데이터 연동(=동기화)<br>
  ![데이터 구조 분해 할당](./imgs/241223-1.png)<br>
  - `ref`로 변환된 것을 확인할 수 있다.
  - `ref`로 된 데이터 부분을 수정하면 데이터 연동 == 동기화 된 것을 확인할 수 있다.
  - **단일 (toRef)** : `const price = toRef(book.price);`
  - **디수 (toRefs)** : `const { author, title } = toRefs(book);`
  ```html
  <template>
    <div></div>
  </template>

  <script>
  import { reactive, ref, toRef, toRefs } from 'vue';

  export default {
    setup() {
      // 구조 분해 할당
      const book = reactive({
        author: 'vue team',
        year: '2020',
        title: 'vue 3 guide',
        description: '당신은 지금 바로',
        price: '무료',
      });

      // toRefs를 이용해 구조 분해 할당으로 반응형 유지
      // const { author, title } = book; <- 반응형 안됨.
      const { author, title } = toRefs(book);

      // 하나의 데이터 값만 가져오고자 할 땐 toRef 사용
      const price = toRef(book.price);
      return { author, title, book, price };
    },
  };
  </script>

  <style lang="scss" scoped></style>
  ```

- `readonly`를 이용하여 반응형 객체의 변경 방지.<br>
  ![readonly 데이터 변경 방지](./imgs/241223-2.png)<br>
  - `readonly`를 이용하여 데이터 변경을 방지. 콘솔로그에 `failed`로 보여짐.
  ```html
  <template>
    <div></div>
  </template>

  <script>
  import { reactive, readonly } from 'vue';

  export default {
    setup() {
      // readonly를 이용한 반응형 객체 변경 방지
      const original = reactive({ count: 0 });
      const copy = readonly(original);
      original.count++;
      copy.count++;
      console.log(original.count);
      console.log(copy.count);
      return { };
    },
  };
  </script>

  <style lang="scss" scoped></style>
  ```

- [(공식문서) 반응형 실험적 확인](https://vuejs.org/guide/extras/reactivity-transform.html)