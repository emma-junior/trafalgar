import Articles from "./components/Articles";
import DownloadApp from "./components/downloadApp";
import Footer from "./components/Footer";
import Healthcare from "./components/Healthcare";
import LeadingHealthcare from "./components/LeadingHealthcare";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Services from "./components/Services";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Healthcare />
      <Services />
      <LeadingHealthcare />
      <DownloadApp />
      <Review />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
