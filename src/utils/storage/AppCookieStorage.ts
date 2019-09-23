import Cookies from 'universal-cookie'
import { StorageInterface } from './storage.types'

export class AppCookieStorage implements StorageInterface {
  storage: Cookies

  cookieOptions: object = { path: '/' }

  constructor() {
    this.storage = new Cookies()
  }

  setItem(name: string, value: string) {
    this.storage.set(name, value, this.cookieOptions)
  }

  getItem(name: string) {
    return this.storage.get(name, { doNotParse: true })
  }

  removeItem(name: string) {
    return this.storage.remove(name, this.cookieOptions)
  }

  clear() {
    const allCookies = this.storage.getAll()
    Object.keys(allCookies).forEach(name => this.removeItem(name))
  }
}
