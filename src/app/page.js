import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import Commitment from "@/components/Commitment";
import CoreProductCategories from "@/components/CoreProductCategories";
import Faq from "@/components/Faq";
import OurCoreValues from "@/components/OurCoreValues";
import Service from "@/components/Service";
import StatsSection from "@/components/StatsSection";
import TeamMember from "@/components/TeamMember";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";


export default function Home() {
  return (
    <div>

      <Banner></Banner>
      {/* <AboutSection></AboutSection> */}
      <CoreProductCategories></CoreProductCategories>
      <OurCoreValues></OurCoreValues>
      <Commitment></Commitment>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      {/* <Service></Service> */}
      {/* <TeamMember></TeamMember> */}
      <StatsSection></StatsSection>

    </div>
  );
}




/***
 * 
 * background color : [#213785]
 * 
 * text color : [#b8d129]
 * 
 * 
 * light bg : [#C6D870]
 * 
 * 
 */