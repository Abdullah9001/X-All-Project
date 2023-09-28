<template>
  <div class="h-[90vh] w-10/12 m-auto px-4 flex justify-center items-center">
    <div class="p-6 bg-white font-sens">
      <h1
        class="text-4xl flex text-center justify-center items-center font-bold text-gray-800 mb-5"
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
      <div class="flex my-4 items-center text-center justify-between">
        <h2 class="text-xl font-bold">Operations :</h2>
        <input class="cursor-pointer" type="radio" value="+" />&plus;
        <input class="cursor-pointer" type="radio" value="-" />&minus;
        <input class="cursor-pointer" type="radio" value="*" />&times;
        <input class="cursor-pointer" type="radio" value="/" />÷
      </div>
      <div class="flex gap-10 justify-center items-center my-4">
        <h2 class="text-xl font-bold">Number 2 :</h2>
        <input
          class="border-2 border-slate-900 py-2 px-1"
          type="text"
          v-model="numTwo"
        />
      </div>
      <div class="flex items-center justify-between">
        <button class="py-2 px-4 border-2 border-slate-900 font-bold">
          Calculate
        </button>
        <h2 class="text-xl font-bold">{{}}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
console.log("hello");
</script>
