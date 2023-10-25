import { SVGProps } from 'react';

export const Zara = ({
  color = 'white',
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92"
        height="38"
        viewBox="0 0 92 38"
        fill="none"
        {...props}>
        <g clipPath="url(#clip0_22_363)">
          <path
            d="M86.8141 36.8682L73.3318 0.0322557L73.3226 0.00787354H73.0566L70.2802 7.57753L65.2258 21.3583L65.214 21.3474C63.4622 19.8135 60.9908 18.8546 57.8782 18.4976L56.9289 18.4003L57.8707 18.2805C63.0036 17.3652 66.454 14.1482 66.454 10.2723C66.454 4.95736 61.4165 1.24757 54.2006 1.24757H39.1869V1.51668H43.5494V28.98L32.9544 0.0321654L32.9448 0.00787354H32.6788L29.9024 7.57753L19.194 36.7734L19.1281 36.781C18.9451 36.8034 18.7641 36.8212 18.585 36.8346C18.3157 36.8556 18.0479 36.8681 17.7792 36.8681H6.95934L27.5265 1.51659L27.6794 1.25091H2.52491V12.1867H2.79182C2.83914 6.86007 5.96517 1.51659 12.8719 1.51659H21.2043L0.481689 37.133H28.399V26.6557H28.1321C28.0957 31.2985 25.4436 35.7082 19.6764 36.7039L19.493 36.7349L23.8853 24.7547H36.1892L40.6227 36.8682H36.2492V37.1331H53.415V36.8682H49.0228V18.5956H54.0908C59.2482 18.5956 62.2062 20.8821 62.2062 24.8669V28.1082C62.2062 28.4653 62.2306 28.9875 62.2577 29.4242V29.4401L59.5337 36.8665H55.9751V37.1314H63.3413V36.8665H59.821L62.3016 30.104C62.3067 30.1694 62.3093 30.2088 62.3093 30.2088L62.3777 30.8181L62.4436 31.2212C62.8575 33.7149 63.8186 35.548 65.2993 36.6695L65.5122 36.8229C66.6372 37.5991 68.0352 37.9922 69.6695 37.9922C71.8344 37.9922 73.2779 37.4566 74.4697 36.196L74.3134 36.0501C73.2153 37.0559 72.2939 37.4633 71.1393 37.4633C69.172 37.4633 68.1425 35.0954 68.1425 32.7602V28.2188C68.1529 27.092 67.9751 25.9712 67.6162 24.9021L67.5673 24.7613V24.7563H76.5668L81.0003 36.8699H76.6268V37.1347H91.4817V36.8699L86.8141 36.8682ZM23.9832 24.4898L30.0444 7.96485L36.0921 24.4898H23.9832ZM49.0255 18.3299V1.51659H52.8939C58.0615 1.51659 60.7897 4.56507 60.7897 10.3294C60.7897 16.4599 59.2236 18.3299 54.0908 18.3299H49.0255ZM67.4624 24.4898L67.4362 24.4244C67.0363 23.4578 66.454 22.5759 65.7207 21.826L65.4673 21.5745L65.4403 21.5494L70.4186 7.96485L76.4663 24.4898H67.4624Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_22_363">
            <rect
              width="91"
              height="38"
              fill={color}
              transform="translate(0.481689)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
