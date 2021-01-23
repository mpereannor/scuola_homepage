import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import TeamSection from 'sections/team-section';
import WorkFlow from 'sections/workflow';

import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Scuola" />
        <Banner />
        <Services />
        {/* <Jackpot /> */}
        {/* <CallToAction /> */}
        <Featured />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <Blogs />
        <WorkFlow/>
        <TeamSection/>
        <FAQ />
        {/* <Subscribe /> */}
      </Layout>
    </StickyProvider>
  );
}
