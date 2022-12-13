import { useEffect, useState } from 'react';

import { Fade } from 'react-reveal';

import { Link } from 'react-scroll';

function Navigation(props) {
  const [width, setWidth] = useState(0);

  let offset    = props.offset;
  let style     = {};

  if (offset > 44 && offset < 308) {
      style = "hidden";
  } else if (offset > 308) {
      style = "shown";
  } else {
      style = "bg-hidden";
  }

  useEffect(() => {
    if (width !== 100 * props.height) {
      setWidth(100 * props.height);
    }
  }, [offset, props.height, width]);

  return (
      <nav className = {style}>
        <Fade delay={2500} duration={1000} when={props.loaded}>
        <ul>
            <Link to="home"><li>{props.text.HOME_TEXT.toUpperCase()}</li></Link>
            <Link to="works"><li>{props.text.WORKS_TEXT.toUpperCase()}</li></Link>
            <Link to="social"><li>{props.text.CONTACT_TEXT.toUpperCase()}</li></Link>
            <div className = 'dynamicBorder' style = {{width: width + "%"}} />
        </ul>
        </Fade>
      </nav>
  );
}
  
export default Navigation;