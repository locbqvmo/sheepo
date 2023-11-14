import React from 'react';
import { Button, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CardProduct, Container, TitleSection } from '@/components';
import Pagination from '@/components/Pagination/Pagination';
import { LIST_PRODUCT_CASUAL } from './__mocks__/data';

export const FilterProduct = () => {
  return (
    <Container>
      {/* <TitleSection
        name="NEW ARRIVALS"
        className="mt-[72px] mb-[55px] flex justify-center items-center"
      /> */}
      <div
        style={{ display: 'flex', flexWrap: 'wrap', marginRight:'21px' }}
        className="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {LIST_PRODUCT_CASUAL.map((item, i) => (
          <CardProduct key={i} {...item} />
        ))}
      </div>
      <Divider
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.10)',
          mx: '100px',
          marginTop: '30px',
          marginBottom: '30px',
        }}
        variant="middle"
      />
      <Pagination
        currentPage={10}
        totalCount={20}
        itemsPerPage={30}
        onPageChange={function (page: {}): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Container>
  );
};
