'use client'

import { useState } from 'react'
import TrackingForm from '@/components/TrackingForm'
import TrackingResults from '@/components/TrackingResults'
import { TrackingData } from '@/types/tracking'

export default function Tracking() {
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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
     
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

    </div>
  )
} 