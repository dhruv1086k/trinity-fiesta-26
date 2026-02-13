import { Suspense } from "react";
import EventsPageClient from "./EventsPageClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          Loading Events...
        </div>
      }
    >
      <EventsPageClient />
    </Suspense>
  );
}
