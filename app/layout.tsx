import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCS Parcel Tracker - Track Your Shipments',
  description: 'Track your TCS parcels with real-time updates. Enter your consignment number to get detailed tracking information including delivery status, checkpoints, and shipment details.',
  keywords: 'TCS tracking, parcel tracker, consignment tracking, TCS courier, shipment status',
  authors: [{ name: 'TCS Tracker' }],
  creator: 'TCS Tracker',
  publisher: 'TCS Tracker',
  robots: 'index, follow',
  openGraph: {
    title: 'TCS Parcel Tracker - Track Your Shipments',
    description: 'Track your TCS parcels with real-time updates. Enter your consignment number to get detailed tracking information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCS Parcel Tracker - Track Your Shipments',
    description: 'Track your TCS parcels with real-time updates. Enter your consignment number to get detailed tracking information.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
} 