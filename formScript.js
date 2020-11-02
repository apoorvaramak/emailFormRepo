const first = document.getElementById("firstname").value;
// document.getElementById("firstname").addEventListener('click', e => {
//   firstNameFilled();
// });

function firstNameFilled(firstName)
{
  if(firstName !== '')
    {
      return true;
    }
}

const last = document.getElementById("lastname").value;
// document.getElementById("lastname").addEventListener('click', e => {
//    lastNameFilled();
// });
function lastNameFilled(lastName)
{
  if(lastName !== '')
    {
      return true;
    }
}
const emailValue = document.getElementById("email").value;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

const checked = document.getElementById("check").value;

function isChecked(check)
{
  if(check === true)
  {
    return true;
  }
}

document.getElementById("submit").addEventListener('click', e => {
    if(firstNameFilled(first) && lastNameFilled(last) && validateEmail(emailValue) && isChecked(checked)){
      scrollWheel();
    }
    else {
      alert("Something's missing, try again!")
    }
});

function scrollWheel()
{
  document.getElementById("submit").className = 'afterSubmission'
  document.getElementById("loader").className = 'opaque';
  setTimeout(function(){
    document.getElementById("loader").className = 'loader';
    alert("Thank you for signing up");}, 3000);
}
