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
                [!vite error](./imgs/vite-error.png)
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