import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className='flex gap-1 items-center'>
      <a href="https://www.instagram.com/ssf_mjrdvsn?igsh=MWdqbGNrejFkdHU2dA==" target="_blank" rel="noopener noreferrer">
        <RiInstagramFill size={25} />
      </a>
      <a href="https://www.facebook.com/ssfmjsdvsn/" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={25} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
