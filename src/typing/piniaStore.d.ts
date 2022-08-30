declare interface MenuItem {
    path: string;
    name: string;
    icon?: string;
}

declare type MenuList = MenuItem[];

declare interface MenuStore {
    list: MenuList,
    index: number,
    active: null | string,
} 