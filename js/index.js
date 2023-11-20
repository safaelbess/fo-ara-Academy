
var userName = document.getElementById("userName");
userName.innerHTML = localStorage.getItem("name");
var loginOrOut = document.getElementById("loginOrOut");

if (localStorage.getItem('name') != null){
    loginOrOut.innerHTML='logout';
}
else{
    alert('you are not a user please login');
    location.replace('../pages/login.html');
}



