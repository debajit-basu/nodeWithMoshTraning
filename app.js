const express = require('express');
const app = express();


app.get('/' , (req,res) => {
    res.send('Hello express app');
});

app.get('/api/courses' , (req,res) => {


    // res.send('Hello express app');
    res.send([1,2,3]);

});

app.get('/api/courses/:id/:year' , (req,res) => {
    // res.send(req.params.id);
    // res.send(req.query);

})

//PORT

const port = process.env.PORT || 4050

app.listen(port , () => {
    console.log('Listening port ' , port);
});