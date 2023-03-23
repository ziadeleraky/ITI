import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuth } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('authDB') private AuthModel,
    private jwtService: JwtService,
  ) {}

  async findUserByEmail(email: any) {
    return await this.AuthModel.findOne({ email });
  }

  async create(createAuthDto: CreateAuthDto, res: Response) {
    const found = await this.findUserByEmail(createAuthDto.email);
    if (found) return 'User Already Exists';

    const saltRounds = await bcrypt.genSalt();
    const HashedPass = await bcrypt.hash(createAuthDto.password, saltRounds);

    createAuthDto.password = HashedPass;

    const user = await this.AuthModel.create(createAuthDto);
    const jwt = await this.jwtService.sign({
      name: user.fname + ' ' + user.lname,
      isAdmin: user.isAdmin,
    });

    res.cookie('auth', jwt);
  }

  async login(loginData: LoginAuth, res: Response) {
    const user = await this.findUserByEmail(loginData.email);
    if (!user) return 'Email or password is not valid';

    const passValidation = await bcrypt.compare(
      loginData.password,
      user.password,
    );
    if (!passValidation) return 'Email or password is not valid';

    const jwt = await this.jwtService.sign({
      name: user.fname + ' ' + user.lname,
      isAdmin: user.isAdmin,
    });

    res.cookie('auth', jwt);

    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
