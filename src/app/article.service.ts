import { Logger } from 'webdriver-manager/built/lib/cli';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';


@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  public getArticles(): Promise<Article[]> {

    // promise has to be converted into url search form
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', 'reddit-r-all');
    return this.http
      // http call returns an observable object
      .get(`${environment.baseUrl}/v1/articles`, {
        search: params
      })
      // converts obeservable into promise
      .toPromise()
      .then(resp => resp.json())
      // Operating on the articles array from the json returned
      .then(json => json.articles)
      // we map each article to each Article Object
      .then(articles => {
        console.log('json ->', articles);
        return articles
        // Operating on a single article of the articles array
          .map(article => Article.fromJSON(article));

      })
      .catch(err => {
        console.log('We got an error', err);
      });


  }
}
