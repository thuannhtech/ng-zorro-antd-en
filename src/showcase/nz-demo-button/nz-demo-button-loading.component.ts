import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-button-loading',
  template: `
    <button nz-button [nzType]="'primary'" [nzLoading]="true">
      <span><i class="anticon anticon-poweroff"></i>Loading</span>
    </button>
    <button nz-button [nzType]="'primary'" [nzSize]="'small'" [nzLoading]="true">
      <span>Loading</span>
    </button>
    <br>
    <button nz-button [nzType]="'primary'" (click)="loadOne($event)" [nzLoading]="isLoadingOne">
      <span>Click me!</span>
    </button>
    <button nz-button [nzType]="'primary'" (click)="loadTwo($event)" [nzLoading]="isLoadingTwo">
      <i class="anticon anticon-poweroff"></i>
      <span>Click me!</span>
    </button>
    <br>
    <button nz-button [nzLoading]="true" [nzShape]="'circle'"></button>
    <button nz-button [nzLoading]="true" [nzType]="'primary'" [nzShape]="'circle'"></button>
  `,
  styles  : []
})
export class NzDemoButtonLoadingComponent implements OnInit {
  isLoadingOne = false;
  isLoadingTwo = false;
  loadOne = (value) => {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 5000);
  };
  loadTwo = (value) => {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 5000);
  };

  constructor() {
  }

  ngOnInit() {
  }
}
