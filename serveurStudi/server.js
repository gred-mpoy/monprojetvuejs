const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

// Création d'une nouvelle application Express
const app = express();

app.use(cors());

app.use(bodyParser.json());


// Configuration de MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studi'
}


// Définir une route POST pour recevoir les données du formulaire à partir de notre client VueJS
app.post('/soum', async (req, res) => {
    try {

        // Établir une nouvelle connexion xion à la base de données
        const connection = await mysql.createConnection(dbConfig);

        
        const [ligne] = await connection.execute(

            'SELECT * FROM utilisateur WHERE nom = ? AND MotDePasse = ?',

            [req.body.nom, req.body.MotDePasse]

        );
        

        // Si l'utilisateur existe déjà dans la base de données
        if(ligne.length > 0){
            res.status(409).send("L'utilisateur existe déjà");
            console.log("L'utilisateur existe déjà")

            /* Fermée la connexion de la base de donnée */
            connection.end();
            return;
        }


        // Exécution d'une requête pour insérer les données du formulaire dans la table de données
        const [resultats] = await connection.execute(

            'INSERT INTO utilisateur (nom, MotDePasse) values (?, ?)',

            [req.body.nom, req.body.MotDePasse]

        );

        // Fermer la connexion à la base de données
        connection.end();


        // Envoyer une réponse au client VueJS
        res.sendStatus(200);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {

    console.log("le serveur est démarré sur le port 3000")
});