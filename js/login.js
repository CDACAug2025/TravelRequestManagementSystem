document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const creds = MOCK_DATA.login_credentials;
  const user = creds.find(u=>u.email===email && u.password===password);
  const err = document.getElementById('error');
  if(!user){ err.style.display='block'; err.textContent='Invalid credentials'; return; }
  // store user object in localStorage
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  // redirect based on role
  if(user.role === 'Manager'){ window.location = 'manager/info.html'; }
  else { window.location = 'employee/info.html'; }
});