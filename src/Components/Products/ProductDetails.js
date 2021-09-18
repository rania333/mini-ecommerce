import BuyButton from '../Layout/BuyButton';
import classes from './ProductDetails.module.scss';
import IMG from '../../Assets/ItemPic/Group 2.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrPinterest, GrTwitter } from 'react-icons/gr';
import { useParams } from 'react-router';
function ProductDetails(props) {
    const {id} = useParams();
    const {data} = props;
    const singleProduct = data.filter(p => {
        return p.id == id
    })
    return ( 
        <div className={classes.container}> 
            <div className={classes.breif}> 
                <ul> 
                    <li>Home/</li>
                    <li>Collection/</li>
                    <li>New Arrivals/</li>
                    <li>{singleProduct[0].title}</li>
                </ul>
                <div className={classes.sliderControl}> 
                    <span className={classes.prev}> &lt; </span>
                    <span className={classes.num}> 
                        <ul>
                            <li className={classes.active}> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                        </ul>
                    </span> 
                    <span className={classes.next}> &gt; </span>
            </div>
                <div className={classes.img}>  
                    <img src={singleProduct[0].img} width='250px' height='300px'/>
                </div>
                <div className={classes.info}>  
                    <p> {singleProduct[0].description} </p>
                    <p> {singleProduct[0].title} </p>
                    <p>${singleProduct[0].price}</p>
                </div> 
                <div className={classes.btn}>  
                    <BuyButton/>
                </div>
            </div>
            <div className={classes.details}>  
                <div className={classes.first}>
                    <p> Intro </p>
                    <p>Simple, timeless design that’s still going strong after 40
                        years in our stores. It’s loved by all ages so we made a 
                        grown-up size and a children’s size.</p>
                </div>
                <div className={classes.second}> 
                    <div> Product Information </div>
                    <div className={classes.one}> 
                        <span> Dimensions</span> 
                        <p> 52 x 50 x 88 cm.</p>
                    </div>
                    <hr/>
                    <div className={classes.two}> 
                        <span> Materials</span> 
                        <ul>
                            <li>Polypropylene plastic</li>
                            <li>Aluminium</li>
                            <li>Solid birch</li>
                        </ul> 
                    </div>
                    <hr/>
                    <div className={classes.three}>
                        <span>Good to know</span>
                        <p> wipe clean with a cloth dampened in a mild cleaner.</p>
                    </div>
                    <hr/>
                </div>
                <div className={classes.third}> 
                    <img src={IMG}/> 
                    <div className={classes.social}> 
                        <ul> 
                            <li> <FaFacebookSquare/> </li>
                            <li> <GrTwitter /> </li>
                            <li> <GrPinterest/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;