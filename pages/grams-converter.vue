<template>
  <div class="h-[90vh] w-10/12 m-auto px-4 flex justify-center items-center">
    <div class="bg-slate-900 shadow-slate-500 shadow-lg p-7 font-sens">
      <h1 class="mb-2 text-white text-3xl font-bold">Enter a value in grams</h1>
      <input
        type="text"
        class="w-full flex bg-slate-900 border-b-2 py-4 px-2 border-slate-50 outline-none text-white"
        v-model="gram"
      />
      <p class="text-red-700">{{ error }}</p>
      <div class="flex justify-between my-6 items-center">
        <h1 class="text-2xl text-slate-50 font-bold">Convert to :</h1>

        <select
          v-model="selected"
          class="py-2 px-3 font-bold outline-none rounded"
        >
          <option
            class="text-lg"
            v-for="option in options"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>

      <div class="flex gap-4 items-center">
        <button
          class="py-2 px-3 text-slate-50 text-xl border border-slate-50 font-bold"
          @click="convertTo"
        >
          Convert
        </button>
        <h2 class="text-xl font-bold text-slate-50">Result : {{ result }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const selected = ref("pounds");
const error = ref("");
const result = ref();

const gram = ref();

const errorData = ref("please provide a valid grams number");

const options = ref([
  { text: "Pounds", value: "pounds" },
  { text: "Kilograms", value: "kilograms" },
  { text: "Ounces", value: "ounces" },
  { text: "Stones", value: "stones" },
]);
const convertTo = () => {
  if (gram.value === "" || isNaN(gram.value)) {
    error.value = errorData.value;
    result.value = "";
  } else {
    error.value = "";
    switch (selected.value) {
      case "pounds":
        result.value = gram.value * 2.20462;
        break;
      case "kilograms":
        result.value = gram.value / 2.20462;
        break;
      case "ounces":
        result.value = gram.value / 35.274;
        break;
      case "stones":
        result.value = gram.value / 14;
        break;
      default:
        break;
    }
  }
  gram.value = "";
};
</script>
