import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {ServiceService} from './service/service.service';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: UserComponent,children:[
          {path: ':id', component: UserDetailsComponent}
        ]},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
