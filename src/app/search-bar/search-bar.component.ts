import { Component } from '@angular/core';
import { FeedViewComponent } from '../feed-view/feed-view.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  title = 'Flickr Feed Viewer';
  tags: string;

  constructor(private feedViewer: FeedViewComponent) { }

  onSearch(): void {
    let searchTag = this.tags;
    if (searchTag) {
      searchTag = searchTag.trim();
    }
    this.feedViewer.getFeed(searchTag);
  }
}
