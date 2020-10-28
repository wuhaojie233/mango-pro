import { Component, Input, OnInit } from '@angular/core'
import { Settings } from '../../@shared/interface/settings'
import { FrameworkService } from '../framework.service'

// import less from 'less'
// import LessPluginCleanCSS from 'less-plugin-clean-css'
// import darkThemeVars from 'ng-zorro-antd/dark-theme'
// import * as fs from 'fs'
// declare var fs: any
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

  createheme() {
    const less = require('less')
    const LessPluginCleanCSS = require('less-plugin-clean-css')
    const fs = require('fs')
    const darkThemeVars = require('ng-zorro-antd/dark-theme')

    const appStyles = 'path/src/styles.less' // 应用的样式入口文件
    const themeContent = `@import '${appStyles}';`

    less
      .render(themeContent, {
        javascriptEnabled: true,
        plugins: [new LessPluginCleanCSS({ advanced: true })],
        modifyVars: {
          ...darkThemeVars,
        },
      })
      .then((data) => {
        fs.writeFileSync(
          // 主题样式的输出文件
          'path/assets/themes/style.dark.css',
          data.css
        )
      })
      .catch((e) => {
        // 记录渲染错误
        console.error('记录渲染错误' + e)
      })
  }

  /**
   * @description 设置主题颜色
   * @param {*} data 颜色
   */
  setThemeStyle(theme) {
    this.createheme()
    console.warn('theme---->' + theme)
    if (theme === 'dark') {
      const style = document.createElement('link')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.id = 'dark-theme'
      style.href = 'assets/themes/style.dark.css'
      // style.href = 'assets/themes/ng-zorro-antd.dark.min.css'
      document.body.appendChild(style)
    } else {
      const dom = document.getElementById('dark-theme')
      if (dom) {
        dom.remove()
      }
    }
    document.body.setAttribute('data-theme-style', theme)
  }
}
