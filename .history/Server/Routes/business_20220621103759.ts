export interface PassportLocalSchema<DocType, Model, TInstanceMethods = {}, TQueryHelpers = {}> extends Schema<DocType, Model, TInstanceMethods, TQueryHelpers> {
    plugin(
        plugin: (schema: PassportLocalSchema<DocType, Model, TInstanceMethods, TQueryHelpers>, options?: PassportLocalOptions) => void,
        options?: PassportLocalOptions,
    ): this;

    // overload for the default mongoose plugin function
    plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this;
}

export function model<T>(
    name: string,
    schema?: PassportLocalSchema<T, Model<T, any, any, any>>,
    collection?: string,
    skipInit?: boolean,
): PassportLocalModel<T>;

export function model<T extends Document, U extends PassportLocalModel<T>>(
    name: string,
    schema?: PassportLocalSchema<T, Model<T, any, any, any>>,
    collection?: string,
    skipInit?: boolean,
): U;
}