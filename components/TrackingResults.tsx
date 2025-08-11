'use client'

import { TrackingData } from '@/types/tracking'

interface TrackingResultsProps {
  data: TrackingData
}

export default function TrackingResults({ data }: TrackingResultsProps) {
  const shipment = data.shipmentinfo?.[0]
  const delivery = data.deliveryinfo?.[0]
  
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes('delivered')) return 'delivered'
    if (status.toLowerCase().includes('out for delivery') || status.toLowerCase().includes('in transit')) return 'in-transit'
    return 'pending'
  }

  return (
    <div className="mt-8 space-y-6">
      {/* Shipment Summary */}
      <div className="status-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipment Summary</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-900 whitespace-pre-line">{data?.shipmentsummary}</p>
        </div>
      </div>

      {/* Shipment Information */}
      <div className="status-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Consignment Number</p>
            <p className="font-semibold text-gray-900">{shipment?.consignmentno}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Booking Date</p>
            <p className="font-semibold text-gray-900">{shipment?.bookingdate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Shipper</p>
            <p className="font-semibold text-gray-900">{shipment?.shipper}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Consignee</p>
            <p className="font-semibold text-gray-900">{shipment?.consignee}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Origin</p>
            <p className="font-semibold text-gray-900">{shipment?.origin}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Destination</p>
            <p className="font-semibold text-gray-900">{shipment?.destination}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Origin Country</p>
            <p className="font-semibold text-gray-900">{shipment?.origincountry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Destination Country</p>
            <p className="font-semibold text-gray-900">{shipment?.destinationcountry}</p>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      {delivery && (
        <div className="status-card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-semibold text-gray-900">{delivery.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Station</p>
              <p className="font-semibold text-gray-900">{delivery.station}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-semibold text-gray-900">{delivery.datetime}</p>
            </div>
            {delivery.recievedby && (
              <div>
                <p className="text-sm text-gray-500">Received By</p>
                <p className="font-semibold text-gray-900">{delivery.recievedby}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tracking Checkpoints */}
      <div className="status-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking Timeline</h2>
        <div className="space-y-4">
          {data?.checkpoints?.map((checkpoint, index) => (
            <div
              key={index}
              className={`checkpoint-item ${getStatusColor(checkpoint?.status)}`}
            >
              <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">{checkpoint?.status}</p>
                <p className="text-sm text-gray-600">{checkpoint?.datetime}</p>
                {checkpoint?.recievedby && (
                  <p className="text-sm text-gray-500">Received by: {checkpoint?.recievedby}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trace ID */}
      <div className="text-center text-sm text-gray-500">
        <p>Trace ID: {data?.traceid}</p>
      </div>
    </div>
  )
} 