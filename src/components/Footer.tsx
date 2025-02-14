import virtuals from "../assets/virtuals.svg";
import x from "../assets/x.svg";
import telegram from "../assets/virtuals.svg";
import paper from "../assets/paper.svg";
import coinghc from "../assets/coinghc.svg";
import light from "../assets/light.svg";
import copy from "../assets/copy.svg";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center px-2 lg:px-[60px] bg-card py-4 gap-4">
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
        <img
          src={virtuals}
          alt="VIRTUALS Protocol"
          className="w-[24px] lg:mr-4"
        />
        <p className="text-xs text-neutral30 lg:mr-4 text-nowrap">
          © 2021-2025 VIRTUALS.io All Rights Reserved.
        </p>
        <a
          href="#"
          className="text-xs text-neutral50 underline hover:opacity-80 text-nowrap"
          target="_blank"
        >
          Legal Disclaimer
        </a>
      </div>
      <div className="flex flex-row items-center gap-4">
        <a
          href="#"
          className="text-xs text-neutral50 hover:opacity-80"
          target="_blank"
        >
          Governance
        </a>
        <a
          href="#"
          className="text-xs text-neutral50 hover:opacity-80"
          target="_blank"
        >
          Protocol
        </a>
        <a
          href="#"
          className="text-xs text-neutral50 hover:opacity-80"
          target="_blank"
        >
          Writing
        </a>
        <a
          href="#"
          className="text-xs text-neutral50 hover:opacity-80"
          target="_blank"
        >
          About
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        <div className="flex flex-row items-center gap-2 lg:gap-0">
          <a href="#" target="_blank">
            <img
              src={telegram}
              alt="Telegram"
              className="w-6 h-6 min-w-6 min-h-6 object-contain cursor-pointer hover:opacity-80"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={x}
              alt="X"
              className="w-6 h-6 min-w-6 min-h-6 object-contain cursor-pointer hover:opacity-80"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={paper}
              alt="Whitepaper"
              className="w-6 h-6 min-w-6 min-h-6 object-contain cursor-pointer hover:opacity-80"
            />
          </a>
          <a href="#" target="_blank" className="lg:mr-2">
            <img
              src={coinghc}
              alt="Coingecko"
              className="w-6 h-6 min-w-6 min-h-6 object-contain cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
        <a
          href="https://coingecko.com/"
          target="_blank"
          className="text-xs text-neutral50 hover:opacity-80 text-nowrap lg:mr-4"
        >
          Crypto data by CoinGecko
        </a>
        <div className="flex flex-row items-center gap-2 px-2 py-1 w-max rounded-lg border border-neutral hover:opacity-80 cursor-pointer">
          <p className="text-neutral80 text-xs">$VIRTUAL</p>
          <p className="text-foreground/50 text-xs">0x0b3e...4e7E1b</p>
          <img
            src={copy}
            alt="Copy"
            className="w-[12px] h-[12px] object-contain"
          />
        </div>
        <img
          src={light}
          alt="Light Mode"
          className="w-6 h-6 min-w-6 min-h-6 object-contain"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
