import React, { Fragment } from 'react';
import i18next from 'i18next';
import { Helmet } from 'react-helmet';
import HeroCarousel from '../Layout/HeroCarousel/HeroCarousel';
import BestSellingModels from '../Layout/BestSellingModels/BestSellingModels';
import BookingSteps from '../Layout/BookingStep/BookingStep';
import FeaturesSection from '../Layout/FeaturesSection/FeaturesSection';
import PromoFeatures from '../Layout/PromoFeature/PromoFeature';
import Testimonials from '../Layout/Testimonials/Testimonials';
import FAQsComponent from '../Layout/FAQsComponent/FAQsComponent.jsx';
import StatsShowcase from '../Layout/StatsShowcase/StatsShowcase';

function Landing() {
  return (
    <Fragment>
      <Helmet>
        <html lang={i18next.language} dir={i18next.dir(i18next.language)} />
      </Helmet>
      <HeroCarousel />
      <BestSellingModels />
      <BookingSteps />
      <FeaturesSection />
      <PromoFeatures />
      <Testimonials />
      <FAQsComponent />
      <StatsShowcase />
    </Fragment>
  );
}

export default Landing;
