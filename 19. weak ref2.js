class MyCache {
  constructor() {
    this.cache = {} // cache 빈객체 생성
  }
  add(key, obj) {
    this.cache[key] = new WeakRef(obj) // add를 하면 cache 객체에 key와 obj를 받아서 WeakRef로 넣어주고 있음
    // 만약에 obj를 썼으면 강한 참조가 되는데, 이렇게 되면 전달해준 객체가 사라진다 하더라도, 즉 가비지가 된다 하더라도 가비지 컬렉터는 cache의 key를 가비지로 인식을 하지 못함  
  }
  
  // add로 넣어준 객체를 다시 읽을 때 사용
  get(key) {
    let cachedRef = this.cache[key].deref()
    if(cachedRef) { // if문으로 항상 있는지 없는지 확인, 왜냐면 지워졌을 수도 있기 때문
      return cachedRef
    } else {
      return false;
    }
  }
}
