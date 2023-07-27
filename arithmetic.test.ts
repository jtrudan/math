import {describe, expect, test} from '@jest/globals';
import { getPrimes } from './arithmetic';

describe('arithmetic module', () => {

    test('gets all primes up to 10', () => {
        expect(getPrimes(10)).toEqual([2,3,5,7])
    })

})
