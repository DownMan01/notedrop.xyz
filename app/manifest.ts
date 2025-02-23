import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NoteDrop',
    short_name: 'NoteDrop',
    description: 'Discover and track the latest crypto airdrops',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favico.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favico.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favico.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
