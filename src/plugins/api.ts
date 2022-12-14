/**
 * @description: 所有的接口列表
 * @param {*} 无参数
 * @return {*} 无返回值
 * ```js
 * key表示url路径缩写
 * value表示真实请求的路径
 * ```
 */
const apiList = {
    getMenuData: '/data/menu.json',
    getUserData: '/data/user.json',
}
/**
 * @description: 所有的接口列表类型
 * @param {*} 无参数
 * @return {*} 无返回值
 */
export type apiKeyType = keyof typeof apiList
/**
 * @description: 接口对应的数据返回值类型
 * @param {*} 无参数
 * @return {*} 无返回值
 */
export type apiKeyDataType = {
    getUserData: {
        code: number
        data: {
            list: Api.UserList
            pagination: Api.Pagniation
        }
    }
    getMenuData: {
        code: number
        data: MenuList
    }
}

export default apiList
