export declare type AlignmentOptionType = 'start' | 'center' | 'end' | number;
export declare type AlignmentType = {
    measure: (n: number) => number;
};
export declare function Alignment(align: AlignmentOptionType, viewSize: number): AlignmentType;
