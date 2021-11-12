<template>
  <h2>Hmm am not a {{ title }}</h2>
</template>

<script lang="ts">
export default {
  setup() {
    const title = "Value";
    return { title };
  },
};
</script>

<style>
h2 {
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
  font-style: italic;
  color: rgb(49, 184, 15);
  text-align: center;
  margin-top: 50px;
}
</style>