import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { AuthRoles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/auth.enum';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @AuthRoles(Role.Admin)
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @AuthRoles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: CreateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @AuthRoles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }

  @Get(':id/courses')
  findStudentCourses(@Param('id') id: string) {
    return this.studentsService.findStudentCourses(+id);
  }
}
