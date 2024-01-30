import { IEvent } from "@/lib/database/models/event.model";

type collectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  page: number | string;
  totalPages?: number;
  collectionType: "Events_Organized" | "My_Tickets" | "All_Events";
  urlParamName?: string;
  limit: number;
};

function Collection({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
  limit,
}: collectionProps) {
  return (
    <>
      {data.length > 0 ? (
        <div>
          <a href={`/events/${data[0]._id}`}>{data[0].title}</a>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-gray-50 py-28 text-center ">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}

export default Collection;
