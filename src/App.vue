<template>
  <p>
    <router-link v-for="route in routes" :key="route.id" :to="route.path">
      <div>{{ route.name }}</div>
    </router-link>
  </p>
  <router-view></router-view>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const routes = router.getRoutes();

    return { routes };
  },
};
</script>

<style>
h2 {
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
  font-style: italic;
  color: rgb(49, 184, 15);
  text-align: center;
  margin-top: 50px;
}
</style>