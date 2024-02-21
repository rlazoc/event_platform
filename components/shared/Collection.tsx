import Card from './Card'
import Pagination from './Pagination'
import { Event, EventData } from "@/constants/event"

type CollectionProps = {
  data: Event[]
  emptyTitle: string
  emptyStateSubtext: string
  limit: number
  page: number | string
  totalPages?: number
  urlParamName?: string
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection = ({
  data=[],
  emptyTitle,
  emptyStateSubtext,
  limit,
  page,
  totalPages = 0,
  urlParamName,
  collectionType
}: CollectionProps) => {
  return (
    <div>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map(event => {
              const hasOrderLink = collectionType === 'Events_Organized'
              const hidePrice = collectionType === 'My_Tickets'
              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={[event]} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              )
            })}
          </ul>
          {totalPages > 1 && (
            <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
          )}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </div>
  )
}

export default Collection
