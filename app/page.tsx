import { ConnectButton } from "@rainbow-me/rainbowkit";

function Page() {
  return (
    <>
      {/* // <div 
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     padding: 12,
    //   }}
    // >
    //   Rainbow
    //   <ConnectButton />
    // </div>*/}

      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* left */}

        <div className="lg:col-span-4 bg-gradient-to-br from-primary to-secondary">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="rounded-xl pt-2">
              <img
                className="w-44  rounded-xl object-cover lg:h-96 lg:w-72"
                src="./logo.png"
                alt=""
              />
            </div>
            <div className="p-5 mt-[-2rem] space-y-2 text-center">
              <h1 className="text-5xl font-bold text-white">Digifolio</h1>
              <h2 className="text-[1rem] pt-[1rem] text-gray-200">
                Invest Better, Earn More With Digifolio{" "}
              </h2>
            </div>
            <div>
              <a
                href="#_"
                className="px-[1.29rem] py-[0.6rem] mb-2 mt-4 relative rounded-2xl group overflow-hidden font-medium bg-transparent text-white border-2 inline-block hover:border-primary "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary   group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white text-[1rem]">
                  WHITEPAPER
                </span>
              </a>
            </div>
            <div className="mt-7 mb-7 border-2 p-4 rounded-2xl">
              <p className="text-white font-medium">
                Total Supply: 16000000 BFM
              </p>
              <p className="text-white font-medium">
                Minimun Token Purchase: 100 BFM
              </p>
              <p className="text-white font-medium">
                Maximum Token Purchase: 1000000 BFM
              </p>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="flex flex-1 flex-col p-5 md:p-10 lg:col-span-6">
          {/* header */}

          <header className="flex items-center justify-between">
            <h1 className="w-52  text-xl font-extrabold sm:w-80">Digifolio</h1>

            <div>
              <ConnectButton />
            </div>
          </header>

          <hr className="my-2 border " />

          {/* content */}

          <div className="mt-10 flex flex-1 flex-col items-center space-y-4 text-center lg:justify-center lg:space-y-0 ">
            <div className="border-2 border-slate-300 p-6 rounded-2xl text-left w-[100%] md:w-[55%]">
              <p className="text-[1.1rem] text-para font-medium">
                PRESALE END IN
              </p>
              <div className="flex justify-between mb-1">
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  00d
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  :
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  00h
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  :
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  00m
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  :
                </span>
                <span className="text-[1.5rem] md:text-[2rem] font-bold text-heading">
                  00s
                </span>
              </div>

              <div className="flex justify-between mb-1">
                <span className="text-[1rem] font-bold text-primary dark:text-white">
                  5%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: "5%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1 mt-2">
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  Raised: 228240.60
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  Goal: 16000000
                </span>
              </div>

              <ul className="flex flex-col mt-8  gap-3 text-heading text-[1rem] font-medium">
                <li className="flex flex-row justify-between border-b-2  pb-3">
                  <p>Token Name</p>
                  <p>Benefit Mine</p>
                </li>
                <li className="flex flex-row justify-between border-b-2 pb-3">
                  <p>Token Symbol</p>
                  <p>BFM</p>
                </li>
                <li className="flex flex-row justify-between border-b-2 pb-3">
                  <p>Current Price</p>
                  <p>0.01205 USD</p>
                </li>
                <li className="flex flex-row justify-between border-b-2 pb-3">
                  <p>Pre-Sale End</p>
                  <p>Dec 19, 2023 9:32 PM</p>
                </li>
              </ul>

              <button
                  
                    className='mt-10 h-14 w-full rounded-2xl bg-secondary duration-200 text-white font-bold hover:bg-blue-900'>
                
                        <span className='font-bold text-[1rem]'>Connect Wallet</span>


                </button> 


            </div>
          </div>

      
        </div>
      </div>
    </>
  );
}

export default Page;
