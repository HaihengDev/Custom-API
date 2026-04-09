import mongoose from 'mongoose';
import Student from '../model/Student.js';

export const getStudents = async(req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch(err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export const getStudentById = async(req, res) => {
  try {
    const {code} = await req.params;
    const student = await Student.findOne({code: code});

    res.status(200).json(student);
  } catch(err) {
    res.status(500).json({
      message: err.message,
    });
  }
}