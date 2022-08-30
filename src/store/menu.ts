import { defineStore } from 'pinia'
import axios from "../plugins/axios"
import { CustomReponse } from '../typing/axios';

const useMenu = defineStore('menu', {
    state: (): MenuStore => ({
        list: [],
        index: 0,
        active: null,
    }),
    actions: {
        async getMenuData() {
            const res = await axios({url: 'getMenuData', method: 'GET'});
            if(res.code === 200) {
                this.list = res.data;
                this.active = res.data[0].name;
            } else {
                throw new Error("Invalid Request menu")
            }
        },
    }
})

export default useMenu