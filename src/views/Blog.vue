<template>
  <div>
    <Placeholder title="All posts should be here" content="Something" />
    <PostsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Placeholder from "@/components/Placeholder.vue";
import PostsList from "@/components/PostsList.vue";

export default defineComponent({
  components: { Placeholder, PostsList },
  setup() {},
});
</script>
