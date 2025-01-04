

// OPTIONS REQUIRED FOR THE MENU:
// Menu shoul be circular (so options retun when continuing to press down)
// View All Employees
// Add Employee
    // Shows a list of roles to chose from
// Update Employee Role
    // Shows a list of employees to chose from
    // Shows a list of roles to chose from
// View All Roles
// Add Role
    // Shows a list of departments to chose from
    // SHows a list of managers to chose from
    // View All Departments
// Add Department
// Quit


// IMPORT THIRD PARTY PACKAGES
// import inquirer from 'inquirer';
import { QueryResult } from 'pg';

// IMPORT CUSTOM PACKAGES
import retrieveData from './retrieveData.js';


const employees = await retrieveData.employees();

console.table(employees);

const departments = await retrieveData.departments();

console.table(departments);

const roles = await retrieveData.roles();

console.table(roles);
