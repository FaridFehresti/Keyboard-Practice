import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
