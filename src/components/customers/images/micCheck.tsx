import { ReactElement } from 'react';
import SVGProps from './props';

export default function MicCheck({ color }: SVGProps): ReactElement {
  return (
    <svg
      className={`h-10 w-10 mr-4 fill-current ${color}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
    </svg>
  );
}
