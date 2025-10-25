import {resolve} from 'path';
import {defineConfig} from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                barbers: resolve(__dirname, 'barbers.html'),
                hours: resolve(__dirname, 'hours.html')
            }
        }
    }
})
