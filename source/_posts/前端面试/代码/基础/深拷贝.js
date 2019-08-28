// 优秀的深拷贝啊，哈哈哈

function deepClone(obj) {
  const hash = new Map();
  return clone(obj);
  function clone(obj) {
    if (hash.has(obj)) return hash.get(obj);
    if (obj === null) return null;
    let t = typeof obj;
    let cobj;
    switch (t) {
      case "string":
      case "number":
      case "boolean":
      case "undefined":
        return obj;
      case "function":
        return eval(obj.toString());
    }
    if (Array.isArray(obj)) {
      cobj = [];
      obj.forEach(a => {
        cobj.push(clone(a));
      });
      return cobj;
    }
    cobj = obj.constructor !== Object ? Object.create(obj.constructor.prototype) : {};
    hash.set(obj, cobj);
    if (Object.prototype.toString.call(obj) === "[object Object]") {
      Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach(a => {
          cobj[a] = clone(obj[a]);
        });
    }
    return cobj;
  }
}
