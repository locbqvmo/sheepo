import { Box, Button } from '@mui/material';
import { Container } from '@/components';
import { CardProduct } from '@/components/CardProduct';
import { LIST_CARD_PRODUCT } from '@/components/CardProduct/__mocks__/data';
import { ProductCard } from '@/components/ProductCard';
import { TitleSection } from '@/components/TitleSection';

export const FilterProduct = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: '925px',
          height: '408px',
        }}>
        <Box
          sx={{
            marginLeft: '20px',
            marginTop: '263px',
            width: '1440px',
            borderRadius: '20px',
            gap: '20px',
            display: 'flex',
          }}>
          <ProductCard
            image="./image"
            name="Gradient Graphic T-shirt"
            star={5}
            price="$250"
          />
          <ProductCard
            image="./image"
            name="Polo with Tipping Details"
            star={5}
            price="$250"
          />
          <ProductCard
            image="./image"
            name="Gradient Graphic T-shirt"
            star={5}
            price="$250"
          />
        </Box>
      </Box>
    </Container>
  );
};
