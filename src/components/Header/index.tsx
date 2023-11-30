import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Container, Input } from '@/components';
import { useToggle } from '@/hooks/useToggle';
import { logout } from '@/redux/slices';
import { store } from '@/redux/store';
import { ModalServices } from '@/services/modal-service';
import { Drawer } from '../Drawer';
import { CloseIcon, SearchIcon } from '../icons';
// import { MenuMobileIcon } from '../icons/MenuMobileIcon';
import { MenuToggle } from './MenuToggle';

export const Header = () => {
  const [open, toggle] = useToggle();
  const [search, setSearch] = useState('');
  const isSupperSmallScreen = useMediaQuery('(max-width: 320px)');
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const navigate = useNavigate();
  const [, setOpenMenu] = useState<boolean>(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClearSearch = () => {
    if (!search) {
      return;
    }
    setSearch('');
  };

  const authLogin = store.getState()?.auth?.accessToken;
  const dispatch = useDispatch();

  const handleLogin = () => navigate('/login');

  const handleLogout = () => {
    const pathname = window.location.pathname;
    dispatch(logout());
    navigate(pathname);
    ModalServices.showMessageSuccess({
      message: 'Logout successfully',
    });
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-between w-full gap-10 py-6 ">
          <div className="flex">
            <div className="flex items-center justify-center mr-4">
              {/* <MenuMobileIcon className="lg:hidden block" /> */}
              <div
                className="order-1 flex h-full items-center justify-between sm:order-2"
                onClick={() => setOpenMenu(true)}>
                <MenuToggle open={open} toggle={toggle} />
              </div>
            </div>
            <h3 className="text-black text-3xl font-bold font-integralCF">
              SHOP.CO
            </h3>
          </div>
          <div className="lg:block hidden">
            <ul className="flex gap-6 max-w-[321px]">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">On Sale</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden w-[545px]">
            <Input
              className=""
              renderLeadingIcon={<SearchIcon />}
              value={search}
              // onInput={(val: string) => {
              //   setSearch(val);
              // }}
              endIcon={search ? <CloseIcon /> : <SearchIcon />}
              onClickIconEnd={handleClearSearch}
              placeholder="Search for products..."
              disableErrorMessage
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center text-black mr-3 lg:hidden">
              <SearchIcon fillOpacity={1} />
            </div>
            <p onClick={() => navigate('/cart')}>
              <ShoppingCartOutlinedIcon className="mr-3 cursor-pointer" />
            </p>
            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircleOutlinedIcon />
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {!authLogin ? (
                <MenuItem onClick={handleLogin}>
                  <ArrowLeftOnRectangleIcon height={20} width={20} />
                  <Typography marginLeft={1} textAlign="center">
                    Log In
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleLogout}>
                  <ArrowRightOnRectangleIcon height={20} width={20} />
                  <Typography marginLeft={1} textAlign="center">
                    Log Out
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </Container>
      <Drawer isOpen={open} toggle={toggle}>
        <div className="flex items-center">
          {isSupperSmallScreen && <MenuToggle open={open} toggle={toggle} />}
        </div>
        <div className="px-5 text-white">
          <p className="text-2xl mb-3">Shop.co</p>

          <ul className="flex-col gap-6 max-w-[321px]">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
      </Drawer>
      {/* <Box
        sx={{
          minWidth: 320,
          padding: '20px',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}>
        <Drawer>shop</Drawer>
      </Box> */}
    </>
  );
};
