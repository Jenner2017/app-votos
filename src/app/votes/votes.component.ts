import { Component } from "@angular/core";
import { Article } from "./Article";

@Component({
	selector: "votes-app",
	templateUrl: "./votes.component.html",
	styleUrls: ["./votes.component.css"]
})
export class VotesApp{
	title: string ="Votes App";
	articles: Article[];

	constructor(){
		this.articles=[
			new Article("Angular2", "http://angular.io",30),
			new Article("Bootstrap", "http://bootstrap.com",3),
			new Article("Semantics", "http://semantics.com",19)
		]
	}

	addArticle(
		title: HTMLInputElement,
		link: HTMLInputElement):boolean{
		
		this.articles.push(
			new Article(title.value, link.value)
			);
		title.value="";
		link.value="";
		return false;
	}

	sortedArticle():Article[]{
		return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
	}
}