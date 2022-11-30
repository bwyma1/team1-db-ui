export declare type Vector1DType = {
    get: () => number;
    set: (v: Vector1DType | number) => Vector1DType;
    add: (v: Vector1DType | number) => Vector1DType;
    subtract: (v: Vector1DType | number) => Vector1DType;
    multiply: (n: number) => Vector1DType;
    divide: (n: number) => Vector1DType;
    normalize: () => Vector1DType;
};
export declare function Vector1D(value: number): Vector1DType;
