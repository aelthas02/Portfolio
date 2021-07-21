import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './DTOs/Repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  public getRepoList(nickname: string): Observable<Array<Repo>> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/repos`);
  }
}
