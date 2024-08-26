/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_PROTOCOL: string;
    readonly VITE_APP_API_HOST: string;
    readonly VITE_APP_API_PORT: string;
    readonly VITE_APP_API_PREFIX: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}