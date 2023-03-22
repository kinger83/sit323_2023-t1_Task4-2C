const { json } = require('express');
const express = require('express');
const res = require("express/lib/response");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Addidtion. add /add/x/x values together.
app.get('/add/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 + number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

app.post('/add', (req, res) => {
    try{
        const {n1, n2} = req.body;
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if(isNaN(num1)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }
        if(isNaN(num2)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }

        const result = num1 + num2;

        res.status(200).json({statuscode:500, data:result});
        
        
    }
    catch(error){
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

// Subtraction. subtact param 2 from param 1 /subtract/x/x values.
app.get('/subtract/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 - number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

app.post('/subtract', (req, res) => {
    try{
        const {n1, n2} = req.body;
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if(isNaN(num1)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }
        if(isNaN(num2)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }

        const result = num1 - num2;

        res.status(200).json({statuscode:500, data:result});
        
        
    }
    catch(error){
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

// Multiplication. multiplies /multiply/x/x values together.
app.get('/multiply/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        

        const result = number1 * number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

app.post('/multiply', (req, res) => {
    try{
        const {n1, n2} = req.body;
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if(isNaN(num1)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }
        if(isNaN(num2)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }

        const result = num1 * num2;

        res.status(200).json({statuscode:500, data:result});
        
        
    }
    catch(error){
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

// Divide. divides parram 1 by param 2 /divide/x/x values together.
app.get('/divide/:num1/:num2', (req, res) =>{
    try {
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        const result = number1 / number2;
        res.send(result.toString());
        
    } catch (error) {
        res.send(error);
        
    }
});

app.post('/divide', (req, res) => {
    try{
        const {n1, n2} = req.body;
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if(isNaN(num1)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }
        if(isNaN(num2)){
            res.status(500).json({statuscode:500, msg:"N1 is not a valid number"});
        }

        if(num2 == 0){
            res.status(500).json({statuscode:500, msg:"Cannot divide by 0"});
        }

        const result = num1 / num2;

        res.status(200).json({statuscode:500, data:result});
        
        
    }
    catch(error){
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

app.listen(3000, () => {
    console.log('Calculator API is listenning on port 3000. Enjoy');
});