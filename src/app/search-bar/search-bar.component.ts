import { Component, Injectable, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SearchBarComponent implements OnInit {
  title = 'Flickr Feed Viewer';
  tags: string;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    // search recent feed with no tags
    this.onSearch();
  }

  onSearch(): void {
    let searchTag = this.tags;
    if (searchTag) {
      searchTag = searchTag.trim();
    }
    this.feedService.getFeed(searchTag);
  }
}
