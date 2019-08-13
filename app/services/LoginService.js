import * as http from 'tns-core-modules/http'
import BackendService from './BackendService'

export default class LoginService extends BackendService{

  login(user) {
    console.log(this.apiUrl + "users/login/"+user.email+"/"+user.password);

    return http.request({
      url: this.apiUrl + "users/login/"+user.email+"/"+user.password,
      method: "GET",
      headers: {
        "Content-Type": "text/html"
      },
      content: "",
    })
    .then(this.validateCode)
    .then(this.getLoginSession)
    .then(data => {
      console.info('User logged in with token: ' + data)
      this.token = data.toString()
    })
  }

  register(user) {
    return http.request({
      url: this.apiUrl + "Users",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
    })
    .then(this.validateCode)
    .then(this.getJson)
    .then(data => {
      console.info('User registered: ' + data.Result.Id)
    })
  }

  resetPassword(email) {
    return http.request({
      url: this.apiUrl + "Users/resetpassword",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify({
        Username: email,
      }),
    })
    .then(this.validateCode)
    .then(this.getJson)
    .then(data => {
      console.info('Reset password for email: ' + data.Result.Result)
    })
  }

  logout() {
    this.token = ""
  }

}