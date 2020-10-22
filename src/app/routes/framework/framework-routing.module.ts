// import { DeviceManagementComponent } from './device-management/device-management.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { HomeComponent } from '../../@framework/home/home.component'

const routes: Routes = [
  {
    path: '',

    pathMatch: 'full',
    redirectTo: 'system',
  },
  {
    path: 'system',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'system',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameWorkRoutingModule {}
