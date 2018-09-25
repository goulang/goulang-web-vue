export const articleJson:Array<object>

= [
    {
        title           : '文章标题1',       //文章标题
        name            : 'Yo...Amanda',         //发布人
        time            : '2018年9月25日17:26:48',       //发布时间
        user_avatar     : require("@/assets/imgs/logo.jpg"),       //用户头像
        img             : require("@/assets/imgs/hqy.png"),       //主图
        content         : '发布内容1',       //发布内容
        attention       : true,           //关注用户
    },
    {
        title           : '文章标题2',       //文章标题
        name            : 'goulang',         //发布人
        time            : '2018年9月25日17:26:51',       //发布时间
        user_avatar     : require("@/assets/imgs/hqy.png"),       //用户头像
        img             : require("@/assets/imgs/gd.png"),       //主图
        content         : '发布内容2',       //发布内容
        attention       : true,           //关注用户
    },
];

export const asideJson:Array<object>

= [
    {
        title   : '文章标题',
        name    : '发布人',
        time    : '发布时间',
        img     : '发布图片',
        content : '发布内容',
    }
];


export const footerJson:Array<object>

= [{
    title: '关于我们', name: 'about'
}
,{
    title: 'APP', name: 'app'
}
,{
    title: '隐私', name: 'privacy'
}];

