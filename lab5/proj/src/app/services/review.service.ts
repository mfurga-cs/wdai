import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { Review } from '../models/review';
import { REVIEWS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviews: Review[] = [];
  private reviewsSubject = new BehaviorSubject<Review[]>(this.reviews);

  constructor() {
    this.reviews = REVIEWS;
    this.reviewsSubject.next(this.reviews);
  }

  getByDishId(dishId: Number): Observable<Review[]> {
    return this.reviewsSubject.pipe(map(reviews => reviews.filter(review => review.dishId === dishId)));
  }

  add(review: Review): void {
    this.reviews.push(review);
    this.reviewsSubject.next(this.reviews);
  }
}
