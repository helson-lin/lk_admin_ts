declare namespace Api {
    declare type UserItem = {
        uid: string
        username: string
        department: string
        crtTm: string
    }
    declare type UserList = UserItem[]
    declare type Pagniation = {
        page: number
        pageSize: number
        total: number
    }
}
