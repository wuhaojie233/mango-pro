import { FrameworkService } from './../framework.service'
import { environment } from './../../../environments/environment'
import { Component, OnInit } from '@angular/core'
import { Settings } from '../../@shared/interface/settings'
import { Router, RouterOutlet } from '@angular/router'
import { AnimationOutter } from '../../routes/aniamtion-router'

@Component({
  selector: 'mango-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [AnimationOutter],
})
export class HomeComponent implements OnInit {
  isCollapsed = false
  settings: Settings = environment.settings()
  constructor(public frameService: FrameworkService, private router: Router) {
    this.frameService.setSettingValue(this.settings)
  }

  ngOnInit(): void {}

  toRouter(data) {
    this.router.navigate([`/home/system/${data}`])
  }
  prepareRoute(outlet: RouterOutlet) {
    let status = 
      outlet && outlet?.activatedRoute && outlet.activatedRoute.component['name']
    // let status =
    //   outlet &&
    //   outlet.activatedRouteData &&
    //   outlet.activatedRouteData['animation']
    // console.warn(status)
    return status
  }
}
