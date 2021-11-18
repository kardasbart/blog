<template>
  <div ref="root" class="container mb-5 mt-5">
    <div class="row align-items-center bg-white">
      <div class="col-sm-12 col-md-6" v-if="!(isImageFirst || flipped)">
        <h3>{{ title }}</h3>
        <p>{{ abstract }}</p>
        <h6>{{ date }}</h6>
      </div>
      <div class="col-sm-12 col-md-6 bfvis">
        <!-- TODO Component for handle many images -->
        <div class="container">
          <div class="row position-relative">
            <div class="col">
              <img
                class="img-fluid thumbnail-box"
                :src="thumbnail"
                rel="preload"
              />
            </div>
            <div class="col position-absolute">
              <img
                class="img-fluid thumbnail-box"
                :src="thumbnailhover"
                v-show="isSecond"
                rel="preload"
              />
            </div>
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
  setup() {
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
      isImageFirst.value = window.innerWidth < 600;
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

    return { root, isSecond, isImageFirst };
  },
});
</script>

<style lang="css">
.bfvis {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}

thumbnail-box {
  max-height: 100%;
}
</style>