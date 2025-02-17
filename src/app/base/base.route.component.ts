import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  template: '',
})
export abstract class BaseRouteComponent implements OnInit {
  route = inject(ActivatedRoute);
  routeObservable: Subscription | null = null;

  ngOnInit() {
    this.routeObservable = this.route.params.subscribe((params) => {
      this.nbOnInitAfter(params);
    });
  }

  protected abstract nbOnInitAfter(params: Params): void;
}
