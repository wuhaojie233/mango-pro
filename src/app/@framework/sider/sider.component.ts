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
  get nzTheme() {
    return this.frameService.navTheme
  }
  constructor(private frameService: FrameworkService) {}

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
