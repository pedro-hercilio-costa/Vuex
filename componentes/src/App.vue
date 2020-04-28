<template>
  <div id="app">  
    <caixas/>
    <ferramentas @alteraCor="alteraCor($event)" @alterouTexto="alteraTexto($event)"/>
  </div>
</template>

<script>
import Caixas from "./components/Caixas.vue"
import Ferramentas from "./components/Ferramentas.vue"
export default {
  name: 'App',
  components: {
    Caixas, Ferramentas
  }, data: function () {
    return {
      
    }    
  }, methods: {
    alteraCor: function(event) {
      this.caixinhas[event.caixa].cor = event.cor      
    }, alteraTexto: function(event) {
      this.caixinhas[event.caixa].titulo = event.titulo   
    }
  }
}
</script>

<style>
</style>
