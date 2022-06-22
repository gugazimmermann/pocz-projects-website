import { ReactElement } from 'react';
import SVGProps from './props';

export default function TeeShirtz({ color }: SVGProps): ReactElement {
  return (
    <svg
      className={`h-10 w-10 mr-4 fill-current ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z" />
    </svg>
  );
}
