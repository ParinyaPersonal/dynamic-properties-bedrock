import * as mc from "@minecraft/server";

type DynamicValue = number | string | boolean | Object
type DynamicStorage = mc.World | mc.Entity | mc.Player | mc.ItemStack;

export default class DynamicProperties<Value extends DynamicValue> {
    /**
     * @type {string} - The name of the dynamic property
     */
    private DYNAMIC_NAME: string

    /**
     * @returns {DynamicStorage} - The name of the dynamic property
     */
    private DYNAMIC_STORAGE: DynamicStorage

    /**  
     * @type {Map<string, Value>} - The dynamic property map
     */
    private DYNAMIC_MAP: Map<string, Value>

    /**
     * @param {string} dynamicName - The name of the dynamic property
     */
    constructor(dynamicName: string, dynamicStorage: DynamicStorage)

    /**
     * @private save - Save the dynamic property
     */
    private save()

    /**
     * @param {Key} key - The key of the dynamic property
     * @param {Value} value - The value of the dynamic property
     * @returns {DynamicProperties} - The dynamic property
     */
    public set(key: string, value: Value): this

    /**
     * @param {Key} key - The key of the dynamic property
     * @returns {boolean} - The result of the delete
     */
    public delete(key: string): boolean

    /**
     * @returns {DynamicProperties} - The dynamic property
     */
    public clear(): this

    /**
     * @param {Key} key - The key of the dynamic property
     * @returns {boolean} - The result of the has
     */
    public has(key: string): boolean
    /**
     * @param {Key} key - The key of the dynamic property
     * @returns {Value} - The value of the dynamic property
     */
    public get(key: string): Value
    /**
     * @param {void} callbackfn - The callback of the dynamic property
     * @returns {void} - The result of the forEach
    */
    public forEach(callbackfn: (value: Value, key: string, map: Map<string, Value>) => void, thisArg?: any): void

    /**
     * @returns { string } - The key of the dynamic property
     */
    public hex(bytes: number): string

    /**
     * @returns { [string, Value][] } - An array containing all the key-value pairs (entries) of the dynamic properties.
     */
    public get array(): [string, Value][]
    /**
     * @returns {IterableIterator<string>} - An iterable containing all the keys of the dynamic properties.
    */
    public get keys(): IterableIterator<string>

    /**
     * @returns {IterableIterator<Value>} - An iterable containing all the values of the dynamic properties.
     */
    public get values(): IterableIterator<Value>

    /**
     * @returns {IterableIterator<[string, Value]>} - An iterable containing all the key-value pairs (entries) of the dynamic properties.
     */
    public get entries(): IterableIterator<[string, Value]>

    /**
     * @returns {number} - The number of dynamic properties in the instance.
     */
    public get size(): number
}