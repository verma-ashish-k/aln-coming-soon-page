import ALNLogo from '../../assets/ALN_LOGO-3-47.png';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { IconContext } from 'react-icons';
import Form from './WaitlistForm';
import './LandingPage.css';
import Faqs from './Faqs';

function LandingPage() {
  return (
    <div className='landing-page'>
      <header>
        {/* <img src = {} alt="" /> */}
        <img src={ALNLogo} alt='ALN Logo' />
        <h1> We are coming soon... </h1>
        <p>
          We are almost there! If you want to get notified when the website goes
          live, subscribe to our mailing list and kindly follow us on all our
          social media handles.
        </p>
      </header>

      <Form />

      <Faqs />

      <footer>
        <IconContext.Provider value={{ className: 'bottom-react-icons' }}>
          <a
            href='https://www.facebook.com/africalivenetwork'
            target='_blank'
            rel='noreferrer'
          >
            <SiFacebook color='#0080ff' />
          </a>

          <a
            href='https://twitter.com/Africalivenetw1'
            target='_blank'
            rel='noreferrer'
          >
            <SiTwitter color='#0080ff' />
          </a>
          <a
            href='https://www.instagram.com/africalivenetwork.tv/'
            target='_blank'
            rel='noreferrer'
          >
            <SiInstagram color='#0080ff' />
          </a>
        </IconContext.Provider>
      </footer>
    </div>
  );
}

export default LandingPage;
