import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { SharedModule } from '../shared/shared.modules';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

const Components = [AppComponent, HomeComponent];
@NgModule({
  declarations: [...Components],
  providers: [],
  imports: [SharedModule, BrowserModule, AppRoutingModule],
  exports: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
