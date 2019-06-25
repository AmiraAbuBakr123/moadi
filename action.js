var regularEmail,email,emailvalue,password,passwordvalue;
function validateEmail(){
     regularEmail=/^([a-zAZ0-9_\-]+)@([a-zAZ0-9]+)(.com|.net|.edu|.org)$/ig;
     email=document.getElementById("dp1");
     emailvalue=email.value;
    if(!regularEmail.test(emailvalue))
    {
        email.focus();
        document.getElementById("dd1").innerHTML="البريد الالكتروني غير صحيح ";
    }
    else{
        document.getElementById("dd1").innerHTML =" ";
    }
    
    }


    function validatePassword(){
        password=document.getElementById("dp2");
         passwordvalue=password.value.length;
        if(passwordvalue < 4 )
        {
            password.focus();
            document.getElementById("dd2").innerHTML="كلمه المرور لابد ان تكون من 4 الي 20 حرف";
        }
        else{
            document.getElementById("dd2").innerHTML =" ";
        }

    }

    function checksubmit(ev){
      if(regularEmail.test(emailvalue) && passwordvalue > 4 )
       {
          
           ev.target.submit();
       }
       else
       {
           alert("لابد من ادخال البريد الالكتروني وكلمه المرور بطريقه صحيحه ");
           ev.preventDefault();
       }
      
    }
  
    
    
    

     $(".ss").click(function () 
    {
    alert("dfgd");
    var x=$("d2").val;
    if(!regularEmail.test(x))
     {
     $("#show").toggle(2000);
     $("#show").html("عفوا البريد الالكتروني مستخدم من قبل ");
     }
     else
     {
         $("#show").hide(2000);
     }
    
 });





