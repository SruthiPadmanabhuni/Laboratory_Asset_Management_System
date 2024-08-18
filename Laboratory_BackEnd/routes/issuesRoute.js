const express = require('express');
const router = express.Router();

const {
    getStudentIssues,
    getPCissues,
    postIssue,
    updateIssue,
    updateToProgress,
    getIssuesByStatus,
    getLabissues
} = require('../controllers/issuesController');


router.route('/').post(postIssue);
router.route('/:username').get(getStudentIssues);
router.route('/get/:status').get(getIssuesByStatus);
router.route('/:lab/:pc').get(getPCissues);
router.route('/lab/get/:lab').get(getLabissues);
router.route('/update/:id/:status').put(updateIssue);
router.route('/updateToProgress/:id').put(updateToProgress);

module.exports = router;