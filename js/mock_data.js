const MOCK_DATA = {
  "employees": [
    {
      "employee_id": 1,
      "first_name": "Ramesh",
      "last_name": "Sharma",
      "email": "ramesh.sharma@company.in",
      "department_id": 6,
      "manager_id": null,
      "department_name": "Leadership",
      "role": "Manager"
    },
    {
      "employee_id": 2,
      "first_name": "Priya",
      "last_name": "Verma",
      "email": "priya.verma@company.in",
      "department_id": 1,
      "manager_id": 1,
      "department_name": "Technology",
      "role": "Manager"
    },
    {
      "employee_id": 3,
      "first_name": "Sanjay",
      "last_name": "Gupta",
      "email": "sanjay.gupta@company.in",
      "department_id": 2,
      "manager_id": 1,
      "department_name": "Sales & BizDev",
      "role": "Manager"
    },
    {
      "employee_id": 4,
      "first_name": "Amit",
      "last_name": "Singh",
      "email": "amit.singh@company.in",
      "department_id": 5,
      "manager_id": 3,
      "department_name": "Product Mktg",
      "role": "Employee"
    },
    {
      "employee_id": 5,
      "first_name": "Nisha",
      "last_name": "Reddy",
      "email": "nisha.reddy@company.in",
      "department_id": 5,
      "manager_id": 3,
      "department_name": "Product Mktg",
      "role": "Employee"
    },
    {
      "employee_id": 6,
      "first_name": "Vikram",
      "last_name": "Joshi",
      "email": "vikram.joshi@company.in",
      "department_id": 3,
      "manager_id": 2,
      "department_name": "Accounts",
      "role": "Employee"
    },
    {
      "employee_id": 8,
      "first_name": "Karan",
      "last_name": "Mehta",
      "email": "karan.mehta@company.in",
      "department_id": 1,
      "manager_id": 2,
      "department_name": "Technology",
      "role": "Employee"
    },
    {
      "employee_id": 9,
      "first_name": "Zoya",
      "last_name": "Khan",
      "email": "zoya.khan@company.in",
      "department_id": 2,
      "manager_id": 3,
      "department_name": "Sales & BizDev",
      "role": "Employee"
    },
    {
      "employee_id": 10,
      "first_name": "Rahul",
      "last_name": "Das",
      "email": "rahul.das@company.in",
      "department_id": 5,
      "manager_id": 3,
      "department_name": "Product Mktg",
      "role": "Employee"
    }
  ],
  "requests": [
    {
      "request_id": 1,
      "employee_id": 4,
      "request_date": "2025-10-01",
      "reason": "Client implementation in Hyderabad.",
      "status": "APPROVED",
      "estimated_cost": 18500.0,
      "approver_id": 3,
      "approval_date": "2025-10-02"
    },
    {
      "request_id": 2,
      "employee_id": 5,
      "request_date": "2025-10-05",
      "reason": "Product demo trip to Pune.",
      "status": "APPROVED",
      "estimated_cost": 12000.5,
      "approver_id": 3,
      "approval_date": "2025-10-21"
    },
    {
      "request_id": 3,
      "employee_id": 6,
      "request_date": "2025-10-10",
      "reason": "Statutory audit meeting in Mumbai.",
      "status": "APPROVED",
      "estimated_cost": 35000.0,
      "approver_id": 2,
      "approval_date": "2025-10-11"
    },
    {
      "request_id": 4,
      "employee_id": 8,
      "request_date": "2025-10-12",
      "reason": "Team training workshop in Chennai.",
      "status": "PENDING",
      "estimated_cost": 8000.0,
      "approver_id": 2,
      "approval_date": null
    },
    {
      "request_id": 6,
      "employee_id": 10,
      "request_date": "2025-10-18",
      "reason": "Strategy meeting with international partners in Delhi.",
      "status": "PENDING",
      "estimated_cost": 55000.75,
      "approver_id": 3,
      "approval_date": null
    },
    {
      "request_id": 7,
      "employee_id": 9,
      "request_date": "2025-10-20",
      "reason": "Sales target review in Bangalore.",
      "status": "REJECTED",
      "estimated_cost": 15000.0,
      "approver_id": 3,
      "approval_date": "2025-10-21"
    }
  ],
  "itineraries": [
    {
      "itinerary_id": 1,
      "request_id": 1,
      "type": "FLIGHT",
      "departure_city": "Bangalore",
      "arrival_city": "Hyderabad",
      "start_date": "2025-11-05",
      "end_date": "2025-11-05",
      "cost": 6500.0,
      "notes": "Round trip flight, Economy"
    },
    {
      "itinerary_id": 2,
      "request_id": 1,
      "type": "HOTEL",
      "departure_city": "Hyderabad",
      "arrival_city": "Hyderabad",
      "start_date": "2025-11-05",
      "end_date": "2025-11-08",
      "cost": 9000.0,
      "notes": "Hotel stay for 3 nights"
    },
    {
      "itinerary_id": 3,
      "request_id": 2,
      "type": "TRAIN",
      "departure_city": "Mumbai",
      "arrival_city": "Pune",
      "start_date": "2025-12-01",
      "end_date": "2025-12-01",
      "cost": 1500.5,
      "notes": "AC Chair Car"
    },
    {
      "itinerary_id": 4,
      "request_id": 2,
      "type": "HOTEL",
      "departure_city": "Pune",
      "arrival_city": "Pune",
      "start_date": "2025-12-01",
      "end_date": "2025-12-03",
      "cost": 7000.0,
      "notes": "Hotel stay for 2 nights"
    },
    {
      "itinerary_id": 8,
      "request_id": 4,
      "type": "FLIGHT",
      "departure_city": "Delhi",
      "arrival_city": "Chennai",
      "start_date": "2025-11-25",
      "end_date": "2025-11-25",
      "cost": 5500.0,
      "notes": "Flight cost"
    },
    {
      "itinerary_id": 9,
      "request_id": 6,
      "type": "FLIGHT",
      "departure_city": "Bangalore",
      "arrival_city": "Delhi",
      "start_date": "2026-03-01",
      "end_date": "2026-03-01",
      "cost": 9500.75,
      "notes": "Domestic flight cost"
    },
    {
      "itinerary_id": 10,
      "request_id": 6,
      "type": "HOTEL",
      "departure_city": "Delhi",
      "arrival_city": "Delhi",
      "start_date": "2026-03-01",
      "end_date": "2026-03-04",
      "cost": 15000.0,
      "notes": "Hotel for 3 nights"
    },
    {
      "itinerary_id": 11,
      "request_id": 7,
      "type": "FLIGHT",
      "departure_city": "Mumbai",
      "arrival_city": "Bangalore",
      "start_date": "2025-11-10",
      "end_date": "2025-11-10",
      "cost": 7000.0,
      "notes": "Flight to Bangalore"
    }
  ],
  "login_credentials": [
    {
      "employee_id": 1,
      "email": "ramesh.sharma@company.in",
      "password": "password123",
      "role": "Manager"
    },
    {
      "employee_id": 2,
      "email": "priya.verma@company.in",
      "password": "password123",
      "role": "Manager"
    },
    {
      "employee_id": 3,
      "email": "sanjay.gupta@company.in",
      "password": "password123",
      "role": "Manager"
    },
    {
      "employee_id": 4,
      "email": "amit.singh@company.in",
      "password": "password123",
      "role": "Employee"
    },
    {
      "employee_id": 5,
      "email": "nisha.reddy@company.in",
      "password": "password123",
      "role": "Employee"
    },
    {
      "employee_id": 6,
      "email": "vikram.joshi@company.in",
      "password": "password123",
      "role": "Employee"
    },
    {
      "employee_id": 8,
      "email": "karan.mehta@company.in",
      "password": "password123",
      "role": "Employee"
    },
    {
      "employee_id": 9,
      "email": "zoya.khan@company.in",
      "password": "password123",
      "role": "Employee"
    },
    {
      "employee_id": 10,
      "email": "rahul.das@company.in",
      "password": "password123",
      "role": "Employee"
    }
  ]
};

// helper to persist changes in localStorage for the static demo
(function(){
  if(!localStorage.getItem('MOCK_DATA_full')){
    localStorage.setItem('MOCK_DATA_full', JSON.stringify(MOCK_DATA));
  } else {
    try{
      const d = JSON.parse(localStorage.getItem('MOCK_DATA_full'));
      // keep in-memory MOCK_DATA in sync with stored data
      Object.assign(MOCK_DATA, d);
    }catch(e){console.error(e)}
  }
})();

function saveMockData(){
  localStorage.setItem('MOCK_DATA_full', JSON.stringify(MOCK_DATA));
}
