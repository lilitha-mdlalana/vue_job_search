<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from "axios";
import { onMounted, ref, defineComponent } from "vue";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);

    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights`;
      const response = await axios.get<Spotlight[]>(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);
    return { spotlights };
  },
});
</script>
