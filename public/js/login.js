$(document).ready(function(){
      
      // login
     $("#login-button").click(function(){


          if ($("#phone-num").val().length !== 11){
          	return alert("请输入正确的手机号!");
          }
          else if($("#password").val().length == 0){
          	return alert ("请输入密码!");
		  }
          else {
          $.ajax({
             type:"POST",
     	  	 url:"/login",
             data:{
               phoneNum:$("#phone-num").val(),
               passWord:$("#password").val()
             },
             success:function(res){
               alert("登录成功！");

             },
             error:function(err){
             	console.log(err);
             }

     	  })

        } 	
     	 
     });
  
      // register
     $("#register-button").click(function(){

     	if($("#rphone-num").val().length !== 11){
     		return alert ("请输入正确的手机号！");
		 }
		 else if($("#name").val().length == 0) {
            return alert("请输入真实姓名！");
		 }
		 else if($("#alipay").val().length == 0) {
            return alert("请输入阿里账号！");
		 }
     	else if ($("#rpassword").val().length < 8 || $("#rpassword").val().length > 20 ) {
            return alert ("请输入8-20位密码！");
     	}
     	else if ($("#vpassword").val() !== $("#rpassword").val()) {
     		return alert ("请输入相同的密码确认!");
     	}
     	else {
     		$.ajax({
     			type:"POST",
     			url:"/signup",
     			data:{
					 phoneNum:$("#rphone-num").val(),
					 name:$("#name").val(),
                     alipay:$("#alipay").val(),
					 passWord:$("#rpassword").val()
     			},
     			success:function(res){
     				console.log(res);
     			},
     			error:function(err){
     				console.log(err);
     			}
     		})
     	}


     });

});