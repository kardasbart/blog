<template>
  <div></div>
  <Navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {
    const router = useRouter();
    const routes = router.getRoutes();

    return { routes };
  },
};
</script>

<style>
</style>