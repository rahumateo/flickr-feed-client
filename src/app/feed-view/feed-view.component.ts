import { Component, Injectable, OnInit } from '@angular/core';
import { PhotoFeedModel } from '../services/model/photo-feed.model';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class FeedViewComponent implements OnInit {

  photoFeed: PhotoFeedModel;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    // subscribe to photoFeed on feedService to update view every time it changes
    this.feedService.photoFeed.subscribe(data => {
      this.photoFeed = data;
    });
  }
}
