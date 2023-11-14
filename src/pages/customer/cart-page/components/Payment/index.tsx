import EastIcon from '@mui/icons-material/East';
import clsx from 'classnames';
import { SellIcon } from '@/assets';
import { Button, Input } from '@/components';
import { useAppSelector } from '@/hooks/common-hook';

export const Payment = () => {
  const { cart } = useAppSelector(store => store);

  const subtotal = cart.items.reduce(
    (prev, current) => prev + current.amount * current.price,
    0,
  );

  const discount: number = subtotal / 5;
  const total: number = subtotal - discount + 15;

  return (
    <div
      className={clsx(
        'flex flex-col gap-4 p-5',
        'w-full h-full rounded-3xl border',
        'xl:px-6 xl:gap-6',
      )}>
      <h1 className="text-xl font-medium not-italic xl:text-2xl">
        Order Summary
      </h1>
      <div className="flex flex-col gap-4 xl:gap-5">
        <h3
          className={clsx(
            'flex justify-between items-center',
            'text-lg text-black60 font-normal xl:text-xl',
          )}>
          Subtotal
          <span className="font-bold text-black">${subtotal}</span>
        </h3>
        <h3
          className={clsx(
            'flex justify-between items-center',
            'text-lg text-black60 font-normal xl:text-xl',
          )}>
          Discount (-20%)
          <span className="font-bold text-error">-${discount}</span>
        </h3>
        <h3
          className={clsx(
            'flex justify-between items-center',
            'text-lg text-black60 font-normal xl:text-xl',
          )}>
          Delivary Fee
          <span className="font-bold text-black">
            ${subtotal === 0 ? 0 : 15}
          </span>
        </h3>
        <hr />
        <h2 className="flex justify-between items-center text-xl font-normal">
          Total
          <span className="font-bold text-2xl">
            ${subtotal === 0 ? 0 : total}
          </span>
        </h2>
      </div>
      <div className="flex gap-3 w-full h-12">
        <Input
          disableErrorMessage
          className="!border-none h-full"
          type="text"
          placeholder="Add promo code"
          required
          renderLeadingIcon={
            <SellIcon className="text-black60 cursor-pointer" />
          }
        />
        <Button className="!font-santoshi !px-10 !h-full">Apply</Button>
      </div>
      {subtotal === 0 ? (
        <Button className="!cursor-no-drop" disabled>
          Go to checkout &nbsp;
          <EastIcon />
        </Button>
      ) : (
        <Button className="!font-santoshi !mb-[10px] !py-3 !text-5 !h-14">
          Go to checkout &nbsp;
          <EastIcon />
        </Button>
      )}
    </div>
  );
};