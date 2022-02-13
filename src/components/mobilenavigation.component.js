function Mobilenavigation(props) {
    let offset = props.offset;
    let colors = props.colors;

    let themestyle = "light";
    let style1     = {};
    let style2     = {};
    let style3     = {};

    if (offset > 2392) {
      themestyle = "light";
    } else if (offset > 1084) {
      themestyle = "dark";
    }

    if (props.modalOpened) {
      style1 = {transform: 'rotate(45deg) translateY(10px) translateX(5px)'};
      style2 = {opacity: 0};
      style3 = {transform: 'rotate(-45deg) translateY(-10px) translateX(5px)'};
    }

    return (
      <div className = "modal-btn" onClick = {props.handleOpen}>
        <span style = {style1} className = {"line1" + " " + themestyle}></span>
        <span style = {style2} className = {"line2" + " " + themestyle}></span>
        <span style = {style3} className = {"line3" + " " + themestyle}></span>
      </div>
    );
  }
  
  export default Mobilenavigation;