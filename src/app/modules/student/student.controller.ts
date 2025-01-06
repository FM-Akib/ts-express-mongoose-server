import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const result = await StudentServices.createStudentIntoDb(student);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getStudentByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
