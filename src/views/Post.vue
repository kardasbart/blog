<template>
  <div>
    <Placeholder :title="post.title" :content="post.date" />
    <h4>Link: {{ post.link }}</h4>
  </div>
</template>

<script lang="ts">
import Placeholder from "@/components/Placeholder.vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { Placeholder },
  setup() {
    const route = useRoute();
    const post = ref(route.params);

    return { post };
  },
});
</script>
