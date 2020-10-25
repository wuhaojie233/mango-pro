import { FrameworkService } from './../framework.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'mango-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
})
export class SiderComponent implements OnInit {
  isCollapsed = false
  nzMode = 'inline'
  // nzTheme = 'dark'
  getter

  get nzTheme() {
    console.warn('我要获取的值' + this.frameService.navTheme)
    return this.frameService.navTheme
  }

  setter() {}
  constructor(public frameService: FrameworkService) {}

  ngOnInit(): void {}

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false,
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false
      }
    }
  }
}
