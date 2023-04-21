document.addEventListener("DOMContentLoaded", function(){
  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
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
      
      let firstName = document.querySelector('#firstname').value.trim();
      let lastName = document.querySelector('#lastname').value.trim();
      let dateOfBirth = document.querySelector('#dob').value;
      cookieObject = {};
      cookieObject.firstName = firstName;
      cookieObject.lastName = lastName;
      cookieObject.dateOfBirth = dateOfBirth;
      cookieName = "userinfo";
      cookieValue = JSON.stringify(cookieObject);
      setCookie(cookieName, cookieValue, 2);
      let y = getCookie(cookieName);
      let z = JSON.parse(y);
      dateString = z.dateOfBirth;
      let age = getAge(dateString);
      if(age < 0){
        document.querySelector('#result').innerHTML = "Invalid Date of Birth";
      }else{
        if(age >= 18){
            document.querySelector('#result').innerHTML = "You are an adult";
          }else{
            document.querySelector("#result").innerHTML = "You are a minor";
          }
      }
      document.querySelector('#firstname').innerHTML = "";
      document.querySelector('#lastname').innerHTML = "";
      document.querySelector('#dob').innerHTML = "";
      return false;
  }
});