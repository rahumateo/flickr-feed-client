import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedViewComponent } from './feed-view.component';
import { PhotoFeedModel } from '../services/model/photo-feed.model';

describe('FeedViewComponent', () => {
  let component: FeedViewComponent;
  let fixture: ComponentFixture<FeedViewComponent>;

  const tags = 'whitehorse';
  const testData: PhotoFeedModel = {
    title: 'Recent Uploads tagged whitehorse',
    link: 'https://www.flickr.com/photos/tags/whitehorse/',
    items: [
      {
        title: 'What why snow in May',
        link: 'https://www.flickr.com/photos/123020986@N08/47846123071/',
        media: {
          m: 'https://live.staticflickr.com/65535/47846123071_4afe8291c4_m.jpg'
        },
        description: 'May 2nd and we are still enjoying out snow. I have to say it was very beautiful.',
        author: 'nobody@flickr.com'
      },
      {
        title: 'Spirited',
        link: 'https://www.flickr.com/photos/chrissie_bee/40878867983/',
        media: {
          m: 'https://live.staticflickr.com/65535/40878867983_e4e8a3ed4c_m.jpg'
        },
        description: 'When you are on a great horse, you have the best seat you will ever have.',
        author: 'nobody@flickr.com'
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.photoFeed = testData;
    fixture.detectChanges();

    const headingElement = fixture.nativeElement.querySelector('h3') as HTMLHeadingElement;
    expect(headingElement.textContent).toContain(tags);

    expect(component.photoFeed.items.length).toBe(2);

    const imgItems = fixture.nativeElement.querySelectorAll('img');

    for (let i = 0; i < imgItems.length; i++) {
      const imgItem = imgItems.item(i) as HTMLImageElement;
      const item = testData.items[i];

      expect(imgItem.alt).toBe(item.title);
      expect(imgItem.src).toContain(item.media.m);
    }
  });
});
