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
    'getData': '/getData',
    'othersData': '/othersData',
    'getMenuData': '/data/menu.json',
}
/**
 * @description: 所有的接口列表类型
 * @param {*} 无参数
 * @return {*} 无返回值
 */
export type apiKeyType = keyof typeof apiList;
/**
 * @description: 接口对应的数据返回值类型
 * @param {*} 无参数
 * @return {*} 无返回值
 */
export interface apiKeyDataType {
    'getData': {
        code: number;
        data: {
            name: string;
            age: number;
            work: string[]
        }
    },
    'othersData': {
        code: number;
        data: string[]
    },
    'getMenuData': {
        code: number;
        data: MenuList;
    }
}

export default apiList;
