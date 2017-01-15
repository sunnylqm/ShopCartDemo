/**
 * Created by sunny on 15/01/2017.
 */


import { observable, computed } from 'mobx';

const cartData = observable([
  {
    id: '1461621270',
    name: '珠江·恺撒堡三角钢琴 GH275',
    price: 5800000,
    count: 1,
    img: 'https://img10.360buyimg.com/n7/s176x176_jfs/t895/31/444842663/136762/464d0fe/5524fe75N30ab6301.jpg!q70.jpg',
    checked: false,
  },
  {
    id: '10416051797',
    name: '珂兰KELA.CN  GIA裸钻 14克拉G/VS2/3EX',
    price: 6180000,
    count: 1,
    img: 'https://img10.360buyimg.com/n7/s176x176_jfs/t634/292/1273613352/229178/7eed25e4/54c21a48N05bc7e33.jpg!q70.jpg',
    checked: false,
  },
]);

cartData.minus = (index) => {
  cartData[index].count -= 1;
};

cartData.plus = (index) => {
  cartData[index].count += 1;
};

cartData.check = (checked, index) => {
  cartData[index].checked = checked;
};

cartData.count = computed(() => {
  return cartData.reduce((a, b) => {
    if (b.checked) {
      return a + b.count;
    }
    else {
      return a;
    }
  }, 0);
});

cartData.sum = computed(() => {
  return cartData.reduce((a, b) => {
    if (b.checked) {
      return a + b.count * b.price;
    }
    else {
      return a;
    }
  }, 0);
});

export default cartData;