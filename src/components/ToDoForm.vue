<template>
  <div id="ToDoForm">      
      <div id="painel">
          <input type="text" placeholder="Escreva seu lembrete aqui" v-model="titulo">
      </div>      
      <button @click="criarLembrete">Criar</button>
  </div>
</template>

<script>
export default {
    name: "ToDoForm",    
    data: function () {
        return{
            titulo: ''
        }
    }, methods: {
        criarLembrete: function () {
            this.$store.commit('criarLembretes', {
                titulo: this.titulo                
            })            
            this.titulo = '';                      
        }
    }   
}
</script>

<style>
    #ToDoForm {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;                
        margin-left: 35%;        
    }
 #ToDoForm button {
        margin-top: 20px;
        font-size: 17px;
        cursor: pointer;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        outline: none;  
    }
    #ToDoForm button:hover {
        transition: all 0.45s;
        color:#000;
        background-color:  rgb(255, 136, 0);
    }

     #painel {         
        width: 80%;
        height: 10%;
        border-radius: 10px;
        background-color: #ffff;
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    #painel input {
      outline: none;  
      border: none;
    }
</style>