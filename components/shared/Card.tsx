import { IEvent } from "@/lib/database/models/event.model";
import Link from "next/link";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

function Card({ hasOrderLink, hidePrice, event }: CardProps) {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px] ">
      <p className=" absolute text-white text-3xl left-36 top-36 ">
        {event.title}
      </p>

      <Link
        href={`/events/${event._id}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${event.imageUrl})`,
        }}
        className="flex-center z-1 flex-grow bg-gray-50 bg-cover bg-center text-grey-500 "
      >
        {/*IS EVENT CREATOR?*/}
      </Link>
    </div>
  );
}

export default Card;
