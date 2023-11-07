import { Box, Divider } from '@mui/material';
import Pagination from '@/components/Pagination/Pagination';
import { FilterCasual, FiterProductUserWeb } from './component';
import { FilterProduct } from './component/FilterProduct';

export const Casual = () => {
  return (
    <>
      <Box sx={{ width: ' 1440px', height: '2332px', alignItems: 'center' }}>
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
            {/* <RadioButtons values={[raio]} /> */}
            {/* <Select items={[menuItems]} /> */}
            {/* <DatePickers label={'caalo'} /> */}
            {/* <Divider
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
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
