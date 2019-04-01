import promiseSerial from './promiseSerial';
import {lazyPromise, lazyAsync} from './lazyPromise';

describe('lazyPromise', () => {
    it('awaits lazy promises', async () => {
        console.log('Creating promise');
        const p = lazyPromise((res, rej) => console.log('Resolving', 1) || res(1));
        console.log('About to await');
        const q = await p;
        console.log('Result is', q);
    });

    it('awaits lazy asyncs with promise.all', async () => {
        const a = [1,2,3];
        console.log('Defining');
        const c = a.map(n => lazyAsync(async () => console.log(n) || n)());
        console.log('Running Promise.all');
        const cPA = Promise.all(c);
        console.log('Awaiting');
        const cR = await cPA;
        console.log('Result is', cR);
    });

    it('awaits lazy promises with timers', async function() {
        this.timeout(5000);

        const a = [0,100,1000,2000,500];
        console.log('Defining');
        const c = a.map(n => lazyPromise((res, rej) => setTimeout(() => console.log(n) || res(n), n)));
        console.log('Running promise.all');
        const cPA = Promise.all(c);
        console.log('Awaiting');
        const cR = await cPA;
        console.log('Result is', cR);
    });

    it('awaits lazy promises with timers, serially', async function() {
        this.timeout(5000);
        
        const a = [0,100,1000,2000,500];
        console.log('Defining');
        const c = a.map(n => lazyPromise((res, rej) => setTimeout(() => console.log(n) || res(n), n)));
        console.log('Running promiseSerial');
        const cPA = promiseSerial(c);
        console.log('Awaiting');
        const cR = await cPA;
        console.log('Result is', cR);
    })
});