import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestModel } from './Test.model';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {
  constructor(
    public http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  getTest(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>('http://40.117.47.1680/api/Tests').pipe(

    );
  }

  create(resource: TestModel): Observable<TestModel[]> {
    return this.http.post<TestModel[]>('http://40.117.47.1680/api/Tests', resource).pipe(

    );
  }

  getTestById(id: number): Observable<TestModel[]> {
    return this.http.get<TestModel[]>('http://40.117.47.1680/api/Tests/' + id).pipe();
  }
}
