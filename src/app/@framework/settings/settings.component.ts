import {
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnInit,
} from '@angular/core'
import { Settings } from '../../@shared/interface/settings'
import { FrameworkService } from '../framework.service'

import less from 'less'
// import * as LessPluginCleanCSS from 'less-plugin-clean-css'
// import darkThemeVars from 'ng-zorro-antd/dark-theme'
declare var LessPluginCleanCSS: any

@Component({
  selector: 'mango-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  nzVisible = false
  globalCss = ''
  get theme() {
    return this.frameService.navTheme
  }

  constructor(
    private frameService: FrameworkService,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    // const node = document.createElement('link')
    // node.rel = 'stylesheet/less'
    // node.type = 'text/css'
    // node.href = 'assets/themes/default.less'
    // document.getElementsByTagName('head')[0].appendChild(node)
  }

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

  removeStyle() {
    const dom = document.getElementById('dark-theme')
    if (dom) {
      dom.remove()
    }
  }

  /**
   * @description 设置主题颜色
   * @param {*} data 颜色
   */
  setThemeStyle(theme) {
    const appStyles = 'assets/themes/default.less' // 应用的样式入口文件
    const themeContent = `@import '${appStyles}';`
    less
      .render(themeContent, {
        javascriptEnabled: true,
        plugins: [new LessPluginCleanCSS({ advanced: true })],
        modifyVars: {
          // ...darkThemeVars,
          '@primary-color': theme,
        },
      })
      .then((data) => {
        this.globalCss = data.css
        const style = document.createElement('style')
        style.id = 'dark-theme'
        style.innerHTML = this.globalCss
        // document.body.appendChild(node)
        this.removeStyle()
        document.getElementsByTagName('head')[0].appendChild(style)
      })
      .catch((e) => {
        // 记录渲染错误
        console.error(e)
      })
  }
}
