import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly DB_URL = 'http://localhost:3000/students';

  constructor(private readonly httpClient: HttpClient) {}

  getAllStudents() {
    return this.httpClient.get(this.DB_URL);
  }

  addStudent(data: any) {
    return this.httpClient.post(this.DB_URL, data);
  }

  deleteStudent(id: any) {
    return this.httpClient.delete(this.DB_URL + '/' + id);
  }

  getStudentByID(id: any) {
    return this.httpClient.get(this.DB_URL + '/' + id);
  }

  updateStudent(id: any, newBody: any) {
    return this.httpClient.put(this.DB_URL + '/' + id, newBody);
  }
}
