// 登录
export interface Login {
    email: string;
    password: string;
}
// 注册
export interface Register {
    name?: string;
    email: string;
    password: string;
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
// 帖子首页
export interface TopicList {
    page: string;
    limit: string; 

}
