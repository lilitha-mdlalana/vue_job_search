<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore(key);
    const router = useRouter();

    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return {
      selectedOrganizations,
      uniqueOrganizations,
      selectOrganization,
    };
  },
};
// Composition API II - 18
</script>
