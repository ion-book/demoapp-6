import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    PageNotFoundComponent,
    ArticleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
