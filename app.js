
//import express module
import express from 'express';

//Create a port
const PORT = 3005;


const app = express();
const appointments =[];


app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));


//Define a default route ("/")
app.get('/', (req, res) => {
    
    res.sendFile(`${import.meta.dirname}/views/home.html`)

    //res.sendFile(`${import.meta.dirname}/views/home.html`);

});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});


//Add a route for the form submission
app.post('/submit-appointment', (req, res) => {

    //Create a JSON object to store the order data
    const book = req.body;
    book.timestamp = new Date();

    console.log(book);


    //add the order object to our orders array
    appointments.push(book);
    console.log(appointments);

    //Display the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);

    });

//Add an admin route
app.get('/admin', (req, res) => {
    res.send(appointments);
});



    //Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});


