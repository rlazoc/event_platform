import { Event } from '@/constants/event'
import Image from 'next/image'
import Link from 'next/link'
import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
  event: Event[]
  hasOrderLink?: boolean
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const userId = event[0].organizer._id
  const isEventCreator = userId === event[0].organizer._id

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event[0]._id}`}
        style={{ backgroundImage: `url(${event[5].imageUrl})` }}
        className="flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500"
      />
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event[0]._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <DeleteConfirmation eventId={event[0]._id} />
        </div>
      )}
      <div className="flex-min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event[0].price === 0 ? 'Free' : `$${event[0].price}`}
            </span>
            <p>{event[11].category.name}</p>
          </div>
        )}
        <p className="p-medium-16 p-medium-18 text-grey-500">
          {/* {formatDateTime(event.startDateTime).dateTime} */}
          {String(event[6].startDateTime)}
        </p>

        <Link href={`/events/${event[0]._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {event[1].title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event[12].organizer.firstName} {event[12].organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link
              href={`/orders?eventId=${event[0]._id}`}
              className="flex gap-2"
            >
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
