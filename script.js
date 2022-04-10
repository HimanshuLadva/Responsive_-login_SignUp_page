const signUp = document.getElementById('sign-up'),
   signIn = document.getElementById('sign-in'),
   loginIn = document.getElementById('login-in'),
   loginUp = document.getElementById('login-up');

signUp.addEventListener('click', function() {
   loginUp.classList.remove('none');
   loginUp.classList.add('block');

   loginIn.classList.remove('block');
   loginIn.classList.add('none');
});


signIn.addEventListener("click", function () {
  loginUp.classList.remove('block');
  loginUp.classList.add('none');

  loginIn.classList.remove('none');
  loginIn.classList.add('block');
});
