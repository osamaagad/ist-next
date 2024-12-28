import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500']
})


export default function Layout({ children }) {
  return (
    <html>
      <head>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/jquery-3.0.0.min.js"></script>
        <script src="/js/custom.js"></script>
        <GoogleAnalytics gaId="G-TC39K8PXC5" />
      </head>
      <body className={`${inter.className} main-layout`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}