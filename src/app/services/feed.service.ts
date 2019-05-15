import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PhotoFeedModel } from './model/photo-feed.model';
import * as config from './config.json';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  // feed server's end-point
  private url = config.feed_url;

  // setting this as observable so that view can be updated every time there is change in value
  private dataSource = new BehaviorSubject(new PhotoFeedModel());
  photoFeed = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getFeed(tags?: string): void {
    let searchUrl = this.url;
    if (tags) {
      searchUrl += '?tags=' + tags;
    }

    console.log(searchUrl);
    // search feed and update photoFeed object
    this.httpClient.get(searchUrl)
      .subscribe(
        (photoFeed: PhotoFeedModel) => {
          this.dataSource.next(photoFeed);
        });
  }
}
