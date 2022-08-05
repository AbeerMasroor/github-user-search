import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import {CLIENT_ID} from './credentials/github-credentials';
import {CLIENT_SECRET} from './credentials/github-credentials';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  public getProfile(searchQuery: any):Observable<any>{
    let dataurl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return this.httpClient.get<any>(dataurl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public getRepos(searchQuery: any, page: number):Observable<any[]>{
    let dataurl = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=10`;

    return this.httpClient.get<any[]>(dataurl+'&page='+page).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public getLanguage(searchQuery: any, searchRepo: string):Observable<any[]>{
    let dataurl = `https://api.github.com/repos/${searchQuery}/${searchRepo}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return this.httpClient.get<any[]>(dataurl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public handleErrors(error:HttpErrorResponse){
      let errorMessage: string;
      if(error.error  instanceof ErrorEvent)
      {
         errorMessage = `Message : ${error.error.message}`;
      }
      else{
         errorMessage = `Status : ${error.status} Message : ${error.message}`;
      }

  
      return throwError(() => errorMessage);
  }



}
