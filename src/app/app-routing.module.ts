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
import {RatingComponent} from './pages/rating/rating.component';
import {PanelComponent} from './pages/panel/panel.component';
import {AvatarComponent} from './pages/avatar/avatar.component';
import {CardComponent} from './pages/card/card.component';
import {TabsComponent} from './pages/tabs/tabs.component';
import {TagComponent} from './pages/tag/tag.component';
import {ToastComponent} from './pages/toast/toast.component';
import {PaginationComponent} from './pages/pagination/pagination.component';
import {ListComponent} from './pages/list/list.component';
import {CarouselComponent} from './pages/carousel/carousel.component';
import {ButtonsComponent} from './pages/buttons/buttons.component';
import {BreadcrumbComponent} from './pages/breadcrumb/breadcrumb.component';
import {WhyAltaComponent} from './pages/why-alta/why-alta.component';
import {ThemingComponent} from './pages/theming/theming.component';
import {AccorditionComponent} from './pages/accordition/accordition.component';
import {LoaderComponent} from './pages/loader/loader.component';
import {DividerComponent} from './pages/divider/divider.component';

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
    path: 'avatar',
    component: AvatarComponent
  },
  {
    path: 'card',
    component: CardComponent
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
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'toast',
    component: ToastComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent
  },
  {
    path: 'accordition',
    component: AccorditionComponent
  },
  {
    path: 'why-alta',
    component: WhyAltaComponent
  },
  {
    path: 'theming',
    component: ThemingComponent
  },
  {
    path: 'loader',
    component: LoaderComponent
  },
  {
    path: 'divider',
    component: DividerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
