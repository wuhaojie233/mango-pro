import { Settings } from '../app/@shared/interface/settings'
export const environment = {
  production: true,
  useHash: true,
  settings: (): Settings => {
    return {
      title: 'NG-Zorro', // 项目名字
      navTheme: false, // 菜单主题
      primaryColor: '#52C41A', // 蚂蚁设计原色
      layout: 'sidemenu', // 导航菜单位置: `sidemenu` or `topmenu`
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
