    new WOW().init();

    var x = 'dina';
    var y = 'said';
    var z = x + ' ' + y;
   var friends =[
       "ahmed",
       "mhmoed",
       "lana",
     "tala"];
     friends[4]="amgads"
     friends.splice();
     console.log(friends);
     friends.push ("tamer")
     friends.sort();
     console.log(friends);
    console.log(z); // output : dina said

    var num1 = 5;
    var num2 = 6;
    var num3 = num1 + num2;

    console.log(num1); //output : 5
    console.log(num2); //output : 6
    console.log(num3); //output : 11

    num1++;
    num2--;

    console.log('num 1 = ' + num1); //output : num 1 = 6
    console.log('num 2 = ' + num2); //output : num 2 = 5

    num1 += 5;
    num2 -= 3;

    console.log('num 1 = ' + num1); //output : num 1 = 11
    console.log('num 2 = ' + num2); //output : num 2 = 2

    function TogglePhoto() {
      var x = document.getElementsByClassName("mobile-photo");
      for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
          x[i].style.display = "inline";
        } else {
          x[i].style.display = "none";
        }
      }
    }
    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    function myFunction() {
      var x = document.getElementById("pass");
      if (x.type === "pass") {
        x.type = "text";
      } else {
        x.type = "pass";
      }
    }

    function confirm_password(){
      var pass =  document.getElementById('pass') ;
      var confirm_password = document.getElementById('confirm_pass');
      var msg = document.getElementById('msg');

      if(pass.value == confirm_password.value){
        msg.innerHTML = '';
      }else{
        msg.innerHTML = "Password don't match";
      }
    }
  
    function validatePassword(password) {
                
                // Do not show anything when the length of password is zero.
                if (password.length === 0) {
                    document.getElementById("strong_pass_msg").innerHTML = "";
                    return;
                }
                // Create an array and push all possible values that you want in password
                var matchedCase = new Array();
                matchedCase.push("[$@$!%*#?&]"); // Special Charector
                matchedCase.push("[A-Z]");      // Uppercase Alpabates
                matchedCase.push("[0-9]");      // Numbers
                matchedCase.push("[a-z]");     // Lowercase Alphabates

                // Check the conditions
                var ctr = 0;
                for (var i = 0; i < matchedCase.length; i++) {
                    if (new RegExp(matchedCase[i]).test(password)) {
                        ctr++;
                    }
                }
                // Display it
                var color = "";     
                var strength = "";
                switch (ctr) {
                    case 0:
                    case 1:
                    case 2:
                        strength = "Very Weak";
                        color = "red";
                        break;
                    case 3:
                        strength = "Medium";
                        color = "orange";
                        break;
                    case 4:
                        strength = "Strong";
                        color = "green";
                        break;
                }
                document.getElementById("strong_pass_msg").innerHTML = strength;
                document.getElementById("strong_pass_msg").style.color = color;
            }
            function username(value) {
               var username = document.getElementById("username");
               username.innerHTML = value;
            }
            function addition()
            {
                var a = parseInt(form.input1.value);
                var b = parseInt(form.input2.value);
                var c = a+b
                document.getElementById("dn").innerHTML = (c);
            }     
            
var basicScrollTop = function () {  
  // The button
  var btnTop = document.querySelector('#goTop');
  // Reveal the button
  var btnReveal = function () { 
    var position = document.querySelector('#position');
        position.innerHTML = window.scrollY + 'px';
    if (window.scrollY >= 300) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }    
  }  
  // Smooth scroll top
  // Thanks to => http://stackoverflow.com/a/22610562
  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  }
  // Listeners
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);  
    
};
basicScrollTop();
