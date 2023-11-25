var loginForm = document.getElementById('loginForm');
var emailForm = document.getElementById('form2Example1');
var passwordForm = document.getElementById('form2Example2');
let isLogin =false;
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    
    let userData=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
for(let i=0;i<userData.length;i++)
if(emailForm.value==userData[i]['email']&& passwordForm.value==userData[i]['password'])
{
    localStorage.setItem('email',userData[i]['email']);
    localStorage.setItem('password',userData[i]['password']);

    localStorage.setItem('name',userData[i]['name']);
    
    location.replace('../index.html');
    isLogin=false;
    

}

else{
    isLogin=true;

}
if(isLogin)
 {      Swal.fire({
                 position: 'center',
                icon: 'error',
               title: 'Your email or password is wrong',
               showConfirmButton: false,
                timer: 6000
            });}
});
// }
// if(isLogin)
// {
//      Swal.fire({
//                 position: 'center',
//                 icon: 'error',
//                title: 'Your email or password is wrong',
//                showConfirmButton: false,
//                 timer: 6000
//             });

    
// }
//     if (emailForm.value == localStorage.getItem('email') && passwordForm.value == localStorage.getItem('password')) {
       
//         Swal.fire({
           
//             position: 'center',
//             icon: 'success',
//             title: 'Your are logged in successfully',
//             showConfirmButton: false,
//             timer: 6000
//         });
//     }
//     else {
//         Swal.fire({
//             position: 'center',
//             icon: 'error',
//             title: 'Your email or password is wrong',
//             showConfirmButton: false,
//             timer: 6000
//         });
//     
