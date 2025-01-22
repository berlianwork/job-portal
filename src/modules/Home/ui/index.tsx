import Footer from "../../../components/common/Footer";
import AppDownload from "../components/AppDownload";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";

const HomeUI = () => {
  return (
    <div className="mx-auto container">
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default HomeUI;
