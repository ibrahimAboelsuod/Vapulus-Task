import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
