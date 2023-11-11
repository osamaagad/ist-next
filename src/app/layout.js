import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/responsive.css'


export const metadata = {
  title: 'IST Energy',
  description: 'IST Energy for Engineering Solutions and Renewable Energy',
}

export default function RootLayout({ children }) {
  return (
    <>{children}</>
  )
}
