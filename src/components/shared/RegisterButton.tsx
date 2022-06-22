/* eslint-disable react/require-default-props */
import LANG from '../../lang/pt-BR';

const appSite = process.env.REACT_APP_PROJECT_APP_URL;

interface RegisterButtonProps {
  className?: string;
  link?: string;
  experiment?: boolean;
  invert?: boolean;
}

export default function RegisterButton({
  className,
  link,
  experiment,
  invert,
}: RegisterButtonProps) {
  return (
    <button
      type="button"
      className={`mx-auto lg:mx-0 hover:underline font-bold rounded py-3 px-6 shadow ${className} ${
        !invert ? 'gradient2' : 'gradient'
      }`}
      onClick={() => window.location.assign(link || `${appSite}/registar`)}
    >
      {experiment ? LANG.BUTTON.experiment : LANG.BUTTON.register}
    </button>
  );
}
