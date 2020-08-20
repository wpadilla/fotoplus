const express = require('express');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use('/public', express.static('./build/assets/'));
app.use('/static', express.static('./build/static/'));
app.get('/*',function (req, res) { 
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
app.listen(80,(err)=>{
    if(err) console.log(err);
    console.log('site is live on port 80')
})