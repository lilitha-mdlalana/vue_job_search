<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-2">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558"
            alt="Vue Logo"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from "@/components/HeadLine.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    HeadLine,
    JobSearchForm,
  },
};
</script>
