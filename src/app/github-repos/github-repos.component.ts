import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit, OnChanges  {
  public githubRepos: any[] = [];
  public githubLanguages: any[] = [];
  @Input() TotalCount!:  number;
  @Input() githubProfileName!:  string;
  public errorMessage:string = "";

  p: number = 1;
  total: number = 0;
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.p = 1;

    this.getRepos();
 
  }

  getRepos(){
    // this.service.getTotal(this.p).subscribe((response: any) => {
    //   this.total = response.public_repos;
    // });

    this.githubService.getRepos(this.githubProfileName,this.p).subscribe({ next:(data) => {
      this.githubRepos = data;
      // console.log(this.githubRepos);
      var len = this.TotalCount;
    //  console.log("Length : "+this.TotalCount);
    
      for(let i =0;i<len;+i++){
        this.githubService.getLanguage(this.githubProfileName,this.githubRepos[i].name).subscribe({ next:(data) => {
          this.githubLanguages[i] = data;
           console.log(this.githubLanguages);
          
        }, error: (error) => {
          this.errorMessage = error
        //  console.log(error);
          
        }});

    }
        
      
    }, error: (error) => {
      this.errorMessage = error
      
    }});

 


  }



  pageChangeEvent(event: number){
    this.p = event;
    this.getRepos();
  }



}
