import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article.service';
/** 
 * An interface which defines the appereance of an object
 * @param {string}  title - The title of the Article. 
 * @param {string}  Description - The description of the Article. 
 * @param {string}  url - The link to the article 
 * @param {number}  votes - The number of votes the article has. 
 */
interface ArticleJSON {
    title: string;
    description: string;
    url: string;
    votes: string;
    publishedAt: Date;
    author: string;
    urlToImage: string;
}


/** 
 * A class which represents an Article
 * @param {string}  title - The title of the Article. 
 * @param {string}  Description - The description of the Article. 
 * @param {string}  url - The link to the article 
 * @param {number}  votes - The number of votes the article has. 
 */
export class Article {
    public publishedAt: Date;

    // Article.fromJSON()
    static fromJSON(json: ArticleJSON): Article {
        // the same as new Article()
        let article = Object.create(Article.prototype);

        // Copies the properties from an object 
        return Object.assign(article, json, {
            votes: json.votes ? json.votes : 0,
            imageUrl: json.urlToImage,
            // if there is a date return with its assigned date otherwise return today's date
            publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date
        });
    }

    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public url: string,
        public votes?: number
    ) {
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }

    public voteUp(): void {
        this.votes = this.votes + 1;
    }

    public voteDown(): void {
        this.votes = this.votes - 1;
    }
}

