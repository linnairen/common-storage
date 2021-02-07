/**
 * 通用本地储存
 */
export namespace CommonStore {
  /**
   * 获取本地存储
   * @param {String} key
   * @returns {*}
   */
  export function GetStore(key: string):any {
    let item = localStorage.getItem(key)
    let obj = null
    if (item) {
      try {
        obj = JSON.parse(item)
      } catch(e) {
        obj = item
      }
    }
    return obj
  }
  /**
   * 设置本地存储
   * @param {String} key
   * @param {*} value
   * @returns {*}
   */
  export function SetStore(key: string, value?: any):any {
    if (key) {
      if (value === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
    return value
  }
}