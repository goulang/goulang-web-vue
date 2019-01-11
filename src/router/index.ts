
// 导入路由文件
import VueRouter from "./router";
// 路由拦截等----

VueRouter.beforeEach((to,from,next)=>{
    
    console.log(to)
    next()
})
// 这里是路由拦截文件

// 路由拦截等----
export default VueRouter;
