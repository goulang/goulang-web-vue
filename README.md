# 够浪社区 Vue+TypeScript+Sass
## 技术栈 
Vue + TypeScript + Sass
## 环境
* NodeJS -version  >= 8.11.2
## 项目运行,使用方法
* git clone git@github.com:goulang/goulang-web-vue.git
* cd goulang-web-vue
* 安装依赖
* npm install  或 yarn (推荐)
* 运行
* yarn serve  
* 打包
* yarn build 
* 测试
* yarn test:unit
* ...... 
## 功能
- [ ] 首页 -- 状态进行中
- [ ] 教程 -- 状态进行中
- [ ] 资源 -- 状态进行中
- [ ] 人才 -- 状态进行中
- [ ] 合作 -- 状态进行中
- [ ] 搜索 -- 状态进行中
- ......
## 项目规范
### 命名规范
#### 小驼峰
* 变量
* 文件名
* 文件夹名
* 导出的样式名

#### 大驼峰
* 类名

#### 大写+下划线      
* 全部的常量      ADD_DATA_BY_GO

#### servers
* ApiService 必须符合ApiService里面的测试函数定义方式,必须符合请求定义方式,具体Demo见ApiServer.js文件
* HttpService 禁止修改

### 代码函数规范
* 所有的函数均需要采用如下格式
```javascript
    goulang(){
        return ();
    }
    test(){
        return ();
    }
```
### 代码组件规范
* 所有的代码尽可能的做到组件分离
## 目录结构
新建文件,必须遵循以下目录结构布局方式    
- ├── app                                        // 项目Vue目录--源码目录      
- │   ├── assets                                 // 静态资源,或者第三方资源         
- │   ├── components                             // 公共通用组件 
- │   ├── pages                                  // 全部的UI
- │   │   ├── home                               // UI组件,页面一 
- │   │   ├── pay                                // UI组件,页面二      
- │   │   ├── provide                            // UI组件,页面三
- │   │   │   ├── components                     // 当前模块页面下的组件
- │   │   │   ├── images                         // 当前模块页面下的静态图片
- │   │   │   ├── style                          // 当前模块页面下的样式
- │   │   │   │   ├── commonStyle.js             // 当前模块的---->>>>>>>> [ 通用样式 ]
- │   │   │   │   └── cartStyle.js               // 当前模块单个页面UI的样式 
- │   │   │   └── cart.js                        // 当前模块的UI样式
- │   │   └── supplier                           // UI组件,页面四          
- │   ├── router                                 // router导航路由,[ 必须按照模块进行新建文件 ]     
- │   ├── services                               // 全部的服务工具函数
- │   │   ├── apiService                         // 请求接口类
- │   │   │   └── apiService.js                  // 请求接口类函数,必须写到此处,必须按照里面的测试代码书写函数名     
- │   │   ├── contants                           // 请求静态地址
- │   │   │   └── contants.js                    // 请求静态地址        
- │   │   ├── httpService                        // 请求方法类
- │   │   │   └── httpService.js                 // 请求方法类封装,>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>禁止
- │   │   ├── previewimgService                  // 图片base64预览类
- │   │   │   └── previewimgService.js           // 图片base64预览类
- │   │   ├── regService                         // 正则匹配类
- │   │   │   └── regService.js                  // 正则匹配类,请一一添加
- │   │   └── untiService                        // 工具函数类
- │   │       └── untiService.js                 // 工具函数类    
- │   ├── store                                  // store 文件夹                 
- ├── node_modeles                               // 项目依赖文件
```


