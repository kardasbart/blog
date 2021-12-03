<template>
  <div class="container-fluid">
    <PostCard
      v-for="(p, index) in posts"
      :key="index"
      :post="p"
      :flipped="index % 2 == 0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostCard from "@/components/PostCard.vue";

export default defineComponent({
  components: { PostCard },
  setup() {
    const posts = [
      {
        link: "first-post",
        title: "First post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-11-15",
        thumbnail: "/static/post1/t.jpg",
        thumbnailhover: "/static/post1/h.jpg",
      },
      {
        link: "second-post",
        title: "Second post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-10-10",
        thumbnail: "/static/post2/t.jpg",
        thumbnailhover: "/static/post2/h.jpg",
      },
      {
        link: "third-post",
        title: "Third post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-09-01",
        thumbnail: "/static/post3/t.jpg",
        thumbnailhover: "/static/post3/h.jpg",
      },
      {
        link: "4th-post",
        title: "4th post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-10-10",
        thumbnail: "/static/post2/t.jpg",
        thumbnailhover: "/static/post2/h.jpg",
      },
      {
        link: "last-but-not-least-post",
        title: "Last post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-09-01",
        thumbnail: "/static/post3/t.jpg",
        thumbnailhover: "/static/post3/h.jpg",
      },
    ];

    return { posts };
  },
});
</script>
