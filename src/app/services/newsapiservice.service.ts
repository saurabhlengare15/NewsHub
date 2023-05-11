import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
  constructor(private http: HttpClient) { }

  // url="https://newsapi.org/v2/top-headlines?country=us&apiKey=a988a0622cc84522ac42128a654d382d";

  //topheading
  topHeading():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=a988a0622cc84522ac42128a654d382d");
  }

  //technews
  techNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a988a0622cc84522ac42128a654d382d")
  }
  //entertainment
  entertainmentNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a988a0622cc84522ac42128a654d382d")
  }
  //health
  healthNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a988a0622cc84522ac42128a654d382d")
  }
  //science
  scienceNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a988a0622cc84522ac42128a654d382d")
  }
  //sports
  sportsNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a988a0622cc84522ac42128a654d382d")
  }
  //business
  businessNews():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a988a0622cc84522ac42128a654d382d")
  }

}
