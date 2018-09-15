/**
 * @name ApiService文件
 * @name 请求函数定义必须支持RESUful,API模式
 * 
 */
import HttpService from "./../httpService/httpService";
import {SERVICE_USER_URL} from "./../contants/contants"
export default class ApiService {
  constructor(public http:HttpService){}
  /***************************************************测试模块一***STR********************************************************/
  /**
   * @name 函数命名方式,小驼峰,get+接口名
   * @name 函数作用得到全部测试列表数据
   * @param {参数1} param1
   * @returns {测试列表数据} 
   */
  getTest() {
    return this.http.get("test")
  }
  /**
   * @name 函数命名方式,小驼峰,get+接口名+ById
   * @name 通过ID查询单条数据,这里必须是这样子命名,只更换url为函数名,get+url+ById,参数必须是id 
   * @param {id} id
   * @returns {得到测试的单条数据} 
   */
  getTestById(id:number) {
    let param = {
      id
    }
    let url = `goods/${id}`;
    return this.http.get(url, param);
  }

  /**
  * @name  函数命名方式,小驼峰,post+接口名
  * @name  新增一个测试数据,根据业务复杂度,可以传递一个form对象,可以传递多个参数
  * 举例1
  *   postTest(body) {
  *      let param = body
  *      return this.http.postFormData('test', param)
  *   }
  * 
  * 举例2
  *   postTest(param,param2,param3,....) {
  *      let param = {
  *              param,
  *              param2,
  *              param3,
  *              ....
  *          }
  *      return this.http.postFormData('test', param)
  *   }
  * @param {一个formdata对象}
  * @returns {操作状态码}
  */
  postTest(body:object) {
    let param = body
    return this.http.postFormData('test', param)
  }

  /**
   * @name 函数命名方式,小驼峰,put+接口名
   * @name 编辑一条测试数据
   * 举例1
   *  putTest(body) {
   *      let param = body
   *      return this.http.postFormData('test', param)
   *   }
   * 
   * 举例2
   *  putTest(param,param2,param3,....) {
   *      let param = {
   *              param,
   *              param2,
   *              param3,
   *              ....
   *          }
   *      return this.http.postFormData('test', param)
   *   }
   * @returns {操作状态码}
   */
  putTest(body:object) {
    let param = body
    return this.http.put('test/save', param)
  }

  /**
   * @name 函数命名规则,小驼峰,delete+接口名
   * @name 批量删除测试数据,这里必须是这样子命名,只更换url为函数名,delete+接口名,参数必须是ids
   * @returns {操作状态码}
   */ 
  deleteTest(ids:string) {
    let param = {
      ids
    }
    return this.http.delete('test/batchDel', param)
  }
  /**
   * @name 函数命名规格,小驼峰,delete+接口名+ById,参数必须是id
   * @name 删除一条测试数据
   * @returns {操作状态码}
   * 
   */
  deleteTestById(id:number) {
    let param = {
      id
    }
    return this.http.delete('test', param)
  }
  /***************************************************测试模块一***END********************************************************/
  
  /***************************************************登录模块***STR********************************************************/
  postLogin(username:string,password:string){
    let param={
      username,
      password,
      grant_type: "password",
      scope: "manage",
      client_id: "ggnf_admin",
      client_secret: 123456
    }
    return this.http.postXWwwFormUrlEncodedReturn(`${SERVICE_USER_URL}`,param)
  }
  /***************************************************登录模块***END********************************************************/

  /***************************************************注册模块***STR********************************************************/
  /**
   * @name 公司详情 
   * 
   * 
   */
  getCompanyById(){
    let param = {}
      return this.http.get('company',param);
  }
  /***************************************************注册模块***END********************************************************/

  /***************************************************模块四***STR********************************************************/
  /***************************************************模块四***END********************************************************/

  /***************************************************模块五***STR********************************************************/
  /***************************************************模块五***END********************************************************/

  /***************************************************模块六***STR********************************************************/
  /***************************************************模块六***END********************************************************/

  /***************************************************模块七***STR********************************************************/
  /***************************************************模块七***END********************************************************/

  /***************************************************模块八***STR********************************************************/
  /***************************************************模块八***END********************************************************/

}
