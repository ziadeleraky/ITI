import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel('courses') private coursesModel) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.coursesModel.create(createCourseDto);
    if (course) {
      return true;
    } else {
      return false;
    }
  }

  findAll() {
    return this.coursesModel.find({}, { __v: false, _id: false });
  }

  findOne(id: number) {
    return this.coursesModel.findOne({ id }, { __v: false, _id: false });
  }

  async update(id: number, updateCourseDto: CreateCourseDto) {
    await this.coursesModel.findOneAndUpdate({ id }, updateCourseDto);
    return true;
  }

  async remove(id: number) {
    await this.coursesModel.findOneAndRemove({ id });
    return true;
  }
}
