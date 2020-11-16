import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WelcomeComponent } from '../../../pages/welcome/welcome.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent, data: { animation: 'welcome' } },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
