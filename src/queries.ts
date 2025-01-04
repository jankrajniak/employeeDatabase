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
    department d ON r.department = d.id;`
}

export default queries;