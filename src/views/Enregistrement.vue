<template>
    <div>
        <h1> Enregistrement</h1>
        <form action="" @submit.prevent="save" class="form-row">
            <div class="col">
                <input type="text" v-model="nom">
                <input type="text" v-model="prenom">
            </div>
            <button>Enregistrer</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:"Enregistrement",
        data(){
            return{
                nom:"",
                prenom:""
            }
        },
        methods: {
            
            save: function(){
                let obj = {
                    nom: this.nom,
                    prenom:this.prenom
                }
                console.log(obj);

                axios.post("http://localhost:8000/eleve/", obj).then(res=>{
                    console.log(res);
                    
                })
                
            }
        }

    }
</script>