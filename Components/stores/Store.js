import { extendObservable } from "mobx";

import starbucks from '../../images/starbucks.png';
import costa from '../../images/costa.png';
import carribu from '../../images/carribu.png';
import starbucks2 from '../../images/starbucks.jpg';
import costa2 from '../../images/costa.jpg';
import carribu2 from '../../images/carribu.jpg';


class MyStore  {
  constructor() { extendObservable(this, {

  	currentShop: {},
  	cart: [ 
],

    list: [
    {
        name: 'StarBucks',
        location: 'Salmiya',
        distance: '5 kilometers',
        image: starbucks,
        background: starbucks2,
        lat: 29.32825632,
        lng: 47.9258696
    },
    {
        name: 'Costa',
        location: 'Salmiya',
        distance: '2.1 kilometers',
        image: costa,
        background: costa2,
        lat: 29.33763773,
        lng: 47.9161726
    },
    {
        name: 'Caribu',
        location: 'Salmiya',
        distance: '500 meters',
        image: carribu,
        background: carribu2,
        lat: 29.31753322,
        lng: 47.9079404
    },
]

  })
  	
  }


  getShopByName(name) {
    return this.list.find(coffeshop => coffeshop.name == name);
  }
}



export default new MyStore;



