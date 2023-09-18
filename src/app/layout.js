import Sidebar from '@/components/Sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | Weframetech',
  description: 'Dashboard of the Weframetech Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
