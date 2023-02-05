/// <reference types="vite/client" />

// memo: 環境変数定義時はVITE_から始めること。でないと読み込んでくれない。
// https://ja.vitejs.dev/guide/env-and-mode.html
interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}