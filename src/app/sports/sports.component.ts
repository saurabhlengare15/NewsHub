import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private _service:NewsapiserviceService){}
  topNewsDisplay: any = [];

  ngOnInit(): void {
    this._service.sportsNews().subscribe((result)=>{
      this.topNewsDisplay=result.articles;
    })
  }
}
