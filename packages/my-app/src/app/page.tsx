import { Footer } from "@/components/search/pages/Footer";
import { Header } from "@/components/search/pages/Header";

const Main = () => (
  <div className="p-2">
    Main contents
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
          <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home
