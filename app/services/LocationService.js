import * as http from 'tns-core-modules/http'
import BackendService from './BackendService'

export default class LocationService extends BackendService {

  list() {
    return http.request({
      url: this.apiUrl+'location/Audi/list',
      method: 'GET',
      headers: this.getHeaders(),
    })
    .then(this.validateCode)
    .then(this.getJson)
      .then(data => {
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