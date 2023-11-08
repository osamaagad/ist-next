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
      <body className={`${inter.className} main-layout`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}