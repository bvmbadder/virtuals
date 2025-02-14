import Header from "../components/Header";
import marketCap from "../assets/market-cap.svg";
import pairs from "../assets/pairs.svg";
import arrowdown from "../assets/arrow_down.svg";
import Footer from "../components/Footer";
import NewAgent from "./NewAgent";

const Home = () => {
  return (
    <div className="flex flex-col w-full dark">
      <div className="bg-bg bg-cover bg-no-repeat  flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col mb-6">
            <div className="flex flex-col relative self-center w-[calc(100vw)] lg:w-[calc(100vw-120px)] 2xl:max-w-[1800px]">
              <div className="flex flex-col lg:rounded-2xl p-4 lg:p-6 bg-card">
                <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between pl-4 lg:pl-0 mb-4 lg:mb-0">
                  <div className="flex flex-row items-center rounded-[100px] w-max border border-neutral overflow-hidden mt-4 lg:m-4">
                    <div className="px-3 py-1 lg:px-4 lg:py-2 text-nowrap cursor-pointer transition-opacity hover:opacity-80 text-xs lg:text-sm gap-2 flex flex-row items-center bg-neutral text-neutral30">
                      <img src={marketCap} alt="Market Cap" />
                      <p>Market Cap</p>
                    </div>
                    <div className="px-3 py-1 lg:px-4 lg:py-2 text-nowrap cursor-pointer transition-opacity hover:opacity-80 text-xs lg:text-sm gap-2 flex flex-row items-center bg-card text-neutral50">
                      <img src={pairs} alt="New Pairs" />
                      <p>New Pairs</p>
                    </div>
                  </div>
                </div>
                <div
                  className="horizontal-scroll prettyscroll"
                  style={{
                    cursor: "grab",
                    overflowX: "scroll",
                    display: "flex",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                >
                  <div className="grid w-full grid-cols-[1fr,160px,160px,160px,160px] min-w-[1100px]">
                    <div className="flex flex-row items-center gap-2 cursor-pointer opacity-50 pl-4">
                      <p className="text-neutral70 text-xs">AI Agents</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer opacity-100">
                      <p className="text-neutral10 text-xs">Market Cap</p>
                      <img
                        src={arrowdown}
                        alt="Sort"
                        className="w-[6px] h-[4px] object-contain "
                      />
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer opacity-50">
                      <p className="text-neutral70 text-xs">Token Price</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer opacity-50">
                      <p className="text-neutral70 text-xs">Created At</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-auto opacity-50 pr-4">
                      <p className="text-neutral70 text-xs">Created By</p>
                    </div>
                    <div className="divider mt-4 col-span-5"></div>
                    {/* <Agents /> */}
                    <NewAgent />

                    <div className="flex flex-row items-center gap-4 self-center px-4 lg:px-0 lg:justify-center my-4 w-full col-span-5">
                      <p className="text-sm text-neutral50">
                        Showing <span className="text-neutral30">1-100</span> of{" "}
                        <span className="text-neutral30">14,340</span>
                      </p>
                      <button className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-neutral95 text-neutral30 text-xs lg:text-sm px-4 py-2 lg:px-[26px] lg:py-[10px]">
                        101 - 200 &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
