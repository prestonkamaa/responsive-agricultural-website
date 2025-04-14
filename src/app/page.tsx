import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import InnovationFeature from "./components/InnovationFeature";
import OurAchievements from "./components/OurAchievements";
import Package from "./components/Package";
import PageHeader from "./components/PageHeader";
import ReadytoGrow from "./components/ReadytoGrow";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
      <>
        <PageHeader />
        <OurAchievements /> 
        <InnovationFeature /> 
        <Package /> 
        <WhyChooseUs />
        <ReadytoGrow />
        <Faqs />
        <Footer />   
      </>

  );
}
