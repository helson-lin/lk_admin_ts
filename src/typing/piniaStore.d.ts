declare interface MenuItem {
  path: string
  name: string
  icon?: string
  pid?: string
}

declare type MenuList = MenuItem[]

declare interface MenuStore {
  list: MenuList
  activeMenu: MenuItem[]
  active: null | string
}
