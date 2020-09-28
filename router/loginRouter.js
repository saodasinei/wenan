const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({host:'localhost',user:'root',password:'xiaomeng123',database:'wenan'});

module.exports=function(){

     var router=express.Router();   
     var jsonParser = bodyParser.json();
     var urlencodedParser = bodyParser.urlencoded({extended:false});



    router.get('/',(req,res)=>{

        res.render('Login_page.html')

    });
    router.post('/login',(req,res)=>{
        db.query('SELECT * FROM user', (err,data)=>{
           if(err){
               console.log(err);
           }
           else{
               console.log(data);
           }
        });
    });

    router.get('/register',function(req,res){

        res.render('Register_page.html');

    });

    router.post('/signup',urlencodedParser, function(req,res){
         console.log(req.body);
         if(!req.body){
            return res.sedndStatus(400)
         }else{
            var phonenum=req.body.phoneNum;
            var password=req.body.passWord;
            var name= req.body.name;
            var alipay=req.body.alipay;
            db.query(`SELECT * FROM user WHERE phonenum='${phonenum}'`, (err,data)=>{
                if(err){
                    console.log(err);
                    res.json({res_code:4,res_msg:'连接失败.'});
                }else{
                    if(data.length>0){
                        res.json({res_code:5,res_msg:'手机号已存在.'});
                    }else{
                        var values=[[phonenum,password,name,alipay]];
                        var sql = "INSERT INTO wenan.`user` SET phonenum=?, password=?, name=?, alipay=?";
                        db.query(sql,[values],(err,result)=>{
                            if(err){
                                console.log(err);
                            }else{
                                res.json({res_code:6,res_msg:'Register successfully!'});
                            }
                        });
                    }
                }
            })
         }
    });

    router.get('/passreset',function(req,res){
    
        res.render('Passreset_page.html');

    });


   return router;
};