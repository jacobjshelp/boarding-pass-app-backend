export type TicketInfo = {
  bookingCode: string
  ticketNumber: string
}

export type BoardingPassInfo = {
  airlineName: string
  qRValue: string
  passengerFirstName: string
  passengerLastName: string
  terminal: string
  departureTime: Date
  arrivalTime: Date
  boardingTime: Date
  gateClosesTime: Date
  departureAirport: string
  destinationAirport: string
}
