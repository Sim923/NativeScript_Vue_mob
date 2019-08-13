import * as http from 'tns-core-modules/http'
import BackendService from './BackendService'

export default class AccountsService extends BackendService {

  get() {
    return http.request({
      url: this.apiUrl+'users/profile/get',
      method: 'GET',
      headers: this.getHeaders(),
    })
    .then(this.validateCode)
    .then(this.getJson)
      .then(data => {
       // console.info(data);
       // console.log(this.apiUrl + 'cBlock/'+this.appType+'/'+cblocktype+'/list');
       // console.info(`Received ${data.length} items from the backend.`)
        return new Promise((resolve, reject)=>{
          
                  resolve(data);
                });

    })
  }

  getHeaders(toAppend = {}) {
    return Object.assign({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    },
    toAppend)
  }
}