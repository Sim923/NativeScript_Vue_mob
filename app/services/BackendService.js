import { getString, setString } from 'tns-core-modules/application-settings'

const tokenKey = "token";
const appType="Audi";
/**
 * Parent service class. Has common configs and methods.
 */
export default class BackendService {
  constructor() {
    this.apiUrl = "http://35.177.206.206:7070/"
    console.log("The API URL IS: " + this.apiUrl);
  }

  isLoggedIn() {
    return !!getString(tokenKey);
  }

  get token() {
    return getString(tokenKey);
  }

  set token(newToken) {
    setString(tokenKey, newToken);
  }

  validateCode(response) {
    return new Promise((resolve, reject) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        resolve(response)
        console.log("resoponce code was okay :)" + response)
      }

      reject('Response with code: ' + response.statusCode +
        '\nContent: ' + response.content.toString())
    })
  }

  getLoginSession(response){
        return new Promise((resolve, reject) => {
      //console.info('Content: ' + response.content.toString())
      resolve(response.content.toString())
    })
      .catch(e => {
        //console.error('Error parsing session response: ' + e)
        throw 'Error parsing response: ' + e
      })
  }

  getJson(response) {
    return new Promise((resolve, reject) => {
      console.log("I resolved a JSON" + response.title);
     // console.info('Content: ' + response.content.toString())
      resolve(response.content.toJSON())
    })
      .catch(e => {
       // console.error('Error parsing JSON response: ' + e)
        throw 'Error parsing JSON response: ' + e
      })
  }
}