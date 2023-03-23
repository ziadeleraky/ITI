import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthRoles } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/auth.enum';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @AuthRoles(Role.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @AuthRoles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: CreateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @AuthRoles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
