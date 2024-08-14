import { ItemPreview } from "@/components/item/ItemPreview";
import { Footer } from "@/components/search/pages/Footer";
import { Header } from "@/components/search/pages/Header";

const PopularItems = () => {
  const items = [
    {
      id: "item1",
      title: "Bag",
      imageSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7bMZ_LEFlCv0UBRk4y743HahI60AKzDUUDZCSG2Ev01TZVheaSOxpTJwBvmxy5r85rGa2tCOa11F0VRtuwHxY4PS45EIKaAb0WhvvIfbcMWd0hkL5XvL_kQadnVdbE8HT0uTx_ffI_vq3/s800/okeiko_bag.png",
      detailPageUrl: "/items/item1"
    }
  ]
  return (
    <div className="bg-slate-100 p-3 rounded">
      <div className="flex flex-col">
        <div className="p-1 my-1 mb-3">
          人気の商品
        </div>
        <ul className="flex">
          {
            items.map((item) => {
              return (
                <li key={item.id}>
                  <ItemPreview 
                    title={item.title} 
                    imageSrc={item.imageSrc} 
                    size={150}
                    detailPageUrl={item.detailPageUrl}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

const Main = () => (
  <div className="p-8 w-full h-full">
    <div className="my-8">
      <PopularItems />
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-slate-300">
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home
