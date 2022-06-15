<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <accordion header="Job Types">
        <p>Type your html here</p>
      </accordion>
      <accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Between Vue" type="checkbox" class="mr-3" />
                <label for="Between Vue">Between Vue</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Vue and A Half Men" type="checkbox" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Vue and A Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and A Half Men">Vue and A Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
</script>
