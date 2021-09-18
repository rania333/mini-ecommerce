
import classes from './App.module.scss';
import Header from './Components/Layout/Header';
//images
import Img1 from './Assets/ItemPic/Hero-chair.png';
import Img2 from './Assets/ItemPic/hero-chair2.png';
import Img3 from './Assets/ItemPic/hero-couch.png';
import Img4 from './Assets/ItemPic/sofa_PNG6942.png';
import Img5 from './Assets/ItemPic/chair.png';
import Img6 from './Assets/ItemPic/PNGPIX-COM-Chair-PNG-Transparent-Image-1.png';
import Img7 from './Assets/ItemPic/armchair_PNG7028.png';
import Img8 from './Assets/ItemPic/Chair-PNG-image.png';
import { useEffect, useState } from 'react';
import Slider from './Components/Layout/Slider';
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import {Switch, Route} from 'react-router-dom';
function App() {
  let arr = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  const Data = [
    {
    id: 1,
    img: Img1,
    title: 'The Mine',
    description: 'Working Chair',
    price:'180',
    color:'#B0D5D8',
    inContent:false,
    size:1,
    inHeader: true}, {
    id: 2,
    img: Img2,
    title: 'Ingrid',
    description: 'Working Chair',
    price:'120',
    color:'#F5F5F5',
    inHeader: true,
    inContent:true,
    row:1,
    col:1,
    order:1,
    size:1}, {
    id: 3,
    img: Img3,
    title: 'Gronlid',
    description: 'Working Chair',
    price:'419',
    color: '#EBD9D9',
    inContent:true,
    size:2,
    row:2,
    col:1,
    order:4,
    inHeader: true}, {
    id: 4,
    img: Img5,
    title: 'Leifarne',
    description: 'Dining Chair',
    price:'180',
    color: '#ADD4FF',
    inContent:true,
    size:1,
    row:1,
    col:3,
    order:3,
    inHeader: true}, {
    id: 5,
    img: Img4,
    title: 'Vejmon',
    description: 'Working Chair',
    price:'500',
    color:'#E6E2F0',
    inContent:true,
    size:2,
    order:7,
    row:3,
    col:2,
    inHeader: true}, {
    id: 6,
    img: Img6,
    title: 'Lallerod',
    description: 'Working Chair',
    price:'150',
    color:'#F5F5F5',
    inContent:true,
    size:1,
    row:3,
    order:6,
    col:1,
    inHeader: false}, {
    id: 7,
    img: Img7,
    title: 'Shell',
    description: 'Working Chair',
    price:'160',
    color:'#F5F5F5',
    inContent:true,
    size:1,
    row:1,
    col:2,
    order:2,
    inHeader: false}, {
    id: 8,
    img: Img8,
    title: 'Ekebol',
    description: 'Working Chair',
    price:'100',
    color:'#F5F5F5',
    inContent:true,
    size:1,
    row:2,
    col:3,
    order:5,
    inHeader: false}
    ];
  const [Items, setItem] =useState(Data);
  const contentItems = Items.filter(item => {
    return item.inContent
})
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Slider data={Items}/>
          <ProductList data={contentItems}/>
        </Route>
        <Route path="/:id">
          <ProductDetails data={contentItems}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
