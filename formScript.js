const first = document.getElementById("firstname").value;
// document.getElementById("firstname").addEventListener('click', e => {
//   firstNameFilled();
// });

function firstNameFilled()
{
  if(first !== '')
    {
      return true;
    }
  else{
    alert("please enter your first name!")
  }
}

const last = document.getElementById("lastname").value;
// document.getElementById("lastname").addEventListener('click', e => {
//    lastNameFilled();
// });
function lastNameFilled()
{
  if(last !== '')
    {
      return true;
    }
  else{
    alert("please enter your last name!")
  }
}
const emailValue = document.getElementById("email").value;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



document.getElementById("submit").addEventListener('click', e => {
    firstNameFilled();
    lastNameFilled();
    validateEmail();
    scrollWheel();
});

function scrollWheel()
{
  document.getElementById("loader").className = 'opaque';
  setTimeout(function(){
    document.getElementById("loader").className = 'loader';
    alert("Thank you for signing up");}, 3000);
}
