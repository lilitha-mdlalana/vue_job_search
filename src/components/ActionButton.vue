<template>
  <button
    class="px-5 py-3 font-medium text-white bg-brand-blue-1 border-0 rounded hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
};
</script>
