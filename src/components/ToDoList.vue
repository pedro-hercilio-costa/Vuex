<template>
<div id="ToDoList">
    <div id="tarefas" v-for="(criarLembrete, index) in vetorLembretes" :key="index">
        <span>{{criarLembrete}}</span>
    </div>
</div>  
</template>

<script>
export default {
    name: "ToDoList",
    props: ['vetorLembretes']
    }
</script>

<style>
    #ToDoList {
        width: 800px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 200px;        
        margin-left: 27%;             
    }

    #tarefas {
        background-color: rgb(255, 136, 0);
        color: black;
        width: 35%;
        height: 35px;
        margin-top: 30px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        
    }

    #tarefas:hover {
        transition: all 0.30s;
        background-color:rgb(133, 103, 70);
        color: #000;
        border: 2px solid #000;
    }
</style>