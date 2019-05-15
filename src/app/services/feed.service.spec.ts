import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FeedService } from './feed.service';

describe('FeedService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeedService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FeedService);
  });

  it('should be created', () => {
    expect(TestBed.get(FeedService)).toBeTruthy();
  });

  it('should contain correct tags', () => {
    const tags = 'cat';
    service.getFeed(tags);

    service.photoFeed.subscribe(result => {
      expect(result.title).toContain(tags);
    });
  });
});
