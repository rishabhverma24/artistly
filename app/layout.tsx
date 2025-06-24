
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@components/layout/Navbar' 

export const metadata = {
  title: 'Artistly',
  description: 'Book performing artists with ease',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
