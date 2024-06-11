// 생성자 함수로 상품 객체를 생성해보자. 
function Item(title, price) {
  // this = {}
  this.title = title;
  this.price = price;
  this.showPrice = function() {
    console.log(`price is ${this.price}`);
  }

  // return this
}

let item1 = new Item('펜', 200);
let item2 = Item('지우개', 500); // undefined, 함수가 실행되는 것
let item3 = new Item('자', 300);

console.log(item1, item2, item3);

item1.showPrice();
item2.showPrice();
item3.showPrice();