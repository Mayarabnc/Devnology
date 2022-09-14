import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LinkModel } from '../model/LinkModel';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    private http: HttpClient
    
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllLinks(): Observable<LinkModel[]> {
    return this.http.get<LinkModel[]>("http://localhost:8080/link", this.token)
  }

  getByIdLink(id: number): Observable<LinkModel>{
    return this.http.get<LinkModel>(`http://localhost:8080/link/${id}`, this.token)
  }

  postLink(linkSer: LinkModel): Observable<LinkModel> {
    return this.http.post<LinkModel>("http://localhost:8080/link", linkSer, this.token)
  }

  putLInk(link: LinkModel): Observable<LinkModel>{
    return this.http.put<LinkModel>("http://localhost:8080/link", link, this.token)
  }

  deleteLink(id: number){
    return this.http.delete(`http://localhost:8080/link/${id}`, this.token)
  }
}
