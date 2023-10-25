import { SVGProps } from 'react';

export const GitHubIcon = ({
  color = 'black',
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.60685 0.810303C3.01591 0.810303 0.126953 3.69926 0.126953 7.2902C0.126953 10.1522 1.98992 12.5821 4.55488 13.4461C4.87888 13.5001 4.98688 13.3111 4.98688 13.1221C4.98688 12.9601 4.98688 12.5551 4.98688 12.0151C3.1779 12.4201 2.79991 11.1511 2.79991 11.1511C2.50291 10.3951 2.07092 10.2062 2.07092 10.2062C1.47693 9.80116 2.12492 9.80116 2.12492 9.80116C2.77291 9.85516 3.1239 10.4761 3.1239 10.4761C3.6909 11.4751 4.63588 11.1781 5.01387 11.0161C5.06787 10.5841 5.22987 10.3142 5.41887 10.1522C3.98789 9.99016 2.47592 9.42316 2.47592 6.9392C2.47592 6.23722 2.71891 5.64322 3.1509 5.21123C3.09691 5.04923 2.85391 4.40124 3.2049 3.48326C3.2049 3.48326 3.74489 3.32126 4.98688 4.15825C5.49987 4.02325 6.06686 3.94225 6.60685 3.94225C7.14684 3.94225 7.71383 4.02325 8.22682 4.15825C9.4688 3.32126 10.0088 3.48326 10.0088 3.48326C10.3598 4.37425 10.1438 5.02223 10.0628 5.21123C10.4678 5.67022 10.7378 6.23722 10.7378 6.9392C10.7378 9.42316 9.22581 9.96316 7.76783 10.1252C8.01083 10.3141 8.19982 10.7191 8.19982 11.3131C8.19982 12.1771 8.19982 12.8791 8.19982 13.0951C8.19982 13.2571 8.30782 13.4731 8.65882 13.4191C11.2238 12.5821 13.0867 10.1522 13.0867 7.2902C13.0867 3.69926 10.1978 0.810303 6.60685 0.810303Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
