require('dotenv').config();

const app = require('./app');

//installation de dotenv avec npm i dotenv
const PORT = process.env.PORT;

//vérifie que le PORT existe
if(!PORT){
    console.log('PORT absent , veuillez compléter le fichier .env');
    process.exit(1)
}
app.listen(PORT, ()=>{
    console.log(`serveur lancé sur le port ${PORT}`);
})
    
