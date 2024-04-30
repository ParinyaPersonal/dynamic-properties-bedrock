import * as mc from "@minecraft/server";

type DynamicValue = number | string | boolean | Object
type DynamicStorage = mc.World | mc.Entity | mc.Player | mc.ItemStack;

export default class DynamicProperties<Value extends DynamicValue> {

    private DYNAMIC_NAME: string

    private DYNAMIC_STORAGE: DynamicStorage

    private DYNAMIC_MAP: Map<string, Value> = new Map<string, Value>()

    constructor(dynamicName: string, dynamicStorage: DynamicStorage = mc.world) {
        if (dynamicName.length > 16 || dynamicName.length < 1)
            console.error("The length of the dynamic property name must be between 1 and 16");
        else {
            this.DYNAMIC_NAME = dynamicName
            this.DYNAMIC_STORAGE = dynamicStorage
            try {
                const data = this.DYNAMIC_STORAGE.getDynamicProperty(this.DYNAMIC_NAME) as string
                const json = JSON.parse(data)
                for (const [key, vakue] of json) {
                    this.DYNAMIC_MAP.set(key, vakue)
                }
            } catch {
                this.save()
            }
        }
    }

    private save() {
        this.DYNAMIC_STORAGE.setDynamicProperty(this.DYNAMIC_NAME, JSON.stringify([...this.DYNAMIC_MAP]))
    }

    public set(key: string, value: Value): this {
        this.DYNAMIC_MAP.set(key, value)
        this.save()
        return this
    }

    public delete(key: string): boolean {
        const result = this.DYNAMIC_MAP.delete(key)
        this.save()
        return result
    }

    public clear(): this {
        this.DYNAMIC_MAP.clear()
        this.save()
        return this
    }

    public has(key: string): boolean {
        return this.DYNAMIC_MAP.has(key)
    }

    public get(key: string): Value {
        return this.DYNAMIC_MAP.get(key)
    }

    public forEach(callbackfn: (value: Value, key: string, map: Map<string, Value>) => void, thisArg?: any): void {
        return this.DYNAMIC_MAP.forEach(callbackfn, thisArg)
    }

    public hex(bytes: number): string {
        return [...Array(bytes)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    }

    public get array(): [string, Value][] {
        return [...this.DYNAMIC_MAP]
    }

    public get keys(): IterableIterator<string> {
        return this.DYNAMIC_MAP.keys()
    }

    public get values(): IterableIterator<Value> {
        return this.DYNAMIC_MAP.values()
    }

    public get entries(): IterableIterator<[string, Value]> {
        return this.DYNAMIC_MAP.entries()
    }

    public get size(): number {
        return this.DYNAMIC_MAP.size
    }
}