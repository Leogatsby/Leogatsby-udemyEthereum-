// web3 기본 설정및 사용법
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// 모카는 테스팅 프레임 워크이다. 꼭 이더리움을 위해서 쓰는것은 아니다. 
// it ,describe , beforeEach 함수가 있다.

class Car {
    park() {
        return 'stopped';
    }
    drive() {
        return '부릉';
    }
}

let car;

//
beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });
   
    it('can drive', () => {
        const car = new Car();
        assert.equal(car.drive(), '부릉');
    });
});