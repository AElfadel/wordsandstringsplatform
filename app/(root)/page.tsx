import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/Button";
import React from "react";

function page() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <Hero />
    </section>
  );
}
export default page;
