"use client"

import { postHello, searchHello, SearchHit } from "@/api/helloApi";
import { ItemPreview } from "@/components/item/ItemPreview";
import { Footer } from "@/components/search/pages/Footer";
import { Header } from "@/components/search/pages/Header";
import { useState } from "react";

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
          Popular Items
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

const AddHelloMenu = () => {
  const [message, setMessage] = useState<string>("");
  const submit = (message: string) => {
    postHello(message).then((res) => {
      setMessage("");
    }).catch((err) => {
      setMessage("Failed to post...")
    })
  };
  return (
    <div className="bg-slate-100 p-3 rounded">
      <div>
        Add message for Demo!
      </div>
      <div className="flex flex-col">
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={() => submit(message)}>
          Submit
        </button>
      </div>
    </div>
  )
}

const SearchHelloMenu = () => {
  const [query, setQuery] = useState<string>("");
  const [hellos, setHellos] = useState<SearchHit[]>([]);
  const search = (message: string) => {
    searchHello(message).then((res) => {
      setHellos(
        res.hits
      )
    }).catch((err) => {
      setQuery("Failed to search...")
    })
  };
  
  return (
    <div className="bg-slate-100 p-3 rounded">
      <div>
        Search demo
      </div>
      <div className="flex flex-col">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={() => search(query)}>
          Search
        </button>
      </div>
      <div>
        {
          hellos.map((hit) => {
            return (
              <div key={hit.id}>
                {hit.id}: {hit.message}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Main = () => (
  <div className="p-8 flex flex-col w-full h-full">
    <div className="my-8">
      <PopularItems />
    </div>
    <div className="my-8">
      <AddHelloMenu />
    </div>
    <div className="my-8">
      <SearchHelloMenu />
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
