import Link from "next/link";

export const Footer = () => (
  <footer className='bg-slate-800'>
    <div className="flex justify-center text-slate-300 text-xs pt-3 mb-1">
    <div className="mx-2">
        <Link href="#privacy-policy">
          プライバシーポリシー
        </Link>
      </div>
      |
      <div className="mx-2">
        <Link href="#terms-of-service">
          利用規約
        </Link>
      </div>
    </div>
    <div className="bg-slate-800 flex justify-center text-slate-300 pb-3 mt-2 text-xs">
      © 2024 nikutto
    </div>
  </footer>
)
