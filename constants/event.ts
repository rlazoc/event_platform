// TODO: use static data for now, pull from mongoDB later
export interface Event {
  _id: string
  title: string
  description: string
  location: string
  createdAt: Date
  imageUrl: string
  startDateTime: Date
  endDateTime: Date
  price: string | number
  isFree: boolean
  url: string
  category: { _id: string; name: string }
  organizer: { _id: string; firstName: string; lastName: string }
}

// TODO: use static data for now, pull from mongoDB later
const EventData = [
  {
    _id: '1',
    title: 'Greatest Conference Ever!',
    description: 'A great conference for all developers!',
    location: 'London',
    createdAt: new Date(),
    imageUrl: 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: 'Free',
    isFree: true,
    url: 'http://example.com/event1',
    category: { _id: 'cat1', name: 'Conference' },
    organizer: { _id: 'org1', firstName: 'John', lastName: 'Doe' }
  },
  {
    _id: '2',
    title: 'Lunar New Year Festival',
    description: 'Celebrate the Lunar New Year with us!',
    location: 'Hong Kong',
    createdAt: new Date(),
    imageUrl: 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: 72,
    isFree: false,
    category: { _id: 'cat2', name: 'Festival' },
    organizer: { _id: 'org2', firstName: 'Jane', lastName: 'Doe' }
  }
]

export { EventData }