import Link from "next/link";
import { SearchBar } from "../SearchBar";

export const Header = () => (
  <header className="bg-slate-500 flex p-3">
    <div className="flex-grow text-slate-900">
      <Link href="/" className="text-slate-100">
        nikutto shopping  
      </Link>
    </div>
    <div>
      <SearchBar />
    </div>
  </header>
)

