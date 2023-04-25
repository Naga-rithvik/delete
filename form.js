const form = document.getElementById("my-form");

form.addEventListener('submit', StoreuserData);
form.addEventListener('click', deleteelment);

function StoreuserData(e) {
  // get user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('phonenumber').value;

  e.preventDefault();

  // retrieve existing user data from local storage
  let existingUserData = localStorage.getItem('userData');
  if (existingUserData === null) {
    // if there is no existing data, create an empty array
    existingUserData = [];
  } else {
    // if there is existing data, parse it from JSON to array
    existingUserData = JSON.parse(existingUserData);
  }

  // add new user data to the array
  const newUser = {
    name: name,
    email: email,
    phonenumber: telephone,
  };
  existingUserData.push(newUser);

  // store the updated user data in local storage
  localStorage.setItem('userData', JSON.stringify(existingUserData));

  // display a success message to the user
  alert('User data stored successfully!');

  // add new user to the screen
  showuseronscreen(newUser);
}

function showuseronscreen(newUser){
    const element=document.createElement('li');
    element.textContent=newUser.name+'-'+newUser.email+'-'+newUser.phonenumber;
    form.appendChild(element);
    const del=document.createElement('button');
    del.classList.add('delete');
    del.textContent='delete';
    del.addEventListener('click', function() {
        if(confirm('Are You Sure?')){
            var li = del.parentElement;
            form.removeChild(li);
        }
    });
    element.appendChild(del);
}


