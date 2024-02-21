import Link from 'next/link'
import { Button } from '@/components/ui'
import Collection from '@/components/shared/Collection'
import Pagination from '@/components/shared/Pagination'
import { Event, EventData } from '@/constants/event'

type ProfileProps = {
  data: Event[]
}

const Profile = ({ data }: ProfileProps) => {
  return (
    <div>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="#/events">Explore Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={data}
          emptyTitle="No Tickets Found"
          emptyStateSubtext="You haven't purchased any tickets yet!"
          limit={6}
          page={1}
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Events</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={data}
          emptyTitle="No Events Found"
          emptyStateSubtext='Create a new event on the "Create Event" page.'
          limit={6}
          page={1}
        />
      </section>
    </div>
  )
}

export default Profile
