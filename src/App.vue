<template>
  <div></div>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {},
};
</script>

<style>
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>