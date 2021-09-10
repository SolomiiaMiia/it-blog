import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private urlJsonNews: string;
  private urlJsonEvents: string;

  constructor(private http: HttpClient) {
    this.urlJsonNews = 'http://localhost:3000/newsIT';
    this.urlJsonEvents = 'http://localhost:3000/eventsIT';
  }

  choiceCategories(categor) {
    console.log(categor);
    return this.http.get(`http://localhost:3000/${categor}`)
  }

  // for News
  getJSONArticle(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(this.urlJsonNews);
  }

  postJSONArticle(article: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>(this.urlJsonNews, article);
  }

  deleteJSONArticle(id: number): Observable<IArticle> {
    return this.http.delete<IArticle>(`${this.urlJsonNews}/${id}`);
  }

  getJSONOneDetailsArticle(id: number): Observable<IArticle> {
    return this.http.get<IArticle>(`${this.urlJsonNews}/${id}`)
  }

  // fot Events

  getJSONArticleEvents(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(this.urlJsonEvents);
  }

  postJSONArticleEvents(article: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>(this.urlJsonEvents, article);
  }


  deleteJSONArticleEvents(id: number): Observable<IArticle> {
    return this.http.delete<IArticle>(`${this.urlJsonEvents}/${id}`);
  }

  getJSONOneDetailsArticleEvents(id: number): Observable<IArticle> {
    return this.http.get<IArticle>(`${this.urlJsonEvents}/${id}`)
  }

}
