<template>
  <div class="h-[90vh] w-10/12 m-auto px-4 flex justify-center items-center">
    <div class="bmi-calculator">
      <h1 class="text-center text-white font-bold py-4 text-2xl">
        BMI CALCULATOR
      </h1>
      <div
        class="bg-slate-50 w-full m-auto p-4 rounded-md shadow-xl shadow-slate-600"
      >
        <div class="my-5">
          <div class="flex justify-center items-center font-bold">
            <h1 class="px-4 text-2xl">Height In CM :</h1>
            <input
              class="py-2 border-2 border-black px-2 rounded"
              type="text"
              v-model="height"
            />
          </div>
          <br />
          <p class="text-red-700 flex items-end justify-end px-2">
            {{ heightError }}
          </p>
        </div>
        <div class="my-2">
          <div class="flex justify-center items-center font-bold">
            <h1 class="px-4 text-2xl">Weight In KG :</h1>
            <input
              class="py-2 border-2 border-black px-2 rounded"
              type="text"
              v-model="weight"
            />
          </div>
          <br />
          <p class="text-red-700 flex items-end justify-end px-2">
            {{ weightError }}
          </p>
        </div>
        <div class="flex justify-start gap-14 items-center text-center mx-4">
          <button
            class="border-2 border-black text-base font-bold py-2 px-4 rounded hover:bg-black hover:text-white duration-1000"
            @click="calculate"
          >
            Calculate
          </button>
          <h2 class="text-2xl font-bold text-blue-600">
            {{ output }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const height = ref("");
const weight = ref("");

const output = ref("");

const heightError = ref("");
const weightError = ref("");

const heightStatus = ref(false);
const weightStatus = ref(false);

const calculate = () => {
  if (height.value === "" || isNaN(height.value) || height.value <= 0) {
    heightError.value = "Please provide a height value";
  } else {
    heightError.value = "";
    heightStatus.value = true;
  }

  if (weight.value === "" || isNaN(weight.value) || weight.value <= 0) {
    weightError.value = "Please provide a weight value";
  } else {
    weightError.value = "";
    weightStatus.value = true;
  }

  if (heightStatus.value && weightStatus.value) {
    const bmi = (
      weight.value /
      ((height.value * height.value) / 10000)
    ).toFixed(2);
    if (bmi < 18.5) {
      output.value = "Underweight " + bmi;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      output.value = "Normal " + bmi;
    } else if (bmi >= 25 && bmi <= 29.9) {
      output.value = "Overweight " + bmi;
    } else if (bmi >= 30 && bmi <= 34.9) {
      output.value = "Obese Class I " + bmi;
    } else if (bmi >= 35 && bmi <= 39.9) {
      output.value = "Obese Class II " + bmi;
    } else if (bmi >= 40) {
      output.value = "Obese Class II " + bmi;
    }
  }
};
</script>
