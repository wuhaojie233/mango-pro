import { NgModule } from '@angular/core'
import { WelcomeRoutingModule } from 'src/app/routes/framework/pages/welcome-routing.module'

import { WelcomeComponent } from './welcome.component'

@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
