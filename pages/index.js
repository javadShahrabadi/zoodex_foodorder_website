import Layout from "@/components/Layout/Layout";
import HeaderBottom from "@/components/Home/HeaderBottom";
import SearchFor from "@/components/Home/SearchFor";
import SuggestionList from "@/components/Home/SuggestionList";
import WhyZoodex from "@/components/Home/WhyZoodex";
import Footer from "@/components/Layout/Footer";
// ------------------

const HomePage = () => {
  return (
    <Layout>
      <HeaderBottom />
      <SearchFor />
      <SuggestionList />
      <WhyZoodex />
      <Footer />
    </Layout>
  );
};
export default HomePage;
