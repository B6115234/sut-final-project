import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student: any;

  constructor(private http: HttpClient,public local: LocalStorageService) { }

  getStudent(token: any){

    const headers = {'Authorization': token}
    const url = 'http://localhost:3000/api/student';
    
    return this.http.get<any>(url, {headers} ).pipe(map(data => {
      if(data){
        this.student = data;
        console.log(this.student);
      }
      return this.student
    }));
  }
}
