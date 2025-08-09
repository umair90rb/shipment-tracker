export interface ShipmentInfo {
  consignmentno: string
  bookingdate: string
  shipper: string
  consignee: string
  origin: string
  origincountry: string
  destination: string
  destinationcountry: string
  referenceno: string
}

export interface DeliveryInfo {
  consignmentno: string
  station: string
  datetime: string
  recievedby: string | null
  status: string
  code: string
  allowshow: string
}

export interface Checkpoint {
  consignmentno: string
  datetime: string
  recievedby: string | null
  status: string
}

export interface TrackingData {
  shipmentinfo: ShipmentInfo[]
  deliveryinfo: DeliveryInfo[]
  checkpoints: Checkpoint[]
  shipmentsummary: string
  message: string
  traceid: string
} 