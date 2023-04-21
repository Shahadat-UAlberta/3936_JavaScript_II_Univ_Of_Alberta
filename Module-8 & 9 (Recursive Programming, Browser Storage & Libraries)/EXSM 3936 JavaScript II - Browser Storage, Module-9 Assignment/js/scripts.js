document.addEventListener("DOMContentLoaded", function(){
      function getAge(dateString) {
        var ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365);
    }
    function setCookie(cname, cvalue, exmins) {
        const d = new Date();
        d.setTime(d.getTime() + (exmins*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
    document.querySelector('form').onsubmit = function(){
        //get submission time
        let d = new Date();
        d.toUTCString();
        
        let firstName = document.querySelector('#firstname').value;
        let lastName = document.querySelector('#lastname').value;
        let dateOfBirth = document.querySelector('#dob').value;
        // console.log(firstName, lastName, dateOfBirth);
        cookieObject = {};
        cookieObject.firstName = firstName;
        cookieObject.lastName = lastName;
        cookieObject.dateOfBirth = dateOfBirth;
        // console.log(cookie_value);
        cookieName = "userinfo";
        // console.log("before");
        // console.log(cookieObject);
        cookieValue = JSON.stringify(cookieObject);
        // console.log("after");
        // console.log(cookieValue);
        setCookie(cookieName, cookieValue, 2);
        // let x = document.cookie;
        // console.log(x);
        let y = getCookie(cookieName);
        // console.log(typeof y);
        let z = JSON.parse(y);
        // console.log(typeof z);
        dateString = z.dateOfBirth;
        let age = getAge(dateString);
        console.log(age);
        if(age < 18){
          document.querySelector('#result').innerHTML = "You are a minor";
        }else{
          document.querySelector("#result").innerHTML = "You are an adult";
        }
        // console.log(z.firstName, z.lastName, z.dateOfBirth)
        return false;
    }
})