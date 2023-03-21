import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { CoursesService } from 'src/courses/courses.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, CoursesService],
})
export class StudentsModule {}
