import { Box, Divider } from '@mui/material';
import { FilterCasual, FiterProductUserWeb } from './component';
import { FilterProduct } from './component/FilterProduct';
import { Collapse } from '@/components';

export const Casual = () => {
  return (
    <>
      <Box>
        <Divider
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.10)',
            mx: '100px',
            marginTop: '24px',
          }}
          variant="middle"
        />
        <p style={{ marginTop: '24px', marginLeft: '175px' }}>Casual</p>
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
