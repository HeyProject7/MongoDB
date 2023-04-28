const express = require('express');
const router = express.Router();
const path = require("path");

router.route('/')
    .post(async function(req, res) {
        console.log("URL ", req.url);
        
        var data = await fetch('http://localhost:3000/employees', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + session.accessToken,
                'Content-Type': 'application/json'
            })
        });
        console.log("Data : ",data)
        if(!data){
            res.json({status: "error", message: "No data found"});
        }else{
            res.sendFile(path.join(__dirname, '..', 'views', 'rootViews', 'dashboard.html'));
        }
        // .then(response => response.json()).then(data => {
        //         console.log("debug5")
        //         console.log(data)
        //         res.sendFile(path.resolve(__dirname, '..', 'views', 'rootViews', 'dashboard.html'));
        //     }).catch(error => {
        //         console.log(error);
        //         res.json({ error: error.message });
        //     })

        // var headers = {'Authorization':'Bearer ' + session.accessToken,'Content-Type': 'application/x-www-form-urlencoded'};

        //  fetch('http://localhost:3000/employees', { 
        //     headers 
        // }).then(response => response.json()).then(data => {
        //     console.log("debug5")
        //     res.sendFile(path.resolve(__dirname, '..', 'views', 'rootViews', 'dashboard.html'));
        // }).catch(error => {
        //     console.log(error);
        //     res.json({ error: error.message });
        // });

    });
module.exports = router;