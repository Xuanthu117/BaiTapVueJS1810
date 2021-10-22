<template>
  <div class="tab-header">
    <div
      class="tab-article"
      v-for="article in articles"
      :key="article.step"
      :class="{
        active: article.step == currentStep,
        done: article.step < currentStep,
      }"
    >
      <div class="article-step">{{ article.step }}</div>
      <div class="article-name">{{ article.name }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Tab",

  computed: {
    ...mapState({
      currentStep: (state) => state.currentStep,
      articles: (state) => state.articles,
    }),
  },
};
</script>
