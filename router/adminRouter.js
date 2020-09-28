const express = require('express');

module.exports=function(){

     var router=express.Router();


    router.get('/',(req,res)=>{

        res.render('Admin_page.html')

    });
     router.get('/login',(req,res)=>{

        res.render('Admin_page.html')

    });
    
    router.get('/card',function(req,res){
    
    res.render('Main_card.html');

    });
    
    router.get('/admin',function(req,res){
        
        res.render('Main_admin.html');

    });
 


   return router;
};