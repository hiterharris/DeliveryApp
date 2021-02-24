import budweiser12 from '../images/budweiser12.png';
import corona12 from '../images/corona12.png';
import wine from '../images/wine.png';
import tobacco from '../images/tobacco.png';
import vape from '../images/vape.png';

const beerList = [
    {
      id: 1,
      title: 'Budweiser 12 pack',
      price: '$9.99',
      image: budweiser12,
    },
    {
      id: 2,
      title: 'Corana 12 pack',
      price: '$15.09',
      image: corona12,
    },
  ];

  const wineList = [
    {
      id: 1,
      title: 'Wine 1',
      price: '$0',
      image: wine,
    },
  ];

  const tobaccoList = [
    {
      id: 1,
      title: 'Tobacco 1',
      price: '$0',
      image: tobacco,
    },
  ];

  const vapeList = [
    {
      id: 1,
      title: 'Vape 1',
      price: '$0',
      image: vape,
    },
  ];
  

  const productCardData = [
    {
      title: 'Beer',
      image: budweiser12,
      data: beerList
    },
    {
      title: 'Wine',
      image: wine,
      data: wineList
    },
    {
      title: 'Tobacco',
      image: tobacco,
      data: tobaccoList
    },
    {
      title: 'Vapes',
      image: vape,
      data: vapeList
    },
  ];
  
  module.exports = [beerList, wineList, tobaccoList, vapeList, productCardData];
  