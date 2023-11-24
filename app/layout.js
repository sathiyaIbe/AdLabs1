'use client'
import '../styles/globals.css';
import { useEffect } from 'react'
import TagManager from 'react-gtm-module';

const RootLayout = ({ children }) => {
  useEffect(() => {
    import('react-facebook-pixel')
    .then((x) => x.default)
    .then((ReactPixel) => {
      ReactPixel.init('666898285296245') // facebookPixelId
      ReactPixel.pageView()

     
    })
    TagManager.initialize({ gtmId:"GTM-KM755MWP" });
}, []);
  return(
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>

    </head>
    <body>{children}</body>
  </html>
);
  }
export default RootLayout;
