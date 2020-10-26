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

  constructor(public frameService: FrameworkService) {}

  ngOnInit(): void {}

  openMap: { [name: string]: boolean } = {
    sub1: false,
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
