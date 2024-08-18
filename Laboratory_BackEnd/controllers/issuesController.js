const asyncHandler = require('express-async-handler');
const issuesModel = require('../models/issuesModel');


const getStudentIssues = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const studentIssues = await issuesModel.getStudentIssues(username);
    res.json(studentIssues);
});

const getPCissues = asyncHandler(async (req, res) => {
    const lab = req.params.lab;
    const PC = req.params.pc;
    console.log("Issues Controller: "+lab+":"+PC);
    const PCissues = await issuesModel.getPCissues(lab, PC);
    res.json(PCissues);
});

const getLabissues = asyncHandler(async (req, res) => {
    const lab = req.params.lab;
    console.log("Issues Controller: "+lab);
    const labissues = await issuesModel.getLabissues(lab);
    res.json(labissues);
});

const getIssuesByStatus = asyncHandler(async (req, res) => {
    const status = req.params.status;
    const statusissues = await issuesModel.getIssuesByStatus(status);
    res.json(statusissues);
});

const postIssue = asyncHandler(async (req, res) => {
    const username = req.body.student;
    const lab = req.body.lab;
    const PC = req.body.pc;
    const issue = req.body.issue;
    const desc = req.body.desc;
    const newIssue = await issuesModel.postIssue(username, lab, PC, issue,desc);
    res.json(newIssue);
});

const updateToProgress = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedIssue = await issuesModel.updateToProgress(id);
    res.json(updatedIssue);
});

const updateIssue = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const status = req.params.status;
    const updatedIssue = await issuesModel.updateIssue(id, status);
    res.json(updatedIssue);
});

module.exports = { getStudentIssues, getPCissues, getLabissues, getIssuesByStatus, postIssue, updateIssue, updateToProgress };