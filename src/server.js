require('dotenv').config();

const app = require('./app');
const cors = require('cors');


//installation de dotenv avec npm i dotenv
const PORT = process.env.PORT;

//middleware

app.use(cors());


//vérifie que le PORT existe
if(!PORT){
    console.log('PORT absent , veuillez compléter le fichier .env');
    process.exit(1)
}
app.listen(PORT, ()=>{
    console.log(`serveur lancé sur le port ${PORT}`);
})
    
