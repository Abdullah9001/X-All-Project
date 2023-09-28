<template>
  <div class="h-[90vh] flex justify-center items-center w-10/12 m-auto">
    <div>
      <div
        class="flex flex-col justify-center items-center bg-slate-50 w-full px-4 py-6 font-sans rounded-3xl"
      >
        <h1 class="text-xl font-bold mb-5">Aj Music</h1>
        <img
          class="w-44 h-44 object-cover rounded-full border-2 border-black shadow-xl shadow-slate-600 my-6 animate-none"
          src="../static/IMG_4644.JPG"
        />
        <h1 class="text-3xl font-bold text-black">Track Name</h1>
        <h4 class="text-base font-bold my-4 text-black">Track Artist</h4>
        <div class="flex justify-center items-center mt-4">
          <p class="px-3">00:00</p>
          <input
            class="w-56 appearance-none h-1 bg-blue-400 cursor-pointer"
            type="range"
            max="100"
            min="0"
            value="0"
          />
          <p class="px-3">00:00</p>
        </div>
        <div class="flex justify-center items-center my-4">
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="black"
              d="m376.1 177.3l-16.4 39.4c15.4 6.4 26.2 21.6 26.2 39.4c0 17.7-10.8 32.9-26.2 39.4l16.4 39.4c30.8-12.9 52.5-43.3 52.5-78.8c.1-35.6-21.6-66-52.5-78.8zm-288.8-28v213.3h85.3L322 512V0L172.7 149.3H87.3z"
            />
          </svg>
          <input
            class="appearance-none h-1 bg-blue-400 mx-4 cursor-pointer"
            type="range"
            min="0"
            max="100"
            value="99"
          />
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="black"
              d="M426.7 256c0-71-43.4-131.8-105-157.5l-16.4 39.4C351.5 157.2 384 202.8 384 256c0 53.3-32.5 98.8-78.8 118.1l16.4 39.4C383.3 387.8 426.7 327 426.7 256zm-85.4 0c0-35.5-21.7-65.9-52.5-78.7l-16.4 39.4c15.4 6.4 26.2 21.6 26.2 39.4c0 17.7-10.8 32.9-26.2 39.4l16.4 39.4c30.8-13 52.5-43.4 52.5-78.9zm13.2-236.3L338 59.1C415.1 91.2 469.3 167.2 469.3 256c0 88.7-54.2 164.8-131.3 196.9l16.4 39.4C447 453.7 512 362.5 512 256S447 58.3 354.5 19.7zM0 149.3v213.3h85.3L234.7 512V0L85.3 149.3H0z"
            />
          </svg>
        </div>
        <div class="flex justify-center items-center gap-5 my-5">
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1792 1600"
          >
            <path
              fill="black"
              d="M666 449q-60 92-137 273q-22-45-37-72.5T451.5 586t-51-56.5t-63-35T256 480H32q-14 0-23-9t-9-23V256q0-14 9-23t23-9h224q250 0 410 225zm1126 799q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 .5t-81 1t-73-1t-71-5t-64-10.5t-63-18.5t-58-28.5t-59-40t-55-53.5t-56-69.5q59-93 136-273q22 45 37 72.5t40.5 63.5t51 56.5t63 35t81.5 14.5h256V928q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zm0-896q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5T1408 672V480h-256q-48 0-87 15t-69 45t-51 61.5t-45 77.5q-32 62-78 171q-29 66-49.5 111t-54 105t-64 100t-74 83t-90 68.5t-106.5 42t-128 16.5H32q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45t51-61.5t45-77.5q32-62 78-171q29-66 49.5-111t54-105t64-100t74-83t90-68.5t106.5-42t128-16.5h256V32q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z"
            />
          </svg>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <mask id="ipSLeftOne0">
              <path
                fill="#fff"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="4"
                d="M30 36L18 24l12-12v24Z"
              />
            </mask>
            <path fill="black" d="M0 0h48v48H0z" mask="url(#ipSLeftOne0)" />
          </svg>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="m10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
            />
          </svg>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <mask id="ipSRightOne0">
              <path
                fill="#fff"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="4"
                d="m20 12l12 12l-12 12V12Z"
              />
            </mask>
            <path fill="black" d="M0 0h48v48H0z" mask="url(#ipSRightOne0)" />
          </svg>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
