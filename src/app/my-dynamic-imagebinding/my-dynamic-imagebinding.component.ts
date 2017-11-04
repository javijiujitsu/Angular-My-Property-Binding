import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dynamic-imagebinding',
  templateUrl: './my-dynamic-imagebinding.component.html',
  styleUrls: ['./my-dynamic-imagebinding.component.css']
})
export class MyDynamicImagebindingComponent implements OnInit {
   MyDynamicImage: string= 'https://vetstreet.brightspotcdn.com/dims4/default/e23e4d4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F1f%2F92%2Feb11c793404c89e0cab23d9da64a%2FAP-0RHRMQ-ph645080113.jpg';

  constructor() { }

  ngOnInit() {
  }

}
