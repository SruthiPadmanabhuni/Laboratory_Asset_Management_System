const pool = require('../config/db');

class Student_creds {
    static getAll() {
        return new Promise((resolve, reject) => {
            pool.query(`select * from student_creds`, (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    }

    static getStudent(username) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from student_creds where username = ?`, [username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            });
        });
    }
}


module.exports = Student_creds;