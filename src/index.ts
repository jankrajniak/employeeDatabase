

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
import { pool, connectToDb } from './connections.js';
import queries from './queries.js';

await connectToDb();

await pool.query(queries.allEmployees,  (err: Error, res: QueryResult) => {
    if (err) {
        console.log('Error retrieving employees data ', err);
    } else {
        console.log(res.rows);
    }
});

await pool.query(queries.allDepartments, (err: Error, res: QueryResult) => {
    if (err) {
        console.log('Error retrieving deperatments data: ', err);
    } else {
        console.table(res.rows);
    }
});

await pool.query(queries.allRoles, (err: Error, res: QueryResult) => {
    if (err) {
        console.log('Error retrieving roles data: ', err);
    } else {
        console.table(res.rows);
    }
});