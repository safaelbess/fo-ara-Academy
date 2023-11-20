var loginForm = document.getElementById('loginForm');
var emailForm = document.getElementById('form2Example1');
var passwordForm = document.getElementById('form2Example2');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (emailForm.value == localStorage.getItem('email') && passwordForm.value == localStorage.getItem('password')) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your are logged in successfully',
            showConfirmButton: false,
            timer: 6000
        });
    }
    else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Your email or password is wrong',
            showConfirmButton: false,
            timer: 6000
        });
    }
});