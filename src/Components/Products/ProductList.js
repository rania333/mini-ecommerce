import { Fragment } from 'react';
import classes from './ProductList.module.scss';
import Product from './Product';
function ProductList(props) {
    const {data} = props;
    //sort items
    let orderedItems=[];
    for(let i=1; i<8 ; i++) {
        data.map(item => {
            if(item.order == i) {
                orderedItems.push(item);
            } else {
                return;
            }
        });
    }
    return (  
        <Fragment>
            <p className={classes.p}><span>Lean</span> too far</p>
            <div className={classes.gridContainer}>
                {orderedItems.map(item => {
                    return (<Product data={item} key={item.id}/>)
                    })}
            </div>
        </Fragment>
    );
}

export default ProductList;