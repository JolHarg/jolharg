import repoMap from './repo-map';
import jolharg from '../github/jolharg';
import danwdart from '../github/danwdart';

console.log(
    JSON.stringify(
        {
            'repos': [
                jolharg.map(repoMap),
                danwdart.map(repoMap)
            ]
        }
    )
);