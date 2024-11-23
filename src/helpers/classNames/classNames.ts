type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods, addictional: string[]): string => (
    [
        cls,
        ...addictional,
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
)
