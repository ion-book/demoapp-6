import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleComponent } from './article/article.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

const routes: Routes = [
  {
    path: 'view1',
    component: View1Component
  },
  {
    path: '',
    redirectTo: '/view1',
    pathMatch: 'full'
  },
  {
    path: 'view2',
    component: View2Component
  },
  {
    path: 'articles/:id',
    component: ArticleComponent 
  },
  {
    path: 'songSearch',
    component: SongSearchComponent 
  },
  {
    path: 'songDetail/:id',
    component: SongDetailComponent 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
