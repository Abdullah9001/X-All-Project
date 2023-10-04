<script setup>
import { useTodoStore } from "../store/todo";

const store = useTodoStore();
</script>

<template>
  <div class="h-[90vh] flex justify-center items-center">
    <div class="h-100 pt-8">
      <div class="flex items-center justify-center">
        <div class="bg-white shadow-md rounded-lg border-2 p-3 w-full">
          <div class="main">
            <div class="header mb-2">
              <h1 class="text-3xl font-bold">Todo</h1>
            </div>
            <div class="input flex">
              <input
                type="text"
                placeholder="Type Something"
                class="input outline-none border-gray-900 border mr-3 w-80 h-10 rounded-md pl-3"
                v-model="store.newTodo"
              />
              <button
                class="border-2 border-gray-900 p-1 font-sans bg-slate-800 font-bold text-white text-sm rounded-md transition-all ease-in-out duration-700 hover:bg-slate-100 hover:text-slate-950"
                @click="store.addTodo()"
              >
                Add Todo
              </button>
            </div>
            <p class="text-red-600 text-xs m-2 text-center justify-center">
              {{ store.errMsg }}
            </p>
          </div>
          <div class="mt-4 p-3 rounded-lg border border-gray-600">
            <div class="list-text">
              <h1 class="text-2xl font-bold font-sans text-slate-950">
                Todo Item
              </h1>
            </div>
            <div class="todo-list" v-for="todo in store.todos" :key="todo.id">
              <div
                class="flex justify-between items-center border border-gray-500 rounded-lg p-2 mt-3"
                :style="{ background: todo.color }"
              >
                <div class="items">
                  <p class="font-xl text-xl font-sans font-bold text-slate-50">
                    {{ todo.title }}
                  </p>
                  <p class="font-xs text-xs text-slate-100">{{ todo.date }}</p>
                </div>
                <div class="button">
                  <button
                    class="border border-green-500 mr-2 font-sans text-slate-50 font-bold p-1 text-xs rounded"
                  >
                    Edit
                  </button>
                  <button
                    class="border border-red-500 mr-2 text-xs text-slate-50 font-sans font-bold p-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
