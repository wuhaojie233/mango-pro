// import { DeviceManagementComponent } from './device-management/device-management.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { ManageComponent } from 'src/app/pages/manage/manage.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ManageComponent,
    // data: { animation: 'manage' },
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
