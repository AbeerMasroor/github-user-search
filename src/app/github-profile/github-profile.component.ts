import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  @Input() githubProfile: any;
  constructor() { }

  ngOnInit(): void {
  }

}
