import { Box, Divider } from '@mui/material';
import clsx from 'classnames';
import { Breadcrumbs } from '@/components';
import Pagination from '@/components/Pagination/Pagination';
import { FilterCasual, FiterProductUserWeb } from './component';
import { FilterProduct } from './component/FilterProduct';

export const Casual = () => {
  return (
    <>
      <Box
        sx={{
          width: ' 1440px',
          height: '2332px',
          alignItems: 'center',
          mx: 'auto',
        }}>
        <Divider
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.10)',
            mx: '100px',
            marginTop: '24px',
          }}
          variant="middle"
        />
        <Box sx={{ marginLeft: '100px', marginTop: '24px' }}>
          <Breadcrumbs />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
          <FiterProductUserWeb />
          <Box>
            <FilterCasual />
            <FilterProduct />
          </Box>
        </Box>
      </Box>
    </>
  );
};
