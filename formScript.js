const first = document.getElementById("firstname").value;
// document.getElementById("firstname").addEventListener('click', e => {
//   firstNameFilled();
// });
first.addEventListener('click', e => {
  firstNameFilled();
})
function firstNameFilled(firstName)
{
  if(firstName !== '')
    {
      return true;
    }
  else {

      alert("please enter your first name!")
      notFilled(firstname);
    }
}

const last = document.getElementById("lastname").value;

last.addEventListener('click', e => {
  lastNameFilled();
})
function lastNameFilled(lastName)
{
  if(lastName !== '')
    {
      return true;
    }
  else {
        alert("please enter your last name!")
        notFilled(lastname);
    }
}
const emailValue = document.getElementById("email").value;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

const checked = document.getElementById("check").value;

function isChecked(checker)
{
  if(checker === true)
  {
    return true;
  }
  else {
    alert("please enter your first name!")
    notFilled(check);
  }
}

document.getElementById("submit").addEventListener('click', e => {
    if(firstNameFilled(first) && lastNameFilled(last) && validateEmail(email) && isChecked(checked)){
      scrollWheel();
    }
    else {
      if(!firstNameFilled(first))
      {
        alert("please enter your first name!");
      }
      else if(!lastNameFilled(last))
      {
        alert("please enter your last name!");
      }
      else if(!validateEmail(email))
      {
        notFilled(email);
        alert("please enter your email!");
      }
      else {
        alert("please check the box!");
      }
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

function notFilled(idValue)
{
  document.getElementById(idValue).className = 'redBorder';
}
