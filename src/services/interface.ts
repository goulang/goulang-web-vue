// 登录
export interface Login {
    name: string;
    age: string;
}
// 注册
export interface Register {
    name: string;
    description: string;
    email: string;
    password: string;
    admin: boolean;
    avatar: string;
}
// 发布一个帖子
export interface Topic {
    title: string;
    content: string;
    view: string;
    userID: string;
}
