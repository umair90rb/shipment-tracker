'use client'

import { useState } from 'react'

interface TrackingFormProps {
  onSubmit: (consignmentNumber: string) => void
  isLoading: boolean
}

export default function TrackingForm({ onSubmit, isLoading }: TrackingFormProps) {
  const [consignmentNumber, setConsignmentNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (consignmentNumber.trim()) {
      onSubmit(consignmentNumber.trim())
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="consignment" className="block text-lg font-semibold text-gray-700 mb-3">
            Enter Consignment Number (CN)
          </label>
          <input
            type="number"
            id="consignment"
            value={consignmentNumber}
            onChange={(e) => setConsignmentNumber(e.target.value)}
            placeholder="e.g., 77981836095"
            className="tracking-input"
            disabled={isLoading}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !consignmentNumber.trim()}
          className="tracking-button w-full"
        >
          {isLoading ? 'Tracking...' : 'Track Package'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Enter your TCS consignment number to track your shipment
        </p>
      </div>
    </div>
  )
} 