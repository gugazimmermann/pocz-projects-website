import { ReactElement } from 'react';
import BadgeLifeIo from './images/badgeLifeIo';
import Bugz4Life from './images/bugz4Life';
import MicCheck from './images/micCheck';
import TeeShirtz from './images/teeShirtz';

const CustomersList: { name: string, image: ReactElement }[] = [
  {
    name: 'TeeShirtz',
    image: <TeeShirtz color="text-lime-600" />,
  },
  {
    name: 'BadgeLife.io',
    image: <BadgeLifeIo color="text-amber-400" />,
  },
  {
    name: 'Mic.Check',
    image: <MicCheck color="text-teal-400" />,
  },
  {
    name: 'Bugz 4 Life',
    image: <Bugz4Life color="text-pink-500" />,
  },
];

export default CustomersList;
