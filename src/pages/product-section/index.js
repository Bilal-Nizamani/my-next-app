import ProductSection from "@/components/OurProductSection/ProductSection";
import StudentSection from "@/components/OurStudentsSection/StudentSection";
import { Fragment } from "react";

function aboutUs() {
  return (
    <Fragment>
        <StudentSection />
        <ProductSection />
    </Fragment>
  );
}

export default aboutUs;
