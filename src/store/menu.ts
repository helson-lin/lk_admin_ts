import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const useMenu = defineStore('menu', {
    state: (): MenuStore => ({
        list: [],
        activeMenu: [],
        active: null,
    }),
    actions: {
        async getMenuData() {
            const res = await axios({ url: 'getMenuData', method: 'GET' })
            if (res.code === 200) {
                this.list = res.data
                this.active = res.data[0].name
            } else {
                throw new Error('Invalid Request menu')
            }
        },
        addMenu(menu: MenuItem) {
            this.activeMenu.push(menu)
        },
        setMeu(menu: MenuItem) {
            this.activeMenu = [menu]
        },
        resetMenu() {
            this.activeMenu = []
        },
    },
})

export default useMenu
