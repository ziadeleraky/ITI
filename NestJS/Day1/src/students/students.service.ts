import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  students: CreateStudentDto[] = [];

  create(createStudentDto: CreateStudentDto) {
    try {
      this.students.push(createStudentDto);
      return createStudentDto;
    } catch (e) {
      console.log(e.message);
    }
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find((student) => {
      return student['id'] === id;
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    this.students = this.students.map((student) => {
      if (student.id == id) {
        student = Object.assign(student, updateStudentDto);
      }
      return student;
    });

    return true;
  }

  remove(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
    return this.students;
  }
}
