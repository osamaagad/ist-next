import NavigationArabic from "@/components/NavigationArabic";
import '../../css/arabic.css';
import FooterArabic from "@/components/FooterArabic";
import { Cairo } from 'next/font/google'

const inter = Cairo({
  subsets: ['latin'],
  weight: ['300', '400', '500']
})

export default function ArabicLayout({ children }) {
    return (
        <html>
            <body className={`${inter.className} main-layout ar`}>
                <NavigationArabic />
                {children}
                <FooterArabic />
            </body>
        </html>
    );
}