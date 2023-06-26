class Queryparams {
  encode(obj: {} | []) {
    return encodeURIComponent(JSON.stringify(obj));
  }
  decode(string: string) {
    try {
      return JSON.parse(decodeURIComponent(string));
    } catch (error) {
      return null;
    }
  }
  decodeObj(string: string) {
    try {
      return JSON.parse(
        '{"' +
          decodeURI(string.replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );
    } catch (error) {
      return null;
    }
  }
}

const qParams = new Queryparams();

export { qParams };
