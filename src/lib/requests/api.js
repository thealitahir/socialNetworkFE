class Api {
  static async headers() {
    return {
      'Content-Type': 'application/json',
      mode: 'no-cors',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
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

  static async xhr(route, params, verb) {
    const host = 'http://aqueous-dusk-72684.herokuapp.com/api/';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = await Api.headers();

    return fetch(url, options).then((resp) => {
      return resp.json();
    });
  }
}
export default Api;
