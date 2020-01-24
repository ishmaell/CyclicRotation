import { cyclicRotation } from './index';

describe('cyclicRotation', () => {
    it('should accept two paramenters', () => {
        expect(solution([1,2,3,4,5,6],4)).toEqual([ 3, 4, 5, 6, 1, 2 ]);
    });
    it('first parameter must be an array', () => {
        expect(solution('',4)).toEqual('first parameter must be an array');
    });
    it('count must be greater than 0', () => {
        expect(solution([1,2,3,4,5,6],-2)).toEqual('count must be greater than 0');
    });
    it('array length must be greater than or equal to 6', () => {
        expect(solution([1,2,3,4,5], 3)).toEqual('length of array in first parameter must be 6');
    }); 
});