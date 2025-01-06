// IMPORT THIRD PARTY PACKAGES
import inquirer from 'inquirer';
import Table from 'cli-table3';

// IMPORT CUSTOM PACKAGES
import { retrieveData, updateData } from './dbInterface.js';



class Cli {

    async menuOptions(): Promise<void> {
        const choice = await inquirer.prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit',
                ]
            }
        ])

        switch (choice.selection) {
            case 'View All Employees':
                await this.viewAllEmployees();
                this.menuOptions();
                break;
            case 'Add Employee':
                await this.addEmployee();
                this.menuOptions();
                break;
            case 'Update Employee':
                await this.updateEmployeeRole();
                this.menuOptions();
                break;
            case 'View All Roles':
                await this.viewAllRoles();
                this.menuOptions();
                break;
            case 'Add Role':
                await this.addRole();
                this.menuOptions();
                break;
            case 'View All Departments':
                await this.viewAllDepartments();
                this.menuOptions();
                break;
            case 'Add Department':
                await this.addDepartment();
                this.menuOptions();
                break;
            case 'Quit':
                process.exit();

        }
    }

    async viewAllEmployees(): Promise<void> {
        const employees = await retrieveData.allEmployees();
        this.buildTable(employees);
    }

    async addEmployee(): Promise<void> {
        const rolesData = await retrieveData.titleRoles();
        const roles = rolesData.map((role:any) => role.title);
        const employeesData = await retrieveData.nameEmployees();
        const employees = employeesData.map((employee:any) => employee.name);
        employees.push('None');
        
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the employee\'s first name?',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the employee\'s last name?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Choose a role for the employee',
                choices: roles
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Chose a manager for the employee',
                choices: employees
            }
        ]);

        const role_id:any= await retrieveData.matchRoleId([userInput.role]);
        
        let manager_id:(number | null) = null;
        if (userInput.manager !== 'None') {
            const managerId: any = await retrieveData.matchEmployeeId([userInput.manager]);
            manager_id = managerId[0].id;
        }

        const newEmployee: (string | number | null)[] =
            [userInput.firstName, userInput.lastName, role_id[0].id, manager_id];
        
        await updateData.createEmployee(newEmployee);
    }

    async updateEmployeeRole(): Promise<void> {
        const employeesData = await retrieveData.nameEmployees();
        const employees = employeesData.map((employee:any) => employee.name);
        const managers = [...employees];
        managers.push('None');
        const rolesData = await retrieveData.titleRoles();
        const roles = rolesData.map((role:any) => role.title);

        const userInput = await inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Choose an employee to update',
                choices: employees
            },
            {
                type: 'list',
                name: 'role',
                message: 'Choose a new role for the employee',
                choices: roles
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Chose a new manager for the employee',
                choices: managers
            }
        ]);

        const roleId:any = await retrieveData.matchRoleId([userInput.role]);
        const employeeId:any = await retrieveData.matchEmployeeId([userInput.employee]);
        let managerId:(number | null) = null;
        if (userInput.manager !== 'None') {
            const newManagerId: any = await retrieveData.matchEmployeeId([userInput.manager]);
            managerId = newManagerId[0].id;
        }
        const update: (number | null) [] = [roleId[0].id, managerId, employeeId[0].id];

        await updateData.updateEmployee(update);
    }

    async viewAllRoles(): Promise<void> {
        const roles = await retrieveData.allRoles();
        this.buildTable(roles);
    }

    async addRole(): Promise<void> {
        const departmentsData = await retrieveData.allDepartments();
        const departments = departmentsData.map((department:any) => department.name);

        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the new role?'
            },
            {
                type: 'number',
                name: 'salary',
                message: 'What is the salary for the new role?'
            },
            {
                type: 'list',
                name: 'department',
                message: 'Choose a department for the new role',
                choices: departments
            }
        ]);

        const departmentId:any = await retrieveData.matchDepartmentId([userInput.department]);
        const newRole: (string | number)[] = [userInput.title, userInput.salary, departmentId[0].id];

        await updateData.createRole(newRole);
    }

    async viewAllDepartments(): Promise<void> {
        const departments = await retrieveData.allDepartments();
        this.buildTable(departments);
    }

    async addDepartment(): Promise<void> {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of the new department?'
            }
        ]);

        const newDepartment: string[] = [userInput.department];

        await updateData.createDepartment(newDepartment);
    }

    buildTable(data: any): void {
        const headers:string[] = Object.keys(data[0]);

        const table:Table.Table = new Table({
            head: headers,
        })

        data.forEach((row:object) => {
            table.push(Object.values(row));
        });

        console.log(table.toString());
    }

}

export default Cli;
