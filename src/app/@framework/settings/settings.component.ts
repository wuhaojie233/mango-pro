import { Component, Input, OnInit } from '@angular/core'
import { Settings } from '../../@shared/interface/settings'
import { FrameworkService } from '../framework.service'

@Component({
  selector: 'mango-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  nzVisible = false

  get theme() {
    return this.frameService.navTheme
  }

  constructor(private frameService: FrameworkService) {}

  ngOnInit(): void {}
  setTheme(data) {
    this.frameService.navTheme = data
  }
  setMenu(data) {
    this.frameService.layout = data
  }
  switch() {
    this.nzVisible = !this.nzVisible
  }
  close() {
    this.nzVisible = false
  }

  /**
   * @description 设置主题颜色
   * @param {*} data 颜色
   */
  setThemeStyle(data) {
    document.body.setAttribute('data-theme-style', data)
  }
}
