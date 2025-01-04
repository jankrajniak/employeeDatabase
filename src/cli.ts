

// OPTIONS REQUIRED FOR THE MENU:
// Menu shoul be circular (so options retun when continuing to press down)
// View All Employees
// Add Employee
    // Shows a list of roles to chose from
    // SHows a list of managers to chose from
// Update Employee Role
    // Shows a list of employees to chose from
    // Shows a list of roles to chose from
// View All Roles
// Add Role
    // Shows a list of departments to chose from
    // View All Departments
// Add Department
// Quit


// IMPORT THIRD PARTY PACKAGES
import inquirer from 'inquirer';
import { QueryResult } from 'pg';

// IMPORT CUSTOM PACKAGES
import { retrieveData, updateData } from './dbInterface.js';


class cli {

    

}



const roles = await retrieveData.allRoles();

const nameId = await retrieveData.nameEmployees();

const titleId = await retrieveData.titleRoles();

const name:string[] = ['Production Worker'];

const matcheEdId = await retrieveData.matchEmployeeId(name);

const matchedDId = await retrieveData.matchDepartmentId(name);

const matchedRId = await retrieveData.matchRoleId(name);

const newDepartment: string[] = ['Social Media'];

// await updateData.createDepartment(newDepartment);

const departments = await retrieveData.allDepartments();

const newRole: (string | number)[] = ['Social Media Manager', 50000, 11];

// await updateData.createRole(newRole);

const newEmployee: (string | number | null)[] = ['Andrew', 'Klavan The Second', 19, 19];

// await updateData.createEmployee(newEmployee);



const newRoleId: number[] = [5, 22];

//await updateData.updateEmployeeRole(newRoleId);

const employees = await retrieveData.allEmployees();
