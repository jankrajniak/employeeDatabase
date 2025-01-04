 const queries = {
    allEmployees: 
    `SELECT 
    e.id AS employee_id, 
    e.first_name, 
    e.last_name, 
    r.title, 
    d.name AS department, 
    r.salary, 
    CONCAT(m.first_name, ' ', m.last_name) AS manager 
    FROM employee e 
    LEFT JOIN 
    role r ON e.role_id = r.id
    LEFT JOIN 
    department d ON r.department = d.id
    LEFT JOIN 
    employee m ON e.manager_id = m.id;`,
    
    allDepartments:
    `SELECT * FROM department`,
    
    allRoles:
    `SELECT
    r.id AS id,
    r.title,
    d.name AS department,
    r.salary
    FROM
    role r
    LEFT JOIN
    department d ON r.department = d.id;`,
    
    nameEmployees:
    `SELECT
    CONCAT(e.first_name, ' ', e.last_name) AS name
    FROM employee e;`,
    
    titleRoles:
    `SELECT
    r.title
    FROM role r;`,

    matchEmployeeId:
    `SELECT
    e.id
    FROM employee e
    WHERE CONCAT(e.first_name, ' ', e.last_name) = $1;`,

    matchDepartmentId:
    `SELECT
    d.id 
    FROM department d
    WHERE d.name = $1;`,
    
    matchRoleId:
    `SELECT 
    r.id
    FROM role r
    WHERE r.title = $1;`,

    createDepartment:
    `INSERT INTO department (name) VALUES ($1);`,

    createRole:
    `INSERT INTO role (title, salary, department) VALUES ($1, $2, $3);`,

    createEmployee:
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);`,

    updateEmployeeRole:
    `UPDATE employee
    SET role_id = $1
    WHERE id = $2;`
}

export default queries;