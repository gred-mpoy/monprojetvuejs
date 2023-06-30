<template>
    <form @submit.prevent="SoumiForm">
        <input v-model="formulaire.nom" type="text" placeholder = "Nom d'utilisateur" />
        <input v-model="formulaire.MotDePasse" type="password" placeholder = "Mot de passe" />

        <button type="submit">Soumettre</button>
    </form>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Formulaire',
    data() {
        return {
            formulaire: {
                nom: '',
                MotDePasse: ''
            }
        }
    },
    methods: {
        async SoumiForm() {

            const response = await fetch('http://localhost:3000/soum',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                /* Transforme l'objet SoumiForm en JSON pour l'envoyer dans le corps de la requête*/
                body: JSON.stringify(this.formulaire)
            });

            if (response.ok){

                console.log('Formulaire envoyé !')

            }else {

                console.log('Erreur lors de l\'envoi du formulaire !')}
            
        },
    },
};

/* eslint-enable vue/multi-word-component-names */
</script>