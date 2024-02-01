import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div className="logoBox">
      <LogoIcon />
    </div>
  );
}
