<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    };
  },
});
</script>
