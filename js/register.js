var regForm = document.getElementById('regForm');
var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passwordForm = document.getElementById('form3Example4c');
var confirmPasswordForm = document.getElementById('form3Example4cd');
var usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
console.log(usersData);
regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (passwordForm.value!=confirmPasswordForm.value){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Password and Confirm Password are not the same',
            showConfirmButton: false,
            timer: 6000
          });
    }
    else{

        // set data to local storage
        // localStorage.setItem('name',nameForm.value);
        // localStorage.setItem('email',emailForm.value);
        // localStorage.setItem('password',passwordForm.value);
        //  get data from local storage
        //  delete data from local storage
        //  update data in local storage
        //  class ? > structure of the object
        //  object ? > data > access string
        //  json :> javascript object notation
        let user = {
            name:nameForm.value,
            email:emailForm.value,
            password:passwordForm.value
        };
        if(usersData.length!=0){
            let isExist = false;
        for (let i = 0; i< usersData.length;i++){
            if(usersData[i]['email']==emailForm.value){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Email already exists',
                    showConfirmButton: false,
                    timer: 6000
                  });
                isExist = false;
                return;
            }
            else if(usersData[i]['name']==nameForm.value){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Name already exists',
                    showConfirmButton: false,
                    timer: 6000
                  });
                  isExist = false;
                return;
            }
            else{
                isExist = true;

            }

        }
        if(isExist==true){
            usersData.push(user);
                localStorage.setItem('users',JSON.stringify(usersData));
                console.log(localStorage.getItem('users'));
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account was created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  location.replace('./login.html');
        }
    }
    else{

        usersData.push(user);
                localStorage.setItem('users',JSON.stringify(usersData));
                console.log(localStorage.getItem('users'));
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account was created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  }); 
    };
  }

});	


