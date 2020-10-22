import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthModule } from '../@auth/auth.module'
import { environment } from './../../environments/environment'
import { LoginComponent } from '../@auth/components/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/@framework/framework.module').then(
        (m) => m.FrameworkModule
      ),
  },
  { path: '**', redirectTo: 'login' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
    AuthModule,
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
