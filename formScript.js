
// document.getElementById("firstname").addEventListener('click', e => {
//   firstNameFilled();
// });
// first.addEventListener('click', e => {
//   firstNameFilled();
// })
function firstNameFilled(firstName)
{
  if(firstName !== ''){
      return true;
  }
  else {
      //alert("pwease enter your first name!")
      //notFilled();
      return false;
    }
}



// last.addEventListener('click', e => {
//   lastNameFilled();
// })
function lastNameFilled(lastName)
{
  if(lastName !== '')
    {
      return true;
    }
  else {
        //alert("pwease enter your last name!")
        return false;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


function isChecked(checker)
{
  if(checker.checked === true)
  {
    return true;
  }
  else {
    //alert("check the box pwease!")
    //document.getElementById("check").className = 'redBorder';
    return false;
  }
}

document.getElementById("submit").addEventListener('click', e => {
    fullyFilled();
});

function scrollWheel()
{
  document.getElementById("submit").className = 'afterSubmission'
  document.getElementById("loader").className = 'opaque';
  setTimeout(function(){
    document.getElementById("loader").className = 'loader';
    alert("Thank you for signing up");}, 3000);
}

function fullyFilled(){
  const first = document.querySelector("#firstnameInput").value;
  const last = document.querySelector("#lastnameInput").value;
  const emailValue = document.querySelector("#emailInput").value;
  const checked = document.querySelector("#checkInput");

  if(firstNameFilled(first) && lastNameFilled(last) && validateEmail(email) && isChecked(checked)){
    scrollWheel();
  }
  else {
    if(!firstNameFilled(first))
    {
      firstname.style.border = "red";
      alert("please enter your first name!");
    }
    else if(!lastNameFilled(last))
    {
      lastname.style.border = "red";
      alert("please enter your last name!");
    }
    else if(!validateEmail(email))
    {
      email.style.border = "red";
      alert("please enter your email!");
    }
    else {
      check.style.border = "red";
      alert("please check the box!");
    }
  }
}
