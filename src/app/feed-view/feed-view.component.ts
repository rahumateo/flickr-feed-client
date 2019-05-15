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
    this.feedService.photoFeed.subscribe(data => {
      this.photoFeed = data;
    });

    this.getPhotoFeed();
  }

  getFeed(tags: string): void {
    this.getPhotoFeed(tags);
  }

  private getPhotoFeed(tags?: string): void {
    this.feedService.getFeed(tags);
  }

}
