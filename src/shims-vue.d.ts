// https://stackoverflow.com/questions/64213461/vuejs-typescript-cannot-find-module-components-navigation-or-its-correspon
// In order to setup typscript this "magic piece of code" is required
// As "import App from './App.vue'" was generating compile error in webpack
// Naive, also magic solution for this was "// @ts-ignore"

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }