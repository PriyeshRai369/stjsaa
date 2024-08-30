import { lazy, Suspense } from "react";
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const ManagingCommittee = lazy(() =>
  import("../ManagingCommittee/ManagingCommittee")
);

import ComponentLoader from "../ComponentLoader/ComponentLoader.jsx";
export default function About() {
  return (
    <>
      <Suspense fallback={<ComponentLoader />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <ManagingCommittee />
      </Suspense>
    </>
  );
}
