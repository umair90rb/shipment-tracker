import ArticleContent from '@/components/ArticleContent'
import Tracking from '@/components/Tracking'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCS tracking - tcstracking.xyz',
  description: 'Track Your Shipment. Enter any combination of TCS tracking Reference number. Track Shipment. Shipment Booking Details. Tracking Number: Shipment Details:',
  keywords: 'tcs tracking, tcs tracking reference number, track shipment, shipment booking details, tracking number'
}

export default function HomePage() {

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Tracking />
      <ArticleContent />
    </main>
  )
} 