import * as mc from "@minecraft/server";
export default class DynamicProperties {
    DYNAMIC_NAME;
    DYNAMIC_STORAGE;
    DYNAMIC_MAP = new Map();
    constructor(dynamicName, dynamicStorage = mc.world) {
        if (dynamicName.length > 16 || dynamicName.length < 1)
            console.error("The length of the dynamic property name must be between 1 and 16");
        else {
            this.DYNAMIC_NAME = dynamicName;
            this.DYNAMIC_STORAGE = dynamicStorage;
            try {
                const data = this.DYNAMIC_STORAGE.getDynamicProperty(this.DYNAMIC_NAME);
                const json = JSON.parse(data);
                for (const [key, vakue] of json) {
                    this.DYNAMIC_MAP.set(key, vakue);
                }
            }
            catch {
                this.save();
            }
        }
    }
    save() {
        this.DYNAMIC_STORAGE.setDynamicProperty(this.DYNAMIC_NAME, JSON.stringify([...this.DYNAMIC_MAP]));
    }
    set(key, value) {
        this.DYNAMIC_MAP.set(key, value);
        this.save();
        return this;
    }
    delete(key) {
        const result = this.DYNAMIC_MAP.delete(key);
        this.save();
        return result;
    }
    clear() {
        this.DYNAMIC_MAP.clear();
        this.save();
        return this;
    }
    has(key) {
        return this.DYNAMIC_MAP.has(key);
    }
    get(key) {
        return this.DYNAMIC_MAP.get(key);
    }
    forEach(callbackfn, thisArg) {
        return this.DYNAMIC_MAP.forEach(callbackfn, thisArg);
    }
    hex(bytes) {
        return [...Array(bytes)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }
    get array() {
        return [...this.DYNAMIC_MAP];
    }
    get keys() {
        return this.DYNAMIC_MAP.keys();
    }
    get values() {
        return this.DYNAMIC_MAP.values();
    }
    get entries() {
        return this.DYNAMIC_MAP.entries();
    }
    get size() {
        return this.DYNAMIC_MAP.size;
    }
}
