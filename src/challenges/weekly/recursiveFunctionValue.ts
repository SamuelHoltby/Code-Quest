export const resolveFunctionValue = <T>(inputValue: T | (() => T)): T => {
    return typeof inputValue !== 'function' ? inputValue as T : resolveFunctionValue((inputValue as () => T)());
}