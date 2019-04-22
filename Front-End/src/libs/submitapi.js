function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://ldgazv6e4m.execute-api.us-east-1.amazonaws.com/02/mailme";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#nameinput").val())) {
                         alert ("The name field only accept 2 and above characters. Sorry");
                return;
            }
            var mobilere = /[0-9]{10}/;

            if ($("emailinput").val()=="") {
                alert ("Please enter your email id");
                return;
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#emailinput").val())) {
                alert ("Please enter valid email address");
                return;
            }

       var name = $("#nameinput").val();
       var phone = $("#phoneinput").val();
       var email = $("#emailinput").val();
       var desc = $("#descriptioninput").val();
       var data = {
          name : name,
          phone : phone,
          email : email,
          desc : desc
        };

       $.ajax({
         type: "POST",
         url : "https://ldgazv6e4m.execute-api.us-east-1.amazonaws.com/02/mailme",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
           // clear form and show a success message
           alert("Successfull");
           document.getElementById("contact-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("UnSuccessfull");
         }});
     }