import ProductSection from "@/components/OurProductSection/ProductSection";
import StudentSection from "@/components/OurStudentsSection/StudentSection";
import Cards from "@/components/cards/Cards";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Fragment } from "react";

function HomePage() {
  return (
    // <div className="bg-slate-900 grid place-content-center  h-screen">
    // </div>
   < Fragment>
      {/* <Navbar/> */}
      <Header/>
      <StudentSection/>
      <ProductSection/>
      <Cards/>
      <Footer/>
   </Fragment>
  );
}

export default HomePage;
