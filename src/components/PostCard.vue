<template>
  <div ref="root" class="d-flex no-gutters mt-5 bg-white" :class="flexClass">
    <div class="row m-0 p-0 position-relative" :style="halfPostCardStyle">
      <div class="col m-0 p-0">
        <img class="thumbnail-box" :src="thumbnail" rel="preload" />
      </div>
      <div class="col m-0 p-0 position-absolute">
        <img
          class="thumbnail-box"
          :src="thumbnailhover"
          v-show="isImageVisible"
          rel="preload"
        />
      </div>
    </div>
    <div class="p-4 d-flex flex-column" :style="halfPostCardStyle">
      <h3>{{ title }}</h3>
      <p class="align-self-stretch" style="overflow: hidden">{{ abstract }}</p>
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
    const isImageVisible = ref(false);
    const isImageFirst = ref(false);

    const handleScroll = () => {
      const box = root?.value?.getBoundingClientRect();
      const by = box?.y;
      const bh = box?.height;
      const val = by && bh ? by + bh / 2 : 0;
      if (val && val < window.innerHeight / 2) isImageVisible.value = true;
      else isImageVisible.value = false;
    };

    const handleResize = () => {
      // TODO automatic bootstrap md value, or when the view breaks
      isImageFirst.value = window.innerWidth < 576;
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

    const flexClass = computed(() => {
      if (isImageFirst.value) return "flex-column";
      else if (props.flipped) return "flex-row-reverse";
      else return "flex-row";
    });

    const halfPostCardStyle = computed(() => {
      var result = {
        overflow: "hidden",
        "max-height": "30vh",
        "min-height": "300px",
      };
      if (!isImageFirst.value) {
        result["max-width"] = "50%";
      }
      return result;
    });

    return {
      root,
      isImageVisible,
      isImageFirst,
      flexClass,
      halfPostCardStyle,
    };
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

.thumbnail-box {
  object-fit: cover;
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