export class Article {
	title:string;
	link:string;
	votes:number;

	constructor(
		title:string,
		link:string,
		votes?:number) {
		this.title=title;
		this.link=link;
		this.votes=votes || 0;
	}

	votesUp():void{
		this.votes++;
	}
	votesDown():void{
		this.votes--;
	}
	domain(){
		try{
			const link=this.link.split("//")[1];
			return link.split("/");
		}catch(err){

		}
	}
}