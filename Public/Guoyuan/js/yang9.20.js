
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
  



//===============开垦js开始=========================开垦js开始=========================开垦js开始=====================

  
 

  //=============开垦第一块地==============	 
  function tudi1(){
  var   farmid=$('.huang_dia').attr('farmid');
  var   type=$('.huang_dia').attr('type');
  var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken1,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){
             	   //alert(11);
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }
		             
		            if(data.status == 'kksb'){
		               layer.msg(data.content);
		            } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                      //location.reload(); 
                    }     
             }     
        });
    }    
 } 

 
   //=============开垦第二块地============== 
   function tudi2(){
   	var   farmid=$('.huang_dib').attr('farmid');
    var   type=$('.huang_dib').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken2,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
		            if(data.status == 'kksb'){
		               layer.msg(data.content);
		            } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }
   
   
  //=============开垦第三块地============== 
   function tudi3(){
    var   farmid=$('.huang_dic').attr('farmid');
    var   type=$('.huang_dic').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken3,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }

  
  //=============开垦第四块地============== 
   function tudi4(){
    var   farmid=$('.huang_did').attr('farmid');
    var   type=$('.huang_did').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken4,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }



  //=============开垦第五块地============== 
   function tudi5(){
    var   farmid=$('.huang_die').attr('farmid');
    var   type=$('.huang_die').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken5,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }

  //======红土地开垦=======================


  //=============开垦第6块地============== 
   function tudi6(){
    var   farmid=$('.hong_dia').attr('farmid');
    var   type=$('.hong_dia').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken6,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }

  //=============开垦第7块地============== 
   function tudi7(){
    var   farmid=$('.hong_dib').attr('farmid');
    var   type=$('.hong_dib').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken7,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第8块地============== 
   function tudi8(){
    var   farmid=$('.hong_dic').attr('farmid');
    var   type=$('.hong_dic').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken8,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第9块地============== 
   function tudi9(){
    var   farmid=$('.hong_did').attr('farmid');
    var   type=$('.hong_did').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken9,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第10块地============== 
   function tudi10(){
    var   farmid=$('.hong_die').attr('farmid');
    var   type=$('.hong_die').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken10,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }
  
  
  //=============开垦第11块地============== 
   function tudi11(){
    var   farmid=$('.hei_dia').attr('farmid');
    var   type=$('.hei_dia').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken11,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }

  //=============开垦第12块地============== 
   function tudi12(){
    var   farmid=$('.hei_dib').attr('farmid');
    var   type=$('.hei_dib').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken12,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第13块地============== 
   function tudi13(){
    var   farmid=$('.hei_dic').attr('farmid');
    var   type=$('.hei_dic').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken13,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第14块地============== 
   function tudi14(){
    var   farmid=$('.hei_did').attr('farmid');
    var   type=$('.hei_did').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken14,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


  //=============开垦第15块地============== 
   function tudi15(){
    var   farmid=$('.hei_die').attr('farmid');
    var   type=$('.hei_die').attr('type');
    var   zdh_value=$("#zuodaohang").val();
  //alert(farmid+type+zdh_value);
   if (zdh_value=='kaiken') {
        $.ajax({
             type: "POST",
             url: kaiken15,
             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
             dataType: "json",
             success: function(data){ 
                    if(data.status == 'huangtdsb'){
                       layer.msg(data.content);
                    }  
                if(data.status == 'kksb'){
                   layer.msg(data.content);
                } 
                    if(data.status == 'kkcg'){
                   
                       layer.msg(data.content);
                       location.reload();
                    }     
             }     
        });
    }    

  }


//=====================开垦js结束=======================开垦js结束============================开垦js结束=================












































   //=======================播种===================================================================================================
   


   function bozhongjs1(){
         var   farmid=$('#zhongzi_huang').attr('farmid');
         var   type=$('#zhongzi_huang').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num1").val(); 
        //alert(farmid+type+zdh_value+bz_num);
	         if (zdh_value=='bozhong') { 
	             $.ajax({
	             type: "POST",
	             url: bozhong1,
	             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
	             dataType: "json",
	             success: function(data){
                        if(data.status=='bzsb'){
	                       layer.msg(data.content);   
	                    }      
	                    if(data.status=='gzbg'){
	                       layer.msg(data.content);   
	                    }      
	                    
                        if(data.status=='cgmx'){
	                       layer.msg(data.content);   
	                    }      
	                    
	                    if(data.status=='bzcg'){
	                       layer.msg(data.content);
	                       setTimeout("location.reload()",2000);
	                    }      
	             }     
	        });
         }
   }

    function bozhongjs2(){
   	     var   farmid=$('#zhongzia_huang').attr('farmid');
         var   type=$('#zhongzia_huang').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num2").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
	         if (zdh_value=='bozhong') { 
	             $.ajax({
	             type: "POST",
	             url: bozhong2,
	             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
	             dataType: "json",
	             success: function(data){
                        if(data.status=='bzsb'){
	                       layer.msg(data.content);   
	                    }      
	                    if(data.status=='gzbg'){
	                       layer.msg(data.content);   
	                    } 
	                    if(data.status=='cgmx'){
	                       layer.msg(data.content);   
	                    }           
	                   
	                    if(data.status=='bzcg'){
	                       layer.msg(data.content);
	                       setTimeout("location.reload()",2000);
	                    }      
	             }     
	        });
         }
         
   }

  //=================播种第3块地==========================
   function bozhongjs3(){
         var   farmid=$('#zhongzib_huang').attr('farmid');
         var   type=$('#zhongzib_huang').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num3").val();
        /// alert(farmid+type+zdh_value+bz_num);

          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong3,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }
         
   } 

   //=================播种第4块地==========================
   function bozhongjs4(){
         var   farmid=$('#zhongzic_huang').attr('farmid');
         var   type=$('#zhongzic_huang').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num4").val();
        /// alert(farmid+type+zdh_value+bz_num);

          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong4,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   } 
 
   
   //=================播种第5块地==========================
   function bozhongjs5(){
         var   farmid=$('#zhongzid_huang').attr('farmid');
         var   type=$('#zhongzid_huang').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num5").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong5,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第6块地==========================
   function bozhongjs6(){
         var   farmid=$('#zhongzia_hong').attr('farmid');
         var   type=$('#zhongzia_hong').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num6").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong6,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第7块地==========================
   function bozhongjs7(){
         var   farmid=$('#zhongzib_hong').attr('farmid');
         var   type=$('#zhongzib_hong').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num7").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong7,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


    //=================播种第8块地==========================
   function bozhongjs8(){
         var   farmid=$('#zhongzic_hong').attr('farmid');
         var   type=$('#zhongzic_hong').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num8").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong8,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第9块地==========================
   function bozhongjs9(){
         var   farmid=$('#zhongzid_hong').attr('farmid');
         var   type=$('#zhongzid_hong').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num9").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong9,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第10块地==========================
   function bozhongjs10(){
         var   farmid=$('#zhongzie_hong').attr('farmid');
         var   type=$('#zhongzie_hong').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num10").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong10,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  



   //=================播种第11块地==========================
   function bozhongjs11(){
         var   farmid=$('#zhongzia_hei').attr('farmid');
         var   type=$('#zhongzia_hei').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num11").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong11,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第12块地==========================
   function bozhongjs12(){
         var   farmid=$('#zhongzib_hei').attr('farmid');
         var   type=$('#zhongzib_hei').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num12").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong12,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  



  //=================播种第13块地==========================
   function bozhongjs13(){
         var   farmid=$('#zhongzic_hei').attr('farmid');
         var   type=$('#zhongzic_hei').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num13").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong13,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第14块地==========================
   function bozhongjs14(){
         var   farmid=$('#zhongzid_hei').attr('farmid');
         var   type=$('#zhongzid_hei').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num14").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong14,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  


   //=================播种第15块地==========================
   function bozhongjs15(){
         var   farmid=$('#zhongzie_hei').attr('farmid');
         var   type=$('#zhongzie_hei').attr('type');
         var   zdh_value=$("#zuodaohang").val();
         var   bz_num=$("#bz_num15").val();
        /// alert(farmid+type+zdh_value+bz_num);
          //return false;
           if (zdh_value=='bozhong') { 
               $.ajax({
               type: "POST",
               url: bozhong15,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value,bz_num:bz_num},
               dataType: "json",
               success: function(data){
                        if(data.status=='bzsb'){
                         layer.msg(data.content);   
                      }      
                      if(data.status=='gzbg'){
                         layer.msg(data.content);   
                      } 
                      if(data.status=='cgmx'){
                         layer.msg(data.content);   
                      }           
                     
                      if(data.status=='bzcg'){
                         layer.msg(data.content);
                         setTimeout("location.reload()",2000);
                      }      
               }     
          });
         }  
   }  




//==========施肥开始==================施肥开始==================施肥开始=======================施肥开始============
 
  function shifeijs1(){

  	 var   farmid=$('#zhongzi_huang').attr('farmid');
     var   type=$('#zhongzi_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
	         if (zdh_value=='shifei') {
                 
	             $.ajax({
	             type: "POST",
	             url:shifei,
	             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
	             dataType: "json",
	             success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
  	                    if(data.status=='hfmyl'){
  	                       layer.msg(data.content);   
  	                    } 
	                    if(data.status=='sfcg'){
	                       layer.msg(data.content);
	                       setTimeout("location.reload()",2000);
	                    }  
                      if(data.status=='sfsb'){
                         layer.msg(data.content);   
                      }          
	             }     
	        });
         }
  }


  function shifeijs2(){
     var   farmid=$('#zhongzia_huang').attr('farmid');
     var   type=$('#zhongzia_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
	    if (zdh_value=='shifei') {      
	        $.ajax({
	             type: "POST",
	             url:shifei,
	             data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
	             dataType: "json",
	             success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
	             }     
	        });
      }
  }



  function shifeijs3(){
     var   farmid=$('#zhongzib_huang').attr('farmid');
     var   type=$('#zhongzib_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
  }


  function shifeijs4(){
     var   farmid=$('#zhongzic_huang').attr('farmid');
     var   type=$('#zhongzic_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }

    
    function shifeijs5(){
     var   farmid=$('#zhongzid_huang').attr('farmid');
     var   type=$('#zhongzid_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }
    
    
    function shifeijs6(){
     var   farmid=$('#zhongzia_hong').attr('farmid');
     var   type=$('#zhongzia_hong').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }

    
    function shifeijs7(){
     var   farmid=$('#zhongzib_hong').attr('farmid');
     var   type=$('#zhongzib_hong').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs8(){
     var   farmid=$('#zhongzic_hong').attr('farmid');
     var   type=$('#zhongzic_hong').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }

    
    function shifeijs9(){
     var   farmid=$('#zhongzid_hong').attr('farmid');
     var   type=$('#zhongzid_hong').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }



    function shifeijs10(){
     var   farmid=$('#zhongzie_hong').attr('farmid');
     var   type=$('#zhongzie_hong').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs11(){
     var   farmid=$('#zhongzia_hei').attr('farmid');
     var   type=$('#zhongzia_hei').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs12(){
     var   farmid=$('#zhongzib_hei').attr('farmid');
     var   type=$('#zhongzib_hei').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs13(){
     var   farmid=$('#zhongzic_hei').attr('farmid');
     var   type=$('#zhongzic_hei').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs14(){
     var   farmid=$('#zhongzid_hei').attr('farmid');
     var   type=$('#zhongzid_hei').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }


    function shifeijs15(){
     var   farmid=$('#zhongzie_hei').attr('farmid');
     var   type=$('#zhongzie_hei').attr('type');
     var   zdh_value=$("#zuodaohang").val();
      //alert(farmid+type+zdh_value);
      if (zdh_value=='shifei') {      
          $.ajax({
               type: "POST",
               url:shifei,
               data:{farmid:farmid,farmtype:type,zdh_value:zdh_value},
               dataType: "json",
               success: function(data){
                        if(data.status=='hdsf'){
                         layer.msg(data.content);   
                        }       
                        if(data.status=='hfmyl'){
                           layer.msg(data.content);   
                        } 
                        if(data.status=='sfcg'){
                           layer.msg(data.content);
                           setTimeout("location.reload()",2000);
                        }  
                        if(data.status=='sfsb'){
                           layer.msg(data.content);   
                        }          
               }     
          });
      }
    }




























































































































































  


//===============================收割开始================================================================


   function shouge1(){
   	 var   farmid=$('#zhongzi_huang').attr('farmid');
     var   type=$('#zhongzi_huang').attr('type');
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
	                       //layer.msg(data.content);
	                       setTimeout("location.reload()",0000);
	                    }      
	             }     
	        });
         }
   }

  

  function shouge2(){
   	 var   farmid=$('#zhongzia_huang').attr('farmid');
     var   type=$('#zhongzia_huang').attr('type');
     var   zdh_value=$("#zuodaohang").val(); 
           //alert(farmid+type+zdh_value);
	         if (zdh_value=='shouge') {  
               $.ajax({
               type: "POST",
               url: shouge2,
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
                         //layer.msg(data.content);
                         setTimeout("location.reload()",0000);
                      }      
               }     
          });
         }
   }

   


