import { Component } from '@angular/core';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public githubUserQuery:string = "";
  public githubProfile:any;
  public githubRepos: any[] = [];
  public errorMessage:string = "";

  public caught: boolean= false;
  constructor(private githuService: GithubService) { }

  public SearchUser(){
    this.githuService.getProfile(this.githubUserQuery).subscribe({next: (data) => {
      this.githubProfile = data;
      this.caught = false;
    }, error: (error) => {
      this.errorMessage = error
      this.caught = true;
    }});


 
  }

  title = 'github-user-search';
}
