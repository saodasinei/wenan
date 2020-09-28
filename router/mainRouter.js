const express = require('express');

module.exports=function(){

     var router=express.Router();


    router.get('/productlist',function(req,res){
    
    res.render('Main_project_list.html');

    });
    
    router.get('/wenan',function(req,res){
        
        res.render('Main_file_submit.html');

    });


   return router;
};