<template>
  <div class="container-fluid container-center">
    <h1 class="font-weight-bold">{{ title }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere
      nam aspernatur, necessitatibus reiciendis enim quia, cumque maxime
      doloribus nobis vero sequi, tempore rerum soluta dolores eos pariatur
      tenetur earum.
    </p>
    <h3>{{ content }}</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere
      nam aspernatur, necessitatibus reiciendis enim quia, cumque maxime
      doloribus nobis vero sequi, tempore rerum soluta dolores eos pariatur
      tenetur earum.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "content"],
  setup() {},
});
</script>
