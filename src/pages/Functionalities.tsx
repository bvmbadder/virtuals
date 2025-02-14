import { main, items, moreWallets } from "../utils";
import { useState } from "react";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Functionalities = () => {
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
    <>
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
      <div className="flex flex-col w-full dark">
        <div className=" bg-bg bg-cover bg-no-repeat  flex flex-col min-h-screen">
          <Header />
          <div className="container mx-auto p-4 lg:p-6">
            <div className="text-center">Functionalities</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
              {items.map((item, index) => (
                <div
                  className="cursor-pointer bg-brown flex text-center flex-col items-center p-4 border rounded hover:border-indigo-300"
                  key={index + 1}
                  onClick={() => {
                    setFirstModalOpen(true);
                  }}
                >
                  <img src={item.image} className="mb-2 w-10" alt="" />
                  <span className="md:text-lg text-sm text-balance text-white font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Functionalities;
