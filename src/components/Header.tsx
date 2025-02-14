import logo from "../assets/logo_white.svg";
import v from "../assets/v.svg";
import search from "../assets/search.svg";
import slash from "../assets/slash.svg";
import solana from "../assets/solana.svg";
import base from "../assets/base.svg";
import { useState } from "react";
import Modal from "./Modal";
import { main, moreWallets } from "../utils";
import TabModal from "./TabModal";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const [formTab, setFormTab] = useState(false);
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState("");
  return (
    <div className="flex flex-row items-center justify-between w-full px-2 lg:px-[60px] pt-3 lg:pt-6 pb-6">
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        closeModal={closeFirstModal}
        title="Select Chain"
      >
        {/* Ensure scrolling within the modal */}
        <div className="max-h-[70vh] overflow-y-auto prettyscroll">
          <div className="h-[1px] w-full bg-foreground mb-4 lg:mb-6"></div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {main.map((item) => (
              <div
                onClick={() => openSecondModal()}
                key={item.name}
                className="w-[100px] h-[100px] p-4 rounded-lg bg-neutral flex items-center justify-center flex-col gap-2 cursor-pointer hover:opacity-80"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 min-w-8 min-h-8 object-contain"
                />
                <p className="text-sm text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded-full mb-4 outline-green-400 pl-5  bg-[#252626]"
          />
          <div className="grid grid-cols-4 gap-2 overflow-auto scrollbar-none max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex flex-col cursor-pointer text-xs items-center justify-between bg-[#252626] p-1 rounded-2xl"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-11 h-11 rounded-full"
                />
                <div className="text-white mt-2 w-full text-center font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <div className="flex flex-row items-center">
        <a href="/">
          <img
            src={v}
            alt="VIRTUALS Protocol"
            className="xl:w-[100px] w-[40px] h-[20px] xl:h-[30px] object-contain mr-2 block lg:hidden"
          ></img>
          <img
            src={logo}
            alt="VIRTUALS Protocol"
            className="xl:w-[100px] w-[40px] h-[20px] xl:h-[30px] object-contain mr-2 hidden lg:block"
          />
        </a>
        <Link to="/functionalities">
          <button className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-transparent text-white text-xs px-3 py-2 lg:px-3 lg:py-2">
            Functionalities
          </button>
        </Link>
        <a href="#">
          <button className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-white/10 text-white text-xs px-3 py-2 lg:px-3 lg:py-2">
            Prototype
          </button>
        </a>
        <a
          href="https://console.game.virtuals.io"
          target="_blank"
          className="hidden lg:block"
        >
          <button className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-transparent text-white text-xs px-3 py-2 lg:px-3 lg:py-2">
            Try G.A.M.E
          </button>
        </a>
      </div>
      <div className="hidden lg:flex flex-col w-full z-[1011] absolute top-3 lg:top-6 bg-card rounded-2xl transition-none lg:transition-all duration-300 overflow-hidden max-w-[30px] lg:max-w-[300px]  lg:left-1/2 lg:-translate-x-1/2 right-[72px] lg:right-0">
        <div className="flex flex-row items-center w-full pl-2 lg:pl-4 pr-2 transition-opacity hover:opacity-80 lg:py-1">
          <img
            src={search}
            alt="Search"
            className="w-4 h-4 min-w-4 min-h-4 lg:w-6 lg:h-6 lg:min-w-6 lg:min-h-6 object-contain"
          />
          <div className="flex flex-row items-center gap-2 w-full max-w-[432px] relative rounded-lg p-2 bg-[#1C2524] bg-transparent text-nowrap text-neutral-300  py-1.5">
            <input
              className="w-full focus:outline-none bg-transparent text-base text-neutral30 placeholder:text-neutral30"
              placeholder="Search"
              maxLength={100}
              id="search-agents-field"
              value=""
            />
          </div>
          <img
            src={slash}
            alt="Slash"
            className="icon-lg mr-2 hidden lg:flex"
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 lg:gap-4">
        <button
          onClick={() => setFirstModalOpen(true)}
          className="hidden lg:block text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 text-primary text-xs px-3 py-2 lg:px-3 lg:py-2"
          style={{
            background:
              "linear-gradient(92.8deg, rgb(199, 243, 220) 0%, rgb(253, 248, 213) 100%)",
          }}
        >
          Create New Agent
        </button>
        <div className=" flex-row rounded-[100px] overflow-hidden bg-card border-neutral border hidden lg:flex">
          <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center border-r border-neutral bg-card">
            <p className="text-sm">All</p>
          </div>
          <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center border-r border-neutral bg-muted opacity-50">
            <img src={solana} alt="Solana" />
          </div>
          <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center bg-muted opacity-50">
            <img src={base} alt="Base" />
          </div>
        </div>
        <button
          className="hidden lg:block text-white text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-muted text-primary-foreground text-xs px-3 py-2 lg:px-3 lg:py-2"
          onClick={() => setFirstModalOpen(true)}
        >
          Connect
        </button>
        {/* HAMBURGER */}
        <div className="lg:hidden flex flex-row items-center gap-2 lg:gap-4">
          <div
            className="p-2 rounded-full bg-card cursor-pointer hover:opacity-80"
            onClick={() => setFirstModalOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-primary dark:text-white text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="416"
                height="288"
                x="48"
                y="144"
                fill="none"
                stroke-linejoin="round"
                stroke-width="32"
                rx="48"
                ry="48"
              ></rect>
              <path
                fill="none"
                stroke-linejoin="round"
                stroke-width="32"
                d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
              ></path>
              <path d="M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
            </svg>
          </div>
          {!isActive ? (
            <button
              className="lg:hamburger  hamburger--squeeze"
              type="button"
              onClick={() => setIsActive(!isActive)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          ) : (
            <button
              className="lg:hamburger is-active hamburger--squeeze z-[1101]"
              type="button"
              onClick={() => setIsActive(!isActive)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          )}
        </div>
        {isActive && (
          <div className="fixed top-0 right-0 w-full h-screen lg:hidden flex flex-col items-end bg-foreground/10 z-[1100] transition-opacity opacity-100">
            <div className="flex flex-col gap-4 p-4 w-full h-full max-w-[600px] bg-card relative">
              <div className="flex flex-row rounded-[100px] overflow-hidden bg-card border-neutral border mt-14">
                <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center border-r border-neutral bg-card">
                  <p className="text-sm">All</p>
                </div>
                <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center border-r border-neutral bg-muted opacity-50">
                  <img src={solana} alt="Solana" />
                </div>
                <div className="flex flex-row items-center gap-2 px-2.5 py-1 cursor-pointer w-full justify-center bg-muted opacity-50">
                  <img src={base} alt="Base" />
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsActive(false);
                  setFirstModalOpen(true);
                }}
                className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 text-primary text-xs lg:text-sm px-4 py-2 lg:px-[26px] lg:py-[10px]"
                style={{
                  background:
                    "linear-gradient(92.8deg, rgb(199, 243, 220) 0%, rgb(253, 248, 213) 100%)",
                }}
              >
                Create New Agent
              </button>
              <a href="#" target="_blank">
                <button className="text-foreground text-nowrap rounded-[100px] transition-opacity hover:opacity-80 bg-transparent text-white w-full text-xs lg:text-sm px-4 py-2 lg:px-[26px] lg:py-[10px]">
                  Try G.A.M.E
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
