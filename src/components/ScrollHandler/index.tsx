import { FunctionComponent, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';

export interface Props {
  location: Location;
}
const ScrollHandler: FunctionComponent<Props> = ({ location }) => {
  useEffect(() => {
    console.log('the location hash is: ', location);
    const element = document.getElementById(location.hash);

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [location]);

  return null;
};

export default withRouter(ScrollHandler);
