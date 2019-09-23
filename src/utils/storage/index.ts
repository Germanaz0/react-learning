import { AppStorage } from './AppStorage'
import { AppStorageTypes } from './storage.types'

export * from './storage.types'

/**
 * Get an instance of app storage ready to use with local storage.
 */
export const getLocalStorage = () => {
  return new AppStorage(AppStorageTypes.LOCAL)
}

/**
 * Get an instance of app storage ready to use with session storage
 */
export const getSessionStorage = () => {
  return new AppStorage(AppStorageTypes.SESSION)
}

/**
 * Get an instance of app storage ready to use with cookies.
 */
export const getCookieStorage = () => {
  return new AppStorage(AppStorageTypes.COOKIE)
}
