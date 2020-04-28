<template>
  <div id="app">
    <ToDoForm @criarLembretes="criarLembrete($event)"/>
    <ToDoList/>
  </div>
</template>

<script>

import ToDoForm from "./components/ToDoForm.vue"
import ToDoList from "./components/ToDoList.vue"

export default {
  name: 'App',
  components: {
    ToDoForm, ToDoList
  }, data: function () {
    return {
      
    }
  }, methods: {
    criarLembrete: function (event) {
      this.lembretes.push(event.titulo)      
      }
  }
}
</script>

<style> 
#app {
  display: flex;
    flex-wrap: wrap;
    
    align-items: center;
}
</style>
