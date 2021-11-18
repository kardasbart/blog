<template>
  <div class="container-md border-bottom border-primary">
    <nav class="navbar navbar-expand-sm navbar-style-color">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="/logo.svg"
            alt=""
            width="60"
            height="60"
            class="d-inline-block align-text-center"
          />
          Bartek Tech Blog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="route in routes" :key="route.id">
              <router-link
                class="nav-link"
                active-class="active"
                :to="route.path"
              >
                {{ route.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const routes = router.getRoutes();

    return { routes };
  },
});
</script>
