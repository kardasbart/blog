<template>
  <router-link
    class="d-flex no-gutters mt-5 bg-white shadow"
    :to="{ name: 'Post', params: post }"
    style="text-decoration: none; color: inherit"
    :class="flexClass"
  >
    <ImagePostCard
      :style="halfPostCardStyle"
      :mainImage="post.thumbnail"
      :hiddenImage="post.thumbnailhover"
    />
    <div class="p-4 d-flex flex-column" :style="halfPostCardStyle">
      <h3>{{ post.title }}</h3>
      <p class="align-self-stretch" style="overflow: hidden">
        {{ post.abstract }}
      </p>
      <h6>{{ post.date }}</h6>
    </div>
  </router-link>
</template>
<script lang="ts">
import { computed, defineComponent, ref, onUnmounted, onMounted } from "vue";
import ImagePostCard from "./ImagePostCard.vue";

export default defineComponent({
  components: { ImagePostCard },
  props: ["post", "flipped"],
  setup(props) {
    const isImageFirst = ref(false);

    const handleResize = () => {
      // TODO automatic bootstrap md value, or when the view breaks
      isImageFirst.value = window.innerWidth < 576;
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
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