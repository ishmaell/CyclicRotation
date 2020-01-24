import cyclicRotation from './index';

//const cyclicRotation = require('./index.js');

describe('cyclicRotation', () => {
    it('should accept two paramenters', () => {
        expect(cyclicRotation([1,2,3,4,5,6],4)).toEqual([ 3, 4, 5, 6, 1, 2 ]);
    });
    it('first parameter must be an array', () => {
        expect(cyclicRotation('',4)).toEqual('first parameter must be an array');
    });
    it('count must be greater than 0', () => {
        expect(cyclicRotation([1,2,3,4,5,6],-2)).toEqual('count must be greater than 0');
    });
});