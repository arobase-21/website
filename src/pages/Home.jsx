import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Clients from '../partials/Clients';
import Explainer from '../partials/Explainer';
import Features01 from '../partials/Features01';
import Features02 from '../partials/Features02';
import Services from '../partials/Services';
import Pricing from '../partials/Pricing';
import Testimonial from '../partials/Testimonial';
import Faqs from '../partials/Faqs';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        <Clients />
        <Explainer />
        <Features01 />
        <Features02 />
        <Services />
        <Pricing />
        <Testimonial />
        <Faqs />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;