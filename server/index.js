const express = require('express');
const app=express();
const port = process.env.PORT || 5000;

var allowCrossDomain = (req, res, next)=> {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Security-Policy-Report-Only', 'default-src https');
    next();
}
app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" })
})

app.listen(port,() => {console.log("listening on port "+port)})