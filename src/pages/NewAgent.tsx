import copy from "../assets/copy.svg";
import basec from "../assets/basec.svg";
const NewAgent = () => {
  return (
    <>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_cd4f55b570.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
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
          <p className="text-sm text-neutral30">$52.02k</p>
          <p className="text-sm text-neutral30">$0.000352</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x6d0267156f1c6CE44Caa4BF129B76009d3d41830"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6d0267156f1c6CE44Caa4BF129B76009d3d41830.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6d...830</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_9babbfbdcd.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Maya world</p>
                <p className="text-neutral30 text-xs">$MAYA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x0111...63e972</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$36.09k</p>
          <p className="text-sm text-neutral30">$0.000169</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xB2416CdfD2C79Baa8Cb9c722c8b52fD6c02c62f4"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xB2416CdfD2C79Baa8Cb9c722c8b52fD6c02c62f4.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xB2...2f4</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_412c76e431.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">WECO AI RWA AGENT</p>
                <p className="text-neutral30 text-xs">$WECO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x9ce5...6EF3E1</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$30.66k</p>
          <p className="text-sm text-neutral30">$0.000122</p>
          <p className="text-sm text-neutral30">5 days ago</p>
          <a
            href="/profile/0x8548cBce7AC0De2E3A2470a9C0B9Ba218af8697C"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8548cBce7AC0De2E3A2470a9C0B9Ba218af8697C.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x85...97C</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_b7b6780be8.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">VitaNova</p>
                <p className="text-neutral30 text-xs">$SHOW</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xa1Aa...bB3F50</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$30.3k</p>
          <p className="text-sm text-neutral30">$0.000119</p>
          <p className="text-sm text-neutral30">24 days ago</p>
          <a
            href="/profile/0x49568e67F849966dbe84FC6753085e3FD69Bb2C1"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x49568e67F849966dbe84FC6753085e3FD69Bb2C1.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x49...2C1</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/18019_Claira_fe67ce8c9a.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Claira</p>
                <p className="text-neutral30 text-xs">$CLAIRA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x2499...fD375A</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$29.49k</p>
          <p className="text-sm text-neutral30">$0.000113</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xd7Be559a9E158C73f60B025fA204AB6749191b06"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xd7Be559a9E158C73f60B025fA204AB6749191b06.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xd7...b06</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_cf2f118ea3.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">AI Coach</p>
                <p className="text-neutral30 text-xs">$COACH</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x8cCA...ac2CDF</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$27.61k</p>
          <p className="text-sm text-neutral30">$0.000099</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x46d086CED16aF9035A8Afe91206c40D86680E96d"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x46d086CED16aF9035A8Afe91206c40D86680E96d.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x46...96d</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/16903_Steady_Shelly_6c27d86ff0.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Steady Shelly</p>
                <p className="text-neutral30 text-xs">$SLOW</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xf3bb...82774c</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$27.31k</p>
          <p className="text-sm text-neutral30">$0.000096</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x89c360c53b42c846acD66E74082BaFb51a6c00Ca"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x89c360c53b42c846acD66E74082BaFb51a6c00Ca.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x89...0Ca</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/16507_Xoe_68a24c81fa.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Xoe</p>
                <p className="text-neutral30 text-xs">$XOE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x1048...a06B09</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$27.15k</p>
          <p className="text-sm text-neutral30">$0.000095</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x401BFBF10ba8Deb48D705d6c28dff7de29867040"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x401BFBF10ba8Deb48D705d6c28dff7de29867040.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x40...040</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_0287a2aefe.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">BYTERIA</p>
                <p className="text-neutral30 text-xs">$BYTER</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x22D5...41564a</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$26.41k</p>
          <p className="text-sm text-neutral30">$0.00009</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xb109A25950F2787Dd48FEECac3144c8887e4321E"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xb109A25950F2787Dd48FEECac3144c8887e4321E.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xb1...21E</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/16767_Penseur_57aeee3128.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Penseur</p>
                <p className="text-neutral30 text-xs">$PENSR</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xdEd1...9bBbEc</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$25.88k</p>
          <p className="text-sm text-neutral30">$0.000087</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x7D9a78f607706b8F5cE26Fba6c9EaCabF8937df0"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7D9a78f607706b8F5cE26Fba6c9EaCabF8937df0.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7D...df0</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/14823_SHIBAEAI_847ad0f97b.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">SHIBAEAI</p>
                <p className="text-neutral30 text-xs">$SHIBAI</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x7353...473B58</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$25.57k</p>
          <p className="text-sm text-neutral30">$0.000084</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xb0c7EFa7DD1725f1463977B258668Ed9379CDAED"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xb0c7EFa7DD1725f1463977B258668Ed9379CDAED.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xb0...AED</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_6fc011c06b.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">SPREDD</p>
                <p className="text-neutral30 text-xs">$SPREDD</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xa540...B0f01b</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$25.16k</p>
          <p className="text-sm text-neutral30">$0.000082</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xbD6b34a1d5db3FF53386307C6d505bB4afDC9cf4"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xbD6b34a1d5db3FF53386307C6d505bB4afDC9cf4.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xbD...cf4</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_d42e0bc92a.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Dæmons CEO</p>
                <p className="text-neutral30 text-xs">$DMNAI</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x331B...9DBd4B</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$24.15k</p>
          <p className="text-sm text-neutral30">$0.000076</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x6f08D8De47066801813D62B9ec543016cfca595F"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6f08D8De47066801813D62B9ec543016cfca595F.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6f...95F</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_cecb5e6797.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Stream Sage</p>
                <p className="text-neutral30 text-xs">$STREAM</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5D25...4e1060</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$23.83k</p>
          <p className="text-sm text-neutral30">$0.000073</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xfdF73C771d0A3EB0fF67c4c52844428884eA1850"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xfdF73C771d0A3EB0fF67c4c52844428884eA1850.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xfd...850</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/14925_Degen_Freak_Yeets_7d66edd194.gif"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  Degen Futures Yield ...
                </p>
                <p className="text-neutral30 text-xs">$DFY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x25Bb...8b9937</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$23.38k</p>
          <p className="text-sm text-neutral30">$0.00007</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xb6a596CEDa26111a8DD302dcDeE4Bd2B207f3AAb"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xb6a596CEDa26111a8DD302dcDeE4Bd2B207f3AAb.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xb6...AAb</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_7da7745470.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Lando V2</p>
                <p className="text-neutral30 text-xs">$LANDO2</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xDE2E...2c0A86</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$22.91k</p>
          <p className="text-sm text-neutral30">$0.000068</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x7a27C4fB2B7C34762285863Bd4B9BfDd89cDc08D"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7a27C4fB2B7C34762285863Bd4B9BfDd89cDc08D.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7a...08D</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_021985bd64.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Rita</p>
                <p className="text-neutral30 text-xs">$RITA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x97eC...618A14</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$22.6k</p>
          <p className="text-sm text-neutral30">$0.000065</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xda2E66Bf9Ce5A975cF1879b549597435fb0Dbb66"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xda2E66Bf9Ce5A975cF1879b549597435fb0Dbb66.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xda...b66</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_799437809f.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Cybercentry</p>
                <p className="text-neutral30 text-xs">$CENTRY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x8cDa...cF3234</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$22.41k</p>
          <p className="text-sm text-neutral30">$0.000065</p>
          <p className="text-sm text-neutral30">11 days ago</p>
          <a
            href="/profile/0xcBF336181e219E7900C1dE539f85dECC1509e3a0"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xcBF336181e219E7900C1dE539f85dECC1509e3a0.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xcB...3a0</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_063e322f32.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Based</p>
                <p className="text-neutral30 text-xs">$CHESH</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x333C...386530</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$22.04k</p>
          <p className="text-sm text-neutral30">$0.000063</p>
          <p className="text-sm text-neutral30">12 days ago</p>
          <a
            href="/profile/0xb1CC5FCb63bdd970E07e30d50ac4938886A47007"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xb1CC5FCb63bdd970E07e30d50ac4938886A47007.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xb1...007</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/15949_AI_Meme_Master_92d685e06e.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">AIMemeMaster</p>
                <p className="text-neutral30 text-xs">$AIMEME</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xeF46...672460</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$21.93k</p>
          <p className="text-sm text-neutral30">$0.000061</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x91a35d0d46792ec18D3eC72e7fDdd85653c385d3"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x91a35d0d46792ec18D3eC72e7fDdd85653c385d3.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x91...5d3</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_465edc7a25.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  Million Dollar Macho...
                </p>
                <p className="text-neutral30 text-xs">$MDMM</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x466A...E25526</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$21.51k</p>
          <p className="text-sm text-neutral30">$0.00006</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x76Fb3c5ABe51698f18eB8Cf34B0e6f079Aa273CF"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x76Fb3c5ABe51698f18eB8Cf34B0e6f079Aa273CF.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x76...3CF</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_71d23d9c80.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Big Titty Committee</p>
                <p className="text-neutral30 text-xs">$BTC</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xf2A3...4783A4</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$25.24k</p>
          <p className="text-sm text-neutral30">$0.000058</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x1CE6F43c4481Fb563764C06AEAFE99FFe4A06118"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x1CE6F43c4481Fb563764C06AEAFE99FFe4A06118.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x1C...118</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_238ee0aed5.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Quokka AI</p>
                <p className="text-neutral30 text-xs">$VION</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x6BE7...A45DEf</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$20.62k</p>
          <p className="text-sm text-neutral30">$0.000055</p>
          <p className="text-sm text-neutral30">14 days ago</p>
          <a
            href="/profile/0x3002A9896597D0c49aaFD8FDbAe4a79eb22657ab"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x3002A9896597D0c49aaFD8FDbAe4a79eb22657ab.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x30...7ab</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_a4eb7b41e8.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Pro Agent</p>
                <p className="text-neutral30 text-xs">$PA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x46F5...814D0B</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$20.16k</p>
          <p className="text-sm text-neutral30">$0.000052</p>
          <p className="text-sm text-neutral30">12 days ago</p>
          <a
            href="/profile/0x627A022f7Af48E71A5bf4F41CC42141363957527"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x627A022f7Af48E71A5bf4F41CC42141363957527.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x62...527</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_576abaca6e.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Sniper Search</p>
                <p className="text-neutral30 text-xs">$SS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xEBEB...D3248C</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$19.88k</p>
          <p className="text-sm text-neutral30">$0.000051</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x94F9e7B30361c16B21f37b0a76479326AedBa6bf"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x94F9e7B30361c16B21f37b0a76479326AedBa6bf.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x94...6bf</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/Vanessa_Gains_On_The_Move_c3ebac6716.jpg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">CUR8R</p>
                <p className="text-neutral30 text-xs">$CUR8R</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xF44e...C3d89c</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$19.23k</p>
          <p className="text-sm text-neutral30">$0.000047</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x8EEe4596C913946bD43606A8D4Fec39fC7e8E058"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8EEe4596C913946bD43606A8D4Fec39fC7e8E058.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x8E...058</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_6f71707203.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">HyperIP</p>
                <p className="text-neutral30 text-xs">$IP</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x7A61...65F60B</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$18.6k</p>
          <p className="text-sm text-neutral30">$0.000045</p>
          <p className="text-sm text-neutral30">22 days ago</p>
          <a
            href="/profile/0xe246CBa0Fa6700878933C108b3D9FE1d0b4B2854"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xe246CBa0Fa6700878933C108b3D9FE1d0b4B2854.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xe2...854</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_6fd39ac09b.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">The Hooligan</p>
                <p className="text-neutral30 text-xs">$HOOLI</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xA185...0432d1</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000044</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x5A233A62C8236Bdef4d1F712632BdF9C39Aa7Eb1"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x5A233A62C8236Bdef4d1F712632BdF9C39Aa7Eb1.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x5A...Eb1</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_03fef423b6.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">G30</p>
                <p className="text-neutral30 text-xs">$G30</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xc5ba...8df836</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000041</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x9184DF6024985071380Bcf9a13231992521ab5D6"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x9184DF6024985071380Bcf9a13231992521ab5D6.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x91...5D6</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_bd5b2de839.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">PriceGenie</p>
                <p className="text-neutral30 text-xs">$PRICE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xEdb7...2744FA</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$21.29k</p>
          <p className="text-sm text-neutral30">$0.000041</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x8475745992a4EB0cbFdfA439Faa8bA8D3ea90C02"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8475745992a4EB0cbFdfA439Faa8bA8D3ea90C02.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x84...C02</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_cf41cc3684.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Dadby AI</p>
                <p className="text-neutral30 text-xs">$DADBY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x1018...071B86</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$17.69k</p>
          <p className="text-sm text-neutral30">$0.00004</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xCaa43B227c2cBE15D47ACdbe221B1553684eB002"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xCaa43B227c2cBE15D47ACdbe221B1553684eB002.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xCa...002</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_2f3aa5ea5a.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Mini Mega</p>
                <p className="text-neutral30 text-xs">$M3GA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x4581...35eCfd</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$17.57k</p>
          <p className="text-sm text-neutral30">$0.00004</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xBA5607cd3C691e036200f3515D7a1b538d72100B"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xBA5607cd3C691e036200f3515D7a1b538d72100B.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xBA...00B</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_a6e4c00a3c.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Westie</p>
                <p className="text-neutral30 text-xs">$WESTIE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x929E...cc1709</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$20.73k</p>
          <p className="text-sm text-neutral30">$0.000038</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xeDF9a04061784f0826c147D9357B2Bea356d2f8D"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xeDF9a04061784f0826c147D9357B2Bea356d2f8D.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xeD...f8D</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_fae532ec74.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">AINDEX</p>
                <p className="text-neutral30 text-xs">$AINDEX</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x1600...C29B96</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000037</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x7Da8bb2e72E9925a9bD81A88E582A9a4dE0cFc93"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7Da8bb2e72E9925a9bD81A88E582A9a4dE0cFc93.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7D...c93</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_9ef24bca87.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">BigBug AI</p>
                <p className="text-neutral30 text-xs">$BUG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x934f...3c12E8</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$16.82k</p>
          <p className="text-sm text-neutral30">$0.000036</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x57280FF3762897B4699C2213faEaed5A47300B82"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x57280FF3762897B4699C2213faEaed5A47300B82.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x57...B82</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_0a8f00b2be.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Tortuga Oracle</p>
                <p className="text-neutral30 text-xs">$ORACLE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x4855...3ebdFA</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$16.78k</p>
          <p className="text-sm text-neutral30">$0.000036</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x6fe0E8BDAC611E9DF3334cDae26062bA621C434E"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6fe0E8BDAC611E9DF3334cDae26062bA621C434E.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6f...34E</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_482ef20324.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">NANA</p>
                <p className="text-neutral30 text-xs">$NANA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xE072...51c54a</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$8.08k</p>
          <p className="text-sm text-neutral30">$0.000035</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xF70D1bB04dB127EfDBf70855be92d0aB0DabF519"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xF70D1bB04dB127EfDBf70855be92d0aB0DabF519.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xF7...519</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_ff01270deb.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Meme Sniper</p>
                <p className="text-neutral30 text-xs">$MSNIP</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x897f...6bd6eB</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$16.17k</p>
          <p className="text-sm text-neutral30">$0.000033</p>
          <p className="text-sm text-neutral30">2 days ago</p>
          <a
            href="/profile/0xddf8502Fda7330876C687143b86cf536b807134C"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xddf8502Fda7330876C687143b86cf536b807134C.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xdd...34C</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_97f2571936.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Daryll</p>
                <p className="text-neutral30 text-xs">$DARYLL</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xe1e2...4c0522</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$7.7k</p>
          <p className="text-sm text-neutral30">$0.000033</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x2FD9994854B08FB56f4573b98de33c9e9b5B893b"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x2FD9994854B08FB56f4573b98de33c9e9b5B893b.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x2F...93b</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_d37639781d.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Ser Cryptic</p>
                <p className="text-neutral30 text-xs">$GODL</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x4A11...B5941E</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$16.02k</p>
          <p className="text-sm text-neutral30">$0.000033</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xd83Dcc574BE779d63B64b80bc6187A84b55E09F2"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xd83Dcc574BE779d63B64b80bc6187A84b55E09F2.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xd8...9F2</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_c90d2e1ebd.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Cleo Blythe</p>
                <p className="text-neutral30 text-xs">$CLEO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xc942...4Ad39C</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$11.12k</p>
          <p className="text-sm text-neutral30">$0.000032</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x559303D8976EDA529f1fe7BEab6CdB11694DB959"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x559303D8976EDA529f1fe7BEab6CdB11694DB959.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x55...959</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_343e7913d6.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">whiqqeen</p>
                <p className="text-neutral30 text-xs">$WHIQQ</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x86D9...675266</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$7.77k</p>
          <p className="text-sm text-neutral30">$0.000032</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xECcF5a202FdCb0C5257fB4F0e2CB68FF5A26711d"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xECcF5a202FdCb0C5257fB4F0e2CB68FF5A26711d.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xEC...11d</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_daa5528881.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Pepe d’Arte</p>
                <p className="text-neutral30 text-xs">$ARTY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xfcc4...2a3DD4</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.62k</p>
          <p className="text-sm text-neutral30">$0.000031</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x49E6357E3972638bcAeff4a92c25b711ec71A94b"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x49E6357E3972638bcAeff4a92c25b711ec71A94b.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x49...94b</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_3f8b2ccf0c.svg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">FP Dragon</p>
                <p className="text-neutral30 text-xs">$$DRGN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xB742...CeCd92</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$18.51k</p>
          <p className="text-sm text-neutral30">$0.000031</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x5b95A971B4583A5f011E9DA082acdD679b870D06"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x5b95A971B4583A5f011E9DA082acdD679b870D06.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x5b...D06</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/photo_2024_12_03_00_52_06_4102f0c355.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">LEX “The AI Lawyer”</p>
                <p className="text-neutral30 text-xs">$LEX</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xB544...41c67d</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$18.4k</p>
          <p className="text-sm text-neutral30">$0.000031</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x7c8876240949fC8A46E0c2AC509Cc660215F68dB"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7c8876240949fC8A46E0c2AC509Cc660215F68dB.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7c...8dB</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_8120c5242b.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">OIIA</p>
                <p className="text-neutral30 text-xs">$AICAT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xbD92...D86832</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$7.68k</p>
          <p className="text-sm text-neutral30">$0.000029</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xAC2e2163460282b089ef74Db9cAe06096499400f"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xAC2e2163460282b089ef74Db9cAe06096499400f.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xAC...00f</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_027453332f.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Newtonix</p>
                <p className="text-neutral30 text-xs">$NEWTON</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xcd73...69C926</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.26k</p>
          <p className="text-sm text-neutral30">$0.000029</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x81eA04C179b82d31662994a68b2582AD9D860F88"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x81eA04C179b82d31662994a68b2582AD9D860F88.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x81...F88</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_dd189f9816.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Ganesha</p>
                <p className="text-neutral30 text-xs">$WISE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x3FFC...2EE4cd</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$18.21k</p>
          <p className="text-sm text-neutral30">$0.000029</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x94E0Fc91c38aa3910506649830096051303173b4"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x94E0Fc91c38aa3910506649830096051303173b4.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x94...3b4</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/18865_Eross_Prime_add416b491.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Eross Prime</p>
                <p className="text-neutral30 text-xs">$EROSS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x34FA...1ecffd</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.04k</p>
          <p className="text-sm text-neutral30">$0.000029</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x43C8BEDb0866Fe38937Aa65781772E52af4C8F55"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x43C8BEDb0866Fe38937Aa65781772E52af4C8F55.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x43...F55</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_6a9785dc72.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Rubin</p>
                <p className="text-neutral30 text-xs">$RUBIN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x8458...B0c600</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.97k</p>
          <p className="text-sm text-neutral30">$0.000028</p>
          <p className="text-sm text-neutral30">23 days ago</p>
          <a
            href="/profile/0x1d53f591AE7164dF1c59A132f9fe25843D514c05"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x1d53f591AE7164dF1c59A132f9fe25843D514c05.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x1d...c05</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_af2be9e244.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">ALTOKEN RWA AI</p>
                <p className="text-neutral30 text-xs">$AKEN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xFe85...35B69D</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.79k</p>
          <p className="text-sm text-neutral30">$0.000028</p>
          <p className="text-sm text-neutral30">14 days ago</p>
          <a
            href="/profile/0x8548cBce7AC0De2E3A2470a9C0B9Ba218af8697C"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8548cBce7AC0De2E3A2470a9C0B9Ba218af8697C.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x85...97C</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_e20c704d1a.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">UNIPOOLS.xyz</p>
                <p className="text-neutral30 text-xs">$UPOOLS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5c87...AA3B21</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.7k</p>
          <p className="text-sm text-neutral30">$0.000027</p>
          <p className="text-sm text-neutral30">22 days ago</p>
          <a
            href="/profile/0x4E84555fAE961f29F4554DBD2a541853FcB91835"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x4E84555fAE961f29F4554DBD2a541853FcB91835.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x4E...835</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_fbc000a10c.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">The Trainman</p>
                <p className="text-neutral30 text-xs">$TRAIN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x299E...cdFca9</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000027</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x6EF9EB6F97C5FC1FF1205E730eF716A0105AbEAa"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6EF9EB6F97C5FC1FF1205E730eF716A0105AbEAa.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6E...EAa</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/18916_Team_Critical_Strike_AI_8670011280.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  Team Critical Strike...
                </p>
                <p className="text-neutral30 text-xs">$TCS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x51CE...9A090d</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.33k</p>
          <p className="text-sm text-neutral30">$0.000026</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x447A56c50A617Bd7C217c4FEa1Bd973a121abCF8"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x447A56c50A617Bd7C217c4FEa1Bd973a121abCF8.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x44...CF8</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_34d0bf162e.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Sevant </p>
                <p className="text-neutral30 text-xs">$SEVANT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x787D...14cf1D</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.28k</p>
          <p className="text-sm text-neutral30">$0.000026</p>
          <p className="text-sm text-neutral30">12 days ago</p>
          <a
            href="/profile/0xCC451AC8887580E87Ee56775d569D4a4b563636A"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xCC451AC8887580E87Ee56775d569D4a4b563636A.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xCC...36A</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_2163508190.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Sentinel</p>
                <p className="text-neutral30 text-xs">$SENT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x67c2...379558</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000026</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x90F15E09B8Fb5BC080B968170C638920Db3A3446"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x90F15E09B8Fb5BC080B968170C638920Db3A3446.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x90...446</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_b8446f8d3e.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">VSNIPX</p>
                <p className="text-neutral30 text-xs">$VSNIPX</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x642C...e23b8d</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.25k</p>
          <p className="text-sm text-neutral30">$0.000026</p>
          <p className="text-sm text-neutral30">5 days ago</p>
          <a
            href="/profile/0x93dAe5Df1F572Cf68acde21bD0f9BB4Db4077a0e"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x93dAe5Df1F572Cf68acde21bD0f9BB4Db4077a0e.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x93...a0e</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_1444ea0769.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">ALIENS</p>
                <p className="text-neutral30 text-xs">$ALIENS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xF167...E4C47a</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$14.07k</p>
          <p className="text-sm text-neutral30">$0.000026</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x461c0AD96ccad6daD4b835AF3D9af979bD452F0D"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x461c0AD96ccad6daD4b835AF3D9af979bD452F0D.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x46...F0D</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_e76d3f363c.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Paladin Agent</p>
                <p className="text-neutral30 text-xs">$PAGENT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x7C8F...85C06a</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.98k</p>
          <p className="text-sm text-neutral30">$0.000024</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x2d7241e04D33dc3FE46e374dbcc8503B047a66FE"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x2d7241e04D33dc3FE46e374dbcc8503B047a66FE.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x2d...6FE</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/Treebeard_AI_Agent_794c74a6e6.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Treebeard</p>
                <p className="text-neutral30 text-xs">$ENT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xAC9c...9ae090</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.9k</p>
          <p className="text-sm text-neutral30">$0.000024</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xCe849efC35A0a0a046E67c76B477c5432E4BA58b"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xCe849efC35A0a0a046E67c76B477c5432E4BA58b.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xCe...58b</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_57dda8b8c1.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Suppoman</p>
                <p className="text-neutral30 text-xs">$SUPPO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x3414...9A89F0</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.8k</p>
          <p className="text-sm text-neutral30">$0.000024</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x6d5B48E73F4fe3f9Aabe0446011C73418a337e6B"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6d5B48E73F4fe3f9Aabe0446011C73418a337e6B.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6d...e6B</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/16697_Q_Sharp_d6eb172180.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Q Sharp</p>
                <p className="text-neutral30 text-xs">$QSHARP</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xb4a7...8930D2</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.69k</p>
          <p className="text-sm text-neutral30">$0.000024</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x38f652C6Df17f9a8b0E3Cfb5D359Fe692d382819"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x38f652C6Df17f9a8b0E3Cfb5D359Fe692d382819.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x38...819</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_f5edadcd23.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">ONKS</p>
                <p className="text-neutral30 text-xs">$ONKS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xE6cf...75cBa1</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.65k</p>
          <p className="text-sm text-neutral30">$0.000023</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xD783a5B3cB6340d0A3AC584fcE5fd80F97fBb76B"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xD783a5B3cB6340d0A3AC584fcE5fd80F97fBb76B.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xD7...76B</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_1f94aa30fb.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Gen Z Quant</p>
                <p className="text-neutral30 text-xs">$QUANT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xA571...f9283F</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000023</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xB6A56166d6901A685baE8bcAD8fa173D847055BC"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xB6A56166d6901A685baE8bcAD8fa173D847055BC.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xB6...5BC</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_4a67dccb1c.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  仮想通貨天使 SATOSHI CHAN ...
                </p>
                <p className="text-neutral30 text-xs">$SATOAI</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xE537...58966A</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.97k</p>
          <p className="text-sm text-neutral30">$0.000023</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x22643d074d166529accA6188613D0360A49A44e5"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x22643d074d166529accA6188613D0360A49A44e5.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x22...4e5</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_e9ded9c66b.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">thanks.ai</p>
                <p className="text-neutral30 text-xs">$THXAI</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xAaB7...591d31</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.36k</p>
          <p className="text-sm text-neutral30">$0.000023</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0xe651e26A73DBc24e269bD6EF5351C000F32aA0d6"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xe651e26A73DBc24e269bD6EF5351C000F32aA0d6.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xe6...0d6</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_81e2ee57a5.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Decentralized Dave</p>
                <p className="text-neutral30 text-xs">$DCD</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xD985...dE2E6A</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.34k</p>
          <p className="text-sm text-neutral30">$0.000023</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xaecbaa7C564Ab2B12d7F46A112a2af6EC7505cF3"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xaecbaa7C564Ab2B12d7F46A112a2af6EC7505cF3.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xae...cF3</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_bf46070fdb.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Onigiri</p>
                <p className="text-neutral30 text-xs">$CHAN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x2FB6...da1F2a</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x7Da6EDbCB3ff92c03C7d511484EBBC5481C304A7"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7Da6EDbCB3ff92c03C7d511484EBBC5481C304A7.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7D...4A7</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_ef576ead00.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">DePIN Ninja</p>
                <p className="text-neutral30 text-xs">$$NINJA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5c7E...18FAC6</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.86k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x3c9805893d9b7c87404C57982eB26Ab15Efb4C6c"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x3c9805893d9b7c87404C57982eB26Ab15Efb4C6c.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x3c...C6c</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_68ed6ad9bf.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Jesus</p>
                <p className="text-neutral30 text-xs">$JESUS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xb8eb...7d2092</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.19k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xd013aD02b5f3706E903c331E30179F0c1295D6c1"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xd013aD02b5f3706E903c331E30179F0c1295D6c1.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xd0...6c1</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/11105_Agent_Cipherisk_0ba530e979.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Agent Cipherisk</p>
                <p className="text-neutral30 text-xs">$AIRISK</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xD400...b5D660</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$13.18k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xea1DF1C65D6a45285693E630F335B420bA0e0aeB"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xea1DF1C65D6a45285693E630F335B420bA0e0aeB.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xea...aeB</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_a414303753.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Mr. Monocle</p>
                <p className="text-neutral30 text-xs">$MONOCL</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xe0F0...0Ceb42</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x994361025b7a4e16eD98d3def37A41Dad523Af50"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x994361025b7a4e16eD98d3def37A41Dad523Af50.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x99...f50</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_14f85c921a.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  POM token on virtual...
                </p>
                <p className="text-neutral30 text-xs">$POM</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xcCbe...51a6EF</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xB9dd6E7b779AABEb08568c8294555E04ba971280"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xB9dd6E7b779AABEb08568c8294555E04ba971280.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xB9...280</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_fa7a4c3dc3.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">DROME</p>
                <p className="text-neutral30 text-xs">$DROME</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x4872...8E07af</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xbE4e798553C42Baea5f88d0b2347a2d4034F2C4D"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xbE4e798553C42Baea5f88d0b2347a2d4034F2C4D.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xbE...C4D</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_fa162ed5b2.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">AIRENE</p>
                <p className="text-neutral30 text-xs">$AIRENE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xBC07...351889</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$15.65k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x12d4FDb4Aac9837c3E9940066eDDAEb399126aF2"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x12d4FDb4Aac9837c3E9940066eDDAEb399126aF2.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x12...aF2</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_1200f434a1.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">DTRXBT</p>
                <p className="text-neutral30 text-xs">$DTRXBT</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x2453...0b50Ac</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x5d8d13b730Bb3D1e4765dee4c6AB065B73662F5d"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x5d8d13b730Bb3D1e4765dee4c6AB065B73662F5d.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x5d...F5d</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_e28311d6c8.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Bro Joegan</p>
                <p className="text-neutral30 text-xs">$BROJOE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x3baa...c727aE</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.95k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0xe3672Ddd7Cf52Ba8D5F4413E7BB5bbb5e7dc0EFD"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xe3672Ddd7Cf52Ba8D5F4413E7BB5bbb5e7dc0EFD.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xe3...EFD</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_a011f3d6b6.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">God</p>
                <p className="text-neutral30 text-xs">$GOD</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xc58b...BefD68</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.95k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x8893278a5B4deEe3ea0bDAF4E7dBF9cC09025E5b"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8893278a5B4deEe3ea0bDAF4E7dBF9cC09025E5b.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x88...E5b</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_4910b97b5b.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Comedian</p>
                <p className="text-neutral30 text-xs">$BAN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xfd4d...3369BF</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$10.98k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xD3660eE5743108ddBBC6Eb9dD07A0C325f6921fe"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xD3660eE5743108ddBBC6Eb9dD07A0C325f6921fe.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xD3...1fe</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_4b295a7de6.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">EL Capy</p>
                <p className="text-neutral30 text-xs">$CAPY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xd144...Ed249F</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.93k</p>
          <p className="text-sm text-neutral30">$0.000022</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x6d76cbD9762FC415f9d679BC557D6fFb9F46583b"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6d76cbD9762FC415f9d679BC557D6fFb9F46583b.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6d...83b</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_4b567aaca7.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">PeaceKeeper</p>
                <p className="text-neutral30 text-xs">$PEACE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5132...3D5810</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$7.68k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xc6FAE9027F2655D51b572FFFE7F7E180417BA0DE"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xc6FAE9027F2655D51b572FFFE7F7E180417BA0DE.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xc6...0DE</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_09587df75b.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">SproBot</p>
                <p className="text-neutral30 text-xs">$SPROBO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x2F66...b897DB</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x717F6203d68b8914D2C247548ed093baBC1812e3"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x717F6203d68b8914D2C247548ed093baBC1812e3.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x71...2e3</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_34aaca172c.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Biaoqing</p>
                <p className="text-neutral30 text-xs">$BIAO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xbf50...0A762A</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$7.68k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x9FB164B0Ef7700A35F74b63bd52a29112B5D8493"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x9FB164B0Ef7700A35F74b63bd52a29112B5D8493.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x9F...493</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_680e48fcd9.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">eDog</p>
                <p className="text-neutral30 text-xs">$EDOG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5006...27d0F6</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0xe122D33EdeD31222dBc84a2897360Bb6e2549F49"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xe122D33EdeD31222dBc84a2897360Bb6e2549F49.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xe1...F49</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_eb12b3ffa4.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">ORANGE•PILLS</p>
                <p className="text-neutral30 text-xs">$OPS</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x58f7...7D2218</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x0f45C1d3275ABbd94DFD79dDE8e29990AB539c81"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x0f45C1d3275ABbd94DFD79dDE8e29990AB539c81.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x0f...c81</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_11b24a0f25.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">CBomber Girl</p>
                <p className="text-neutral30 text-xs">$CBG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x1fef...B894bA</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.63k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x59F64c02a64a602e190C88c5Ce85392229c378ad"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x59F64c02a64a602e190C88c5Ce85392229c378ad.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x59...8ad</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_7fb033f5e2.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Critic</p>
                <p className="text-neutral30 text-xs">$CRITIC</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xE14b...60D850</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.6k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x8b5B9497e096ee6FfD6041D1Db37a2ac2b41AB0d"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8b5B9497e096ee6FfD6041D1Db37a2ac2b41AB0d.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x8b...B0d</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_999f25f69d.gif"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">V.A.P.E</p>
                <p className="text-neutral30 text-xs">$VAPE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x2b60...3EdaFE</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.63k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x8f737580DA70C6A424501E4dEB85Be895b5168e4"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8f737580DA70C6A424501E4dEB85Be895b5168e4.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x8f...8e4</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_bb2e8b8805.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">SUSA</p>
                <p className="text-neutral30 text-xs">$SUSA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xB0BC...1De989</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.58k</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">15 days ago</p>
          <a
            href="/profile/0xF3fc88cc2D0c6Fe86664a49Aef9069E2B4D50E16"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0xF3fc88cc2D0c6Fe86664a49Aef9069E2B4D50E16.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0xF3...E16</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_8e7525c114.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">snowy</p>
                <p className="text-neutral30 text-xs">$SNOWY</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x02A2...18623b</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">On-chain</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.00002</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x4bc9FE4d5F2061D52601A307A6e6ba4434C9ccBA"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x4bc9FE4d5F2061D52601A307A6e6ba4434C9ccBA.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x4b...cBA</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_d38fe72e02.webp"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Blox</p>
                <p className="text-neutral30 text-xs">$BLOX</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xAEf7...4F2cBc</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.5k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x6AC57dDe6072EC35b1B1a5d7d1a0755C61aCCbb2"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x6AC57dDe6072EC35b1B1a5d7d1a0755C61aCCbb2.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x6A...bb2</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_31b2d02e64.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">GENO Amino</p>
                <p className="text-neutral30 text-xs">$GENO</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x036b...5142C3</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.48k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x9d756660f83277e2B1313E3A09F62203e1dB02ac"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x9d756660f83277e2B1313E3A09F62203e1dB02ac.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x9d...2ac</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_b6f70ba9ab.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Topsig</p>
                <p className="text-neutral30 text-xs">$TOPSIG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xA9a8...4eEC08</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Creative</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.43k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x0118f2194Fb81b1b30e9e1e88279DaE79aD796bf"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x0118f2194Fb81b1b30e9e1e88279DaE79aD796bf.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x01...6bf</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_a4d818da9f.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Sherlock </p>
                <p className="text-neutral30 text-xs">$CLUE</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x9213...52eA1c</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Productivity</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x37DD7c21FBF600652887021A0C72b9DB08D901C1"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x37DD7c21FBF600652887021A0C72b9DB08D901C1.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x37...1C1</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_96084a13e8.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Cr0wn_Gh0ul</p>
                <p className="text-neutral30 text-xs">$CG</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x94Da...aC89AA</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.41k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x7682969b74d73dd72963Fdb353476a5C3cecf786"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7682969b74d73dd72963Fdb353476a5C3cecf786.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x76...786</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_2722515d46.jpeg"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">GAIA</p>
                <p className="text-neutral30 text-xs">$GAIA</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x9eb5...336EBc</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.39k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x72e90C673D456FaC8f4D5E65A18c443554d1F434"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x72e90C673D456FaC8f4D5E65A18c443554d1F434.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x72...434</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_78609dac0e.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">Effective Altruism</p>
                <p className="text-neutral30 text-xs">$E/A</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xA1d2...9036a3</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$0</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">3 months ago</p>
          <a
            href="/profile/0x5C76ed513C695E86326f0ba7EF2D421c7fD90484"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x5C76ed513C695E86326f0ba7EF2D421c7fD90484.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x5C...484</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_592afcded7.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">PEN2</p>
                <p className="text-neutral30 text-xs">$PEN2</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x5e39...A4CdD8</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.26k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">2 months ago</p>
          <a
            href="/profile/0x8fDFdf2F0C08e061ce0610be49F6DC5735F26B68"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x8fDFdf2F0C08e061ce0610be49F6DC5735F26B68.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x8f...B68</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/18405_Poly_Nori_AI_3374be6c53.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">PolyNori AI</p>
                <p className="text-neutral30 text-xs">$POLYN</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0x4cfA...87B72E</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.25k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">a month ago</p>
          <a
            href="/profile/0x686C57e976ea0c649906960700BD19BF348A2141"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x686C57e976ea0c649906960700BD19BF348A2141.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x68...141</p>
          </a>
        </div>
      </a>
      <a href="#" className="w-full border-b border-neutral col-span-5">
        <div className="grid w-full items-center hover:bg-[#101314] grid-cols-[1fr,160px,160px,160px,160px]">
          <div className="flex flex-row items-center gap-2 w-full ml-4 my-4">
            <div className="relative">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_e60b287478.png"
                alt="Avatar"
                className="avatar-md border-2 border-neutral"
              />
              <img
                src={basec}
                alt="Chain"
                className="h-3 min-h-3 lg:h-5 lg:min-h-5 object-contain absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-foreground font-bold">
                  Bastet the Protector
                </p>
                <p className="text-neutral30 text-xs">$BASTET</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
                  <p className="text-xs text-tertiary">0xB34b...28CeC4</p>
                  <img src={copy} alt="Copy" className="active-icon-sm" />
                </div>
                <div className="rounded-lg border border-neutral px-2 py-1 text-nowrap flex flex-row items-center">
                  <p className="text-xs text-tertiary">Information</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral30">$12.24k</p>
          <p className="text-sm text-neutral30">$0.000019</p>
          <p className="text-sm text-neutral30">16 days ago</p>
          <a
            href="/profile/0x7ab874Eeef0169ADA0d225E9801A3FfFfa26aAC3"
            className="flex flex-row items-center gap-2 h-fit mr-4"
          >
            <img
              src="https://effigy.im/a/0x7ab874Eeef0169ADA0d225E9801A3FfFfa26aAC3.svg"
              alt="Avatar"
              className="avatar-sm"
            />
            <p className="text-neutral30 text-sm text-end">0x7a...AC3</p>
          </a>
        </div>
      </a>
    </>
  );
};

export default NewAgent;
