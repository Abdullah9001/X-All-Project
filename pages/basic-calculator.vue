<template>
  <div class="h-[90vh] w-10/12 m-auto px-4 flex justify-center items-center">
    <div
      class="animate-background inline-block rounded-lg bg-gray-900 from-green-500 via-blue-700 to-red-700 bg-[length:_400%_400%] p-2 [animation-duration:_6s] bg-gradient-to-r dark:bg-gray-800"
    >
      <div class="p-6 bg-white font-sens rounded-md">
        <h1
          class="text-4xl flex text-center justify-center items-center font-bold text-gray-800 mb-5 bg-gradient-to-r from-green-700 via-blue-700 to-red-700 text-transparent bg-clip-text animate-gradient"
        >
          Basic Calculator
        </h1>
        <div class="flex gap-10 my-4 justify-center items-center">
          <h2 class="text-xl font-bold">Number 1 :</h2>
          <input
            class="border-2 border-slate-900 py-2 px-1"
            type="text"
            v-model="numOne"
          />
        </div>
        <p class="text-red-600 flex justify-end">{{ errorOne }}</p>
        <div class="flex my-4 items-center text-center justify-between">
          <h2 class="text-xl font-bold">Operations :</h2>
          <input
            class="cursor-pointer"
            type="radio"
            value="+"
            v-model="radioCheck"
          />&plus;
          <input
            class="cursor-pointer"
            type="radio"
            value="-"
            v-model="radioCheck"
          />&minus;
          <input
            class="cursor-pointer"
            type="radio"
            value="*"
            v-model="radioCheck"
          />&times;
          <input
            class="cursor-pointer"
            type="radio"
            value="/"
            v-model="radioCheck"
          />÷
        </div>
        <p class="text-red-600 my-2">{{ errorRadio }}</p>
        <div class="flex gap-10 justify-center items-center my-4">
          <h2 class="text-xl font-bold">Number 2 :</h2>
          <input
            class="border-2 border-slate-900 py-2 px-1"
            type="text"
            v-model="numTwo"
          />
        </div>
        <p class="text-red-600 flex justify-end">{{ errorTwo }}</p>
        <div class="flex items-center justify-between">
          <button
            class="animate-background inline-block rounded-lg bg-gray-900 from-green-700 via-blue-500 to-red-500 bg-[length:_400%_400%] p-1 [animation-duration:_6s] bg-gradient-to-r dark:bg-gray-800"
            @click="calculate"
          >
            <span
              class="block rounded-md bg-white px-5 py-2 text-lg font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
            >
              Calculate
            </span>
          </button>
          <h2 class="text-xl font-bold">{{ showResult }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const radioCheck = ref("");
const numOne = ref("");
const numTwo = ref("");
const errorOne = ref("");
const errorRadio = ref("");
const errorTwo = ref("");
const errorText = ref("type a valid number");
const showResult = ref("");

const calculate = () => {
  let num1_status = false,
    num2_status = false,
    opr_status = false;

  let opr = "";

  if (numOne.value === "" || isNaN(numOne.value)) {
    errorOne.value = errorText.value;
  } else {
    errorOne.value = "";
    num1_status = true;
  }

  if (numTwo.value === "" || isNaN(numTwo.value)) {
    errorTwo.value = errorText.value;
  } else {
    errorTwo.value = "";
    num2_status = true;
  }

  if (
    radioCheck.value !== "+" &&
    radioCheck.value !== "-" &&
    radioCheck.value !== "*" &&
    radioCheck.value !== "/"
  ) {
    errorRadio.value = "radio check is not valid";
  } else {
    errorRadio.value = "";
    opr_status = true;
  }

  if (num1_status && num2_status && opr_status) {
    if (radioCheck.value === "+") {
      opr = "+";
    } else if (radioCheck.value === "-") {
      opr = "-";
    } else if (radioCheck.value === "*") {
      opr = "*";
    } else if (radioCheck.value === "/") {
      opr = "/";
    } else if (radioCheck.value === "") {
      showResult.value = "";
    }
    showResult.value = eval(numOne.value + opr + numTwo.value);
    numOne.value = "";
    numTwo.value = "";
    radioCheck.value = "";
    errorOne.value = "";
    errorTwo.value = "";
  } else {
    showResult.value = "";
  }
};
</script>

<style scoped>
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
