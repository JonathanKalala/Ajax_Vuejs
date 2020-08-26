<template>
    <div>
        <h1>Liste d'apprenants</h1>
        <ul v-for:= "item in donnee">
            <li> {{item.nom}} {{item.prenom}} </li>
            <button v-on:click='suppression(item.id_student)'>Supprimer</button>
        </ul>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: "Liste",
        data(){
            return{
                donnee: null,
            }
        },
        mounted(){
            axios.get('http://localhost:8000/eleve').then(res=>{
                console.log(res.data);
                this.donnee= res.data
                
            })
        },

        methods: {
            suppression: (id) =>{
                console.log(id);
                
                axios.delete('http://localhost:8000/eleve/'+id).then(res=>
                console.log(res)
                
                )

            }
        }
    }
</script>

<style >
    ul{
        display: grid;
        grid-template-columns: 100px 100px;
    }
</style>