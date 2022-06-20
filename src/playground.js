const { ref, reactive, computed } = require("vue");

const person = reactive({
  name: "Boris",
});

let title = computed(() => person.name + " the Great");
console.log(title.value);

person.name = "Lilitha";
console.log(title.value);
