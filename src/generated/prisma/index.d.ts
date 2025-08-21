
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ambience
 * 
 */
export type Ambience = $Result.DefaultSelection<Prisma.$AmbiencePayload>
/**
 * Model Sound
 * 
 */
export type Sound = $Result.DefaultSelection<Prisma.$SoundPayload>
/**
 * Model GlobalSoundData
 * 
 */
export type GlobalSoundData = $Result.DefaultSelection<Prisma.$GlobalSoundDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ambience`: Exposes CRUD operations for the **Ambience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ambiences
    * const ambiences = await prisma.ambience.findMany()
    * ```
    */
  get ambience(): Prisma.AmbienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sound`: Exposes CRUD operations for the **Sound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sounds
    * const sounds = await prisma.sound.findMany()
    * ```
    */
  get sound(): Prisma.SoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalSoundData`: Exposes CRUD operations for the **GlobalSoundData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalSoundData
    * const globalSoundData = await prisma.globalSoundData.findMany()
    * ```
    */
  get globalSoundData(): Prisma.GlobalSoundDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Ambience: 'Ambience',
    Sound: 'Sound',
    GlobalSoundData: 'GlobalSoundData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ambience" | "sound" | "globalSoundData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ambience: {
        payload: Prisma.$AmbiencePayload<ExtArgs>
        fields: Prisma.AmbienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmbienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmbienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          findFirst: {
            args: Prisma.AmbienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmbienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          findMany: {
            args: Prisma.AmbienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>[]
          }
          create: {
            args: Prisma.AmbienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          createMany: {
            args: Prisma.AmbienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmbienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>[]
          }
          delete: {
            args: Prisma.AmbienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          update: {
            args: Prisma.AmbienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          deleteMany: {
            args: Prisma.AmbienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmbienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmbienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>[]
          }
          upsert: {
            args: Prisma.AmbienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbiencePayload>
          }
          aggregate: {
            args: Prisma.AmbienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmbience>
          }
          groupBy: {
            args: Prisma.AmbienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmbienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmbienceCountArgs<ExtArgs>
            result: $Utils.Optional<AmbienceCountAggregateOutputType> | number
          }
        }
      }
      Sound: {
        payload: Prisma.$SoundPayload<ExtArgs>
        fields: Prisma.SoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          findFirst: {
            args: Prisma.SoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          findMany: {
            args: Prisma.SoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>[]
          }
          create: {
            args: Prisma.SoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          createMany: {
            args: Prisma.SoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>[]
          }
          delete: {
            args: Prisma.SoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          update: {
            args: Prisma.SoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          deleteMany: {
            args: Prisma.SoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>[]
          }
          upsert: {
            args: Prisma.SoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundPayload>
          }
          aggregate: {
            args: Prisma.SoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSound>
          }
          groupBy: {
            args: Prisma.SoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoundCountArgs<ExtArgs>
            result: $Utils.Optional<SoundCountAggregateOutputType> | number
          }
        }
      }
      GlobalSoundData: {
        payload: Prisma.$GlobalSoundDataPayload<ExtArgs>
        fields: Prisma.GlobalSoundDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalSoundDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalSoundDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          findFirst: {
            args: Prisma.GlobalSoundDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalSoundDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          findMany: {
            args: Prisma.GlobalSoundDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>[]
          }
          create: {
            args: Prisma.GlobalSoundDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          createMany: {
            args: Prisma.GlobalSoundDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalSoundDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>[]
          }
          delete: {
            args: Prisma.GlobalSoundDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          update: {
            args: Prisma.GlobalSoundDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          deleteMany: {
            args: Prisma.GlobalSoundDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalSoundDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalSoundDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>[]
          }
          upsert: {
            args: Prisma.GlobalSoundDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSoundDataPayload>
          }
          aggregate: {
            args: Prisma.GlobalSoundDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalSoundData>
          }
          groupBy: {
            args: Prisma.GlobalSoundDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalSoundDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalSoundDataCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalSoundDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ambience?: AmbienceOmit
    sound?: SoundOmit
    globalSoundData?: GlobalSoundDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ambiences: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambiences?: boolean | UserCountOutputTypeCountAmbiencesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAmbiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbienceWhereInput
  }


  /**
   * Count Type AmbienceCountOutputType
   */

  export type AmbienceCountOutputType = {
    config: number
  }

  export type AmbienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | AmbienceCountOutputTypeCountConfigArgs
  }

  // Custom InputTypes
  /**
   * AmbienceCountOutputType without action
   */
  export type AmbienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbienceCountOutputType
     */
    select?: AmbienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmbienceCountOutputType without action
   */
  export type AmbienceCountOutputTypeCountConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    xp: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    xp: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    xp: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    xp: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    xp: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    xp?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    xp?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    xp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    xp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    xp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    xp: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    xp?: boolean
    ambiences?: boolean | User$ambiencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    xp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    xp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    xp?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "xp", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambiences?: boolean | User$ambiencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ambiences: Prisma.$AmbiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      xp: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ambiences<T extends User$ambiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$ambiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly xp: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ambiences
   */
  export type User$ambiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    where?: AmbienceWhereInput
    orderBy?: AmbienceOrderByWithRelationInput | AmbienceOrderByWithRelationInput[]
    cursor?: AmbienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmbienceScalarFieldEnum | AmbienceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ambience
   */

  export type AggregateAmbience = {
    _count: AmbienceCountAggregateOutputType | null
    _avg: AmbienceAvgAggregateOutputType | null
    _sum: AmbienceSumAggregateOutputType | null
    _min: AmbienceMinAggregateOutputType | null
    _max: AmbienceMaxAggregateOutputType | null
  }

  export type AmbienceAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AmbienceSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AmbienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
  }

  export type AmbienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
  }

  export type AmbienceCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    _all: number
  }


  export type AmbienceAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AmbienceSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AmbienceMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
  }

  export type AmbienceMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
  }

  export type AmbienceCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    _all?: true
  }

  export type AmbienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambience to aggregate.
     */
    where?: AmbienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambiences to fetch.
     */
    orderBy?: AmbienceOrderByWithRelationInput | AmbienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmbienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ambiences
    **/
    _count?: true | AmbienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmbienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmbienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmbienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmbienceMaxAggregateInputType
  }

  export type GetAmbienceAggregateType<T extends AmbienceAggregateArgs> = {
        [P in keyof T & keyof AggregateAmbience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmbience[P]>
      : GetScalarType<T[P], AggregateAmbience[P]>
  }




  export type AmbienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbienceWhereInput
    orderBy?: AmbienceOrderByWithAggregationInput | AmbienceOrderByWithAggregationInput[]
    by: AmbienceScalarFieldEnum[] | AmbienceScalarFieldEnum
    having?: AmbienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmbienceCountAggregateInputType | true
    _avg?: AmbienceAvgAggregateInputType
    _sum?: AmbienceSumAggregateInputType
    _min?: AmbienceMinAggregateInputType
    _max?: AmbienceMaxAggregateInputType
  }

  export type AmbienceGroupByOutputType = {
    id: number
    title: string
    authorId: number
    _count: AmbienceCountAggregateOutputType | null
    _avg: AmbienceAvgAggregateOutputType | null
    _sum: AmbienceSumAggregateOutputType | null
    _min: AmbienceMinAggregateOutputType | null
    _max: AmbienceMaxAggregateOutputType | null
  }

  type GetAmbienceGroupByPayload<T extends AmbienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmbienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmbienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmbienceGroupByOutputType[P]>
            : GetScalarType<T[P], AmbienceGroupByOutputType[P]>
        }
      >
    >


  export type AmbienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | Ambience$configArgs<ExtArgs>
    _count?: boolean | AmbienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambience"]>

  export type AmbienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambience"]>

  export type AmbienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambience"]>

  export type AmbienceSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
  }

  export type AmbienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "authorId", ExtArgs["result"]["ambience"]>
  export type AmbienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    config?: boolean | Ambience$configArgs<ExtArgs>
    _count?: boolean | AmbienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmbienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AmbienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AmbiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ambience"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      config: Prisma.$SoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number
    }, ExtArgs["result"]["ambience"]>
    composites: {}
  }

  type AmbienceGetPayload<S extends boolean | null | undefined | AmbienceDefaultArgs> = $Result.GetResult<Prisma.$AmbiencePayload, S>

  type AmbienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmbienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmbienceCountAggregateInputType | true
    }

  export interface AmbienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ambience'], meta: { name: 'Ambience' } }
    /**
     * Find zero or one Ambience that matches the filter.
     * @param {AmbienceFindUniqueArgs} args - Arguments to find a Ambience
     * @example
     * // Get one Ambience
     * const ambience = await prisma.ambience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbienceFindUniqueArgs>(args: SelectSubset<T, AmbienceFindUniqueArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ambience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbienceFindUniqueOrThrowArgs} args - Arguments to find a Ambience
     * @example
     * // Get one Ambience
     * const ambience = await prisma.ambience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbienceFindUniqueOrThrowArgs>(args: SelectSubset<T, AmbienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceFindFirstArgs} args - Arguments to find a Ambience
     * @example
     * // Get one Ambience
     * const ambience = await prisma.ambience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbienceFindFirstArgs>(args?: SelectSubset<T, AmbienceFindFirstArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceFindFirstOrThrowArgs} args - Arguments to find a Ambience
     * @example
     * // Get one Ambience
     * const ambience = await prisma.ambience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbienceFindFirstOrThrowArgs>(args?: SelectSubset<T, AmbienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ambiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ambiences
     * const ambiences = await prisma.ambience.findMany()
     * 
     * // Get first 10 Ambiences
     * const ambiences = await prisma.ambience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ambienceWithIdOnly = await prisma.ambience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmbienceFindManyArgs>(args?: SelectSubset<T, AmbienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ambience.
     * @param {AmbienceCreateArgs} args - Arguments to create a Ambience.
     * @example
     * // Create one Ambience
     * const Ambience = await prisma.ambience.create({
     *   data: {
     *     // ... data to create a Ambience
     *   }
     * })
     * 
     */
    create<T extends AmbienceCreateArgs>(args: SelectSubset<T, AmbienceCreateArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ambiences.
     * @param {AmbienceCreateManyArgs} args - Arguments to create many Ambiences.
     * @example
     * // Create many Ambiences
     * const ambience = await prisma.ambience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmbienceCreateManyArgs>(args?: SelectSubset<T, AmbienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ambiences and returns the data saved in the database.
     * @param {AmbienceCreateManyAndReturnArgs} args - Arguments to create many Ambiences.
     * @example
     * // Create many Ambiences
     * const ambience = await prisma.ambience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ambiences and only return the `id`
     * const ambienceWithIdOnly = await prisma.ambience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmbienceCreateManyAndReturnArgs>(args?: SelectSubset<T, AmbienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ambience.
     * @param {AmbienceDeleteArgs} args - Arguments to delete one Ambience.
     * @example
     * // Delete one Ambience
     * const Ambience = await prisma.ambience.delete({
     *   where: {
     *     // ... filter to delete one Ambience
     *   }
     * })
     * 
     */
    delete<T extends AmbienceDeleteArgs>(args: SelectSubset<T, AmbienceDeleteArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ambience.
     * @param {AmbienceUpdateArgs} args - Arguments to update one Ambience.
     * @example
     * // Update one Ambience
     * const ambience = await prisma.ambience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmbienceUpdateArgs>(args: SelectSubset<T, AmbienceUpdateArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ambiences.
     * @param {AmbienceDeleteManyArgs} args - Arguments to filter Ambiences to delete.
     * @example
     * // Delete a few Ambiences
     * const { count } = await prisma.ambience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmbienceDeleteManyArgs>(args?: SelectSubset<T, AmbienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ambiences
     * const ambience = await prisma.ambience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmbienceUpdateManyArgs>(args: SelectSubset<T, AmbienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambiences and returns the data updated in the database.
     * @param {AmbienceUpdateManyAndReturnArgs} args - Arguments to update many Ambiences.
     * @example
     * // Update many Ambiences
     * const ambience = await prisma.ambience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ambiences and only return the `id`
     * const ambienceWithIdOnly = await prisma.ambience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmbienceUpdateManyAndReturnArgs>(args: SelectSubset<T, AmbienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ambience.
     * @param {AmbienceUpsertArgs} args - Arguments to update or create a Ambience.
     * @example
     * // Update or create a Ambience
     * const ambience = await prisma.ambience.upsert({
     *   create: {
     *     // ... data to create a Ambience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ambience we want to update
     *   }
     * })
     */
    upsert<T extends AmbienceUpsertArgs>(args: SelectSubset<T, AmbienceUpsertArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ambiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceCountArgs} args - Arguments to filter Ambiences to count.
     * @example
     * // Count the number of Ambiences
     * const count = await prisma.ambience.count({
     *   where: {
     *     // ... the filter for the Ambiences we want to count
     *   }
     * })
    **/
    count<T extends AmbienceCountArgs>(
      args?: Subset<T, AmbienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmbienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ambience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmbienceAggregateArgs>(args: Subset<T, AmbienceAggregateArgs>): Prisma.PrismaPromise<GetAmbienceAggregateType<T>>

    /**
     * Group by Ambience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmbienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmbienceGroupByArgs['orderBy'] }
        : { orderBy?: AmbienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmbienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ambience model
   */
  readonly fields: AmbienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ambience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmbienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    config<T extends Ambience$configArgs<ExtArgs> = {}>(args?: Subset<T, Ambience$configArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ambience model
   */
  interface AmbienceFieldRefs {
    readonly id: FieldRef<"Ambience", 'Int'>
    readonly title: FieldRef<"Ambience", 'String'>
    readonly authorId: FieldRef<"Ambience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ambience findUnique
   */
  export type AmbienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter, which Ambience to fetch.
     */
    where: AmbienceWhereUniqueInput
  }

  /**
   * Ambience findUniqueOrThrow
   */
  export type AmbienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter, which Ambience to fetch.
     */
    where: AmbienceWhereUniqueInput
  }

  /**
   * Ambience findFirst
   */
  export type AmbienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter, which Ambience to fetch.
     */
    where?: AmbienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambiences to fetch.
     */
    orderBy?: AmbienceOrderByWithRelationInput | AmbienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambiences.
     */
    cursor?: AmbienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambiences.
     */
    distinct?: AmbienceScalarFieldEnum | AmbienceScalarFieldEnum[]
  }

  /**
   * Ambience findFirstOrThrow
   */
  export type AmbienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter, which Ambience to fetch.
     */
    where?: AmbienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambiences to fetch.
     */
    orderBy?: AmbienceOrderByWithRelationInput | AmbienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambiences.
     */
    cursor?: AmbienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambiences.
     */
    distinct?: AmbienceScalarFieldEnum | AmbienceScalarFieldEnum[]
  }

  /**
   * Ambience findMany
   */
  export type AmbienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter, which Ambiences to fetch.
     */
    where?: AmbienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambiences to fetch.
     */
    orderBy?: AmbienceOrderByWithRelationInput | AmbienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ambiences.
     */
    cursor?: AmbienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambiences.
     */
    skip?: number
    distinct?: AmbienceScalarFieldEnum | AmbienceScalarFieldEnum[]
  }

  /**
   * Ambience create
   */
  export type AmbienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Ambience.
     */
    data: XOR<AmbienceCreateInput, AmbienceUncheckedCreateInput>
  }

  /**
   * Ambience createMany
   */
  export type AmbienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ambiences.
     */
    data: AmbienceCreateManyInput | AmbienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ambience createManyAndReturn
   */
  export type AmbienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * The data used to create many Ambiences.
     */
    data: AmbienceCreateManyInput | AmbienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ambience update
   */
  export type AmbienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Ambience.
     */
    data: XOR<AmbienceUpdateInput, AmbienceUncheckedUpdateInput>
    /**
     * Choose, which Ambience to update.
     */
    where: AmbienceWhereUniqueInput
  }

  /**
   * Ambience updateMany
   */
  export type AmbienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ambiences.
     */
    data: XOR<AmbienceUpdateManyMutationInput, AmbienceUncheckedUpdateManyInput>
    /**
     * Filter which Ambiences to update
     */
    where?: AmbienceWhereInput
    /**
     * Limit how many Ambiences to update.
     */
    limit?: number
  }

  /**
   * Ambience updateManyAndReturn
   */
  export type AmbienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * The data used to update Ambiences.
     */
    data: XOR<AmbienceUpdateManyMutationInput, AmbienceUncheckedUpdateManyInput>
    /**
     * Filter which Ambiences to update
     */
    where?: AmbienceWhereInput
    /**
     * Limit how many Ambiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ambience upsert
   */
  export type AmbienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Ambience to update in case it exists.
     */
    where: AmbienceWhereUniqueInput
    /**
     * In case the Ambience found by the `where` argument doesn't exist, create a new Ambience with this data.
     */
    create: XOR<AmbienceCreateInput, AmbienceUncheckedCreateInput>
    /**
     * In case the Ambience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmbienceUpdateInput, AmbienceUncheckedUpdateInput>
  }

  /**
   * Ambience delete
   */
  export type AmbienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
    /**
     * Filter which Ambience to delete.
     */
    where: AmbienceWhereUniqueInput
  }

  /**
   * Ambience deleteMany
   */
  export type AmbienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambiences to delete
     */
    where?: AmbienceWhereInput
    /**
     * Limit how many Ambiences to delete.
     */
    limit?: number
  }

  /**
   * Ambience.config
   */
  export type Ambience$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    where?: SoundWhereInput
    orderBy?: SoundOrderByWithRelationInput | SoundOrderByWithRelationInput[]
    cursor?: SoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoundScalarFieldEnum | SoundScalarFieldEnum[]
  }

  /**
   * Ambience without action
   */
  export type AmbienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambience
     */
    select?: AmbienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambience
     */
    omit?: AmbienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbienceInclude<ExtArgs> | null
  }


  /**
   * Model Sound
   */

  export type AggregateSound = {
    _count: SoundCountAggregateOutputType | null
    _avg: SoundAvgAggregateOutputType | null
    _sum: SoundSumAggregateOutputType | null
    _min: SoundMinAggregateOutputType | null
    _max: SoundMaxAggregateOutputType | null
  }

  export type SoundAvgAggregateOutputType = {
    id: number | null
    soundId: number | null
    ambienceId: number | null
    volume: number | null
  }

  export type SoundSumAggregateOutputType = {
    id: number | null
    soundId: number | null
    ambienceId: number | null
    volume: number | null
  }

  export type SoundMinAggregateOutputType = {
    id: number | null
    soundId: number | null
    ambienceId: number | null
    volume: number | null
  }

  export type SoundMaxAggregateOutputType = {
    id: number | null
    soundId: number | null
    ambienceId: number | null
    volume: number | null
  }

  export type SoundCountAggregateOutputType = {
    id: number
    soundId: number
    ambienceId: number
    volume: number
    _all: number
  }


  export type SoundAvgAggregateInputType = {
    id?: true
    soundId?: true
    ambienceId?: true
    volume?: true
  }

  export type SoundSumAggregateInputType = {
    id?: true
    soundId?: true
    ambienceId?: true
    volume?: true
  }

  export type SoundMinAggregateInputType = {
    id?: true
    soundId?: true
    ambienceId?: true
    volume?: true
  }

  export type SoundMaxAggregateInputType = {
    id?: true
    soundId?: true
    ambienceId?: true
    volume?: true
  }

  export type SoundCountAggregateInputType = {
    id?: true
    soundId?: true
    ambienceId?: true
    volume?: true
    _all?: true
  }

  export type SoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sound to aggregate.
     */
    where?: SoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sounds to fetch.
     */
    orderBy?: SoundOrderByWithRelationInput | SoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sounds
    **/
    _count?: true | SoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoundMaxAggregateInputType
  }

  export type GetSoundAggregateType<T extends SoundAggregateArgs> = {
        [P in keyof T & keyof AggregateSound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSound[P]>
      : GetScalarType<T[P], AggregateSound[P]>
  }




  export type SoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoundWhereInput
    orderBy?: SoundOrderByWithAggregationInput | SoundOrderByWithAggregationInput[]
    by: SoundScalarFieldEnum[] | SoundScalarFieldEnum
    having?: SoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoundCountAggregateInputType | true
    _avg?: SoundAvgAggregateInputType
    _sum?: SoundSumAggregateInputType
    _min?: SoundMinAggregateInputType
    _max?: SoundMaxAggregateInputType
  }

  export type SoundGroupByOutputType = {
    id: number
    soundId: number
    ambienceId: number
    volume: number
    _count: SoundCountAggregateOutputType | null
    _avg: SoundAvgAggregateOutputType | null
    _sum: SoundSumAggregateOutputType | null
    _min: SoundMinAggregateOutputType | null
    _max: SoundMaxAggregateOutputType | null
  }

  type GetSoundGroupByPayload<T extends SoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoundGroupByOutputType[P]>
            : GetScalarType<T[P], SoundGroupByOutputType[P]>
        }
      >
    >


  export type SoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    ambienceId?: boolean
    volume?: boolean
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sound"]>

  export type SoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    ambienceId?: boolean
    volume?: boolean
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sound"]>

  export type SoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    ambienceId?: boolean
    volume?: boolean
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sound"]>

  export type SoundSelectScalar = {
    id?: boolean
    soundId?: boolean
    ambienceId?: boolean
    volume?: boolean
  }

  export type SoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "soundId" | "ambienceId" | "volume", ExtArgs["result"]["sound"]>
  export type SoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }
  export type SoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }
  export type SoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambience?: boolean | AmbienceDefaultArgs<ExtArgs>
  }

  export type $SoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sound"
    objects: {
      ambience: Prisma.$AmbiencePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      soundId: number
      ambienceId: number
      volume: number
    }, ExtArgs["result"]["sound"]>
    composites: {}
  }

  type SoundGetPayload<S extends boolean | null | undefined | SoundDefaultArgs> = $Result.GetResult<Prisma.$SoundPayload, S>

  type SoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoundCountAggregateInputType | true
    }

  export interface SoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sound'], meta: { name: 'Sound' } }
    /**
     * Find zero or one Sound that matches the filter.
     * @param {SoundFindUniqueArgs} args - Arguments to find a Sound
     * @example
     * // Get one Sound
     * const sound = await prisma.sound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoundFindUniqueArgs>(args: SelectSubset<T, SoundFindUniqueArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoundFindUniqueOrThrowArgs} args - Arguments to find a Sound
     * @example
     * // Get one Sound
     * const sound = await prisma.sound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoundFindUniqueOrThrowArgs>(args: SelectSubset<T, SoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundFindFirstArgs} args - Arguments to find a Sound
     * @example
     * // Get one Sound
     * const sound = await prisma.sound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoundFindFirstArgs>(args?: SelectSubset<T, SoundFindFirstArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundFindFirstOrThrowArgs} args - Arguments to find a Sound
     * @example
     * // Get one Sound
     * const sound = await prisma.sound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoundFindFirstOrThrowArgs>(args?: SelectSubset<T, SoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sounds
     * const sounds = await prisma.sound.findMany()
     * 
     * // Get first 10 Sounds
     * const sounds = await prisma.sound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soundWithIdOnly = await prisma.sound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoundFindManyArgs>(args?: SelectSubset<T, SoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sound.
     * @param {SoundCreateArgs} args - Arguments to create a Sound.
     * @example
     * // Create one Sound
     * const Sound = await prisma.sound.create({
     *   data: {
     *     // ... data to create a Sound
     *   }
     * })
     * 
     */
    create<T extends SoundCreateArgs>(args: SelectSubset<T, SoundCreateArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sounds.
     * @param {SoundCreateManyArgs} args - Arguments to create many Sounds.
     * @example
     * // Create many Sounds
     * const sound = await prisma.sound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoundCreateManyArgs>(args?: SelectSubset<T, SoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sounds and returns the data saved in the database.
     * @param {SoundCreateManyAndReturnArgs} args - Arguments to create many Sounds.
     * @example
     * // Create many Sounds
     * const sound = await prisma.sound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sounds and only return the `id`
     * const soundWithIdOnly = await prisma.sound.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoundCreateManyAndReturnArgs>(args?: SelectSubset<T, SoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sound.
     * @param {SoundDeleteArgs} args - Arguments to delete one Sound.
     * @example
     * // Delete one Sound
     * const Sound = await prisma.sound.delete({
     *   where: {
     *     // ... filter to delete one Sound
     *   }
     * })
     * 
     */
    delete<T extends SoundDeleteArgs>(args: SelectSubset<T, SoundDeleteArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sound.
     * @param {SoundUpdateArgs} args - Arguments to update one Sound.
     * @example
     * // Update one Sound
     * const sound = await prisma.sound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoundUpdateArgs>(args: SelectSubset<T, SoundUpdateArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sounds.
     * @param {SoundDeleteManyArgs} args - Arguments to filter Sounds to delete.
     * @example
     * // Delete a few Sounds
     * const { count } = await prisma.sound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoundDeleteManyArgs>(args?: SelectSubset<T, SoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sounds
     * const sound = await prisma.sound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoundUpdateManyArgs>(args: SelectSubset<T, SoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sounds and returns the data updated in the database.
     * @param {SoundUpdateManyAndReturnArgs} args - Arguments to update many Sounds.
     * @example
     * // Update many Sounds
     * const sound = await prisma.sound.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sounds and only return the `id`
     * const soundWithIdOnly = await prisma.sound.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoundUpdateManyAndReturnArgs>(args: SelectSubset<T, SoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sound.
     * @param {SoundUpsertArgs} args - Arguments to update or create a Sound.
     * @example
     * // Update or create a Sound
     * const sound = await prisma.sound.upsert({
     *   create: {
     *     // ... data to create a Sound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sound we want to update
     *   }
     * })
     */
    upsert<T extends SoundUpsertArgs>(args: SelectSubset<T, SoundUpsertArgs<ExtArgs>>): Prisma__SoundClient<$Result.GetResult<Prisma.$SoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundCountArgs} args - Arguments to filter Sounds to count.
     * @example
     * // Count the number of Sounds
     * const count = await prisma.sound.count({
     *   where: {
     *     // ... the filter for the Sounds we want to count
     *   }
     * })
    **/
    count<T extends SoundCountArgs>(
      args?: Subset<T, SoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoundAggregateArgs>(args: Subset<T, SoundAggregateArgs>): Prisma.PrismaPromise<GetSoundAggregateType<T>>

    /**
     * Group by Sound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoundGroupByArgs['orderBy'] }
        : { orderBy?: SoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sound model
   */
  readonly fields: SoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ambience<T extends AmbienceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmbienceDefaultArgs<ExtArgs>>): Prisma__AmbienceClient<$Result.GetResult<Prisma.$AmbiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sound model
   */
  interface SoundFieldRefs {
    readonly id: FieldRef<"Sound", 'Int'>
    readonly soundId: FieldRef<"Sound", 'Int'>
    readonly ambienceId: FieldRef<"Sound", 'Int'>
    readonly volume: FieldRef<"Sound", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sound findUnique
   */
  export type SoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter, which Sound to fetch.
     */
    where: SoundWhereUniqueInput
  }

  /**
   * Sound findUniqueOrThrow
   */
  export type SoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter, which Sound to fetch.
     */
    where: SoundWhereUniqueInput
  }

  /**
   * Sound findFirst
   */
  export type SoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter, which Sound to fetch.
     */
    where?: SoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sounds to fetch.
     */
    orderBy?: SoundOrderByWithRelationInput | SoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sounds.
     */
    cursor?: SoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sounds.
     */
    distinct?: SoundScalarFieldEnum | SoundScalarFieldEnum[]
  }

  /**
   * Sound findFirstOrThrow
   */
  export type SoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter, which Sound to fetch.
     */
    where?: SoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sounds to fetch.
     */
    orderBy?: SoundOrderByWithRelationInput | SoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sounds.
     */
    cursor?: SoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sounds.
     */
    distinct?: SoundScalarFieldEnum | SoundScalarFieldEnum[]
  }

  /**
   * Sound findMany
   */
  export type SoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter, which Sounds to fetch.
     */
    where?: SoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sounds to fetch.
     */
    orderBy?: SoundOrderByWithRelationInput | SoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sounds.
     */
    cursor?: SoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sounds.
     */
    skip?: number
    distinct?: SoundScalarFieldEnum | SoundScalarFieldEnum[]
  }

  /**
   * Sound create
   */
  export type SoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Sound.
     */
    data: XOR<SoundCreateInput, SoundUncheckedCreateInput>
  }

  /**
   * Sound createMany
   */
  export type SoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sounds.
     */
    data: SoundCreateManyInput | SoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sound createManyAndReturn
   */
  export type SoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * The data used to create many Sounds.
     */
    data: SoundCreateManyInput | SoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sound update
   */
  export type SoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Sound.
     */
    data: XOR<SoundUpdateInput, SoundUncheckedUpdateInput>
    /**
     * Choose, which Sound to update.
     */
    where: SoundWhereUniqueInput
  }

  /**
   * Sound updateMany
   */
  export type SoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sounds.
     */
    data: XOR<SoundUpdateManyMutationInput, SoundUncheckedUpdateManyInput>
    /**
     * Filter which Sounds to update
     */
    where?: SoundWhereInput
    /**
     * Limit how many Sounds to update.
     */
    limit?: number
  }

  /**
   * Sound updateManyAndReturn
   */
  export type SoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * The data used to update Sounds.
     */
    data: XOR<SoundUpdateManyMutationInput, SoundUncheckedUpdateManyInput>
    /**
     * Filter which Sounds to update
     */
    where?: SoundWhereInput
    /**
     * Limit how many Sounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sound upsert
   */
  export type SoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Sound to update in case it exists.
     */
    where: SoundWhereUniqueInput
    /**
     * In case the Sound found by the `where` argument doesn't exist, create a new Sound with this data.
     */
    create: XOR<SoundCreateInput, SoundUncheckedCreateInput>
    /**
     * In case the Sound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoundUpdateInput, SoundUncheckedUpdateInput>
  }

  /**
   * Sound delete
   */
  export type SoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
    /**
     * Filter which Sound to delete.
     */
    where: SoundWhereUniqueInput
  }

  /**
   * Sound deleteMany
   */
  export type SoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sounds to delete
     */
    where?: SoundWhereInput
    /**
     * Limit how many Sounds to delete.
     */
    limit?: number
  }

  /**
   * Sound without action
   */
  export type SoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sound
     */
    select?: SoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sound
     */
    omit?: SoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundInclude<ExtArgs> | null
  }


  /**
   * Model GlobalSoundData
   */

  export type AggregateGlobalSoundData = {
    _count: GlobalSoundDataCountAggregateOutputType | null
    _avg: GlobalSoundDataAvgAggregateOutputType | null
    _sum: GlobalSoundDataSumAggregateOutputType | null
    _min: GlobalSoundDataMinAggregateOutputType | null
    _max: GlobalSoundDataMaxAggregateOutputType | null
  }

  export type GlobalSoundDataAvgAggregateOutputType = {
    id: number | null
    soundId: number | null
    totalSecondsListened: number | null
    totalPlays: number | null
    averageSecondsListened: number | null
    timesAdded: number | null
    timesRemoved: number | null
  }

  export type GlobalSoundDataSumAggregateOutputType = {
    id: number | null
    soundId: number | null
    totalSecondsListened: number | null
    totalPlays: number | null
    averageSecondsListened: number | null
    timesAdded: number | null
    timesRemoved: number | null
  }

  export type GlobalSoundDataMinAggregateOutputType = {
    id: number | null
    soundId: number | null
    totalSecondsListened: number | null
    totalPlays: number | null
    averageSecondsListened: number | null
    timesAdded: number | null
    timesRemoved: number | null
  }

  export type GlobalSoundDataMaxAggregateOutputType = {
    id: number | null
    soundId: number | null
    totalSecondsListened: number | null
    totalPlays: number | null
    averageSecondsListened: number | null
    timesAdded: number | null
    timesRemoved: number | null
  }

  export type GlobalSoundDataCountAggregateOutputType = {
    id: number
    soundId: number
    totalSecondsListened: number
    totalPlays: number
    averageSecondsListened: number
    timesAdded: number
    timesRemoved: number
    _all: number
  }


  export type GlobalSoundDataAvgAggregateInputType = {
    id?: true
    soundId?: true
    totalSecondsListened?: true
    totalPlays?: true
    averageSecondsListened?: true
    timesAdded?: true
    timesRemoved?: true
  }

  export type GlobalSoundDataSumAggregateInputType = {
    id?: true
    soundId?: true
    totalSecondsListened?: true
    totalPlays?: true
    averageSecondsListened?: true
    timesAdded?: true
    timesRemoved?: true
  }

  export type GlobalSoundDataMinAggregateInputType = {
    id?: true
    soundId?: true
    totalSecondsListened?: true
    totalPlays?: true
    averageSecondsListened?: true
    timesAdded?: true
    timesRemoved?: true
  }

  export type GlobalSoundDataMaxAggregateInputType = {
    id?: true
    soundId?: true
    totalSecondsListened?: true
    totalPlays?: true
    averageSecondsListened?: true
    timesAdded?: true
    timesRemoved?: true
  }

  export type GlobalSoundDataCountAggregateInputType = {
    id?: true
    soundId?: true
    totalSecondsListened?: true
    totalPlays?: true
    averageSecondsListened?: true
    timesAdded?: true
    timesRemoved?: true
    _all?: true
  }

  export type GlobalSoundDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSoundData to aggregate.
     */
    where?: GlobalSoundDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSoundData to fetch.
     */
    orderBy?: GlobalSoundDataOrderByWithRelationInput | GlobalSoundDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalSoundDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSoundData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSoundData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalSoundData
    **/
    _count?: true | GlobalSoundDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalSoundDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalSoundDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalSoundDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalSoundDataMaxAggregateInputType
  }

  export type GetGlobalSoundDataAggregateType<T extends GlobalSoundDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalSoundData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalSoundData[P]>
      : GetScalarType<T[P], AggregateGlobalSoundData[P]>
  }




  export type GlobalSoundDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalSoundDataWhereInput
    orderBy?: GlobalSoundDataOrderByWithAggregationInput | GlobalSoundDataOrderByWithAggregationInput[]
    by: GlobalSoundDataScalarFieldEnum[] | GlobalSoundDataScalarFieldEnum
    having?: GlobalSoundDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalSoundDataCountAggregateInputType | true
    _avg?: GlobalSoundDataAvgAggregateInputType
    _sum?: GlobalSoundDataSumAggregateInputType
    _min?: GlobalSoundDataMinAggregateInputType
    _max?: GlobalSoundDataMaxAggregateInputType
  }

  export type GlobalSoundDataGroupByOutputType = {
    id: number
    soundId: number
    totalSecondsListened: number
    totalPlays: number
    averageSecondsListened: number
    timesAdded: number
    timesRemoved: number
    _count: GlobalSoundDataCountAggregateOutputType | null
    _avg: GlobalSoundDataAvgAggregateOutputType | null
    _sum: GlobalSoundDataSumAggregateOutputType | null
    _min: GlobalSoundDataMinAggregateOutputType | null
    _max: GlobalSoundDataMaxAggregateOutputType | null
  }

  type GetGlobalSoundDataGroupByPayload<T extends GlobalSoundDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalSoundDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalSoundDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalSoundDataGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalSoundDataGroupByOutputType[P]>
        }
      >
    >


  export type GlobalSoundDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    totalSecondsListened?: boolean
    totalPlays?: boolean
    averageSecondsListened?: boolean
    timesAdded?: boolean
    timesRemoved?: boolean
  }, ExtArgs["result"]["globalSoundData"]>

  export type GlobalSoundDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    totalSecondsListened?: boolean
    totalPlays?: boolean
    averageSecondsListened?: boolean
    timesAdded?: boolean
    timesRemoved?: boolean
  }, ExtArgs["result"]["globalSoundData"]>

  export type GlobalSoundDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    soundId?: boolean
    totalSecondsListened?: boolean
    totalPlays?: boolean
    averageSecondsListened?: boolean
    timesAdded?: boolean
    timesRemoved?: boolean
  }, ExtArgs["result"]["globalSoundData"]>

  export type GlobalSoundDataSelectScalar = {
    id?: boolean
    soundId?: boolean
    totalSecondsListened?: boolean
    totalPlays?: boolean
    averageSecondsListened?: boolean
    timesAdded?: boolean
    timesRemoved?: boolean
  }

  export type GlobalSoundDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "soundId" | "totalSecondsListened" | "totalPlays" | "averageSecondsListened" | "timesAdded" | "timesRemoved", ExtArgs["result"]["globalSoundData"]>

  export type $GlobalSoundDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalSoundData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      soundId: number
      totalSecondsListened: number
      totalPlays: number
      averageSecondsListened: number
      timesAdded: number
      timesRemoved: number
    }, ExtArgs["result"]["globalSoundData"]>
    composites: {}
  }

  type GlobalSoundDataGetPayload<S extends boolean | null | undefined | GlobalSoundDataDefaultArgs> = $Result.GetResult<Prisma.$GlobalSoundDataPayload, S>

  type GlobalSoundDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalSoundDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalSoundDataCountAggregateInputType | true
    }

  export interface GlobalSoundDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalSoundData'], meta: { name: 'GlobalSoundData' } }
    /**
     * Find zero or one GlobalSoundData that matches the filter.
     * @param {GlobalSoundDataFindUniqueArgs} args - Arguments to find a GlobalSoundData
     * @example
     * // Get one GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalSoundDataFindUniqueArgs>(args: SelectSubset<T, GlobalSoundDataFindUniqueArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalSoundData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalSoundDataFindUniqueOrThrowArgs} args - Arguments to find a GlobalSoundData
     * @example
     * // Get one GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalSoundDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalSoundDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSoundData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataFindFirstArgs} args - Arguments to find a GlobalSoundData
     * @example
     * // Get one GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalSoundDataFindFirstArgs>(args?: SelectSubset<T, GlobalSoundDataFindFirstArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSoundData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataFindFirstOrThrowArgs} args - Arguments to find a GlobalSoundData
     * @example
     * // Get one GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalSoundDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalSoundDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalSoundData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findMany()
     * 
     * // Get first 10 GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalSoundDataWithIdOnly = await prisma.globalSoundData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalSoundDataFindManyArgs>(args?: SelectSubset<T, GlobalSoundDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalSoundData.
     * @param {GlobalSoundDataCreateArgs} args - Arguments to create a GlobalSoundData.
     * @example
     * // Create one GlobalSoundData
     * const GlobalSoundData = await prisma.globalSoundData.create({
     *   data: {
     *     // ... data to create a GlobalSoundData
     *   }
     * })
     * 
     */
    create<T extends GlobalSoundDataCreateArgs>(args: SelectSubset<T, GlobalSoundDataCreateArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalSoundData.
     * @param {GlobalSoundDataCreateManyArgs} args - Arguments to create many GlobalSoundData.
     * @example
     * // Create many GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalSoundDataCreateManyArgs>(args?: SelectSubset<T, GlobalSoundDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalSoundData and returns the data saved in the database.
     * @param {GlobalSoundDataCreateManyAndReturnArgs} args - Arguments to create many GlobalSoundData.
     * @example
     * // Create many GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalSoundData and only return the `id`
     * const globalSoundDataWithIdOnly = await prisma.globalSoundData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalSoundDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalSoundDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalSoundData.
     * @param {GlobalSoundDataDeleteArgs} args - Arguments to delete one GlobalSoundData.
     * @example
     * // Delete one GlobalSoundData
     * const GlobalSoundData = await prisma.globalSoundData.delete({
     *   where: {
     *     // ... filter to delete one GlobalSoundData
     *   }
     * })
     * 
     */
    delete<T extends GlobalSoundDataDeleteArgs>(args: SelectSubset<T, GlobalSoundDataDeleteArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalSoundData.
     * @param {GlobalSoundDataUpdateArgs} args - Arguments to update one GlobalSoundData.
     * @example
     * // Update one GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalSoundDataUpdateArgs>(args: SelectSubset<T, GlobalSoundDataUpdateArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalSoundData.
     * @param {GlobalSoundDataDeleteManyArgs} args - Arguments to filter GlobalSoundData to delete.
     * @example
     * // Delete a few GlobalSoundData
     * const { count } = await prisma.globalSoundData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalSoundDataDeleteManyArgs>(args?: SelectSubset<T, GlobalSoundDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSoundData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalSoundDataUpdateManyArgs>(args: SelectSubset<T, GlobalSoundDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSoundData and returns the data updated in the database.
     * @param {GlobalSoundDataUpdateManyAndReturnArgs} args - Arguments to update many GlobalSoundData.
     * @example
     * // Update many GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalSoundData and only return the `id`
     * const globalSoundDataWithIdOnly = await prisma.globalSoundData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalSoundDataUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalSoundDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalSoundData.
     * @param {GlobalSoundDataUpsertArgs} args - Arguments to update or create a GlobalSoundData.
     * @example
     * // Update or create a GlobalSoundData
     * const globalSoundData = await prisma.globalSoundData.upsert({
     *   create: {
     *     // ... data to create a GlobalSoundData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalSoundData we want to update
     *   }
     * })
     */
    upsert<T extends GlobalSoundDataUpsertArgs>(args: SelectSubset<T, GlobalSoundDataUpsertArgs<ExtArgs>>): Prisma__GlobalSoundDataClient<$Result.GetResult<Prisma.$GlobalSoundDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalSoundData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataCountArgs} args - Arguments to filter GlobalSoundData to count.
     * @example
     * // Count the number of GlobalSoundData
     * const count = await prisma.globalSoundData.count({
     *   where: {
     *     // ... the filter for the GlobalSoundData we want to count
     *   }
     * })
    **/
    count<T extends GlobalSoundDataCountArgs>(
      args?: Subset<T, GlobalSoundDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalSoundDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalSoundData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalSoundDataAggregateArgs>(args: Subset<T, GlobalSoundDataAggregateArgs>): Prisma.PrismaPromise<GetGlobalSoundDataAggregateType<T>>

    /**
     * Group by GlobalSoundData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSoundDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalSoundDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalSoundDataGroupByArgs['orderBy'] }
        : { orderBy?: GlobalSoundDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalSoundDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalSoundDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalSoundData model
   */
  readonly fields: GlobalSoundDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalSoundData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalSoundDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalSoundData model
   */
  interface GlobalSoundDataFieldRefs {
    readonly id: FieldRef<"GlobalSoundData", 'Int'>
    readonly soundId: FieldRef<"GlobalSoundData", 'Int'>
    readonly totalSecondsListened: FieldRef<"GlobalSoundData", 'Int'>
    readonly totalPlays: FieldRef<"GlobalSoundData", 'Int'>
    readonly averageSecondsListened: FieldRef<"GlobalSoundData", 'Int'>
    readonly timesAdded: FieldRef<"GlobalSoundData", 'Int'>
    readonly timesRemoved: FieldRef<"GlobalSoundData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GlobalSoundData findUnique
   */
  export type GlobalSoundDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSoundData to fetch.
     */
    where: GlobalSoundDataWhereUniqueInput
  }

  /**
   * GlobalSoundData findUniqueOrThrow
   */
  export type GlobalSoundDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSoundData to fetch.
     */
    where: GlobalSoundDataWhereUniqueInput
  }

  /**
   * GlobalSoundData findFirst
   */
  export type GlobalSoundDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSoundData to fetch.
     */
    where?: GlobalSoundDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSoundData to fetch.
     */
    orderBy?: GlobalSoundDataOrderByWithRelationInput | GlobalSoundDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSoundData.
     */
    cursor?: GlobalSoundDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSoundData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSoundData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSoundData.
     */
    distinct?: GlobalSoundDataScalarFieldEnum | GlobalSoundDataScalarFieldEnum[]
  }

  /**
   * GlobalSoundData findFirstOrThrow
   */
  export type GlobalSoundDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSoundData to fetch.
     */
    where?: GlobalSoundDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSoundData to fetch.
     */
    orderBy?: GlobalSoundDataOrderByWithRelationInput | GlobalSoundDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSoundData.
     */
    cursor?: GlobalSoundDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSoundData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSoundData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSoundData.
     */
    distinct?: GlobalSoundDataScalarFieldEnum | GlobalSoundDataScalarFieldEnum[]
  }

  /**
   * GlobalSoundData findMany
   */
  export type GlobalSoundDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSoundData to fetch.
     */
    where?: GlobalSoundDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSoundData to fetch.
     */
    orderBy?: GlobalSoundDataOrderByWithRelationInput | GlobalSoundDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalSoundData.
     */
    cursor?: GlobalSoundDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSoundData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSoundData.
     */
    skip?: number
    distinct?: GlobalSoundDataScalarFieldEnum | GlobalSoundDataScalarFieldEnum[]
  }

  /**
   * GlobalSoundData create
   */
  export type GlobalSoundDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalSoundData.
     */
    data: XOR<GlobalSoundDataCreateInput, GlobalSoundDataUncheckedCreateInput>
  }

  /**
   * GlobalSoundData createMany
   */
  export type GlobalSoundDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalSoundData.
     */
    data: GlobalSoundDataCreateManyInput | GlobalSoundDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSoundData createManyAndReturn
   */
  export type GlobalSoundDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalSoundData.
     */
    data: GlobalSoundDataCreateManyInput | GlobalSoundDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalSoundData update
   */
  export type GlobalSoundDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalSoundData.
     */
    data: XOR<GlobalSoundDataUpdateInput, GlobalSoundDataUncheckedUpdateInput>
    /**
     * Choose, which GlobalSoundData to update.
     */
    where: GlobalSoundDataWhereUniqueInput
  }

  /**
   * GlobalSoundData updateMany
   */
  export type GlobalSoundDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalSoundData.
     */
    data: XOR<GlobalSoundDataUpdateManyMutationInput, GlobalSoundDataUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSoundData to update
     */
    where?: GlobalSoundDataWhereInput
    /**
     * Limit how many GlobalSoundData to update.
     */
    limit?: number
  }

  /**
   * GlobalSoundData updateManyAndReturn
   */
  export type GlobalSoundDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * The data used to update GlobalSoundData.
     */
    data: XOR<GlobalSoundDataUpdateManyMutationInput, GlobalSoundDataUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSoundData to update
     */
    where?: GlobalSoundDataWhereInput
    /**
     * Limit how many GlobalSoundData to update.
     */
    limit?: number
  }

  /**
   * GlobalSoundData upsert
   */
  export type GlobalSoundDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalSoundData to update in case it exists.
     */
    where: GlobalSoundDataWhereUniqueInput
    /**
     * In case the GlobalSoundData found by the `where` argument doesn't exist, create a new GlobalSoundData with this data.
     */
    create: XOR<GlobalSoundDataCreateInput, GlobalSoundDataUncheckedCreateInput>
    /**
     * In case the GlobalSoundData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalSoundDataUpdateInput, GlobalSoundDataUncheckedUpdateInput>
  }

  /**
   * GlobalSoundData delete
   */
  export type GlobalSoundDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
    /**
     * Filter which GlobalSoundData to delete.
     */
    where: GlobalSoundDataWhereUniqueInput
  }

  /**
   * GlobalSoundData deleteMany
   */
  export type GlobalSoundDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSoundData to delete
     */
    where?: GlobalSoundDataWhereInput
    /**
     * Limit how many GlobalSoundData to delete.
     */
    limit?: number
  }

  /**
   * GlobalSoundData without action
   */
  export type GlobalSoundDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSoundData
     */
    select?: GlobalSoundDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSoundData
     */
    omit?: GlobalSoundDataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    xp: 'xp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AmbienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId'
  };

  export type AmbienceScalarFieldEnum = (typeof AmbienceScalarFieldEnum)[keyof typeof AmbienceScalarFieldEnum]


  export const SoundScalarFieldEnum: {
    id: 'id',
    soundId: 'soundId',
    ambienceId: 'ambienceId',
    volume: 'volume'
  };

  export type SoundScalarFieldEnum = (typeof SoundScalarFieldEnum)[keyof typeof SoundScalarFieldEnum]


  export const GlobalSoundDataScalarFieldEnum: {
    id: 'id',
    soundId: 'soundId',
    totalSecondsListened: 'totalSecondsListened',
    totalPlays: 'totalPlays',
    averageSecondsListened: 'averageSecondsListened',
    timesAdded: 'timesAdded',
    timesRemoved: 'timesRemoved'
  };

  export type GlobalSoundDataScalarFieldEnum = (typeof GlobalSoundDataScalarFieldEnum)[keyof typeof GlobalSoundDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    xp?: IntFilter<"User"> | number
    ambiences?: AmbienceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    xp?: SortOrder
    ambiences?: AmbienceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    xp?: IntFilter<"User"> | number
    ambiences?: AmbienceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    xp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    xp?: IntWithAggregatesFilter<"User"> | number
  }

  export type AmbienceWhereInput = {
    AND?: AmbienceWhereInput | AmbienceWhereInput[]
    OR?: AmbienceWhereInput[]
    NOT?: AmbienceWhereInput | AmbienceWhereInput[]
    id?: IntFilter<"Ambience"> | number
    title?: StringFilter<"Ambience"> | string
    authorId?: IntFilter<"Ambience"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    config?: SoundListRelationFilter
  }

  export type AmbienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    config?: SoundOrderByRelationAggregateInput
  }

  export type AmbienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AmbienceWhereInput | AmbienceWhereInput[]
    OR?: AmbienceWhereInput[]
    NOT?: AmbienceWhereInput | AmbienceWhereInput[]
    title?: StringFilter<"Ambience"> | string
    authorId?: IntFilter<"Ambience"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    config?: SoundListRelationFilter
  }, "id">

  export type AmbienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    _count?: AmbienceCountOrderByAggregateInput
    _avg?: AmbienceAvgOrderByAggregateInput
    _max?: AmbienceMaxOrderByAggregateInput
    _min?: AmbienceMinOrderByAggregateInput
    _sum?: AmbienceSumOrderByAggregateInput
  }

  export type AmbienceScalarWhereWithAggregatesInput = {
    AND?: AmbienceScalarWhereWithAggregatesInput | AmbienceScalarWhereWithAggregatesInput[]
    OR?: AmbienceScalarWhereWithAggregatesInput[]
    NOT?: AmbienceScalarWhereWithAggregatesInput | AmbienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ambience"> | number
    title?: StringWithAggregatesFilter<"Ambience"> | string
    authorId?: IntWithAggregatesFilter<"Ambience"> | number
  }

  export type SoundWhereInput = {
    AND?: SoundWhereInput | SoundWhereInput[]
    OR?: SoundWhereInput[]
    NOT?: SoundWhereInput | SoundWhereInput[]
    id?: IntFilter<"Sound"> | number
    soundId?: IntFilter<"Sound"> | number
    ambienceId?: IntFilter<"Sound"> | number
    volume?: FloatFilter<"Sound"> | number
    ambience?: XOR<AmbienceScalarRelationFilter, AmbienceWhereInput>
  }

  export type SoundOrderByWithRelationInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
    ambience?: AmbienceOrderByWithRelationInput
  }

  export type SoundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SoundWhereInput | SoundWhereInput[]
    OR?: SoundWhereInput[]
    NOT?: SoundWhereInput | SoundWhereInput[]
    soundId?: IntFilter<"Sound"> | number
    ambienceId?: IntFilter<"Sound"> | number
    volume?: FloatFilter<"Sound"> | number
    ambience?: XOR<AmbienceScalarRelationFilter, AmbienceWhereInput>
  }, "id">

  export type SoundOrderByWithAggregationInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
    _count?: SoundCountOrderByAggregateInput
    _avg?: SoundAvgOrderByAggregateInput
    _max?: SoundMaxOrderByAggregateInput
    _min?: SoundMinOrderByAggregateInput
    _sum?: SoundSumOrderByAggregateInput
  }

  export type SoundScalarWhereWithAggregatesInput = {
    AND?: SoundScalarWhereWithAggregatesInput | SoundScalarWhereWithAggregatesInput[]
    OR?: SoundScalarWhereWithAggregatesInput[]
    NOT?: SoundScalarWhereWithAggregatesInput | SoundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sound"> | number
    soundId?: IntWithAggregatesFilter<"Sound"> | number
    ambienceId?: IntWithAggregatesFilter<"Sound"> | number
    volume?: FloatWithAggregatesFilter<"Sound"> | number
  }

  export type GlobalSoundDataWhereInput = {
    AND?: GlobalSoundDataWhereInput | GlobalSoundDataWhereInput[]
    OR?: GlobalSoundDataWhereInput[]
    NOT?: GlobalSoundDataWhereInput | GlobalSoundDataWhereInput[]
    id?: IntFilter<"GlobalSoundData"> | number
    soundId?: IntFilter<"GlobalSoundData"> | number
    totalSecondsListened?: IntFilter<"GlobalSoundData"> | number
    totalPlays?: IntFilter<"GlobalSoundData"> | number
    averageSecondsListened?: IntFilter<"GlobalSoundData"> | number
    timesAdded?: IntFilter<"GlobalSoundData"> | number
    timesRemoved?: IntFilter<"GlobalSoundData"> | number
  }

  export type GlobalSoundDataOrderByWithRelationInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type GlobalSoundDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    soundId?: number
    AND?: GlobalSoundDataWhereInput | GlobalSoundDataWhereInput[]
    OR?: GlobalSoundDataWhereInput[]
    NOT?: GlobalSoundDataWhereInput | GlobalSoundDataWhereInput[]
    totalSecondsListened?: IntFilter<"GlobalSoundData"> | number
    totalPlays?: IntFilter<"GlobalSoundData"> | number
    averageSecondsListened?: IntFilter<"GlobalSoundData"> | number
    timesAdded?: IntFilter<"GlobalSoundData"> | number
    timesRemoved?: IntFilter<"GlobalSoundData"> | number
  }, "id" | "soundId">

  export type GlobalSoundDataOrderByWithAggregationInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
    _count?: GlobalSoundDataCountOrderByAggregateInput
    _avg?: GlobalSoundDataAvgOrderByAggregateInput
    _max?: GlobalSoundDataMaxOrderByAggregateInput
    _min?: GlobalSoundDataMinOrderByAggregateInput
    _sum?: GlobalSoundDataSumOrderByAggregateInput
  }

  export type GlobalSoundDataScalarWhereWithAggregatesInput = {
    AND?: GlobalSoundDataScalarWhereWithAggregatesInput | GlobalSoundDataScalarWhereWithAggregatesInput[]
    OR?: GlobalSoundDataScalarWhereWithAggregatesInput[]
    NOT?: GlobalSoundDataScalarWhereWithAggregatesInput | GlobalSoundDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    soundId?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    totalSecondsListened?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    totalPlays?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    averageSecondsListened?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    timesAdded?: IntWithAggregatesFilter<"GlobalSoundData"> | number
    timesRemoved?: IntWithAggregatesFilter<"GlobalSoundData"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    xp?: number
    ambiences?: AmbienceCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    xp?: number
    ambiences?: AmbienceUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    ambiences?: AmbienceUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
    ambiences?: AmbienceUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    xp?: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type AmbienceCreateInput = {
    title: string
    author: UserCreateNestedOneWithoutAmbiencesInput
    config?: SoundCreateNestedManyWithoutAmbienceInput
  }

  export type AmbienceUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    config?: SoundUncheckedCreateNestedManyWithoutAmbienceInput
  }

  export type AmbienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutAmbiencesNestedInput
    config?: SoundUpdateManyWithoutAmbienceNestedInput
  }

  export type AmbienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    config?: SoundUncheckedUpdateManyWithoutAmbienceNestedInput
  }

  export type AmbienceCreateManyInput = {
    id?: number
    title: string
    authorId: number
  }

  export type AmbienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AmbienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type SoundCreateInput = {
    soundId: number
    volume: number
    ambience: AmbienceCreateNestedOneWithoutConfigInput
  }

  export type SoundUncheckedCreateInput = {
    id?: number
    soundId: number
    ambienceId: number
    volume: number
  }

  export type SoundUpdateInput = {
    soundId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    ambience?: AmbienceUpdateOneRequiredWithoutConfigNestedInput
  }

  export type SoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }

  export type SoundCreateManyInput = {
    id?: number
    soundId: number
    ambienceId: number
    volume: number
  }

  export type SoundUpdateManyMutationInput = {
    soundId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }

  export type SoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    ambienceId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }

  export type GlobalSoundDataCreateInput = {
    soundId: number
    totalSecondsListened: number
    totalPlays: number
    averageSecondsListened: number
    timesAdded: number
    timesRemoved: number
  }

  export type GlobalSoundDataUncheckedCreateInput = {
    id?: number
    soundId: number
    totalSecondsListened: number
    totalPlays: number
    averageSecondsListened: number
    timesAdded: number
    timesRemoved: number
  }

  export type GlobalSoundDataUpdateInput = {
    soundId?: IntFieldUpdateOperationsInput | number
    totalSecondsListened?: IntFieldUpdateOperationsInput | number
    totalPlays?: IntFieldUpdateOperationsInput | number
    averageSecondsListened?: IntFieldUpdateOperationsInput | number
    timesAdded?: IntFieldUpdateOperationsInput | number
    timesRemoved?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalSoundDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    totalSecondsListened?: IntFieldUpdateOperationsInput | number
    totalPlays?: IntFieldUpdateOperationsInput | number
    averageSecondsListened?: IntFieldUpdateOperationsInput | number
    timesAdded?: IntFieldUpdateOperationsInput | number
    timesRemoved?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalSoundDataCreateManyInput = {
    id?: number
    soundId: number
    totalSecondsListened: number
    totalPlays: number
    averageSecondsListened: number
    timesAdded: number
    timesRemoved: number
  }

  export type GlobalSoundDataUpdateManyMutationInput = {
    soundId?: IntFieldUpdateOperationsInput | number
    totalSecondsListened?: IntFieldUpdateOperationsInput | number
    totalPlays?: IntFieldUpdateOperationsInput | number
    averageSecondsListened?: IntFieldUpdateOperationsInput | number
    timesAdded?: IntFieldUpdateOperationsInput | number
    timesRemoved?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalSoundDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    totalSecondsListened?: IntFieldUpdateOperationsInput | number
    totalPlays?: IntFieldUpdateOperationsInput | number
    averageSecondsListened?: IntFieldUpdateOperationsInput | number
    timesAdded?: IntFieldUpdateOperationsInput | number
    timesRemoved?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AmbienceListRelationFilter = {
    every?: AmbienceWhereInput
    some?: AmbienceWhereInput
    none?: AmbienceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AmbienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    xp?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    xp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    xp?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    xp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SoundListRelationFilter = {
    every?: SoundWhereInput
    some?: SoundWhereInput
    none?: SoundWhereInput
  }

  export type SoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmbienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type AmbienceAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type AmbienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type AmbienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type AmbienceSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AmbienceScalarRelationFilter = {
    is?: AmbienceWhereInput
    isNot?: AmbienceWhereInput
  }

  export type SoundCountOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
  }

  export type SoundAvgOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
  }

  export type SoundMaxOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
  }

  export type SoundMinOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
  }

  export type SoundSumOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    ambienceId?: SortOrder
    volume?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GlobalSoundDataCountOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type GlobalSoundDataAvgOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type GlobalSoundDataMaxOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type GlobalSoundDataMinOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type GlobalSoundDataSumOrderByAggregateInput = {
    id?: SortOrder
    soundId?: SortOrder
    totalSecondsListened?: SortOrder
    totalPlays?: SortOrder
    averageSecondsListened?: SortOrder
    timesAdded?: SortOrder
    timesRemoved?: SortOrder
  }

  export type AmbienceCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput> | AmbienceCreateWithoutAuthorInput[] | AmbienceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AmbienceCreateOrConnectWithoutAuthorInput | AmbienceCreateOrConnectWithoutAuthorInput[]
    createMany?: AmbienceCreateManyAuthorInputEnvelope
    connect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
  }

  export type AmbienceUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput> | AmbienceCreateWithoutAuthorInput[] | AmbienceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AmbienceCreateOrConnectWithoutAuthorInput | AmbienceCreateOrConnectWithoutAuthorInput[]
    createMany?: AmbienceCreateManyAuthorInputEnvelope
    connect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AmbienceUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput> | AmbienceCreateWithoutAuthorInput[] | AmbienceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AmbienceCreateOrConnectWithoutAuthorInput | AmbienceCreateOrConnectWithoutAuthorInput[]
    upsert?: AmbienceUpsertWithWhereUniqueWithoutAuthorInput | AmbienceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AmbienceCreateManyAuthorInputEnvelope
    set?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    disconnect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    delete?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    connect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    update?: AmbienceUpdateWithWhereUniqueWithoutAuthorInput | AmbienceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AmbienceUpdateManyWithWhereWithoutAuthorInput | AmbienceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AmbienceScalarWhereInput | AmbienceScalarWhereInput[]
  }

  export type AmbienceUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput> | AmbienceCreateWithoutAuthorInput[] | AmbienceUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AmbienceCreateOrConnectWithoutAuthorInput | AmbienceCreateOrConnectWithoutAuthorInput[]
    upsert?: AmbienceUpsertWithWhereUniqueWithoutAuthorInput | AmbienceUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AmbienceCreateManyAuthorInputEnvelope
    set?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    disconnect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    delete?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    connect?: AmbienceWhereUniqueInput | AmbienceWhereUniqueInput[]
    update?: AmbienceUpdateWithWhereUniqueWithoutAuthorInput | AmbienceUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AmbienceUpdateManyWithWhereWithoutAuthorInput | AmbienceUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AmbienceScalarWhereInput | AmbienceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAmbiencesInput = {
    create?: XOR<UserCreateWithoutAmbiencesInput, UserUncheckedCreateWithoutAmbiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAmbiencesInput
    connect?: UserWhereUniqueInput
  }

  export type SoundCreateNestedManyWithoutAmbienceInput = {
    create?: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput> | SoundCreateWithoutAmbienceInput[] | SoundUncheckedCreateWithoutAmbienceInput[]
    connectOrCreate?: SoundCreateOrConnectWithoutAmbienceInput | SoundCreateOrConnectWithoutAmbienceInput[]
    createMany?: SoundCreateManyAmbienceInputEnvelope
    connect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
  }

  export type SoundUncheckedCreateNestedManyWithoutAmbienceInput = {
    create?: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput> | SoundCreateWithoutAmbienceInput[] | SoundUncheckedCreateWithoutAmbienceInput[]
    connectOrCreate?: SoundCreateOrConnectWithoutAmbienceInput | SoundCreateOrConnectWithoutAmbienceInput[]
    createMany?: SoundCreateManyAmbienceInputEnvelope
    connect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAmbiencesNestedInput = {
    create?: XOR<UserCreateWithoutAmbiencesInput, UserUncheckedCreateWithoutAmbiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAmbiencesInput
    upsert?: UserUpsertWithoutAmbiencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAmbiencesInput, UserUpdateWithoutAmbiencesInput>, UserUncheckedUpdateWithoutAmbiencesInput>
  }

  export type SoundUpdateManyWithoutAmbienceNestedInput = {
    create?: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput> | SoundCreateWithoutAmbienceInput[] | SoundUncheckedCreateWithoutAmbienceInput[]
    connectOrCreate?: SoundCreateOrConnectWithoutAmbienceInput | SoundCreateOrConnectWithoutAmbienceInput[]
    upsert?: SoundUpsertWithWhereUniqueWithoutAmbienceInput | SoundUpsertWithWhereUniqueWithoutAmbienceInput[]
    createMany?: SoundCreateManyAmbienceInputEnvelope
    set?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    disconnect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    delete?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    connect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    update?: SoundUpdateWithWhereUniqueWithoutAmbienceInput | SoundUpdateWithWhereUniqueWithoutAmbienceInput[]
    updateMany?: SoundUpdateManyWithWhereWithoutAmbienceInput | SoundUpdateManyWithWhereWithoutAmbienceInput[]
    deleteMany?: SoundScalarWhereInput | SoundScalarWhereInput[]
  }

  export type SoundUncheckedUpdateManyWithoutAmbienceNestedInput = {
    create?: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput> | SoundCreateWithoutAmbienceInput[] | SoundUncheckedCreateWithoutAmbienceInput[]
    connectOrCreate?: SoundCreateOrConnectWithoutAmbienceInput | SoundCreateOrConnectWithoutAmbienceInput[]
    upsert?: SoundUpsertWithWhereUniqueWithoutAmbienceInput | SoundUpsertWithWhereUniqueWithoutAmbienceInput[]
    createMany?: SoundCreateManyAmbienceInputEnvelope
    set?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    disconnect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    delete?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    connect?: SoundWhereUniqueInput | SoundWhereUniqueInput[]
    update?: SoundUpdateWithWhereUniqueWithoutAmbienceInput | SoundUpdateWithWhereUniqueWithoutAmbienceInput[]
    updateMany?: SoundUpdateManyWithWhereWithoutAmbienceInput | SoundUpdateManyWithWhereWithoutAmbienceInput[]
    deleteMany?: SoundScalarWhereInput | SoundScalarWhereInput[]
  }

  export type AmbienceCreateNestedOneWithoutConfigInput = {
    create?: XOR<AmbienceCreateWithoutConfigInput, AmbienceUncheckedCreateWithoutConfigInput>
    connectOrCreate?: AmbienceCreateOrConnectWithoutConfigInput
    connect?: AmbienceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AmbienceUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<AmbienceCreateWithoutConfigInput, AmbienceUncheckedCreateWithoutConfigInput>
    connectOrCreate?: AmbienceCreateOrConnectWithoutConfigInput
    upsert?: AmbienceUpsertWithoutConfigInput
    connect?: AmbienceWhereUniqueInput
    update?: XOR<XOR<AmbienceUpdateToOneWithWhereWithoutConfigInput, AmbienceUpdateWithoutConfigInput>, AmbienceUncheckedUpdateWithoutConfigInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AmbienceCreateWithoutAuthorInput = {
    title: string
    config?: SoundCreateNestedManyWithoutAmbienceInput
  }

  export type AmbienceUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    config?: SoundUncheckedCreateNestedManyWithoutAmbienceInput
  }

  export type AmbienceCreateOrConnectWithoutAuthorInput = {
    where: AmbienceWhereUniqueInput
    create: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput>
  }

  export type AmbienceCreateManyAuthorInputEnvelope = {
    data: AmbienceCreateManyAuthorInput | AmbienceCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AmbienceUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AmbienceWhereUniqueInput
    update: XOR<AmbienceUpdateWithoutAuthorInput, AmbienceUncheckedUpdateWithoutAuthorInput>
    create: XOR<AmbienceCreateWithoutAuthorInput, AmbienceUncheckedCreateWithoutAuthorInput>
  }

  export type AmbienceUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AmbienceWhereUniqueInput
    data: XOR<AmbienceUpdateWithoutAuthorInput, AmbienceUncheckedUpdateWithoutAuthorInput>
  }

  export type AmbienceUpdateManyWithWhereWithoutAuthorInput = {
    where: AmbienceScalarWhereInput
    data: XOR<AmbienceUpdateManyMutationInput, AmbienceUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AmbienceScalarWhereInput = {
    AND?: AmbienceScalarWhereInput | AmbienceScalarWhereInput[]
    OR?: AmbienceScalarWhereInput[]
    NOT?: AmbienceScalarWhereInput | AmbienceScalarWhereInput[]
    id?: IntFilter<"Ambience"> | number
    title?: StringFilter<"Ambience"> | string
    authorId?: IntFilter<"Ambience"> | number
  }

  export type UserCreateWithoutAmbiencesInput = {
    email: string
    name?: string | null
    xp?: number
  }

  export type UserUncheckedCreateWithoutAmbiencesInput = {
    id?: number
    email: string
    name?: string | null
    xp?: number
  }

  export type UserCreateOrConnectWithoutAmbiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAmbiencesInput, UserUncheckedCreateWithoutAmbiencesInput>
  }

  export type SoundCreateWithoutAmbienceInput = {
    soundId: number
    volume: number
  }

  export type SoundUncheckedCreateWithoutAmbienceInput = {
    id?: number
    soundId: number
    volume: number
  }

  export type SoundCreateOrConnectWithoutAmbienceInput = {
    where: SoundWhereUniqueInput
    create: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput>
  }

  export type SoundCreateManyAmbienceInputEnvelope = {
    data: SoundCreateManyAmbienceInput | SoundCreateManyAmbienceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAmbiencesInput = {
    update: XOR<UserUpdateWithoutAmbiencesInput, UserUncheckedUpdateWithoutAmbiencesInput>
    create: XOR<UserCreateWithoutAmbiencesInput, UserUncheckedCreateWithoutAmbiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAmbiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAmbiencesInput, UserUncheckedUpdateWithoutAmbiencesInput>
  }

  export type UserUpdateWithoutAmbiencesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutAmbiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    xp?: IntFieldUpdateOperationsInput | number
  }

  export type SoundUpsertWithWhereUniqueWithoutAmbienceInput = {
    where: SoundWhereUniqueInput
    update: XOR<SoundUpdateWithoutAmbienceInput, SoundUncheckedUpdateWithoutAmbienceInput>
    create: XOR<SoundCreateWithoutAmbienceInput, SoundUncheckedCreateWithoutAmbienceInput>
  }

  export type SoundUpdateWithWhereUniqueWithoutAmbienceInput = {
    where: SoundWhereUniqueInput
    data: XOR<SoundUpdateWithoutAmbienceInput, SoundUncheckedUpdateWithoutAmbienceInput>
  }

  export type SoundUpdateManyWithWhereWithoutAmbienceInput = {
    where: SoundScalarWhereInput
    data: XOR<SoundUpdateManyMutationInput, SoundUncheckedUpdateManyWithoutAmbienceInput>
  }

  export type SoundScalarWhereInput = {
    AND?: SoundScalarWhereInput | SoundScalarWhereInput[]
    OR?: SoundScalarWhereInput[]
    NOT?: SoundScalarWhereInput | SoundScalarWhereInput[]
    id?: IntFilter<"Sound"> | number
    soundId?: IntFilter<"Sound"> | number
    ambienceId?: IntFilter<"Sound"> | number
    volume?: FloatFilter<"Sound"> | number
  }

  export type AmbienceCreateWithoutConfigInput = {
    title: string
    author: UserCreateNestedOneWithoutAmbiencesInput
  }

  export type AmbienceUncheckedCreateWithoutConfigInput = {
    id?: number
    title: string
    authorId: number
  }

  export type AmbienceCreateOrConnectWithoutConfigInput = {
    where: AmbienceWhereUniqueInput
    create: XOR<AmbienceCreateWithoutConfigInput, AmbienceUncheckedCreateWithoutConfigInput>
  }

  export type AmbienceUpsertWithoutConfigInput = {
    update: XOR<AmbienceUpdateWithoutConfigInput, AmbienceUncheckedUpdateWithoutConfigInput>
    create: XOR<AmbienceCreateWithoutConfigInput, AmbienceUncheckedCreateWithoutConfigInput>
    where?: AmbienceWhereInput
  }

  export type AmbienceUpdateToOneWithWhereWithoutConfigInput = {
    where?: AmbienceWhereInput
    data: XOR<AmbienceUpdateWithoutConfigInput, AmbienceUncheckedUpdateWithoutConfigInput>
  }

  export type AmbienceUpdateWithoutConfigInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutAmbiencesNestedInput
  }

  export type AmbienceUncheckedUpdateWithoutConfigInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AmbienceCreateManyAuthorInput = {
    id?: number
    title: string
  }

  export type AmbienceUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    config?: SoundUpdateManyWithoutAmbienceNestedInput
  }

  export type AmbienceUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    config?: SoundUncheckedUpdateManyWithoutAmbienceNestedInput
  }

  export type AmbienceUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SoundCreateManyAmbienceInput = {
    id?: number
    soundId: number
    volume: number
  }

  export type SoundUpdateWithoutAmbienceInput = {
    soundId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }

  export type SoundUncheckedUpdateWithoutAmbienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }

  export type SoundUncheckedUpdateManyWithoutAmbienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    soundId?: IntFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}