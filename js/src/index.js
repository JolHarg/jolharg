import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import 'bootstrap';
import hash from './hash';
import freesoftware from './free-software';

hash();
freesoftware();

if (module.hot) {
    module.hot.accept(`./hash`, function() {
        console.log(`Accepting the updated hash module!`);
        hash();
    });
    module.hot.accept(`./free-software`, function() {
        console.log(`Accepting the updated free-software module!`);
        freesoftware();
    });
}