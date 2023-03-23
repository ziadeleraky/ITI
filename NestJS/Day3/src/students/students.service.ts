import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('students') private studentModel,
    @InjectModel('courses') private courseModel,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.studentModel.create(createStudentDto);
    if (student) {
      return true;
    } else {
      return false;
    }
  }

  findAll() {
    return this.studentModel.find({}, { __v: false, _id: false });
  }

  findOne(id: number) {
    return this.studentModel.findOne({ id }, { __v: false, _id: false });
  }

  async update(id: number, updateStudentDto: CreateStudentDto) {
    await this.studentModel.findOneAndUpdate({ id }, updateStudentDto);
    return true;
  }

  async remove(id: number) {
    await this.studentModel.findOneAndRemove({ id });
    return true;
  }

  async findStudentCourses(id: number) {
    const { courseIds } = await this.findOne(id);
    const courses = [];
    for (let i = 0; i < courseIds.length; i++) {
      const c = await this.courseModel.findOne({ id: courseIds[i] });
      courses.push(c);
    }
    return courses;
  }
}
