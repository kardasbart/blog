<template>
  <div ref="root" class="row align-items-center m-5 bg-white">
    <div class="col-sm-12 col-md-6" v-if="!(isImageFirst || flipped)">
      <h3>{{ title }}</h3>
      <p>{{ abstract }}</p>
      <h6>{{ date }}</h6>
    </div>
    <div class="col-sm-12 col-md-6 bfvis p-0">
      <!-- TODO Component for handle many images -->
      <div class="row position-relative no-gutters">
        <div class="col d-flex" :class="imageAlignment">
          <img class="thumbnail-box img-fluid" :src="thumbnail" rel="preload" />
        </div>
        <div class="col d-flex position-absolute" :class="imageAlignment">
          <img
            class="thumbnail-box img-fluid"
            :src="thumbnailhover"
            v-show="isSecond"
            rel="preload"
          />
        </div>
      </div>
    </div>
    <!-- TODO Dont Repeat Yourself: -->
    <div class="col-sm-12 col-md-6" v-if="isImageFirst || flipped">
      <h3>{{ title }}</h3>
      <p>{{ abstract }}</p>
      <h6>{{ date }}</h6>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, onUnmounted, onMounted } from "vue";

export default defineComponent({
  props: [
    "id",
    "title",
    "abstract",
    "date",
    "thumbnail",
    "thumbnailhover",
    "flipped",
  ],
  setup(props) {
    const root = ref<HTMLInputElement>();
    const isSecond = ref(false);
    const isImageFirst = ref(false);

    const handleScroll = () => {
      const box = root?.value?.getBoundingClientRect();
      const by = box?.y;
      const bh = box?.height;
      const val = by && bh ? by + bh / 2 : 0;
      if (val && val < window.innerHeight / 2) isSecond.value = true;
      else isSecond.value = false;
    };

    const handleResize = () => {
      // TODO automatic bootstrap md value, or when the view breaks
      isImageFirst.value = window.innerWidth < 768;
    };

    onMounted(() => {
      handleResize();
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    const imageAlignment = computed(() => {
      if (isImageFirst.value) return "justify-content-center";
      else if (props.flipped) return "justify-content-start";
      else return "justify-content-end";
    });

    return { root, isSecond, isImageFirst, imageAlignment };
  },
});
</script>

<style lang="scss">
.bfvis {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}

thumbnail-box {
  object-fit: cover;
  overflow: hidden;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>