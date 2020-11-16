import { NgModule } from '@angular/core'
import { ManageComponent } from './manage.component'
import { ManageRoutingModule } from '../../routes/framework/pages/manage.routing.module'

@NgModule({
  imports: [ManageRoutingModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class ManageModule {}
