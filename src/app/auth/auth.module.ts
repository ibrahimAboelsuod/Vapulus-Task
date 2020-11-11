import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
