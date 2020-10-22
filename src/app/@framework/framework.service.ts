import { Injectable } from '@angular/core'
import { Settings } from '../@shared/interface/settings'

@Injectable({
  providedIn: 'root',
})
export class FrameworkService implements Settings {
  title: string = 'NG-Zorro'

  navTheme: string = 'dark'

  primaryColor: string = '#52C41A'

  layout: string = 'sidemenu'

  contentWidth: string = 'Fluid'

  fixedHeader: boolean = false

  fixSider: boolean = false

  colorWeak: boolean = false

  menu: any = {
    locale: true,
  }
  constructor() {}
  setSettingValue(setting: Settings) {
    this.title = setting.title
    this.navTheme = setting.navTheme
    this.primaryColor = setting.primaryColor
    this.layout = setting.layout
    this.contentWidth = setting.contentWidth
    this.fixedHeader = setting.fixedHeader
    this.fixSider = setting.fixSider
    this.colorWeak = setting.colorWeak
    this.menu = setting.menu
  }
}
