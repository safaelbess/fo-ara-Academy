// var body=document.getElementsByTagName('body');
// var footer=document.getElementsById("footerDiv");
// var header= document.getElementById('headerDiv');

// console.log(body[0].backgroundColor);
// function changeBackground()
// {

// if (body.style.backgroundColor=='whitesmoke')
//     { body.style.backgroundColor='red';
//     footer.backgroundColor='grey';
//    header.backgroundColor='grey';

// }
// else
//    { body.style.backgroundColor='red';
//      footer.backgroundColor='black';
//      header.backgroundColor='black';

//     }
// }
var anasProf=document.getElementById("anas");
anasProf.addEventListener("click",function(e){

e.preventDefault();
alert("hi")
Location.replace("../pages/anas.html");
}



);