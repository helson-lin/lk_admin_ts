declare interface CustomReponse<T> {
    code: number
    message?: string
    data?: T | any
}
