(function(){
  const u = getLoggedIn();
  if(!u){ window.location='/index.html'; return; }
  const emp = findEmployeeById(u.employee_id);
  const el = document.getElementById('content');
  el.innerHTML = `<p><strong>Name:</strong> ${emp.first_name} ${emp.last_name}</p>
  <p><strong>Email:</strong> ${emp.email}</p>
  <p><strong>Department:</strong> ${emp.department_name}</p>
  <p><strong>Role:</strong> ${emp.role}</p>`;
})();