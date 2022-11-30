export declare type CounterType = {
    get: () => number;
    set: (n: number) => CounterType;
    add: (n: number) => CounterType;
    clone: () => CounterType;
    min: number;
    max: number;
};
export declare function Counter(max: number, start: number, loop: boolean): CounterType;
