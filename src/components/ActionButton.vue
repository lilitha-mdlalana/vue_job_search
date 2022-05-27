<template>
  <button
    class="px-5 py-3 font-medium text-white bg-brand-blue-1 border-0 rounded hover:shadow-blue"
    @click="handleClick"
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick() {
      console.log("I've been clicked");
    },
    print(a) {
      console.log(a);
    },
  },
};
//13
</script>
