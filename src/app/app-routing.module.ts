import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GetStartedComponent} from './get-started/get-started.component';
import {AlertComponent} from './alert/alert.component';
import {ModalComponent} from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
