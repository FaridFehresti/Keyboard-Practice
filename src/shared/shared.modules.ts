import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import {} from 'ng-zorro-antd/';
import {} from 'ng-zorro-antd/';
import {} from 'ng-zorro-antd/';
import { BrowserModule } from '@angular/platform-browser';

const Vital = [FormsModule, RouterOutlet, ReactiveFormsModule, BrowserModule];
const antd = [
  NzButtonModule,
  NzTableModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzMenuModule,
  NzSpinModule,
  NzSkeletonModule,
];
const components = [];
@NgModule({
  declarations: [],
  imports: [...antd, ...Vital],
  exports: [...antd, ...Vital],
})
export class SharedModule {}
