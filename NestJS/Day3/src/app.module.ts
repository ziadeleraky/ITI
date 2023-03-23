import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    StudentsModule,
    CoursesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/classDB'),
    AuthModule,
    JwtModule.register({
      secret: 'mySecret',
      signOptions: { expiresIn: '2d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
