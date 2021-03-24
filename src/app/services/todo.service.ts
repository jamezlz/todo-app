import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = "http://localhost:8080/todos/";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(this.url);
  }

  getTodo(id): Observable<any> {
    return this.http.get(this.url+id);
  }

  deleteTodo(id): Observable<any> {
    return this.http.delete(this.url+id);
  }

  updateTodo(todo): Observable<any> {
    return this.http.put(this.url+todo.id,todo);
  }

  addTodo(todo): Observable<any> {
    return this.http.post(this.url,todo);
  }

}
