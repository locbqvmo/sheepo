import { Button } from '@mui/material';
import { Container } from '@/components';
import { LIST_POINT } from './components/__mocks__/data';
import { ListPoint } from './components/ListPoint';

export const BannerSection = () => {
  return (
    <div className="bg-snowFlake">
      <Container>
        <div className="lg:flex justify-center items-center">
          <div>
            <h1 className="text-black font-bold text-[64px] font-integralCF max-w-[577px] leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="max-w-[545px] font-normal font-santoshi text-black60 leading-[22px] mt-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="mt-8">
              <Button
                className="w-[210px] mt-8 !rounded-[62px]"
                variant="contained">
                Shop Now
              </Button>
            </div>
            <div className="justify-center flex gap-4 leading-[74px] mt-8">
              {LIST_POINT.map((item, i) => {
                if (item.point == '0') {
                  return (
                    <div>
                      <div className="flex h-full w-[5px] items-center justify-center lg:border-l lg:border-l-black10 leading-5" />
                    </div>
                  );
                }
                return <ListPoint key={i} {...item} />;
              })}
            </div>
          </div>
          <div>
            <img
              src="banner-hompage.png"
              alt="banner-homepage"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
