import { CacheTTL, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  courses: CreateCourseDto[] = [];

  create(createCourseDto: CreateCourseDto) {
    try {
      this.courses.push(createCourseDto);
      return createCourseDto;
    } catch (e) {
      console.log(e.message);
    }
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return this.courses.find((course) => {
      return course['id'] === id;
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    this.courses = this.courses.map((course) => {
      if (course.id == id) {
        course = Object.assign(course, updateCourseDto);
      }
      return course;
    });

    return true;
  }

  remove(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
    return this.courses;
  }
}
