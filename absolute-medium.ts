type Absolute<T extends number | string | bigint> =   T extends string ? 
                                                      T extends `-${infer S}` ? S : T 
                                                      : Absolute<`${T}`>