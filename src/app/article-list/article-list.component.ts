import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';


// A component which is the iterator of the articles
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(
    private articleService: ArticleService

  ) {

  }

  ngOnInit() {
    // we have to this as we injected the service
    this.articleService.getArticles()
      .then(articles => this.articles = articles);
  }

}
