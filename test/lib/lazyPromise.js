export const lazyPromise = cb => ({
    _cache: null,
    cache() {
        if (!this._cache) {
            this._cache = new Promise(cb);
        }
        return this._cache;
    },
    then(r) {
        return this._cache = this.cache().then(r);
    },
    catch(r) {
        return this._cache = this.cache().catch(r);
    }
});

export const lazyAsync = as => (...stuff) => ({
    _cache: null,
    cache() {
        if (!this._cache) {
            this._cache = as(...stuff);
        }
        return this._cache;
    },
    then(r) {
        return this._cache = this.cache().then(r);
    },
    catch(r) {
        return this._cache = this.cache().catch(r);
    }
});