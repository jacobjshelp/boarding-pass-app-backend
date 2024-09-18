import { BoardingPassInfo, TicketInfo } from './types'

export const dummyTicketInfo: TicketInfo = {
  bookingCode: 'T34RL',
  ticketNumber: '22021583',
}

export const dummyBoardingPasses: BoardingPassInfo[] = [
  {
    airlineName: 'AirWaves',
    qRValue: 'specialValue',
    passengerFirstName: 'John',
    passengerLastName: 'Doe',
    terminal: '2',
    departureTime: new Date(2024, 7, 10, 16, 45),
    arrivalTime: new Date(2024, 7, 10, 19, 45),
    boardingTime: new Date(2024, 7, 10, 16, 15),
    gateClosesTime: new Date(2024, 7, 10, 16, 35),
    departureAirport: 'CPH',
    destinationAirport: 'FRA',
  },
  {
    airlineName: 'Swift-Jet',
    qRValue: 'AnotherValue',
    passengerFirstName: 'John',
    passengerLastName: 'Doe',
    terminal: '3',
    departureTime: new Date(2024, 7, 10, 21, 0),
    arrivalTime: new Date(2024, 7, 10, 22, 30),
    boardingTime: new Date(2023, 7, 10, 20, 30),
    gateClosesTime: new Date(2023, 7, 10, 20, 45),
    departureAirport: 'FRA',
    destinationAirport: 'MUC',
  },
]
