import Storage from './storage';

class Api {
  static async headers() {
    return {
      'Content-Type': 'application/json',

      mode: 'no-cors',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };
  }

  static async headersMultiForm() {
    return {
      'Content-Type': 'multipart/form-data',

      'Access-Control-Allow-Origin': 'http://localhost:3000',
      //Authorization: await Storage.retrieveData('access_token'),
      //authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaGlsYWhtYWQxMjU4QGdtYWlsLmNvbSIsImlhdCI6MTU5ODk1MjA3NH0.9U-UGXHVfyzUIpaECyRDJlfPadBy_ykM0sUc_UA_aM4'
      // Authorization: await Storage.retrieveData('access_token').then((res) => {
      //   console.log('mkm');
      //   if (res) {
      //     return `Token ${res}`;
      //   } else {
      //     return ``;
      //   }
      // }),
      Authorization: await Storage.retrieveData('access_token').then((res) => {
        if (res) {
          return `Bearer ${res}`;
        } else {
          return ``;
        }
      }),
      // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2ExNGQ5YzMwM2M2MDAxNzYzNjMwMiIsImlhdCI6MTYwNzA3OTQ1NiwiZXhwIjoxNjE0ODU1NDU2fQ.9kYMbIgrmYYkPWvl9EbovCK9KnK2xvwB3GNPxt8bm_M',
    };
  }

  // static setStorage(resp) {
  //   Storage.storeData(
  //     'access_token',
  //     `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaGlsYWhtYWQxMjU4QGdtYWlsLmNvbSIsImlhdCI6MTU5OTA0MjI0N30.di2AchDXzbAHfROD5U2e1o6ogcVawPOTEPUT39BmOlM`,
  //   );
  // }

  static setAuth(resp) {
    Storage.storeData('isAuthenticated', resp);
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static patch(route, params) {
    return this.xhr(route, params, 'PATCH');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route) {
    return this.xhr(route, null, 'DELETE');
  }

  static deleteReact(route) {
    return this.xhr(route, null, 'DELETE');
  }

  static putMultiForm(route, parama) {
    return this.xhrMultiForm(route, parama, 'PUT');
  }

  static postMultiForm(route, parama) {
    return this.xhrMultiForm(route, parama, 'POST');
  }

  static async xhrMultiForm(route, params, verb) {
    // const host = 'https://fast-savannah-09511.herokuapp.com/api/v1/';
    // const host = 'https://9fe191ccdd0a.ngrok.io/api/v1/';
    //const host = 'https://sheltered-inlet-30058.herokuapp.com/api/v1/'
    //const host = 'https://localhost:3000/api/v1/'
    // const host = 'https://mobile-cartzy-backend.herokuapp.com/'
    const host = 'https://san-and-tan.herokuapp.com/api/v1/';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: params } : null);
    options.headers = await Api.headersMultiForm();
    return fetch(url, options)
      .then((resp) => {
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }

  static async xhr(route, params, verb) {
    //const host = 'https://fast-savannah-09511.herokuapp.com/api/v1/';
    // const host = 'https://9fe191ccdd0a.ngrok.io/api/v1/';
    //const host = 'https://sheltered-inlet-30058.herokuapp.com/api/v1/';
    //const host = 'https://localhost:3000/api/v1/'
    // const host = 'https://mobile-cartzy-backend.herokuapp.com/'
    const host = 'http://aqueous-dusk-72684.herokuapp.com/api/';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = await Api.headers();

    return fetch(url, options)
      .then((resp) => {
        let json = resp.json();
        if (resp.ok) {
          if (route === 'login') {
            this.setStorage(resp);
          }
          return json;
        }
        return json.then((err) => {
          throw err;
        });
      })
      .then((json) => {
        if (route === 'login') {
          this.setAuth(json);
        }
        return json;
      });
  }
}
export default Api;
