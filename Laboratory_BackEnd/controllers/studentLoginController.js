const asyncHandler = require('express-async-handler');
const Student_creds = require('../models/student_creds_model');

const getStudent = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const student = await Student_creds.getStudent(username);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    res.json(student);
});

module.exports = getStudent;