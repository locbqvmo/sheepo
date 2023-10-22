import { Container } from '@/components';
import { TitleSection } from '@/components/TitleSection';

export const BrowseByDressStyleSection = () => {
  return (
    <Container>
      <div className="bg-snowFlake rounded-[40px] pb-[76px] px-[64px]">
        <TitleSection
          name="BROWSE BY dress STYLE"
          className="pt-[70px] pb-[64px] flex justify-center items-center"
        />
        <div className="grid md:grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-2 md:gap-5 font-santoshi">
          <div className="flex justify-center md:mb-0 mb-3 relative">
            <img
              src="casual.png"
              className="w-[310px] md:w-full h-[190px] md:h-full rounded-[20px]"
            />
            <p className="absolute left-6 mt-4 font-bold text-2xl">Casual</p>
          </div>
          <div className="col-span-2 relative flex justify-center md:mb-0 mb-3">
            <img
              src="formal.png"
              className="rounded-[20px] w-[310px] md:w-full h-[190px] md:h-full"
            />
            <p className="absolute left-6 mt-4 font-bold text-2xl">Formal</p>
          </div>
          <div className="col-span-2 relative flex justify-center md:mb-0 mb-3">
            <img
              src="party.png"
              className="rounded-[20px] h-[190px] md:h-full w-[310px] md:w-full"
            />
            <p className="absolute left-6 mt-4 font-bold text-2xl">Party</p>
          </div>
          <div className="flex relative justify-center md:mb-0">
            <img
              src="gym.png"
              className="w-[310px] md:w-full h-[190px] md:h-full rounded-[20px]"
            />
            <p className="absolute left-6 mt-4 font-bold text-2xl">Gym</p>
          </div>
        </div>
      </div>
    </Container>
  );
};