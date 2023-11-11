import NavigationArabic from "@/components/NavigationArabic";
import "../../css/arabic.css";
import FooterArabic from "@/components/FooterArabic";
import { Cairo } from "next/font/google";

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
      </head>
      <body className={`${inter.className} main-layout ar`}>
        <NavigationArabic />
        {children}
        <FooterArabic />
      </body>
    </html>
  );
}
