import React from 'react';
import './style.css';
import { Box } from '@mui/material';
import { Button, Collapse, ColorPicker } from '@/components';
import Pagination from '@/components/Pagination/Pagination';
import { FilterProduct } from '../FilterProduct';

export const FilterCasual = () => {
  return (
    <Box sx={{}}>
      <Box sx={{ display: 'flex' }}>
        <p className="text" style={{ marginLeft: '20px', marginTop: '24px' }}>
          Casual
        </p>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '428px',
            marginTop: '40px',
            // width: '396px',
            // height: '16px',
            fontSize: '16px',
          }}>
          <p>Showing 1-10 of 100 Products</p>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '12px' }}>
            <p>Sort by:</p>
            <p style={{ fontWeight: '500' }}>Most Popular</p>
            <Collapse children={''} title={''} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
