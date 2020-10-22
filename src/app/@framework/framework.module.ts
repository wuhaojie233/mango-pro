import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FrameWorkRoutingModule } from '../routes/framework/framework-routing.module'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SiderComponent } from './sider/sider.component'
import { IconsProviderModule } from '../icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { SettingsComponent } from './settings/settings.component'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
const componrnt = [
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  SiderComponent,
  SettingsComponent,
]

@NgModule({
  declarations: [...componrnt, SettingsComponent],
  imports: [
    CommonModule,
    FrameWorkRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDrawerModule,
    NzButtonModule,
  ],
})
export class FrameworkModule {}
