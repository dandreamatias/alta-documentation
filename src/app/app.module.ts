import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ImageComponent } from './pages/image/image.component';
import 'alta-ui/dist/alta-ui/alta-ui.esm.js';
import { InputTextComponent } from './pages/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { ProgressComponent } from './pages/progress/progress.component';
import { TableComponent } from './pages/table/table.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { RatingComponent } from './pages/rating/rating.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { CardComponent } from './pages/card/card.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { ListComponent } from './pages/list/list.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { TagComponent } from './pages/tag/tag.component';
import { ToastComponent } from './pages/toast/toast.component';
import { WhyAltaComponent } from './pages/why-alta/why-alta.component';
import { ThemingComponent } from './pages/theming/theming.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { AccorditionComponent } from './pages/accordition/accordition.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { DividerComponent } from './pages/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavComponent,
    HomeComponent,
    GetStartedComponent,
    AlertComponent,
    ModalComponent,
    ImageComponent,
    InputTextComponent,
    ProgressComponent,
    TableComponent,
    DropdownComponent,
    RatingComponent,
    PanelComponent,
    AvatarComponent,
    CardComponent,
    ButtonsComponent,
    BreadcrumbComponent,
    ListComponent,
    PaginationComponent,
    TabsComponent,
    TagComponent,
    ToastComponent,
    WhyAltaComponent,
    ThemingComponent,
    CarouselComponent,
    AccorditionComponent,
    LoaderComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
