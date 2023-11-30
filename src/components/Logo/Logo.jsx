import './Logo.scss';
import logoImg from '../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png';
const Logo = () => {
  return (
    <div className='logo'>
      <img
        src={logoImg}
        alt='logo'
      />
    </div>
  );
};
export default Logo;
