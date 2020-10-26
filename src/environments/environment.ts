// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useHash: true,
  settings: (): Settings => {
    return {
      title: 'NG-Zorro', // 项目名字
      navTheme: false, // 菜单主题
      primaryColor: '#52C41A', // 蚂蚁设计原色
      layout: 'sideMenu', // 导航菜单位置: `sideMenu` or `topmenu`
      contentWidth: 'Fluid', //内容布局:“流体”或“固定”，只在布局是顶部菜单时工作  `Fluid` or `Fixed`
      fixedHeader: false, // 粘性的头 header
      fixSider: false, //  粘性的 siderbar
      colorWeak: false, // 色弱
      menu: {
        locale: true,
      }, // 菜单
    }
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import { Settings } from '../app/@shared/interface/settings'
