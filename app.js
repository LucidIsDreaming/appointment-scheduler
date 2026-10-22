
//import express module
import express from 'express';

//Create a port
const PORT = 3005;

const app = express();
const orders =[];


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
    const order = req.body;
    order.timestamp = new Date();

    console.log(order);


    //add the order object to our orders array
    orders.push(order);
    console.log(orders);

    //Display the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);

    });

    //Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});


