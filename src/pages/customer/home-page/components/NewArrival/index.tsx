import { Button } from '@mui/material';
import { Container } from '@/components';
import { CardProduct } from '@/components/CardProduct';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';
import { ProductCard } from '@/components/ProductCard';
import { TitleSection } from '@/components/TitleSection';

export const NewArrivalSection = () => {
  return (
    <Container>
      <ProductCard image="./image" name="alo" star={3} price="459" />
    </Container>
  );
};
