export enum AppStorageTypes {
  LOCAL = 'LOCAL',
  SESSION = 'SESSION',
  COOKIE = 'COOKIE',
}

export interface StorageInterface {
  setItem: (name: string, value: string) => void
  getItem: (name: string) => string | null
  removeItem: (name: string) => void
  clear: () => void
}
