<template>
  <div class="h-[90vh] w-10/12 m-auto px-4 flex justify-center items-center">
    <div class="bg-slate-900 shadow-slate-500 shadow-lg p-7 font-sens">
      <h1 class="mb-2 text-white text-3xl font-bold">
        Enter a valid value in grams
      </h1>
      <div class="my-6">
        <div class="flex justify-between items-center my-6">
          <h1 class="text-xl text-slate-50">Enter bill amount :</h1>
          <input
            class="py-2 px-1 outline-none border border-slate-50 bg-slate-900 text-slate-50"
            type="text"
            v-model="billAmount"
          />
        </div>
        <p class="text-red-600 flex justify-end">{{ showError }}</p>
        <div class="flex justify-between items-center my-6">
          <h1 class="text-xl text-slate-50">Select discount %</h1>
          <select
            v-model="selected"
            class="py-1 w-48 font-bold outline-none rounded"
          >
            <option
              class="text-lg"
              v-for="option in optionNumber"
              :value="option.value"
            >
              {{ option.number }}
            </option>
          </select>
        </div>
        <div class="flex justify-between items-center my-6">
          <h1 class="text-xl text-slate-50">Discount amount:</h1>
          <input
            class="py-2 px-1 outline-none border border-slate-50 bg-slate-900 text-slate-50"
            type="text"
            disabled
            v-model="showDiscount"
          />
        </div>
        <div class="flex justify-between items-center my-6">
          <h1 class="text-xl text-slate-50">Final Pay:</h1>
          <input
            class="py-2 px-1 outline-none border border-slate-50 bg-slate-900 text-slate-50"
            type="text"
            disabled
            v-model="showFinal"
          />
        </div>
      </div>
      <div class="my-6">
        <button
          class="bg-slate-50 w-full py-2 text-xl font-bold my-2"
          @click="calculete"
        >
          Calculate
        </button>
        <button
          class="bg-slate-50 w-full py-2 text-xl font-bold my-2"
          @click="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const selected = ref(0);
const billAmount = ref();
const showDiscount = ref();
const showFinal = ref();
const showError = ref();

const optionNumber = ref([
  { number: 0, value: 0 },
  { number: 5, value: 5 },
  { number: 10, value: 10 },
  { number: 15, value: 15 },
  { number: 20, value: 20 },
  { number: 25, value: 25 },
  { number: 30, value: 30 },
]);

const calculete = () => {
  if (billAmount.value === "" || isNaN(billAmount.value)) {
    showError.value = "please enter a valid amount";
  } else {
    showDiscount.value = (billAmount.value * selected.value) / 100;
    showFinal.value = billAmount.value - showDiscount.value;
    billAmount.value = "";
    showError.value = "";
  }
};

const reset = () => {
  selected.value = "0";
  showDiscount.value = "";
  showFinal.value = "";
};
</script>
