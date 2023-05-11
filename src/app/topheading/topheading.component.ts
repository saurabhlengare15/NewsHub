import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) { }

  //to display data
  topHeadingDisplay: any = [];
  url:any;
  ngOnInit(): void {
    this._service.topHeading().subscribe((result) => {
      console.log(result);

      this.topHeadingDisplay=result.articles;
      // this.url=this.topHeadingDisplay.title;
      console.log(this.topHeadingDisplay[0].urlToImage);
    })
  }
}
