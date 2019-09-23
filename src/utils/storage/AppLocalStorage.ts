import { StorageInterface } from './storage.types'

export class AppLocalStorage implements StorageInterface {
  setItem(name: string, value: string) {
    localStorage.setItem(name, value)
  }

  getItem(name: string) {
    return localStorage.getItem(name)
  }

  removeItem(name: string) {
    return localStorage.removeItem(name)
  }

  clear() {
    localStorage.clear()
  }
}
