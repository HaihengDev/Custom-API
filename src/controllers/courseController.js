import Course from '../model/Course.js';

export const getAllCourses = async(req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch(err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export const getCourseByCode = async(req, res) => {
  try {
    const {code} = await req.params;
    const course = await Course.findOne({code: code});

    res.status(200).json(course);
  } catch(err) {
    res.status(500).json({
      message: err.message,
    });
  }
}