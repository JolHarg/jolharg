import defineElements from './defineElements.js';
import setupServiceWorker from './serviceworker/client.js';

(async () => {
    await setupServiceWorker();
    await defineElements();
})();
