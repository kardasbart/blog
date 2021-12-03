<template>
  <Placeholder :title="title" content="This is post content" />
</template>

<script lang="ts">
import Placeholder from "@/components/Placeholder.vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { Placeholder },
  setup() {
    const route = useRoute();
    const title = ref(route.params.link);

    return { title };
  },
});
</script>
