import React from "react";
import CorporateForm from "./CorporateForm";
import Partners from "./Partners";
import Campaigns from "./Campaigns";
import Product from "./Product";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

function Corporates() {
  return (
    <div>
      <CorporateForm />
      <Partners />
      <Campaigns />
      <Product />
      <Testimonials />
      <Faq />
    </div>
  );
}

export default Corporates;
