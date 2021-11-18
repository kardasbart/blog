<template>
  <div class="container">
    <PostCard
      v-for="p in posts"
      :key="p.id"
      :pid="p.id"
      :title="p.title"
      :date="p.date"
      :abstract="p.abstract"
      :thumbnail="p.thumbnail"
      :thumbnailhover="p.thumbnailhover"
      :flipped="p.id % 2 == 0"
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
        id: 1,
        title: "First post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-11-15",
        thumbnail: "/static/post1/t.jpg",
        thumbnailhover: "/static/post1/h.jpg",
      },
      {
        id: 2,
        title: "Second post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-10-10",
        thumbnail: "/static/post2/t.jpg",
        thumbnailhover: "/static/post2/h.jpg",
      },
      {
        id: 3,
        title: "Third post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-09-01",
        thumbnail: "/static/post3/t.jpg",
        thumbnailhover: "/static/post3/h.jpg",
      },
      {
        id: 4,
        title: "Second post",
        abstract:
          "Officia ex ad ea do Lorem nisi. Amet ipsum sint ullamco minim consequat ad ut consequat duis consectetur sit. Quis nulla aute mollit qui ea anim qui reprehenderit. Est magna cupidatat id sit eiusmod incididunt enim. Ex ut ullamco eu sit consectetur incididunt sit. Ea id est sit eiusmod eu aliqua irure pariatur deserunt esse magna cupidatat consectetur cupidatat.",
        date: "2021-10-10",
        thumbnail: "/static/post2/t.jpg",
        thumbnailhover: "/static/post2/h.jpg",
      },
      {
        id: 5,
        title: "Third post",
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
