<template>
  
  <div class="container">

    <h1> Application de tâche</h1>
    <form @submit.prevent="ajouterTache">
      <input type="text" v-model="nouvelleTache" placeholder="Ajouter une nouvelle tâche">
      <button type="submit">Ajouter</button>
    </form>

    <ul>
      <li v-for="(tache, index) in taches" :key="index" :class="{fait: tache.realiser}">
        <input type="checkbox" v-model="tache.realiser">
        {{ tache.titre }}
        <button @click="supprimerTache(index)">Supprimer</button>
      </li>
    </ul>

    <router-link to="/spa1">Aller vers Spa1</router-link>
    <br />
    <br />
    <router-link to="/spa2">Aller vers Spa2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default{
  data(){
    return{
      nouvelleTache: '',
      taches:[]
    }
  },
  methods:{
    ajouterTache(){
      this.taches.push({
        titre: this.nouvelleTache,
        realiser: false
      })
      this.nouvelleTache = '';
    },
    supprimerTache(index){
      // splice permet de supprimer un élément d'un tableau
      this.taches.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.container {
  max-width:500px;
  margin: 0 auto;
  padding: 1em;
  background: #f5f5f5;
  border-radius: 3px;
}
.fait{
  text-decoration: line-through;
}
</style>