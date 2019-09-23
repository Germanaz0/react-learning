import { AppStorageTypes, StorageInterface } from './storage.types'
import { AppLocalStorage } from './AppLocalStorage'
import { AppCookieStorage } from './AppCookieStorage'
import { AppSessionStorage } from './AppSessionStorage'

export class AppStorage implements StorageInterface {
  storage: StorageInterface

  constructor(type: AppStorageTypes = AppStorageTypes.LOCAL) {
    switch (type) {
      case AppStorageTypes.COOKIE:
        this.storage = new AppCookieStorage()
        break
      case AppStorageTypes.SESSION:
        this.storage = new AppSessionStorage()
        break
      default:
        this.storage = new AppLocalStorage()
        break
    }
  }

  getItem(name: string) {
    return this.storage.getItem(name)
  }

  setItem(name: string, value: string) {
    return this.storage.setItem(name, value)
  }

  removeItem(name: string) {
    return this.storage.removeItem(name)
  }

  clear() {
    this.storage.clear()
  }
}
