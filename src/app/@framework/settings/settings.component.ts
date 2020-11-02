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
import darkThemeVars from 'ng-zorro-antd/dark-theme'
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
  ) {}

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
    // const fs = require('fs')
    // var fs = require('file-system')
    // const appStyles = 'assets/themes/default.less' // 应用的样式入口文件
    // const themeContent = `@import '${appStyles}';`
    const themeContent = require('ng-zorro-antd/ng-zorro-antd.less')
    // const themeContent = `@import '${appStyles}';`
    less
      .render(themeContent, {
        javascriptEnabled: true,
        plugins: [new LessPluginCleanCSS({ advanced: true })],
        modifyVars: {
          // ...darkThemeVars,
          '@primary-color': 'red',
        },
      })
      .then((data) => {
        this.globalCss = data.css
        // fs.writeFileSync(
        //   // 主题样式的输出文件
        //   'path/assets/themes/style.dark.css',
        //   data.css
        // )
      })
      .catch((e) => {
        // 记录渲染错误
        console.error(e)
      })
  }

  /**
   * @description 设置主题颜色
   * @param {*} data 颜色
   */
  setThemeStyle(theme) {
    // this.createheme()
    // return
    console.warn('theme---->' + theme)
    if (theme === 'dark') {
      const node = document.createElement('link')
      node.rel = 'stylesheet/less'
      node.type = 'text/css'
      node.href = 'assets/themes/default.less'
      // document.getElementsByTagName('body')[0].appendChild(node)
      // const style = document.createElement('link')
      // style.type = 'text/css'
      // style.rel = 'stylesheet'
      // style.id = 'dark-theme'
      // style.innerHTML = this.globalCss
      // document.body.appendChild(node)
      // document.getElementsByTagName('body')[0].appendChild(node)

      less.modifyVars({ '@primary-color': 'blue' }).then(() => {
        this.zone.run(() => this.cdr.detectChanges())
      })
      // setTimeout(()=>{

      // },1000)
    } else {
      // const dom = document.getElementById('dark-theme')
      // if (dom) {
      //   dom.remove()
      // }
    }
    // document.body.setAttribute('data-theme-style', theme)
  }
}
