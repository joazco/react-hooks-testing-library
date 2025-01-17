export declare type Renderer<TProps> = {
    render: (props?: TProps) => void;
    rerender: (props?: TProps) => void;
    unmount: () => void;
    act: Act;
};
export declare type ServerRenderer<TProps> = Renderer<TProps> & {
    hydrate: () => void;
};
export declare type RendererProps<TProps, TResult> = {
    callback: (props: TProps) => TResult;
    setError: (error: Error) => void;
    setValue: (value: TResult) => void;
};
export declare type CreateRenderer<TProps, TResult, TRendererOptions extends object, TRenderer extends Renderer<TProps>> = (props: RendererProps<TProps, TResult>, options: TRendererOptions) => TRenderer;
export declare type RenderResult<TValue> = {
    readonly all: Array<TValue | Error>;
    readonly current: TValue;
    readonly error?: Error;
};
export declare type ResultContainer<TValue> = {
    result: RenderResult<TValue>;
};
export declare type WaitOptions = {
    interval?: number | false;
    timeout?: number | false;
};
export declare type WaitForOptions = WaitOptions;
export declare type WaitForValueToChangeOptions = WaitOptions;
export declare type WaitForNextUpdateOptions = Pick<WaitOptions, 'timeout'>;
export declare type WaitFor = (callback: () => boolean | void, options?: WaitForOptions) => Promise<void>;
export declare type WaitForValueToChange = (selector: () => unknown, options?: WaitForValueToChangeOptions) => Promise<void>;
export declare type WaitForNextUpdate = (options?: WaitForNextUpdateOptions) => Promise<void>;
export declare type AsyncUtils = {
    waitFor: WaitFor;
    waitForValueToChange: WaitForValueToChange;
    waitForNextUpdate: WaitForNextUpdate;
};
export declare type RenderHookResult<TProps, TValue, TRenderer extends Renderer<TProps> = Renderer<TProps>> = ResultContainer<TValue> & Omit<Renderer<TProps>, 'render' | 'act'> & Omit<TRenderer, keyof Renderer<TProps>> & AsyncUtils;
export declare type ServerRenderHookResult<TProps, TValue, TRenderer extends ServerRenderer<TProps> = ServerRenderer<TProps>> = RenderHookResult<TProps, TValue, TRenderer>;
export declare type RenderHookOptions<TProps> = {
    initialProps?: TProps;
};
export declare type Act = {
    (callback: () => Promise<void | undefined>): Promise<undefined>;
    (callback: () => void | undefined): void;
};
export declare type CleanupCallback = () => Promise<void> | void;
