import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Poppins } from 'next/font/google'

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TC39K8PXC5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-TC39K8PXC5');
        </script>
      </head>
      <body className={`${inter.className} main-layout`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}