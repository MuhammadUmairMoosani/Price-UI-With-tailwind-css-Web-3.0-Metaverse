import { Inter } from 'next/font/google'
import { AiFillCheckCircle, AiOutlineWallet, AiOutlineSafetyCertificate, AiOutlineFieldTime } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex max-[600px]:flex-col">
      <div className="flex-2 h-screen    min-[600px]:w-9/12 max-[600px]:w-12/12  flex flex-col justify-between p-20 items-center bg-orange-100">
        <div className="bg-white h-3/6  min-[600px]:w-9/12 max-[600px]:w-12/12  flex flex-col place-content-evenly rounded-lg border-orange-500 border-2 pl-12">
          <p className="text-orange-500 flex">Access these features when you get this pricing package for your business.</p>
          <p className="text-orange-500 flex"><AiFillCheckCircle className='mr-4 mt-1.5' />International calling and messaging API</p>
          <p className="text-orange-500 flex"><AiFillCheckCircle className='mr-4 mt-1.5' />Additional phone numbers</p>
          <p className="text-orange-500 flex"><AiFillCheckCircle className='mr-4 mt-1.5' />Automated messages via Zapier</p>
          <p className="text-orange-500 flex"><AiFillCheckCircle className='mr-4 mt-1.5' />24/7 support and consulting</p>
        </div>
        <div className="bg-white h-16 w-7/12  flex flex-col  place-content-evenly rounded-lg border-orange-500 border-2 text-orange-500" >
          <p className="flex"><AiOutlineSafetyCertificate className='mr-4 ml-2' size={45} /><span className="mt-2.5">30 days money back Guarantee</span></p>
        </div>
        <div className="bg-white h-16 w-7/12 flex flex-col place-content-evenly rounded-lg border-orange-500 border-2 text-orange-500" >
          <p className="flex"><AiOutlineWallet className='mr-4 ml-2' size={45} /><span className="mt-2.5">No setup fees 100% hassle free</span></p>
        </div>
        <div className="bg-white h-16  w-7/12 flex flex-col place-content-evenly rounded-lg border-orange-500 border-2 text-orange-500" >
          <p className="flex"><AiOutlineFieldTime className='mr-4 ml-2' size={45} /><span className="mt-2.5">No monthly subscription pay once and for all</span></p>
        </div>
      </div>
      {/* s econd */}
      <div className="flex-2 h-screen max-[600px]:h-0 min-[601px]:w-3/12 max-[600px]:w-12/12 flex flex-col justify-between p-20 items-center bg-orange-100" >
        <div className="bg-white h-32 text-center w-56 flex flex-col place-content-evenly rounded-lg border-orange-500 border-4 " >
          <p className="text-orange-500">Premium PRO</p>
          <p className="text-5xl font-bold text-orange-500">$329</p>
          <p className="text-xs text-orange-500">billed just one</p>
        </div>
        <button className="rounded-lg bg-orange-500   text-white px-16 py-2 text-base font-sans font-bold">Get&#160;Started</button>
      </div>
    </main>
  )
}