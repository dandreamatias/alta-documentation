import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GetStartedComponent} from './pages/get-started/get-started.component';
import {AlertComponent} from './pages/alert/alert.component';
import {ModalComponent} from './pages/modal/modal.component';
import {ImageComponent} from './pages/image/image.component';
import {InputTextComponent} from './pages/input-text/input-text.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {TableComponent} from './pages/table/table.component';
import {DropdownComponent} from './pages/dropdown/dropdown.component';
import {RatingComponent} from './rating/rating.component';
import {PanelComponent} from './panel/panel.component';

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
  },
  {
    path: 'image',
    component: ImageComponent
  },
  {
    path: 'input-text',
    component: InputTextComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
