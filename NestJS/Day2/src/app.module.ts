import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentsModule,
    CoursesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/classDB'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
