function getStoredData() {
  try {
    return JSON.parse(localStorage.getItem('MOCK_DATA_full')) || MOCK_DATA;
  } catch (e) {
    return MOCK_DATA;
  }
}


function getLoggedIn() {
  return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location = '/index.html';
}

function findEmployeeById(id) {
  return MOCK_DATA.employees.find(e => e.employee_id === id) || null;
}
