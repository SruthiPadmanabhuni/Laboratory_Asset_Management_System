const pool = require('../config/db');

class issuesModel {
    static getStudentIssues(username) {
        console.log("Student")
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where student = ?`, [username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
        );
    }

    static updateToProgress(id) {
        return new Promise((resolve, reject) => {
            pool.query(`update issues set status = 'In progress' where id = ?`, [id], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve("Issue updated successfully");
            }
            );
        }
        );
    }

    static updateIssue(id, status) {
        return new Promise((resolve, reject) => {
            const now = new Date();
            const utcTime = now.getTime();
            const istTime = utcTime + 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
            const istDate = new Date(istTime);
            const today_date = istDate.toISOString().slice(0, 10);

            if(status == 'resolved'){
                pool.query(`select * from issues where id = ?`, [id], (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }
                    }
                );
            }

            pool.query(`update issues set status = ?, IssueResolvedDate = ? where id = ?`, [status, today_date.slice(0,10), id], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve("Issue updated successfully");
            }
            );
        }
        );
    }

    static getPCissues(lab, PC) {
        console.log("Issues Model: "+lab+":"+PC);
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where lab = ? and pc = ?`, [lab, PC], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                console.log(results);
                return resolve(results);
            });
        }
        );
    }

    static getLabissues(lab) {
        console.log("Issues Model: "+lab);
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where lab = ?`, [lab], (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log(results);
                    return resolve(results);
                });
            }
        );
    }

    static getIssuesByStatus(status) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where status = ?`, [status], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
        );
    }

    static postIssue(username, lab, PC, issue, desc) {
        return new Promise((resolve, reject) => {
            const now = new Date();
            const utcTime = now.getTime();
            const istTime = utcTime + 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
            const istDate = new Date(istTime);
            const today_date = istDate.toISOString().slice(0, 10);
            pool.query(`insert into issues (student, lab, pc, issue, IssueRaisedDate, description) values (?, ?, ?, ?,?,?)`, [username, lab, PC, issue, today_date, desc], (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }
            return resolve("Issue raised successfully");
            });
        }
        );
    }
}

module.exports = issuesModel;