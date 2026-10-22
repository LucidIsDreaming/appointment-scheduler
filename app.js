
//import express module
import express from 'express';

//Create a port
const PORT = 3005;

const app = express();

app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));


//Define a default route ("/")
app.get('/', (req, res) => {
    
    res.sendFile(`${import.meta.dirname}/views/home.html`)

    //res.sendFile(`${import.meta.dirname}/views/home.html`);

});



//Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});

