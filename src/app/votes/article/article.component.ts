import { Component } from "@angular/core";
import { Article } from "../Article";

@Component({
	selector: "article",
	host:{
		class: "row"
	},
	templateUrl: "./article.component.html",
	styleUrls:["./article.component.css"],
	inputs:["article"]
})

export class ArticleComponent{
	article:Article;

	constructor(){}

	votesUp():boolean{
		this.article.votesUp();
		return false;
	}
	votesDown():boolean{
		this.article.votesDown();
		return false;
	}
}