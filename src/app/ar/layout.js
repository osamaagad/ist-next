import NavigationArabic from "@/components/NavigationArabic";
import FooterArabic from "@/components/FooterArabic";
import { Cairo } from "next/font/google";
import "../../css/arabic.css";

const inter = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ArabicLayout({ children }) {
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
      <body className={`${inter.className} main-layout ar`}>
        <NavigationArabic />
        {children}
        <FooterArabic />
      </body>
    </html>
  );
}
