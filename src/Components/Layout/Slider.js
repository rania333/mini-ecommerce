import { useState, useEffect } from 'react';
import BuyButton from './BuyButton';
import classes from './Slider.module.scss';
import React from 'react';

function Slider(props) {
    const headerImages = props.data.filter((d => {
        return d.inHeader;
    }));
    const [index, setIndex] = React.useState(0);
    //function
    useEffect(() => {
        const lastIndex = headerImages.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
        }, [index, headerImages]);
    useEffect(() => {
        let slider = setInterval(() => {
        setIndex(index + 1);
        }, 5000);
        return () => {
        clearInterval(slider);
        };
    }, [index]);
    return ( 
        <div className={classes.slider} style={{backgroundColor: (headerImages[index]!= undefined? 
        headerImages[index].color : headerImages[0].color)}}>
            <div className={classes.sliderContent}>
                {headerImages && headerImages.map((data, i) => {
                    let position = "";
                    if (i == index) {
                        position = "activeSlide";
                    }
                    return(
                    <div key={data.id} className={classes[position]}> 
                        <p>{data.description}</p>
                        <p>{data.title}</p>
                        <p>${data.price}</p>  
                    </div>
                    )
                })} 
                <BuyButton/>
            </div>
            <div className={classes.sliderImg}>
                {headerImages && headerImages.map((data, i) => {
                    let position = '';
                    if (i == index) {
                        position = 'activeSlide';
                    }
                    return(
                        <img src={data.img} className={classes[position]}
                        key={data.name} width='500' height='300' />
                    )
                })}
            </div>
            <div className={classes.sliderControl}>
                <span className={classes.prev} onClick={() => setIndex(index - 1)}> &lt; </span>
                <span className={classes.num}> 
                    <ul>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                    </ul>
                    </span> 
                <span className={classes.next} onClick={() => setIndex(index + 1)}> &gt; </span>
            </div>
        </div>
    );
}

export default Slider;