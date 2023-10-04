import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  const newTodo = ref("");
  const todos = ref([]);
  const errMsg = ref("");

  const uppercaseFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getRandomColor = () => {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  };

  const addTodo = () => {
    if (newTodo.value.length < 5) {
      errMsg.value = "Please enter more than 5 letters.";
    } else {
      todos.value.push({
        id: Math.floor(Math.random() * 100000),
        title: uppercaseFirstLetter(newTodo.value),
        date: new Date().toLocaleDateString("en-US"),
        color: getRandomColor(),
      });
      errMsg.value = "";
    }

    newTodo.value = "";
  };
  return { newTodo, todos, addTodo, errMsg };
});
