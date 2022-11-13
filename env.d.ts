/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_NAME: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
