const first = document.getElementById("firstname").value;
document.getElementById("firstname").addEventListener('click', e => {
  firstNameFilled();
});

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
document.getElementById("firstname").addEventListener('click', e => {
   lastNameFilled();
});
function lastNameFilled()
{
  if(first !== '')
    {
      return true;
    }
  else{
    alert("please enter your last name!")
  }
}

document.getElementById("submit").addEventListener('click', e => {
   scrollWheel();
});

function scrollWheel()
{
  document.getElementById("loader").className = 'opaque';
}
