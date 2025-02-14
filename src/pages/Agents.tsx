import copy from "../assets/copy.svg";
import basec from "../assets/basec.svg";
const Agents = () => {
  return (
    <a href="#" className="w-full border-b border-neutral col-span-5">
      <div className="grid w-full hover:opacity-80 items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
        <a href="#" className="w-full hover:opacity-80 ml-4 my-4">
          <div className="flex flex-row items-center gap-2">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_cd4f55b570.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="w-3 h-3 min-w-3 min-h-3 lg:w-5 lg:h-5 lg:min-w-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">aidog_agent</p>
                <p className="text-neutral30 text-xs">$AIDOG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x0A32...69733E</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <p className="text-sm text-neutral30">$262.88k</p>
        <p className="text-sm text-neutral30">$0.000262</p>
        <p className="text-sm text-neutral30">a month ago</p>
        <a href="#" className="flex flex-row items-center gap-2 h-fit mr-4">
          <img
            src="https://effigy.im/a/0x6d0267156f1c6CE44Caa4BF129B76009d3d41830.svg"
            alt="Avatar"
            className="avatar-sm"
          />
          <p className="text-neutral30 text-sm text-end">0x6d...830</p>
        </a>
      </div>
    </a>
  );
};

export default Agents;
