import { FrameworkService } from './../framework.service'
import { environment } from './../../../environments/environment'
import { Component, OnInit } from '@angular/core'
import { Settings } from '../../@shared/interface/settings'

@Component({
  selector: 'mango-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false
  settings: Settings = environment.settings()
  constructor(private frameService: FrameworkService) {
    this.frameService.setSettingValue(this.settings)
  }

  ngOnInit(): void {}

  console() {
    console.warn(this.settings)
  }
}
