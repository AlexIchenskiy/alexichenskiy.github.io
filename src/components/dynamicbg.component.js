import { useState } from 'react';

function DynamicBg(props) {
    const [top, setTop]         = useState(0);
    const [opacity, setOpacity] = useState(1);

    let offset        = props.offset;
    let first_border  = 625;            //maximal start animation offset
    let second_border = 1500;           //where does it change so transition can be smooth
    let third_border  = 1800;           //where does bg starts appearing again
    let speed_decr     = 4;             //increase for slower bg translation

    //set top for smooth bg image animation
    if (offset >= 0 && offset < first_border) {
        if (top !== -offset / speed_decr) {
            setTop(-offset / speed_decr);
        }
    }

    //set opacity for smooth disappear animation at the top of the page
    if (offset > 44 && offset < first_border) {
        if (opacity !== 1 - (offset) / first_border) {
            setOpacity(1 - (offset) / first_border);
        }
    } 
    
    //set styles for smooth transitions (magical numbers included)
    if (offset > third_border) {

        if (top !== 0) {
            setTop(0);
        }
        
        if (opacity !== 0 + (offset - third_border) / 400) {
            setOpacity(0 + (offset - third_border) / 400);
        }

    } else if (offset > first_border) {

        if (opacity !== 0) {
            setOpacity(0);
        }
        
        if (top !== 0 && offset > second_border) {
            setTop(0);
        } else if (top !== -first_border / speed_decr && offset < second_border) {
            setTop(-first_border / speed_decr);
        }

    }

    return (
        <div className = 'dynamicBg collapsedBg' 
             style = {{top: top, opacity: opacity}} />
    )
}

export default DynamicBg;