import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ _id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
  getAllStudentsFromDB,
  getStudentByIdFromDB,
};
