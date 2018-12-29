// 登录
export interface Login {
    name: string;
    age: string;
}
// 注册
export interface Register {
    name: string;
    password: string;
    email: string;
    description?: string;
    admin?: boolean;
    avatar?: string;
}
// 发布一个帖子
export interface Topic {
    title: string;
    content: string;
    view: string;
    userID: string;

}
