// import { DeviceManagementComponent } from './device-management/device-management.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { HomeComponent } from '../../@framework/home/home.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'system/welcome',
  },

  {
    path: 'system',
    component: HomeComponent,
    children: [
      {
        path: 'manage',
        loadChildren: () =>
          import('src/app/pages/manage/manage.module').then(
            (m) => m.ManageModule
          ),
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('src/app/pages/welcome/welcome.module').then(
            (m) => m.WelcomeModule
          ),
      },
      {
        path: '',
        redirectTo: 'system/welcome',
      },
      {
        path: '**',
        redirectTo: 'system/welcome',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'system/welcome',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrameWorkRoutingModule {}
