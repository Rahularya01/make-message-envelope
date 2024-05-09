import { Envelope } from "@/components/envelope";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <Envelope />
    </Suspense>
  );
}
