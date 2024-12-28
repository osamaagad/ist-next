import NavigationArabic from "@/components/NavigationArabic";
import FooterArabic from "@/components/FooterArabic";
import { Cairo } from "next/font/google";
import "../../css/arabic.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
        <GoogleAnalytics gaId="G-TC39K8PXC5" />
      </head >
      <body className={`${inter.className} main-layout ar`}>
        <NavigationArabic />
        {children}
        <FooterArabic />
      </body>
    </html >
  );
}
