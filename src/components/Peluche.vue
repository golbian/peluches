<template>
  <div ref="container">
    <h1 class="center">Peluches en ventes</h1>
    <div class="row">
      <div v-for="peluche in peluches" :key="peluche.id" class="col-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="peluche.src" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{peluche.nom}}</h5>
            <p class="card-text">{{peluche.description}}</p>
            <button v-on:click.prevent="update(peluche)"></button>
            <button v-on:click.prevent="remove(peluche.id)"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PelucheService from "../service/peluche.service"
export default {
  name: 'Peluche',
  props: {
    msg: String
  },
  data() {
        return {
            peluches: [],
    }
  },
  mounted:function(){
    PelucheService.getAllPeluche().then(data => {
      this.peluches = data;
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
