// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function() {
  
  const employeesArray=[];
    
    while (confirm("Add another employee?")) {
      let firstName=prompt("Enter First Name");
      let lastName=prompt("Enter Last Name");
      let salary=prompt("Enter salary");
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employeesArray.push(employee);
};
return employeesArray;
};

  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let grossSalary=0;
  for (i=0; i<=employeesArray.length-1; i++) {
    grossSalary+=employeesArray[i].salary;
    return grossSalary;
  };
  console.log("Gross salary is" + grossSalary);

  let averageSalary=grossSalary/employeesArray.length;
  alert(averageSalary);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomEmployeeId = Math.floor(Math.random()*employeesArray.length);
  console.log(randomEmployeeId);
  console.log(employeesArray[randomEmployeeId]);
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
