import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ogPlugin from 'vite-plugin-open-graph';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ogPlugin({
      basic: {
        title: 'Baksara Indonesia',
        description: 'Baksara Adalah 123',
        image: {
          url: 'https://www.baksara.marcellinojg.site/images/app_icon.png',
          secureUrl: 'https://www.baksara.marcellinojg.site/images/app_icon.png',
          type: 'image/png',
          width: 1080,
          height: 1080,
        }
      },
      twitter: {
        card: 'summary',
        title: 'Baksara Indonesia',
        description: 'Baksara Adalah 123',
        image: 'https://www.baksara.marcellinojg.site/images/app_icon.png',
      },
    }),
  ],
})
