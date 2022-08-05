import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubService } from './github.service';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
