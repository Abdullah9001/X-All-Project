<template>
  <div>
    <div class="py-8">
      <div class="w-10/12 m-auto flex justify-between">
        <div class="title">
          <NuxtLink class="text-slate-50 text-4xl" to="/">X- Project</NuxtLink>
        </div>
        <div class="flex gap-10 justify-center items-center text-xl">
          <NuxtLink class="text-white" to="#">About</NuxtLink>
          <NuxtLink class="text-white" to="#">Contact</NuxtLink>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-base"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                @click="showMenuButton"
              >
                Project
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              v-if="showDropdown"
            >
              <div class="py-3" role="none">
                <NuxtLink
                  to="bmi-calculator"
                  class="text-gray-700 block px-2 py-3 text-base hover:bg-slate-700 hover:text-white duration-1000"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >BMI Calculator</NuxtLink
                >
                <NuxtLink
                  to="/music-player"
                  class="text-gray-700 block px-2 py-3 text-base hover:bg-slate-700 hover:text-white duration-1000"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Music Player</NuxtLink
                >
                <NuxtLink
                  to="/grams-converter"
                  class="text-gray-700 block px-2 py-3 text-base hover:bg-slate-700 hover:text-white duration-1000"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Gram Converter</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showDropdown = ref(false);

const showMenuButton = () => {
  showDropdown.value = !showDropdown.value;
};

const closeDropdownOnOutsideClick = (event) => {
  if (showDropdown.value) {
    const menuButton = document.getElementById("menu-button");

    if (menuButton && !menuButton.contains(event.target)) {
      showDropdown.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdownOnOutsideClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", closeDropdownOnOutsideClick);
});
</script>

<style scoped></style>
