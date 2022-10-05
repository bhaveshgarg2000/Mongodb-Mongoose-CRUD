const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
router.get("/", (req, res) => {
  res.send("root route");
});

// POST REQUEST API
router.post("/students/register", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    // console.log(createUser)
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET REQUEST API
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (err) {
    res.send(err);
  }
});

// GET USER REQUEST USING ID API
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log
    const studentData = await Student.findById(_id);
    // console.log(studentData)
    if (!studentData) {
      return res.status(404).send();
    } else {
      return res.status(201).send(studentData);
    }
    // res.send(studentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

// DELETE USER USING NAME API

router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateStudent);
    console.log(updateStudent);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
