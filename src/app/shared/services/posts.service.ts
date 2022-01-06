import { environment as env } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NDE0MjY4ODMsImV4cCI6MTY0MTQzMDQ4M30.yaqTv22NEE8GiBjfPmjIFTWWvaXjHn0fqRtqkbexfhY',
    }),
  };
  constructor(private http: HttpClient) {}

  //Get all posts
  getAll() {
    return this.http.get(`${env.apiUrl}/posts`, this.httpOptions);
  }

  //Delete post

  deleteItem(id: any) {
    return this.http.delete(`${env.apiUrl}/posts/${id}`, this.httpOptions);
  }
  addItem(body: any) {
    return this.http.post(`${env.apiUrl}/posts`, body, this.httpOptions);
  }
}
