export default async () => {
    if (!(`serviceWorker` in navigator)) {
        return;
    }

    try {
        await navigator.serviceWorker.register(
            `/worker.js`,
            {
                scope: `/`
            }
        );
        //console.debug(`Registration succeeded. Scope is ${registration.scope}`);
        if (!navigator.serviceWorker.controller) {
            window.location.reload();
        }
    } catch(err) {
        //console.error(err);
    }
};
