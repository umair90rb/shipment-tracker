import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TCS Parcel Tracker - Track Your Shipments',
  description: 'Track your TCS parcel online using your tracking number or CN number. Get real-time Pakistan TCS tracking updates for shipments, orders, and driving licenses.',
  keywords: 'TCS tracking, parcel tracker, consignment tracking, TCS courier, shipment status, Pakistan TCS tracking, CN tracking, driving license tracking TCS',
  authors: [{ name: 'TCS Tracker' }],
  creator: 'TCS Tracker',
  publisher: 'TCS Tracker',
  robots: 'index, follow',
  openGraph: {
    title: 'TCS Parcel Tracker - Track Your Shipments',
    description: 'Track your TCS parcel online using your tracking number or CN number. Get real-time Pakistan TCS tracking updates for shipments, orders, and driving licenses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCS Parcel Tracker - Track Your Shipments',
    description: 'Track your TCS parcel online using your tracking number or CN number. Get real-time Pakistan TCS tracking updates for shipments, orders, and driving licenses.',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I track my TCS parcel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can track your parcel online using your TCS tracking ID or order number on the official TCS website or a trusted courier tracking tool."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a TCS tracking number?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A TCS tracking number is a unique code, also called a tracking ID or CN tracking number, provided when you send or receive a parcel through TCS."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I track my driving license with TCS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if your driving license is being delivered via TCS, you can track it using the driving license tracking TCS service."
                  }
                },
                {
                  "@type": "Question",
                  "name": "My TCS tracking says 'in transit'. What does that mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "'In transit' means your parcel is on the way to the next location or final delivery address."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I lose my TCS tracking number?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you lose your TCS tracking number, contact TCS customer service with sender, receiver, and booking details to retrieve it."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
} 