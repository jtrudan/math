import {describe, expect, test} from '@jest/globals';
import { getPrimes } from './arithmetic';

describe('arithmetic module', () => {

    test('gets all primes up to 10', () => {
        expect(getPrimes(10)).toEqual([2,3,5,7])
    })

    test('gets all primes up to 100', () => {
        expect(getPrimes(100)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,
            53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    })

})
