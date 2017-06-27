
//===开垦赋值=============
$(".img3").click(function(){
    $("#zuodaohang").attr('value','kaiken');
 });

//===播种赋值=============
 $(".img4").click(function(){
    $("#zuodaohang").attr('value','bozhong');
 });

//===施肥赋值=============
 $(".img5").click(function(){
    $("#zuodaohang").attr('value','shifei');
 });

//===收割赋值=============
 $(".img6").click(function(){
    $("#zuodaohang").attr('value','shouge');
 });

 $(".img7").click(function(){
        location.reload(); 
 });
  

 
//===============================收割开始================================================================


   function shougejs1(){
   	 var   farmid=$('#guoshu1').attr('farmid');
     var   type=$('#guoshu1').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      

                 //alert(farmid+type+zdh_value);
	         if (zdh_value=='shouge') {
                 
	             $.ajax({
	             type: "POST",
	             url: shouge,
	             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
	             dataType: "json",
	             success: function(data){
                        if(data.status=='sgsb'){//收割失败
	                       layer.msg(data.content);  
                        }
                        
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                         }      
	                            
	                      if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                          
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
	                    if(data.status=='sgcg'){//收割成功
	                       layer.msg(data.content);
	                       setTimeout("location.reload()",0000);
	                    }      
	             }     
	        });
         }
   }

  

  function shougejs2(){
   	 var   farmid=$('#guoshu2').attr('farmid');
     var   type=$('#guoshu2').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
	         if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",0000);
                      }      
               }     
          });
         }
   }

 function shougejs3(){
     var   farmid=$('#guoshu3').attr('farmid');
     var   type=$('#guoshu3').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }


  function shougejs4(){
     var   farmid=$('#guoshu4').attr('farmid');
     var   type=$('#guoshu4').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }

   function shougejs5(){
     var   farmid=$('#guoshu5').attr('farmid');
     var   type=$('#guoshu5').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }
  
   function shougejs6(){
     var   farmid=$('#guoshu6').attr('farmid');
     var   type=$('#guoshu6').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }


   function shougejs7(){
     var   farmid=$('#guoshu7').attr('farmid');
     var   type=$('#guoshu7').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   } 
   


   function shougejs8(){
     var   farmid=$('#guoshu8').attr('farmid');
     var   type=$('#guoshu8').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }



    function shougejs9(){
     var   farmid=$('#guoshu9').attr('farmid');
     var   type=$('#guoshu9').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }

   function shougejs10(){
     var   farmid=$('#guoshu10').attr('farmid');
     var   type=$('#guoshu10').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }



  function shougejs11(){
     var   farmid=$('#guoshu11').attr('farmid');
     var   type=$('#guoshu11').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }

   
   function shougejs12(){
     var   farmid=$('#guoshu12').attr('farmid');
     var   type=$('#guoshu12').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }


   function shougejs13(){
     var   farmid=$('#guoshu13').attr('farmid');
     var   type=$('#guoshu13').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }



   function shougejs14(){
     var   farmid=$('#guoshu14').attr('farmid');
     var   type=$('#guoshu14').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }

   

    function shougejs15(){
     var   farmid=$('#guoshu15').attr('farmid');
     var   type=$('#guoshu15').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
      //alert(farmid+type+zdh_value);
           if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='sgsb'){//收割失败
                         layer.msg(data.content);   
                        } 
                        if(data.status=='msf'){ //没有施肥
                         layer.msg(data.content);   
                        }       
                        if(data.status=='cmsb'){ //采蜜失败
                         layer.msg(data.content);   
                        } 

                        if(data.status=='cmcg'){//采蜜成功
                         layer.msg(data.content); 
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);  
                        }  
                        if(data.status=='ycg'){//已采过
                         layer.msg(data.content);   
                        }   
                 
                      if(data.status=='sgcg'){//收割成功
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
   }


















