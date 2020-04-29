declare type Last<T> = T extends [] ? never : T extends [infer U] ? U : T extends [any, infer U] ? U : T extends [any, any, infer U] ? U : T extends [any, any, any, infer U] ? U : T extends [any, any, any, any, infer U] ? U : T extends [any, any, any, any, any, infer U] ? U : never;
export declare type LibraryParam<T extends (...args: any[]) => any> = Last<Required<Parameters<T>>>;
export {};
