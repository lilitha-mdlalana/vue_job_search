<template>
  <div class="mt5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base focus:outline-none"
      placeholder="Computer programming, Finance Degree"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobFiltersSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
      },
    });
    return { skillsSearchTerm };
  },
});
</script>
