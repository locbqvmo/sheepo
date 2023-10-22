import { Button } from '@mui/material';
import { Container } from '@/components';
import { CardProduct } from '@/components/CardProduct';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';
import { TitleSection } from '@/components/TitleSection';

export const NewArrivalSection = () => {
  return (
    <Container>
      <TitleSection
        name="NEW ARRIVALS"
        className="mt-[72px] mb-[55px] flex justify-center items-center"
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {LIST_CARD_PRODUCT.map(item => (
          <CardProduct {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-9 mb-[80px] leading-5">
        <Button
          variant="outlined"
          className="w-[218px] !bg-white h-[52px] !border-white10 !border !rounded-[62px]">
          View All
        </Button>
      </div>
    </Container>
  );
};