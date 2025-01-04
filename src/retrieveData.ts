// IMPORT THIRD PARTY PACKAGES
import { QueryResult } from 'pg';

// IMPORT CUSTOM PACKAGES
import { pool, connectToDb } from './connections.js';
import queries from './queries.js';

await connectToDb();

class retrieveData {

    static async employees(): Promise<object[]> {
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

    static async departments(): Promise<object[]> {
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

    static async roles(): Promise<object[]> {
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
};

export default retrieveData;