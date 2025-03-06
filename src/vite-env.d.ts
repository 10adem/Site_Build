/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  // diğer env değişkenlerinizi buraya ekleyebilirsiniz
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
