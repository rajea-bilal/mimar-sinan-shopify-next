import Image from 'next/image';
import logoSource from '../../app/assets/logo4.png';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return <Image src={logoSource} width={80} height={60} alt="logo-image" className="logoBox" />;
}
