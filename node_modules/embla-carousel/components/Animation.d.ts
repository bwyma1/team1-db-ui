export declare type AnimationType = {
    start: () => void;
    stop: () => void;
    proceed: () => void;
};
export declare function Animation(callback: FrameRequestCallback): AnimationType;
