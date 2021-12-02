<template>
  <div ref="root" class="row m-0 p-0 position-relative">
    <div class="col m-0 p-0">
      <img class="thumbnail-box" :src="mainImage" rel="preload" />
    </div>
    <div class="col m-0 p-0 position-absolute">
      <transition name="fade">
        <img
          class="thumbnail-box"
          :src="hiddenImage"
          v-show="isHiddenImageVisible"
          rel="preload"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  props: ["mainImage", "hiddenImage"],
  setup() {
    const root = ref<HTMLInputElement>();
    const isHiddenImageVisible = ref(false);

    const handleScroll = () => {
      const box = root?.value?.getBoundingClientRect();
      const by = box?.y;
      const bh = box?.height;
      const val = by && bh ? by + bh / 2 : 0;
      if (val && val < window.innerHeight / 2)
        isHiddenImageVisible.value = true;
      else isHiddenImageVisible.value = false;
    };
    onMounted(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return { root, isHiddenImageVisible };
  },
});
</script>

<style lang="scss">
.thumbnail-box {
  height: 400px;
  width: auto;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.2s ease-out;
}

.fade-leave-active {
  transition: all 0.2s ease-in;
}
</style>