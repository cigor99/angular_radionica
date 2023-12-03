import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'ar-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent implements OnInit, OnDestroy{
  timeLeft: number = 5;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.subscriptions.push(interval(1000).pipe(take(this.timeLeft)).subscribe(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.router.navigate(['/']);
      }
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
