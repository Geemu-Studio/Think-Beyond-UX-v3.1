import clsx from "clsx";
import svgPaths from "./svg-fitf5bq036";
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("h-[16px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ListItemTextProps = {
  text: string;
};

function ListItemText({ text }: ListItemTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-px tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pt-px px-[335.5px] relative size-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#101828] border-solid border-t inset-0 pointer-events-none" />
      <div className="h-[421px] relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[40px] items-start pt-[64px] px-[32px] relative size-full">
          <div className="h-[196px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[196px] left-0 top-0 w-[528px]" data-name="Container">
              <div className="absolute content-stretch flex gap-[10px] h-[28px] items-center left-0 top-0 w-[528px]" data-name="Container">
                <div className="bg-white relative rounded-[6px] shrink-0 size-[28px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.5px] relative size-full">
                    <div className="relative shrink-0 size-[13px]" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                        <g clipPath="url(#clip0_2_97)" id="Icon">
                          <path d={svgPaths.p1cfaff00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_97">
                            <rect fill="white" height="13" width="13" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-[25.5px] relative shrink-0 w-[103.328px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.5px] left-0 not-italic text-[17px] text-white top-0 tracking-[-0.8566px] whitespace-nowrap">Think Beyond</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[68.25px] left-0 top-[44px] w-[320px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px] w-[309px]">Certyfikowany partner Salesforce specjalizujący się we wdrożeniach Salesforce Education Cloud dla polskich uczelni wyższych.</p>
              </div>
              <div className="absolute bg-[#101828] border border-[#364153] border-solid h-[30px] left-0 rounded-[33554400px] top-[128.25px] w-[215.203px]" data-name="Container">
                <div className="absolute bg-[#05df72] left-[16px] rounded-[33554400px] size-[8px] top-[10px]" data-name="Text" />
                <div className="absolute content-stretch flex h-[16px] items-start left-[32px] top-[6px] w-[165.203px]" data-name="Text">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d1d5dc] text-[12px] tracking-[0.3px] whitespace-nowrap">Salesforce Certified Partner</p>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[196px] items-start left-[560px] top-0 w-[248px]" data-name="Container">
              <HeadingText text="Usługi" />
              <div className="content-stretch flex flex-col gap-[10px] h-[160px] items-start relative shrink-0 w-full" data-name="List">
                <ListItemText text="Salesforce Education Cloud" />
                <ListItemText text="Automatyzacja rekrutacji" />
                <ListItemText text="Integracje systemowe" />
                <ListItemText text="Szkolenia i onboarding" />
                <ListItemText text="Wsparcie powdrożeniowe" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16px] h-[196px] items-start left-[840px] top-0 w-[248px]" data-name="Container">
              <HeadingText text="Firma" />
              <div className="content-stretch flex flex-col gap-[10px] h-[126px] items-start relative shrink-0 w-full" data-name="List">
                <ListItemText text="O nas" />
                <ListItemText text="Case Studies" />
                <ListItemText text="Kontakt" />
                <ListItemText text="Polityka prywatności" />
              </div>
            </div>
          </div>
          <div className="h-px relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t inset-0 pointer-events-none" />
          </div>
          <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
            <Text text="© 2026 Think Beyond. Wszelkie prawa zastrzeżone." additionalClassNames="shrink-0 w-[293.922px]" />
            <div className="h-[16px] relative shrink-0 w-[199.281px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
                <Text text="Polityka prywatności" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
                <Text text="Regulamin" additionalClassNames="shrink-0 w-[58.906px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}