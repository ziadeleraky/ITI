import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './students.schema';
import { courseSchema } from 'src/courses/courses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'students', schema: studentSchema }]),
    MongooseModule.forFeature([{ name: 'courses', schema: courseSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
