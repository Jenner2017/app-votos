import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VotesApp } from "./votes/votes.component";
import { ArticleComponent } from "./votes/article/article.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VotesApp,
    ArticleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
