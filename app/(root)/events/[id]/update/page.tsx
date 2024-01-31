import EventForm from "@/components/shared/EventForm";
import { getEventByID } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import React from "react";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

async function UpdateEvent({ params: { id } }: UpdateEventProps) {
  const { sessionClaims } = auth();
  const event = await getEventByID(id);
  const userId = sessionClaims?.userId as string;
  const userEmail = sessionClaims?.primaryEmail as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 ">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          userEmail={userEmail}
          event={event}
          type="Update"
          eventId={event._id}
        />
      </div>
    </>
  );
}

export default UpdateEvent;
