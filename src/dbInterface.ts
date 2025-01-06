// IMPORT THIRD PARTY PACKAGES
import { QueryResult } from 'pg';

// IMPORT CUSTOM PACKAGES
import { pool, connectToDb } from './connections.js';
import queries from './queries.js';

await connectToDb();

export class retrieveData {

    static async allEmployees(): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.allEmployees, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving employees data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async nameEmployees(): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.nameEmployees, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving employees data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async matchEmployeeId(name:string[]): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.matchEmployeeId, name, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving employees data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async allDepartments(): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.allDepartments, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving department data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async matchDepartmentId(name:string[]): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.matchDepartmentId, name, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving department data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async allRoles(): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.allRoles, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving role data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async titleRoles(): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.titleRoles, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving role data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static async matchRoleId(name:string[]): Promise<object[]> {
        return new Promise ((resolve, reject) => {
            pool.query(queries.matchRoleId, name, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error retrieving role data: ', err);
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }
};

export class updateData {

    static async createDepartment (name: string[]) {
        return new Promise ((resolve, reject) => {
            pool.query(queries.createDepartment, name, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error creating department: ', err);
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })
    }

    static async createRole (role: (string | number)[]) {
        return new Promise ((resolve, reject) => {
            pool.query(queries.createRole, role, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error creating role: ', err);
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })

    }

    static async createEmployee (employee: (string | number | null)[]) {
        return new Promise ((resolve, reject) => {
            pool.query(queries.createEmployee, employee, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error creating employee: ', err);
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })
    }

    static async updateEmployee (update: (number | null )[]) {
        return new Promise ((resolve, reject) => {
            pool.query(queries.updateEmployee, update, (err: Error, res: QueryResult) => {
                if (err) {
                    console.log('Error updating employee role: ', err);
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        })
    }


}