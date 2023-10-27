import { green, pink, yellow } from '@mui/material/colors';
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  TitleSection,
} from '@/components';
import { MinusIcon, PlusIcon } from '@/components/icons';
import { RatingView } from '@/components/Rating';

export const ProductInfoSection = () => {
  const product = {
    name: 'One Life Graphic T-shirt',
    price: 200,
    cost: 300,
    discount: '-40%',
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: ['tshirt1.png', 'tshirt1.png', 'tshirt1.png'],
  };

  return (
    <Container>
      <Breadcrumbs />
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-3 flex-row flex-wrap">
          <div className="w-[132px] flex flex-col gap-4">
            {product.images.map(item => {
              return (
                <img
                  src={item}
                  alt="product_image"
                  className="bg-snowFlake h-[167px] w-full rounded-[20px]"
                />
              );
            })}
          </div>
          <div className="bg-snowFlake w-[444px] rounded-[20px] h-[542px]"></div>
        </div>
        <div className="max-w-screen-xsmall flex flex-col gap-[15px] ">
          <TitleSection name={product.name} className="text-4xl" />
          <div className="flex gap-4 mt-3">
            <RatingView value={4.5} />
          </div>
          <div className="flex gap-2 items-center align-middle">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-3xl font-bold text-black40 line-through">
              <del>${product.cost}</del>
            </span>
            <p className="py-[6px] px-[14px] rounded-[62px] h-[28px] bg-errorLight text-error flex justify-center items-center text-s font-santoshi font-medium max-w-[60px]">
              {product.discount}
            </p>
          </div>
          <span className="text-[16px] font-santoshi text-black60 ">
            {product.description}
          </span>
          <div className="border-2 border-black10"></div>
          <h1 className="text-[16px] font-santoshi text-black60">
            Select Colors
          </h1>
          <div className="flex">
            <Checkbox
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
            />
            <Checkbox
              sx={{
                color: yellow[800],
                '&.Mui-checked': {
                  color: yellow[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
            />
            <Checkbox
              sx={{
                color: green[800],
                '&.Mui-checked': {
                  color: green[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
            />
          </div>
          <div className="border-2 border-black10"></div>
          <h1 className="text-[16px] font-santoshi text-black60">
            Choose Size
          </h1>
          <div className="text-[16px] font-santoshi text-black60">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
              Small
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
              Medium
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
              Large
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
              X-Large
            </button>
          </div>
          <div className="flex gap-5">
            <div className="bg-snowFlake flex flex-row gap-10 h-[52px] items-center rounded-[62px] py-[16px] px-[20px]">
              <MinusIcon />
              <h1 className="text-[16px] font-santoshi font-[500px]">1</h1>
              <PlusIcon />
            </div>
            <Button
              variant="rounded-contained"
              sx={{
                textTransform: 'none',
                width: '100%',
              }}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};