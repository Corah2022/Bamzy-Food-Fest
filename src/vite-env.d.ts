/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOTE_FORM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
