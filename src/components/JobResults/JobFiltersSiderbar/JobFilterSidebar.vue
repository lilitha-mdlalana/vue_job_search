<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearUserJobFilterSelection"
          />
        </div>
      </div>
      <accordion header="Skills & Qualifications">
        <job-filters-sidebar-skills />
      </accordion>

      <accordion header="Degrees">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueDegrees"
          :mutation="ADD_SELECTED_DEGREES"
        />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueJobTypes"
          :mutation="ADD_SELECTED_JOB_TYPES"
        />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-checkbox-group
          :unique-values="uniqueOrganizations"
          :mutation="ADD_SELECTED_ORGANIZATIONS"
        />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { key } from "@/store";

import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSiderbar/JobFiltersSidebarCheckboxGroup.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSiderbar/JobFiltersSidebarSkills.vue";
import {
  useUniqueDegrees,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from "@/store/composables";

import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  UPDATE_SKILLS_SEARCH_TERM,
} from "@/store/constants";
export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFiltersSidebarCheckboxGroup,
    Accordion,
    JobFiltersSidebarSkills,
  },
  setup() {
    const store = useStore(key);
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();
    const uniqueDegrees = useUniqueDegrees();
    const clearUserJobFilterSelection = (): void => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };
    const parseSkillsSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };
    onMounted(parseSkillsSearchTerm);
    return {
      uniqueJobTypes,
      uniqueDegrees,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_DEGREES,
      clearUserJobFilterSelection,
    };
  },
});
</script>
