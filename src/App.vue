<template>
    <h2>I am a {{ title }}</h2>
</template>
<script>
    export default {
        data() {
            return {
                title: "Vue Blog"
            }
        }
    }
</script>
<style>
    h2 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 500px;
        font-style: italic;
        color: rgb(117, 22, 43);
        text-align: center;
        margin-top: 50px;
    }
</style>