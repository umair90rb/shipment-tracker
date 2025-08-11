'use client'

import { useState } from 'react'
import TrackingForm from '@/components/TrackingForm'
import TrackingResults from '@/components/TrackingResults'
import ArticleContent from '@/components/ArticleContent'
import { TrackingData } from '@/types/tracking'

export default function HomePage() {
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTrackingSubmit = async (consignmentNumber: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/track?consignee=${consignmentNumber}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.message === 'SUCCESS') {
        setTrackingData(data)
      } else {
        setError('No tracking information found for this consignment number')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tracking information')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          TCS Tracking
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track your TCS shipments with real-time updates. Enter your consignment number below to get detailed tracking information.
        </p>
      </header>

      {/* Tracking Form */}
      <TrackingForm onSubmit={handleTrackingSubmit} isLoading={isLoading} />

      {/* Error Display */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700 text-center">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="mt-8 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Fetching tracking information...</p>
        </div>
      )}

      {/* Tracking Results */}
      {trackingData && !isLoading && (
        <TrackingResults data={trackingData} />
      )}

      {/* Article Content - Always visible for SEO */}
      <ArticleContent />
    </main>
  )
} 