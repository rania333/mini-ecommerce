import { NavLink } from 'react-router-dom';
import classes from './Product.module.scss';
function Product(props) {
    const {data} = props;
    const imgWidth = ((data.size === 2) ? '550px': '250px');
    const margin = ((data.size === 2) ? '60%' : '');
    const styles = ((data.size === 2) ? {width: 'fit-content', margin:'0% 0% -1% 78%',}: {});
    return ( 
        <div className={classes.gridItem} 
        style={{gridColumn:`${data.col} /span ${data.size}`, gridRow:`${data.row} /span 1`, 
        backgroundColor: data.color}}>
            <h2 style={{marginRight: margin}}> {data.title} </h2>
            <img src={data.img} width={imgWidth} height='300px'/>
            <div style={{...styles}}> 
                <span> </span>
                <NavLink to={"/"+data.id}> More info &rarr; </NavLink>
                {/* <a href='#'>More info &rarr;</a> */}
            </div>
        </div>
    );
}

export default Product;