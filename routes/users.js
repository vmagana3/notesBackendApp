const express = require('express');

const router = express.Router();

const FAKE_DATA = [
    {
        Name:'Gerzain Magaña',
        Country:'Mèxico',
        Age:25,
    },
];


router.get('/',(req, res)=>{
    res.json({
        status:'success',
        data:{
            users:FAKE_DATA,
        }
    });
});

router.post('/',(req, res, next)=>{
    console.log("RESPONSE:", res);
});



module.exports = router;