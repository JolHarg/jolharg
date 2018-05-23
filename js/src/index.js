import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
// import 'bootstrap';
import hash from './hash';

hash();

if (module.hot) {
    [`hash`].forEach(mod => module.hot.accept(`./${mod}`, () => mod()));
}