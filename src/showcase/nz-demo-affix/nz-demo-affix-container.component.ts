import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-affix-container',
  template: `
  <div class="scrollable-container" #target>
    <div class="background">
      <nz-affix [nzTarget]="target" id="affix-container-target">
        <button nz-button [nzType]="'primary'">
            <span>Fixed at the top of container</span>
        </button>
      </nz-affix>
    </div>
  </div>
  `,
  styles: [`
  :host ::ng-deep .scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }

  :host ::ng-deep .background {
    padding-top: 60px;
    height: 300px;
    background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
  }
  `]
})
export class NzDemoAffixContainerComponent { }
