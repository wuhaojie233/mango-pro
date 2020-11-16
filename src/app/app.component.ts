import { Component } from '@angular/core'
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { AnimationOutter } from './routes/aniamtion-router'

@Component({
  selector: 'mango-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [AnimationOutter],
})
export class AppComponent {
  animate = 'FilterPage'
  isCollapsed = false
  // router跳转动画所需参数
  routerState: boolean = true
  routerStateCode: string = 'active'
  constructor(private router: Router) {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // 每次路由跳转改变状态
    //     this.routerState = !this.routerState
    //     this.routerStateCode = this.routerState ? 'active' : 'inactive'
    //   }
    // })
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
  getRouter(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
    let status = outlet.isActivated ? outlet.activatedRoute : ''
    console.warn(status)
    return status
  }
}
