import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';


// A Component which defines an article
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  upvote() {
    this.article.voteUp();
  }

  downvote() {
    this.article.voteDown();
  }

  ngOnInit() {}

}
