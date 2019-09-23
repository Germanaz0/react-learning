import { StorageInterface } from './storage.types'

export class AppSessionStorage implements StorageInterface {
  setItem(name: string, value: string) {
    sessionStorage.setItem(name, value)
  }

  getItem(name: string) {
    return sessionStorage.getItem(name)
  }

  removeItem(name: string) {
    return sessionStorage.removeItem(name)
  }

  clear() {
    sessionStorage.clear()
  }
}
