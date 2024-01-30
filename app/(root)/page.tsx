import Collection from "@/components/shared/Collection";
import Hero from "@/components/shared/Hero";
import { getAllEvents } from "@/lib/actions/event.actions";

async function page() {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <Hero />
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="font-semibold text-xl">
          Home of poetry <br /> in Qatar since 2014
        </h2>
        <div className="flex w-full gap-5 md:flex-row">
          Search Cateogry Filter
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </section>
  );
}
export default page;
