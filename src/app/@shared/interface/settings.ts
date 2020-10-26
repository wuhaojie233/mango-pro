export interface Settings {
  /**
   * 项目名字
   */
  title: string
  /**
   * 菜单主题 true:light/falsedark
   */
  navTheme: boolean
  /**
   * 蚂蚁设计原色
   */
  primaryColor: string
  /**
   * 导航菜单位置: `sideMenu` or `topMenu`
   */
  layout: string
  /**
   * 内容布局:“流体”或“固定”，只在布局是顶部菜单时工作  `Fluid` or `Fixed`
   */
  contentWidth: string
  /**
   * 粘性的头 header
   */
  fixedHeader: boolean
  /**
   * 粘性的 siderbar
   */
  fixSider: boolean
  /**
   * 色弱
   */
  colorWeak: boolean
  /**
   * 菜单
   */
  menu: any
  pwa?: false
  iconfontUrl?: ''
}
