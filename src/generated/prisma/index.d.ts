
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model SubscriptionPackage
 * 
 */
export type SubscriptionPackage = $Result.DefaultSelection<Prisma.$SubscriptionPackagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OtpLog
 * 
 */
export type OtpLog = $Result.DefaultSelection<Prisma.$OtpLogPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FileType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  PDF: 'PDF',
  AUDIO: 'AUDIO'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const SubscriptionTier: {
  FREE: 'FREE',
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  DIAMOND: 'DIAMOND'
};

export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier]

}

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

export type SubscriptionTier = $Enums.SubscriptionTier

export const SubscriptionTier: typeof $Enums.SubscriptionTier

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPackage`: Exposes CRUD operations for the **SubscriptionPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPackages
    * const subscriptionPackages = await prisma.subscriptionPackage.findMany()
    * ```
    */
  get subscriptionPackage(): Prisma.SubscriptionPackageDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.otpLog`: Exposes CRUD operations for the **OtpLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpLogs
    * const otpLogs = await prisma.otpLog.findMany()
    * ```
    */
  get otpLog(): Prisma.OtpLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Admin: 'Admin',
    SubscriptionPackage: 'SubscriptionPackage',
    User: 'User',
    OtpLog: 'OtpLog',
    UserSubscription: 'UserSubscription',
    Folder: 'Folder',
    File: 'File'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "subscriptionPackage" | "user" | "otpLog" | "userSubscription" | "folder" | "file"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPackage: {
        payload: Prisma.$SubscriptionPackagePayload<ExtArgs>
        fields: Prisma.SubscriptionPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          findMany: {
            args: Prisma.SubscriptionPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>[]
          }
          create: {
            args: Prisma.SubscriptionPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          createMany: {
            args: Prisma.SubscriptionPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          update: {
            args: Prisma.SubscriptionPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPackagePayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPackage>
          }
          groupBy: {
            args: Prisma.SubscriptionPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPackageCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPackageCountAggregateOutputType> | number
          }
        }
      }
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
      OtpLog: {
        payload: Prisma.$OtpLogPayload<ExtArgs>
        fields: Prisma.OtpLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          findFirst: {
            args: Prisma.OtpLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          findMany: {
            args: Prisma.OtpLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>[]
          }
          create: {
            args: Prisma.OtpLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          createMany: {
            args: Prisma.OtpLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>[]
          }
          delete: {
            args: Prisma.OtpLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          update: {
            args: Prisma.OtpLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          deleteMany: {
            args: Prisma.OtpLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>[]
          }
          upsert: {
            args: Prisma.OtpLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpLogPayload>
          }
          aggregate: {
            args: Prisma.OtpLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpLog>
          }
          groupBy: {
            args: Prisma.OtpLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpLogCountArgs<ExtArgs>
            result: $Utils.Optional<OtpLogCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    subscriptionPackage?: SubscriptionPackageOmit
    user?: UserOmit
    otpLog?: OtpLogOmit
    userSubscription?: UserSubscriptionOmit
    folder?: FolderOmit
    file?: FileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type SubscriptionPackageCountOutputType
   */

  export type SubscriptionPackageCountOutputType = {
    userSubscriptions: number
  }

  export type SubscriptionPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | SubscriptionPackageCountOutputTypeCountUserSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPackageCountOutputType without action
   */
  export type SubscriptionPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackageCountOutputType
     */
    select?: SubscriptionPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPackageCountOutputType without action
   */
  export type SubscriptionPackageCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subscriptions: number
    folders: number
    files: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    folders?: boolean | UserCountOutputTypeCountFoldersArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
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
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    children: number
    files: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | FolderCountOutputTypeCountChildrenArgs
    files?: boolean | FolderCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model SubscriptionPackage
   */

  export type AggregateSubscriptionPackage = {
    _count: SubscriptionPackageCountAggregateOutputType | null
    _avg: SubscriptionPackageAvgAggregateOutputType | null
    _sum: SubscriptionPackageSumAggregateOutputType | null
    _min: SubscriptionPackageMinAggregateOutputType | null
    _max: SubscriptionPackageMaxAggregateOutputType | null
  }

  export type SubscriptionPackageAvgAggregateOutputType = {
    price: number | null
    maxFolders: number | null
    maxNestingLevel: number | null
    maxFileSizeMB: number | null
    totalFileLimit: number | null
    filesPerFolder: number | null
  }

  export type SubscriptionPackageSumAggregateOutputType = {
    price: number | null
    maxFolders: number | null
    maxNestingLevel: number | null
    maxFileSizeMB: number | null
    totalFileLimit: number | null
    filesPerFolder: number | null
  }

  export type SubscriptionPackageMinAggregateOutputType = {
    id: string | null
    name: $Enums.SubscriptionTier | null
    price: number | null
    maxFolders: number | null
    maxNestingLevel: number | null
    maxFileSizeMB: number | null
    totalFileLimit: number | null
    filesPerFolder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPackageMaxAggregateOutputType = {
    id: string | null
    name: $Enums.SubscriptionTier | null
    price: number | null
    maxFolders: number | null
    maxNestingLevel: number | null
    maxFileSizeMB: number | null
    totalFileLimit: number | null
    filesPerFolder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPackageCountAggregateOutputType = {
    id: number
    name: number
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes: number
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPackageAvgAggregateInputType = {
    price?: true
    maxFolders?: true
    maxNestingLevel?: true
    maxFileSizeMB?: true
    totalFileLimit?: true
    filesPerFolder?: true
  }

  export type SubscriptionPackageSumAggregateInputType = {
    price?: true
    maxFolders?: true
    maxNestingLevel?: true
    maxFileSizeMB?: true
    totalFileLimit?: true
    filesPerFolder?: true
  }

  export type SubscriptionPackageMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxFolders?: true
    maxNestingLevel?: true
    maxFileSizeMB?: true
    totalFileLimit?: true
    filesPerFolder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPackageMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxFolders?: true
    maxNestingLevel?: true
    maxFileSizeMB?: true
    totalFileLimit?: true
    filesPerFolder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPackageCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxFolders?: true
    maxNestingLevel?: true
    allowedFileTypes?: true
    maxFileSizeMB?: true
    totalFileLimit?: true
    filesPerFolder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPackage to aggregate.
     */
    where?: SubscriptionPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPackages to fetch.
     */
    orderBy?: SubscriptionPackageOrderByWithRelationInput | SubscriptionPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPackages
    **/
    _count?: true | SubscriptionPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPackageMaxAggregateInputType
  }

  export type GetSubscriptionPackageAggregateType<T extends SubscriptionPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPackage[P]>
      : GetScalarType<T[P], AggregateSubscriptionPackage[P]>
  }




  export type SubscriptionPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPackageWhereInput
    orderBy?: SubscriptionPackageOrderByWithAggregationInput | SubscriptionPackageOrderByWithAggregationInput[]
    by: SubscriptionPackageScalarFieldEnum[] | SubscriptionPackageScalarFieldEnum
    having?: SubscriptionPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPackageCountAggregateInputType | true
    _avg?: SubscriptionPackageAvgAggregateInputType
    _sum?: SubscriptionPackageSumAggregateInputType
    _min?: SubscriptionPackageMinAggregateInputType
    _max?: SubscriptionPackageMaxAggregateInputType
  }

  export type SubscriptionPackageGroupByOutputType = {
    id: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes: $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPackageCountAggregateOutputType | null
    _avg: SubscriptionPackageAvgAggregateOutputType | null
    _sum: SubscriptionPackageSumAggregateOutputType | null
    _min: SubscriptionPackageMinAggregateOutputType | null
    _max: SubscriptionPackageMaxAggregateOutputType | null
  }

  type GetSubscriptionPackageGroupByPayload<T extends SubscriptionPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPackageGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPackageGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    maxFolders?: boolean
    maxNestingLevel?: boolean
    allowedFileTypes?: boolean
    maxFileSizeMB?: boolean
    totalFileLimit?: boolean
    filesPerFolder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSubscriptions?: boolean | SubscriptionPackage$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPackage"]>

  export type SubscriptionPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    maxFolders?: boolean
    maxNestingLevel?: boolean
    allowedFileTypes?: boolean
    maxFileSizeMB?: boolean
    totalFileLimit?: boolean
    filesPerFolder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPackage"]>

  export type SubscriptionPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    maxFolders?: boolean
    maxNestingLevel?: boolean
    allowedFileTypes?: boolean
    maxFileSizeMB?: boolean
    totalFileLimit?: boolean
    filesPerFolder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPackage"]>

  export type SubscriptionPackageSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    maxFolders?: boolean
    maxNestingLevel?: boolean
    allowedFileTypes?: boolean
    maxFileSizeMB?: boolean
    totalFileLimit?: boolean
    filesPerFolder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "maxFolders" | "maxNestingLevel" | "allowedFileTypes" | "maxFileSizeMB" | "totalFileLimit" | "filesPerFolder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPackage"]>
  export type SubscriptionPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSubscriptions?: boolean | SubscriptionPackage$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPackage"
    objects: {
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.SubscriptionTier
      price: number
      maxFolders: number
      maxNestingLevel: number
      allowedFileTypes: $Enums.FileType[]
      maxFileSizeMB: number
      totalFileLimit: number
      filesPerFolder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPackage"]>
    composites: {}
  }

  type SubscriptionPackageGetPayload<S extends boolean | null | undefined | SubscriptionPackageDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPackagePayload, S>

  type SubscriptionPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPackageCountAggregateInputType | true
    }

  export interface SubscriptionPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPackage'], meta: { name: 'SubscriptionPackage' } }
    /**
     * Find zero or one SubscriptionPackage that matches the filter.
     * @param {SubscriptionPackageFindUniqueArgs} args - Arguments to find a SubscriptionPackage
     * @example
     * // Get one SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPackageFindUniqueArgs>(args: SelectSubset<T, SubscriptionPackageFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPackageFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPackage
     * @example
     * // Get one SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageFindFirstArgs} args - Arguments to find a SubscriptionPackage
     * @example
     * // Get one SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPackageFindFirstArgs>(args?: SelectSubset<T, SubscriptionPackageFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPackage
     * @example
     * // Get one SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPackages
     * const subscriptionPackages = await prisma.subscriptionPackage.findMany()
     * 
     * // Get first 10 SubscriptionPackages
     * const subscriptionPackages = await prisma.subscriptionPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPackageWithIdOnly = await prisma.subscriptionPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPackageFindManyArgs>(args?: SelectSubset<T, SubscriptionPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPackage.
     * @param {SubscriptionPackageCreateArgs} args - Arguments to create a SubscriptionPackage.
     * @example
     * // Create one SubscriptionPackage
     * const SubscriptionPackage = await prisma.subscriptionPackage.create({
     *   data: {
     *     // ... data to create a SubscriptionPackage
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPackageCreateArgs>(args: SelectSubset<T, SubscriptionPackageCreateArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPackages.
     * @param {SubscriptionPackageCreateManyArgs} args - Arguments to create many SubscriptionPackages.
     * @example
     * // Create many SubscriptionPackages
     * const subscriptionPackage = await prisma.subscriptionPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPackageCreateManyArgs>(args?: SelectSubset<T, SubscriptionPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPackages and returns the data saved in the database.
     * @param {SubscriptionPackageCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPackages.
     * @example
     * // Create many SubscriptionPackages
     * const subscriptionPackage = await prisma.subscriptionPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPackages and only return the `id`
     * const subscriptionPackageWithIdOnly = await prisma.subscriptionPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPackage.
     * @param {SubscriptionPackageDeleteArgs} args - Arguments to delete one SubscriptionPackage.
     * @example
     * // Delete one SubscriptionPackage
     * const SubscriptionPackage = await prisma.subscriptionPackage.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPackage
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPackageDeleteArgs>(args: SelectSubset<T, SubscriptionPackageDeleteArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPackage.
     * @param {SubscriptionPackageUpdateArgs} args - Arguments to update one SubscriptionPackage.
     * @example
     * // Update one SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPackageUpdateArgs>(args: SelectSubset<T, SubscriptionPackageUpdateArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPackages.
     * @param {SubscriptionPackageDeleteManyArgs} args - Arguments to filter SubscriptionPackages to delete.
     * @example
     * // Delete a few SubscriptionPackages
     * const { count } = await prisma.subscriptionPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPackageDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPackages
     * const subscriptionPackage = await prisma.subscriptionPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPackageUpdateManyArgs>(args: SelectSubset<T, SubscriptionPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPackages and returns the data updated in the database.
     * @param {SubscriptionPackageUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPackages.
     * @example
     * // Update many SubscriptionPackages
     * const subscriptionPackage = await prisma.subscriptionPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPackages and only return the `id`
     * const subscriptionPackageWithIdOnly = await prisma.subscriptionPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPackage.
     * @param {SubscriptionPackageUpsertArgs} args - Arguments to update or create a SubscriptionPackage.
     * @example
     * // Update or create a SubscriptionPackage
     * const subscriptionPackage = await prisma.subscriptionPackage.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPackage we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPackageUpsertArgs>(args: SelectSubset<T, SubscriptionPackageUpsertArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageCountArgs} args - Arguments to filter SubscriptionPackages to count.
     * @example
     * // Count the number of SubscriptionPackages
     * const count = await prisma.subscriptionPackage.count({
     *   where: {
     *     // ... the filter for the SubscriptionPackages we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPackageCountArgs>(
      args?: Subset<T, SubscriptionPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPackageAggregateArgs>(args: Subset<T, SubscriptionPackageAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPackageAggregateType<T>>

    /**
     * Group by SubscriptionPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPackageGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPackageGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPackage model
   */
  readonly fields: SubscriptionPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSubscriptions<T extends SubscriptionPackage$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPackage$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubscriptionPackage model
   */
  interface SubscriptionPackageFieldRefs {
    readonly id: FieldRef<"SubscriptionPackage", 'String'>
    readonly name: FieldRef<"SubscriptionPackage", 'SubscriptionTier'>
    readonly price: FieldRef<"SubscriptionPackage", 'Int'>
    readonly maxFolders: FieldRef<"SubscriptionPackage", 'Int'>
    readonly maxNestingLevel: FieldRef<"SubscriptionPackage", 'Int'>
    readonly allowedFileTypes: FieldRef<"SubscriptionPackage", 'FileType[]'>
    readonly maxFileSizeMB: FieldRef<"SubscriptionPackage", 'Float'>
    readonly totalFileLimit: FieldRef<"SubscriptionPackage", 'Int'>
    readonly filesPerFolder: FieldRef<"SubscriptionPackage", 'Int'>
    readonly isActive: FieldRef<"SubscriptionPackage", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPackage findUnique
   */
  export type SubscriptionPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPackage to fetch.
     */
    where: SubscriptionPackageWhereUniqueInput
  }

  /**
   * SubscriptionPackage findUniqueOrThrow
   */
  export type SubscriptionPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPackage to fetch.
     */
    where: SubscriptionPackageWhereUniqueInput
  }

  /**
   * SubscriptionPackage findFirst
   */
  export type SubscriptionPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPackage to fetch.
     */
    where?: SubscriptionPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPackages to fetch.
     */
    orderBy?: SubscriptionPackageOrderByWithRelationInput | SubscriptionPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPackages.
     */
    cursor?: SubscriptionPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPackages.
     */
    distinct?: SubscriptionPackageScalarFieldEnum | SubscriptionPackageScalarFieldEnum[]
  }

  /**
   * SubscriptionPackage findFirstOrThrow
   */
  export type SubscriptionPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPackage to fetch.
     */
    where?: SubscriptionPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPackages to fetch.
     */
    orderBy?: SubscriptionPackageOrderByWithRelationInput | SubscriptionPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPackages.
     */
    cursor?: SubscriptionPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPackages.
     */
    distinct?: SubscriptionPackageScalarFieldEnum | SubscriptionPackageScalarFieldEnum[]
  }

  /**
   * SubscriptionPackage findMany
   */
  export type SubscriptionPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPackages to fetch.
     */
    where?: SubscriptionPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPackages to fetch.
     */
    orderBy?: SubscriptionPackageOrderByWithRelationInput | SubscriptionPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPackages.
     */
    cursor?: SubscriptionPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPackages.
     */
    skip?: number
    distinct?: SubscriptionPackageScalarFieldEnum | SubscriptionPackageScalarFieldEnum[]
  }

  /**
   * SubscriptionPackage create
   */
  export type SubscriptionPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPackage.
     */
    data: XOR<SubscriptionPackageCreateInput, SubscriptionPackageUncheckedCreateInput>
  }

  /**
   * SubscriptionPackage createMany
   */
  export type SubscriptionPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPackages.
     */
    data: SubscriptionPackageCreateManyInput | SubscriptionPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPackage createManyAndReturn
   */
  export type SubscriptionPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPackages.
     */
    data: SubscriptionPackageCreateManyInput | SubscriptionPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPackage update
   */
  export type SubscriptionPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPackage.
     */
    data: XOR<SubscriptionPackageUpdateInput, SubscriptionPackageUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPackage to update.
     */
    where: SubscriptionPackageWhereUniqueInput
  }

  /**
   * SubscriptionPackage updateMany
   */
  export type SubscriptionPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPackages.
     */
    data: XOR<SubscriptionPackageUpdateManyMutationInput, SubscriptionPackageUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPackages to update
     */
    where?: SubscriptionPackageWhereInput
    /**
     * Limit how many SubscriptionPackages to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPackage updateManyAndReturn
   */
  export type SubscriptionPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPackages.
     */
    data: XOR<SubscriptionPackageUpdateManyMutationInput, SubscriptionPackageUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPackages to update
     */
    where?: SubscriptionPackageWhereInput
    /**
     * Limit how many SubscriptionPackages to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPackage upsert
   */
  export type SubscriptionPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPackage to update in case it exists.
     */
    where: SubscriptionPackageWhereUniqueInput
    /**
     * In case the SubscriptionPackage found by the `where` argument doesn't exist, create a new SubscriptionPackage with this data.
     */
    create: XOR<SubscriptionPackageCreateInput, SubscriptionPackageUncheckedCreateInput>
    /**
     * In case the SubscriptionPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPackageUpdateInput, SubscriptionPackageUncheckedUpdateInput>
  }

  /**
   * SubscriptionPackage delete
   */
  export type SubscriptionPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPackage to delete.
     */
    where: SubscriptionPackageWhereUniqueInput
  }

  /**
   * SubscriptionPackage deleteMany
   */
  export type SubscriptionPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPackages to delete
     */
    where?: SubscriptionPackageWhereInput
    /**
     * Limit how many SubscriptionPackages to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPackage.userSubscriptions
   */
  export type SubscriptionPackage$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPackage without action
   */
  export type SubscriptionPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPackage
     */
    select?: SubscriptionPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPackage
     */
    omit?: SubscriptionPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPackageInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    isEmailVerified: boolean | null
    emailVerifyToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    isEmailVerified: boolean | null
    emailVerifyToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    isEmailVerified: number
    emailVerifyToken: number
    passwordResetToken: number
    passwordResetExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    isEmailVerified?: true
    emailVerifyToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    isEmailVerified?: true
    emailVerifyToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    isEmailVerified?: true
    emailVerifyToken?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string | null
    isEmailVerified: boolean
    emailVerifyToken: string | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerifyToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    folders?: boolean | User$foldersArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerifyToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerifyToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerifyToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "isEmailVerified" | "emailVerifyToken" | "passwordResetToken" | "passwordResetExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    folders?: boolean | User$foldersArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      folders: Prisma.$FolderPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phone: string | null
      isEmailVerified: boolean
      emailVerifyToken: string | null
      passwordResetToken: string | null
      passwordResetExpiry: Date | null
      createdAt: Date
      updatedAt: Date
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
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    folders<T extends User$foldersArgs<ExtArgs> = {}>(args?: Subset<T, User$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerifyToken: FieldRef<"User", 'String'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User.folders
   */
  export type User$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
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
   * Model OtpLog
   */

  export type AggregateOtpLog = {
    _count: OtpLogCountAggregateOutputType | null
    _min: OtpLogMinAggregateOutputType | null
    _max: OtpLogMaxAggregateOutputType | null
  }

  export type OtpLogMinAggregateOutputType = {
    id: string | null
    email: string | null
    purpose: string | null
    sentAt: Date | null
    ip: string | null
    success: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpLogMaxAggregateOutputType = {
    id: string | null
    email: string | null
    purpose: string | null
    sentAt: Date | null
    ip: string | null
    success: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpLogCountAggregateOutputType = {
    id: number
    email: number
    purpose: number
    sentAt: number
    ip: number
    success: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtpLogMinAggregateInputType = {
    id?: true
    email?: true
    purpose?: true
    sentAt?: true
    ip?: true
    success?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpLogMaxAggregateInputType = {
    id?: true
    email?: true
    purpose?: true
    sentAt?: true
    ip?: true
    success?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpLogCountAggregateInputType = {
    id?: true
    email?: true
    purpose?: true
    sentAt?: true
    ip?: true
    success?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtpLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpLog to aggregate.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpLogs
    **/
    _count?: true | OtpLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpLogMaxAggregateInputType
  }

  export type GetOtpLogAggregateType<T extends OtpLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpLog[P]>
      : GetScalarType<T[P], AggregateOtpLog[P]>
  }




  export type OtpLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpLogWhereInput
    orderBy?: OtpLogOrderByWithAggregationInput | OtpLogOrderByWithAggregationInput[]
    by: OtpLogScalarFieldEnum[] | OtpLogScalarFieldEnum
    having?: OtpLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpLogCountAggregateInputType | true
    _min?: OtpLogMinAggregateInputType
    _max?: OtpLogMaxAggregateInputType
  }

  export type OtpLogGroupByOutputType = {
    id: string
    email: string
    purpose: string
    sentAt: Date
    ip: string | null
    success: boolean
    createdAt: Date
    updatedAt: Date
    _count: OtpLogCountAggregateOutputType | null
    _min: OtpLogMinAggregateOutputType | null
    _max: OtpLogMaxAggregateOutputType | null
  }

  type GetOtpLogGroupByPayload<T extends OtpLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpLogGroupByOutputType[P]>
            : GetScalarType<T[P], OtpLogGroupByOutputType[P]>
        }
      >
    >


  export type OtpLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    purpose?: boolean
    sentAt?: boolean
    ip?: boolean
    success?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otpLog"]>

  export type OtpLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    purpose?: boolean
    sentAt?: boolean
    ip?: boolean
    success?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otpLog"]>

  export type OtpLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    purpose?: boolean
    sentAt?: boolean
    ip?: boolean
    success?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otpLog"]>

  export type OtpLogSelectScalar = {
    id?: boolean
    email?: boolean
    purpose?: boolean
    sentAt?: boolean
    ip?: boolean
    success?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtpLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "purpose" | "sentAt" | "ip" | "success" | "createdAt" | "updatedAt", ExtArgs["result"]["otpLog"]>

  export type $OtpLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      purpose: string
      sentAt: Date
      ip: string | null
      success: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otpLog"]>
    composites: {}
  }

  type OtpLogGetPayload<S extends boolean | null | undefined | OtpLogDefaultArgs> = $Result.GetResult<Prisma.$OtpLogPayload, S>

  type OtpLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpLogCountAggregateInputType | true
    }

  export interface OtpLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpLog'], meta: { name: 'OtpLog' } }
    /**
     * Find zero or one OtpLog that matches the filter.
     * @param {OtpLogFindUniqueArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpLogFindUniqueArgs>(args: SelectSubset<T, OtpLogFindUniqueArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpLogFindUniqueOrThrowArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindFirstArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpLogFindFirstArgs>(args?: SelectSubset<T, OtpLogFindFirstArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindFirstOrThrowArgs} args - Arguments to find a OtpLog
     * @example
     * // Get one OtpLog
     * const otpLog = await prisma.otpLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpLogs
     * const otpLogs = await prisma.otpLog.findMany()
     * 
     * // Get first 10 OtpLogs
     * const otpLogs = await prisma.otpLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpLogWithIdOnly = await prisma.otpLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpLogFindManyArgs>(args?: SelectSubset<T, OtpLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpLog.
     * @param {OtpLogCreateArgs} args - Arguments to create a OtpLog.
     * @example
     * // Create one OtpLog
     * const OtpLog = await prisma.otpLog.create({
     *   data: {
     *     // ... data to create a OtpLog
     *   }
     * })
     * 
     */
    create<T extends OtpLogCreateArgs>(args: SelectSubset<T, OtpLogCreateArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpLogs.
     * @param {OtpLogCreateManyArgs} args - Arguments to create many OtpLogs.
     * @example
     * // Create many OtpLogs
     * const otpLog = await prisma.otpLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpLogCreateManyArgs>(args?: SelectSubset<T, OtpLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpLogs and returns the data saved in the database.
     * @param {OtpLogCreateManyAndReturnArgs} args - Arguments to create many OtpLogs.
     * @example
     * // Create many OtpLogs
     * const otpLog = await prisma.otpLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpLogs and only return the `id`
     * const otpLogWithIdOnly = await prisma.otpLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpLog.
     * @param {OtpLogDeleteArgs} args - Arguments to delete one OtpLog.
     * @example
     * // Delete one OtpLog
     * const OtpLog = await prisma.otpLog.delete({
     *   where: {
     *     // ... filter to delete one OtpLog
     *   }
     * })
     * 
     */
    delete<T extends OtpLogDeleteArgs>(args: SelectSubset<T, OtpLogDeleteArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpLog.
     * @param {OtpLogUpdateArgs} args - Arguments to update one OtpLog.
     * @example
     * // Update one OtpLog
     * const otpLog = await prisma.otpLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpLogUpdateArgs>(args: SelectSubset<T, OtpLogUpdateArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpLogs.
     * @param {OtpLogDeleteManyArgs} args - Arguments to filter OtpLogs to delete.
     * @example
     * // Delete a few OtpLogs
     * const { count } = await prisma.otpLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpLogDeleteManyArgs>(args?: SelectSubset<T, OtpLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpLogs
     * const otpLog = await prisma.otpLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpLogUpdateManyArgs>(args: SelectSubset<T, OtpLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpLogs and returns the data updated in the database.
     * @param {OtpLogUpdateManyAndReturnArgs} args - Arguments to update many OtpLogs.
     * @example
     * // Update many OtpLogs
     * const otpLog = await prisma.otpLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpLogs and only return the `id`
     * const otpLogWithIdOnly = await prisma.otpLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpLog.
     * @param {OtpLogUpsertArgs} args - Arguments to update or create a OtpLog.
     * @example
     * // Update or create a OtpLog
     * const otpLog = await prisma.otpLog.upsert({
     *   create: {
     *     // ... data to create a OtpLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpLog we want to update
     *   }
     * })
     */
    upsert<T extends OtpLogUpsertArgs>(args: SelectSubset<T, OtpLogUpsertArgs<ExtArgs>>): Prisma__OtpLogClient<$Result.GetResult<Prisma.$OtpLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogCountArgs} args - Arguments to filter OtpLogs to count.
     * @example
     * // Count the number of OtpLogs
     * const count = await prisma.otpLog.count({
     *   where: {
     *     // ... the filter for the OtpLogs we want to count
     *   }
     * })
    **/
    count<T extends OtpLogCountArgs>(
      args?: Subset<T, OtpLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpLogAggregateArgs>(args: Subset<T, OtpLogAggregateArgs>): Prisma.PrismaPromise<GetOtpLogAggregateType<T>>

    /**
     * Group by OtpLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpLogGroupByArgs} args - Group by arguments.
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
      T extends OtpLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpLogGroupByArgs['orderBy'] }
        : { orderBy?: OtpLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpLog model
   */
  readonly fields: OtpLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OtpLog model
   */
  interface OtpLogFieldRefs {
    readonly id: FieldRef<"OtpLog", 'String'>
    readonly email: FieldRef<"OtpLog", 'String'>
    readonly purpose: FieldRef<"OtpLog", 'String'>
    readonly sentAt: FieldRef<"OtpLog", 'DateTime'>
    readonly ip: FieldRef<"OtpLog", 'String'>
    readonly success: FieldRef<"OtpLog", 'Boolean'>
    readonly createdAt: FieldRef<"OtpLog", 'DateTime'>
    readonly updatedAt: FieldRef<"OtpLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpLog findUnique
   */
  export type OtpLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog findUniqueOrThrow
   */
  export type OtpLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog findFirst
   */
  export type OtpLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpLogs.
     */
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog findFirstOrThrow
   */
  export type OtpLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter, which OtpLog to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpLogs.
     */
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog findMany
   */
  export type OtpLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter, which OtpLogs to fetch.
     */
    where?: OtpLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpLogs to fetch.
     */
    orderBy?: OtpLogOrderByWithRelationInput | OtpLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpLogs.
     */
    cursor?: OtpLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpLogs.
     */
    skip?: number
    distinct?: OtpLogScalarFieldEnum | OtpLogScalarFieldEnum[]
  }

  /**
   * OtpLog create
   */
  export type OtpLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * The data needed to create a OtpLog.
     */
    data: XOR<OtpLogCreateInput, OtpLogUncheckedCreateInput>
  }

  /**
   * OtpLog createMany
   */
  export type OtpLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpLogs.
     */
    data: OtpLogCreateManyInput | OtpLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpLog createManyAndReturn
   */
  export type OtpLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * The data used to create many OtpLogs.
     */
    data: OtpLogCreateManyInput | OtpLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpLog update
   */
  export type OtpLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * The data needed to update a OtpLog.
     */
    data: XOR<OtpLogUpdateInput, OtpLogUncheckedUpdateInput>
    /**
     * Choose, which OtpLog to update.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog updateMany
   */
  export type OtpLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpLogs.
     */
    data: XOR<OtpLogUpdateManyMutationInput, OtpLogUncheckedUpdateManyInput>
    /**
     * Filter which OtpLogs to update
     */
    where?: OtpLogWhereInput
    /**
     * Limit how many OtpLogs to update.
     */
    limit?: number
  }

  /**
   * OtpLog updateManyAndReturn
   */
  export type OtpLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * The data used to update OtpLogs.
     */
    data: XOR<OtpLogUpdateManyMutationInput, OtpLogUncheckedUpdateManyInput>
    /**
     * Filter which OtpLogs to update
     */
    where?: OtpLogWhereInput
    /**
     * Limit how many OtpLogs to update.
     */
    limit?: number
  }

  /**
   * OtpLog upsert
   */
  export type OtpLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * The filter to search for the OtpLog to update in case it exists.
     */
    where: OtpLogWhereUniqueInput
    /**
     * In case the OtpLog found by the `where` argument doesn't exist, create a new OtpLog with this data.
     */
    create: XOR<OtpLogCreateInput, OtpLogUncheckedCreateInput>
    /**
     * In case the OtpLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpLogUpdateInput, OtpLogUncheckedUpdateInput>
  }

  /**
   * OtpLog delete
   */
  export type OtpLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
    /**
     * Filter which OtpLog to delete.
     */
    where: OtpLogWhereUniqueInput
  }

  /**
   * OtpLog deleteMany
   */
  export type OtpLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpLogs to delete
     */
    where?: OtpLogWhereInput
    /**
     * Limit how many OtpLogs to delete.
     */
    limit?: number
  }

  /**
   * OtpLog without action
   */
  export type OtpLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpLog
     */
    select?: OtpLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpLog
     */
    omit?: OtpLogOmit<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    startDate: number
    endDate: number
    isActive: number
    _all: number
  }


  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    startDate?: true
    endDate?: true
    isActive?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    packageId: string
    startDate: Date
    endDate: Date | null
    isActive: boolean
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "startDate" | "endDate" | "isActive", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | SubscriptionPackageDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$SubscriptionPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string
      startDate: Date
      endDate: Date | null
      isActive: boolean
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends SubscriptionPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPackageDefaultArgs<ExtArgs>>): Prisma__SubscriptionPackageClient<$Result.GetResult<Prisma.$SubscriptionPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly packageId: FieldRef<"UserSubscription", 'String'>
    readonly startDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly endDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly isActive: FieldRef<"UserSubscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderAvgAggregateOutputType = {
    depth: number | null
  }

  export type FolderSumAggregateOutputType = {
    depth: number | null
  }

  export type FolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    parentId: string | null
    depth: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    parentId: string | null
    depth: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    parentId: number
    depth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FolderAvgAggregateInputType = {
    depth?: true
  }

  export type FolderSumAggregateInputType = {
    depth?: true
  }

  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    parentId?: true
    depth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    parentId?: true
    depth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    parentId?: true
    depth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _avg?: FolderAvgAggregateInputType
    _sum?: FolderSumAggregateInputType
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: string
    name: string
    userId: string
    parentId: string | null
    depth: number
    createdAt: Date
    updatedAt: Date
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    parentId?: boolean
    depth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    children?: boolean | Folder$childrenArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    parentId?: boolean
    depth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    parentId?: boolean
    depth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    parentId?: boolean
    depth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "parentId" | "depth" | "createdAt" | "updatedAt", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
    children?: boolean | Folder$childrenArgs<ExtArgs>
    files?: boolean | Folder$filesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Folder$parentArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$FolderPayload<ExtArgs> | null
      children: Prisma.$FolderPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      parentId: string | null
      depth: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
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
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
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
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Folder$parentArgs<ExtArgs> = {}>(args?: Subset<T, Folder$parentArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Folder$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Folder$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Folder$filesArgs<ExtArgs> = {}>(args?: Subset<T, Folder$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'String'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly userId: FieldRef<"Folder", 'String'>
    readonly parentId: FieldRef<"Folder", 'String'>
    readonly depth: FieldRef<"Folder", 'Int'>
    readonly createdAt: FieldRef<"Folder", 'DateTime'>
    readonly updatedAt: FieldRef<"Folder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.parent
   */
  export type Folder$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * Folder.children
   */
  export type Folder$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder.files
   */
  export type Folder$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    sizeMB: number | null
  }

  export type FileSumAggregateOutputType = {
    sizeMB: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    userId: string | null
    folderId: string | null
    fileType: $Enums.FileType | null
    mimeType: string | null
    sizeMB: number | null
    storageKey: string | null
    storageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    userId: string | null
    folderId: string | null
    fileType: $Enums.FileType | null
    mimeType: string | null
    sizeMB: number | null
    storageKey: string | null
    storageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    originalName: number
    userId: number
    folderId: number
    fileType: number
    mimeType: number
    sizeMB: number
    storageKey: number
    storageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    sizeMB?: true
  }

  export type FileSumAggregateInputType = {
    sizeMB?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    userId?: true
    folderId?: true
    fileType?: true
    mimeType?: true
    sizeMB?: true
    storageKey?: true
    storageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    userId?: true
    folderId?: true
    fileType?: true
    mimeType?: true
    sizeMB?: true
    storageKey?: true
    storageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    userId?: true
    folderId?: true
    fileType?: true
    mimeType?: true
    sizeMB?: true
    storageKey?: true
    storageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    name: string
    originalName: string
    userId: string
    folderId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    userId?: boolean
    folderId?: boolean
    fileType?: boolean
    mimeType?: boolean
    sizeMB?: boolean
    storageKey?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    userId?: boolean
    folderId?: boolean
    fileType?: boolean
    mimeType?: boolean
    sizeMB?: boolean
    storageKey?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    userId?: boolean
    folderId?: boolean
    fileType?: boolean
    mimeType?: boolean
    sizeMB?: boolean
    storageKey?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    name?: boolean
    originalName?: boolean
    userId?: boolean
    folderId?: boolean
    fileType?: boolean
    mimeType?: boolean
    sizeMB?: boolean
    storageKey?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "originalName" | "userId" | "folderId" | "fileType" | "mimeType" | "sizeMB" | "storageKey" | "storageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      folder: Prisma.$FolderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      originalName: string
      userId: string
      folderId: string
      fileType: $Enums.FileType
      mimeType: string
      sizeMB: number
      storageKey: string
      storageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    folder<T extends FolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolderDefaultArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly name: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly userId: FieldRef<"File", 'String'>
    readonly folderId: FieldRef<"File", 'String'>
    readonly fileType: FieldRef<"File", 'FileType'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly sizeMB: FieldRef<"File", 'Float'>
    readonly storageKey: FieldRef<"File", 'String'>
    readonly storageUrl: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SubscriptionPackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    maxFolders: 'maxFolders',
    maxNestingLevel: 'maxNestingLevel',
    allowedFileTypes: 'allowedFileTypes',
    maxFileSizeMB: 'maxFileSizeMB',
    totalFileLimit: 'totalFileLimit',
    filesPerFolder: 'filesPerFolder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPackageScalarFieldEnum = (typeof SubscriptionPackageScalarFieldEnum)[keyof typeof SubscriptionPackageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    isEmailVerified: 'isEmailVerified',
    emailVerifyToken: 'emailVerifyToken',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpiry: 'passwordResetExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpLogScalarFieldEnum: {
    id: 'id',
    email: 'email',
    purpose: 'purpose',
    sentAt: 'sentAt',
    ip: 'ip',
    success: 'success',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtpLogScalarFieldEnum = (typeof OtpLogScalarFieldEnum)[keyof typeof OtpLogScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    parentId: 'parentId',
    depth: 'depth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    originalName: 'originalName',
    userId: 'userId',
    folderId: 'folderId',
    fileType: 'fileType',
    mimeType: 'mimeType',
    sizeMB: 'sizeMB',
    storageKey: 'storageKey',
    storageUrl: 'storageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionTier'
   */
  export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>
    


  /**
   * Reference to a field of type 'SubscriptionTier[]'
   */
  export type ListEnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type SubscriptionPackageWhereInput = {
    AND?: SubscriptionPackageWhereInput | SubscriptionPackageWhereInput[]
    OR?: SubscriptionPackageWhereInput[]
    NOT?: SubscriptionPackageWhereInput | SubscriptionPackageWhereInput[]
    id?: StringFilter<"SubscriptionPackage"> | string
    name?: EnumSubscriptionTierFilter<"SubscriptionPackage"> | $Enums.SubscriptionTier
    price?: IntFilter<"SubscriptionPackage"> | number
    maxFolders?: IntFilter<"SubscriptionPackage"> | number
    maxNestingLevel?: IntFilter<"SubscriptionPackage"> | number
    allowedFileTypes?: EnumFileTypeNullableListFilter<"SubscriptionPackage">
    maxFileSizeMB?: FloatFilter<"SubscriptionPackage"> | number
    totalFileLimit?: IntFilter<"SubscriptionPackage"> | number
    filesPerFolder?: IntFilter<"SubscriptionPackage"> | number
    isActive?: BoolFilter<"SubscriptionPackage"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPackage"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPackage"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
  }

  export type SubscriptionPackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    allowedFileTypes?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.SubscriptionTier
    AND?: SubscriptionPackageWhereInput | SubscriptionPackageWhereInput[]
    OR?: SubscriptionPackageWhereInput[]
    NOT?: SubscriptionPackageWhereInput | SubscriptionPackageWhereInput[]
    price?: IntFilter<"SubscriptionPackage"> | number
    maxFolders?: IntFilter<"SubscriptionPackage"> | number
    maxNestingLevel?: IntFilter<"SubscriptionPackage"> | number
    allowedFileTypes?: EnumFileTypeNullableListFilter<"SubscriptionPackage">
    maxFileSizeMB?: FloatFilter<"SubscriptionPackage"> | number
    totalFileLimit?: IntFilter<"SubscriptionPackage"> | number
    filesPerFolder?: IntFilter<"SubscriptionPackage"> | number
    isActive?: BoolFilter<"SubscriptionPackage"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPackage"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPackage"> | Date | string
    userSubscriptions?: UserSubscriptionListRelationFilter
  }, "id" | "name">

  export type SubscriptionPackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    allowedFileTypes?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPackageCountOrderByAggregateInput
    _avg?: SubscriptionPackageAvgOrderByAggregateInput
    _max?: SubscriptionPackageMaxOrderByAggregateInput
    _min?: SubscriptionPackageMinOrderByAggregateInput
    _sum?: SubscriptionPackageSumOrderByAggregateInput
  }

  export type SubscriptionPackageScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPackageScalarWhereWithAggregatesInput | SubscriptionPackageScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPackageScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPackageScalarWhereWithAggregatesInput | SubscriptionPackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPackage"> | string
    name?: EnumSubscriptionTierWithAggregatesFilter<"SubscriptionPackage"> | $Enums.SubscriptionTier
    price?: IntWithAggregatesFilter<"SubscriptionPackage"> | number
    maxFolders?: IntWithAggregatesFilter<"SubscriptionPackage"> | number
    maxNestingLevel?: IntWithAggregatesFilter<"SubscriptionPackage"> | number
    allowedFileTypes?: EnumFileTypeNullableListFilter<"SubscriptionPackage">
    maxFileSizeMB?: FloatWithAggregatesFilter<"SubscriptionPackage"> | number
    totalFileLimit?: IntWithAggregatesFilter<"SubscriptionPackage"> | number
    filesPerFolder?: IntWithAggregatesFilter<"SubscriptionPackage"> | number
    isActive?: BoolWithAggregatesFilter<"SubscriptionPackage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPackage"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerifyToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscriptions?: UserSubscriptionListRelationFilter
    folders?: FolderListRelationFilter
    files?: FileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerifyToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: UserSubscriptionOrderByRelationAggregateInput
    folders?: FolderOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerifyToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscriptions?: UserSubscriptionListRelationFilter
    folders?: FolderListRelationFilter
    files?: FileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerifyToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpLogWhereInput = {
    AND?: OtpLogWhereInput | OtpLogWhereInput[]
    OR?: OtpLogWhereInput[]
    NOT?: OtpLogWhereInput | OtpLogWhereInput[]
    id?: StringFilter<"OtpLog"> | string
    email?: StringFilter<"OtpLog"> | string
    purpose?: StringFilter<"OtpLog"> | string
    sentAt?: DateTimeFilter<"OtpLog"> | Date | string
    ip?: StringNullableFilter<"OtpLog"> | string | null
    success?: BoolFilter<"OtpLog"> | boolean
    createdAt?: DateTimeFilter<"OtpLog"> | Date | string
    updatedAt?: DateTimeFilter<"OtpLog"> | Date | string
  }

  export type OtpLogOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    sentAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpLogWhereInput | OtpLogWhereInput[]
    OR?: OtpLogWhereInput[]
    NOT?: OtpLogWhereInput | OtpLogWhereInput[]
    email?: StringFilter<"OtpLog"> | string
    purpose?: StringFilter<"OtpLog"> | string
    sentAt?: DateTimeFilter<"OtpLog"> | Date | string
    ip?: StringNullableFilter<"OtpLog"> | string | null
    success?: BoolFilter<"OtpLog"> | boolean
    createdAt?: DateTimeFilter<"OtpLog"> | Date | string
    updatedAt?: DateTimeFilter<"OtpLog"> | Date | string
  }, "id">

  export type OtpLogOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    sentAt?: SortOrder
    ip?: SortOrderInput | SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtpLogCountOrderByAggregateInput
    _max?: OtpLogMaxOrderByAggregateInput
    _min?: OtpLogMinOrderByAggregateInput
  }

  export type OtpLogScalarWhereWithAggregatesInput = {
    AND?: OtpLogScalarWhereWithAggregatesInput | OtpLogScalarWhereWithAggregatesInput[]
    OR?: OtpLogScalarWhereWithAggregatesInput[]
    NOT?: OtpLogScalarWhereWithAggregatesInput | OtpLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpLog"> | string
    email?: StringWithAggregatesFilter<"OtpLog"> | string
    purpose?: StringWithAggregatesFilter<"OtpLog"> | string
    sentAt?: DateTimeWithAggregatesFilter<"OtpLog"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"OtpLog"> | string | null
    success?: BoolWithAggregatesFilter<"OtpLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OtpLog"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    packageId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    isActive?: BoolFilter<"UserSubscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<SubscriptionPackageScalarRelationFilter, SubscriptionPackageWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    package?: SubscriptionPackageOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: StringFilter<"UserSubscription"> | string
    packageId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    isActive?: BoolFilter<"UserSubscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<SubscriptionPackageScalarRelationFilter, SubscriptionPackageWhereInput>
  }, "id">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    packageId?: StringWithAggregatesFilter<"UserSubscription"> | string
    startDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"UserSubscription"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    userId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    depth?: IntFilter<"Folder"> | number
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    children?: FolderListRelationFilter
    files?: FileListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    depth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    parent?: FolderOrderByWithRelationInput
    children?: FolderOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_parentId_name?: FolderUserIdParentIdNameCompoundUniqueInput
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    userId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    depth?: IntFilter<"Folder"> | number
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    children?: FolderListRelationFilter
    files?: FileListRelationFilter
  }, "id" | "userId_parentId_name">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    depth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _avg?: FolderAvgOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
    _sum?: FolderSumOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folder"> | string
    name?: StringWithAggregatesFilter<"Folder"> | string
    userId?: StringWithAggregatesFilter<"Folder"> | string
    parentId?: StringNullableWithAggregatesFilter<"Folder"> | string | null
    depth?: IntWithAggregatesFilter<"Folder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    name?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    userId?: StringFilter<"File"> | string
    folderId?: StringFilter<"File"> | string
    fileType?: EnumFileTypeFilter<"File"> | $Enums.FileType
    mimeType?: StringFilter<"File"> | string
    sizeMB?: FloatFilter<"File"> | number
    storageKey?: StringFilter<"File"> | string
    storageUrl?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    userId?: SortOrder
    folderId?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
    sizeMB?: SortOrder
    storageKey?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    folder?: FolderOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    userId?: StringFilter<"File"> | string
    folderId?: StringFilter<"File"> | string
    fileType?: EnumFileTypeFilter<"File"> | $Enums.FileType
    mimeType?: StringFilter<"File"> | string
    sizeMB?: FloatFilter<"File"> | number
    storageKey?: StringFilter<"File"> | string
    storageUrl?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    userId?: SortOrder
    folderId?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
    sizeMB?: SortOrder
    storageKey?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    name?: StringWithAggregatesFilter<"File"> | string
    originalName?: StringWithAggregatesFilter<"File"> | string
    userId?: StringWithAggregatesFilter<"File"> | string
    folderId?: StringWithAggregatesFilter<"File"> | string
    fileType?: EnumFileTypeWithAggregatesFilter<"File"> | $Enums.FileType
    mimeType?: StringWithAggregatesFilter<"File"> | string
    sizeMB?: FloatWithAggregatesFilter<"File"> | number
    storageKey?: StringWithAggregatesFilter<"File"> | string
    storageUrl?: StringWithAggregatesFilter<"File"> | string
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPackageCreateInput = {
    id?: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes?: SubscriptionPackageCreateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutPackageInput
  }

  export type SubscriptionPackageUncheckedCreateInput = {
    id?: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes?: SubscriptionPackageCreateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type SubscriptionPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUpdateManyWithoutPackageNestedInput
  }

  export type SubscriptionPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type SubscriptionPackageCreateManyInput = {
    id?: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes?: SubscriptionPackageCreateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    folders?: FolderCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    folders?: FolderUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpLogCreateInput = {
    id?: string
    email: string
    purpose: string
    sentAt?: Date | string
    ip?: string | null
    success: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpLogUncheckedCreateInput = {
    id?: string
    email: string
    purpose: string
    sentAt?: Date | string
    ip?: string | null
    success: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpLogCreateManyInput = {
    id?: string
    email: string
    purpose: string
    sentAt?: Date | string
    ip?: string | null
    success: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutSubscriptionsInput
    package: SubscriptionPackageCreateNestedOneWithoutUserSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    packageId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    package?: SubscriptionPackageUpdateOneRequiredWithoutUserSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    packageId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FolderCreateInput = {
    id?: string
    name: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: string
    name: string
    userId: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    name: string
    originalName: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    folder: FolderCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    name: string
    originalName: string
    userId: string
    folderId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    folder?: FolderUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    name: string
    originalName: string
    userId: string
    folderId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
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

  export type EnumFileTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    allowedFileTypes?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPackageAvgOrderByAggregateInput = {
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
  }

  export type SubscriptionPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPackageSumOrderByAggregateInput = {
    price?: SortOrder
    maxFolders?: SortOrder
    maxNestingLevel?: SortOrder
    maxFileSizeMB?: SortOrder
    totalFileLimit?: SortOrder
    filesPerFolder?: SortOrder
  }

  export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifyToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifyToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifyToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OtpLogCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    sentAt?: SortOrder
    ip?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpLogMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    sentAt?: SortOrder
    ip?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpLogMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
    sentAt?: SortOrder
    ip?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionPackageScalarRelationFilter = {
    is?: SubscriptionPackageWhereInput
    isNot?: SubscriptionPackageWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null
    isNot?: FolderWhereInput | null
  }

  export type FolderUserIdParentIdNameCompoundUniqueInput = {
    userId: string
    parentId: string
    name: string
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderAvgOrderByAggregateInput = {
    depth?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderSumOrderByAggregateInput = {
    depth?: SortOrder
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type FolderScalarRelationFilter = {
    is?: FolderWhereInput
    isNot?: FolderWhereInput
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    userId?: SortOrder
    folderId?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
    sizeMB?: SortOrder
    storageKey?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    sizeMB?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    userId?: SortOrder
    folderId?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
    sizeMB?: SortOrder
    storageKey?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    userId?: SortOrder
    folderId?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
    sizeMB?: SortOrder
    storageKey?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    sizeMB?: SortOrder
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionPackageCreateallowedFileTypesInput = {
    set: $Enums.FileType[]
  }

  export type UserSubscriptionCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput> | UserSubscriptionCreateWithoutPackageInput[] | UserSubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPackageInput | UserSubscriptionCreateOrConnectWithoutPackageInput[]
    createMany?: UserSubscriptionCreateManyPackageInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput> | UserSubscriptionCreateWithoutPackageInput[] | UserSubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPackageInput | UserSubscriptionCreateOrConnectWithoutPackageInput[]
    createMany?: UserSubscriptionCreateManyPackageInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionPackageUpdateallowedFileTypesInput = {
    set?: $Enums.FileType[]
    push?: $Enums.FileType | $Enums.FileType[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserSubscriptionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput> | UserSubscriptionCreateWithoutPackageInput[] | UserSubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPackageInput | UserSubscriptionCreateOrConnectWithoutPackageInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPackageInput | UserSubscriptionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserSubscriptionCreateManyPackageInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPackageInput | UserSubscriptionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPackageInput | UserSubscriptionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput> | UserSubscriptionCreateWithoutPackageInput[] | UserSubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPackageInput | UserSubscriptionCreateOrConnectWithoutPackageInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPackageInput | UserSubscriptionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserSubscriptionCreateManyPackageInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPackageInput | UserSubscriptionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPackageInput | UserSubscriptionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type FolderCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type FolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionPackageCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<SubscriptionPackageCreateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionPackageCreateOrConnectWithoutUserSubscriptionsInput
    connect?: SubscriptionPackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPackageUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPackageCreateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: SubscriptionPackageCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: SubscriptionPackageUpsertWithoutUserSubscriptionsInput
    connect?: SubscriptionPackageWhereUniqueInput
    update?: XOR<XOR<SubscriptionPackageUpdateToOneWithWhereWithoutUserSubscriptionsInput, SubscriptionPackageUpdateWithoutUserSubscriptionsInput>, SubscriptionPackageUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutFoldersInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutChildrenInput = {
    create?: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput
    connect?: FolderWhereUniqueInput
  }

  export type FolderCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutFolderInput = {
    create?: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput> | FileCreateWithoutFolderInput[] | FileUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFolderInput | FileCreateOrConnectWithoutFolderInput[]
    createMany?: FileCreateManyFolderInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput> | FileCreateWithoutFolderInput[] | FileUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFolderInput | FileCreateOrConnectWithoutFolderInput[]
    createMany?: FileCreateManyFolderInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFoldersNestedInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    upsert?: UserUpsertWithoutFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoldersInput, UserUpdateWithoutFoldersInput>, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type FolderUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FolderCreateOrConnectWithoutChildrenInput
    upsert?: FolderUpsertWithoutChildrenInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutChildrenInput, FolderUpdateWithoutChildrenInput>, FolderUncheckedUpdateWithoutChildrenInput>
  }

  export type FolderUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput> | FileCreateWithoutFolderInput[] | FileUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFolderInput | FileCreateOrConnectWithoutFolderInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutFolderInput | FileUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FileCreateManyFolderInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutFolderInput | FileUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FileUpdateManyWithWhereWithoutFolderInput | FileUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput> | FolderCreateWithoutParentInput[] | FolderUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutParentInput | FolderCreateOrConnectWithoutParentInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutParentInput | FolderUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FolderCreateManyParentInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutParentInput | FolderUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutParentInput | FolderUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput> | FileCreateWithoutFolderInput[] | FileUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFolderInput | FileCreateOrConnectWithoutFolderInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutFolderInput | FileUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FileCreateManyFolderInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutFolderInput | FileUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FileUpdateManyWithWhereWithoutFolderInput | FileUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutFilesInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    connect?: FolderWhereUniqueInput
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type FolderUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFilesInput
    upsert?: FolderUpsertWithoutFilesInput
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutFilesInput, FolderUpdateWithoutFilesInput>, FolderUncheckedUpdateWithoutFilesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type UserSubscriptionCreateWithoutPackageInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type UserSubscriptionCreateOrConnectWithoutPackageInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput>
  }

  export type UserSubscriptionCreateManyPackageInputEnvelope = {
    data: UserSubscriptionCreateManyPackageInput | UserSubscriptionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutPackageInput, UserSubscriptionUncheckedUpdateWithoutPackageInput>
    create: XOR<UserSubscriptionCreateWithoutPackageInput, UserSubscriptionUncheckedCreateWithoutPackageInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutPackageInput, UserSubscriptionUncheckedUpdateWithoutPackageInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutPackageInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    packageId?: StringFilter<"UserSubscription"> | string
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    isActive?: BoolFilter<"UserSubscription"> | boolean
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    package: SubscriptionPackageCreateNestedOneWithoutUserSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FolderCreateWithoutUserInput = {
    id?: string
    name: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutUserInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderCreateManyUserInputEnvelope = {
    data: FolderCreateManyUserInput | FolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUserInput = {
    id?: string
    name: string
    originalName: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    folder: FolderCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    originalName: string
    folderId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileCreateManyUserInputEnvelope = {
    data: FileCreateManyUserInput | FileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type FolderUpsertWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
  }

  export type FolderUpdateManyWithWhereWithoutUserInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutUserInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    userId?: StringFilter<"Folder"> | string
    parentId?: StringNullableFilter<"Folder"> | string | null
    depth?: IntFilter<"Folder"> | number
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateManyWithWhereWithoutUserInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutUserInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: StringFilter<"File"> | string
    name?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    userId?: StringFilter<"File"> | string
    folderId?: StringFilter<"File"> | string
    fileType?: EnumFileTypeFilter<"File"> | $Enums.FileType
    mimeType?: StringFilter<"File"> | string
    sizeMB?: FloatFilter<"File"> | number
    storageKey?: StringFilter<"File"> | string
    storageUrl?: StringFilter<"File"> | string
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type SubscriptionPackageCreateWithoutUserSubscriptionsInput = {
    id?: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes?: SubscriptionPackageCreateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPackageUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: string
    name: $Enums.SubscriptionTier
    price: number
    maxFolders: number
    maxNestingLevel: number
    allowedFileTypes?: SubscriptionPackageCreateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB: number
    totalFileLimit: number
    filesPerFolder: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPackageCreateOrConnectWithoutUserSubscriptionsInput = {
    where: SubscriptionPackageWhereUniqueInput
    create: XOR<SubscriptionPackageCreateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionPackageUpsertWithoutUserSubscriptionsInput = {
    update: XOR<SubscriptionPackageUpdateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<SubscriptionPackageCreateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedCreateWithoutUserSubscriptionsInput>
    where?: SubscriptionPackageWhereInput
  }

  export type SubscriptionPackageUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: SubscriptionPackageWhereInput
    data: XOR<SubscriptionPackageUpdateWithoutUserSubscriptionsInput, SubscriptionPackageUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionPackageUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPackageUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    price?: IntFieldUpdateOperationsInput | number
    maxFolders?: IntFieldUpdateOperationsInput | number
    maxNestingLevel?: IntFieldUpdateOperationsInput | number
    allowedFileTypes?: SubscriptionPackageUpdateallowedFileTypesInput | $Enums.FileType[]
    maxFileSizeMB?: FloatFieldUpdateOperationsInput | number
    totalFileLimit?: IntFieldUpdateOperationsInput | number
    filesPerFolder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFoldersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoldersInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
  }

  export type FolderCreateWithoutChildrenInput = {
    id?: string
    name: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    files?: FileCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    userId: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: FileUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutChildrenInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
  }

  export type FolderCreateWithoutParentInput = {
    id?: string
    name: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
    children?: FolderCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    userId: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutParentInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderCreateManyParentInputEnvelope = {
    data: FolderCreateManyParentInput | FolderCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutFolderInput = {
    id?: string
    name: string
    originalName: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutFolderInput = {
    id?: string
    name: string
    originalName: string
    userId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutFolderInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput>
  }

  export type FileCreateManyFolderInputEnvelope = {
    data: FileCreateManyFolderInput | FileCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoldersInput = {
    update: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type UserUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderUpsertWithoutChildrenInput = {
    update: XOR<FolderUpdateWithoutChildrenInput, FolderUncheckedUpdateWithoutChildrenInput>
    create: XOR<FolderCreateWithoutChildrenInput, FolderUncheckedCreateWithoutChildrenInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutChildrenInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutChildrenInput, FolderUncheckedUpdateWithoutChildrenInput>
  }

  export type FolderUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    files?: FileUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUpsertWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
    create: XOR<FolderCreateWithoutParentInput, FolderUncheckedCreateWithoutParentInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutParentInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutParentInput, FolderUncheckedUpdateWithoutParentInput>
  }

  export type FolderUpdateManyWithWhereWithoutParentInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutParentInput>
  }

  export type FileUpsertWithWhereUniqueWithoutFolderInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutFolderInput, FileUncheckedUpdateWithoutFolderInput>
    create: XOR<FileCreateWithoutFolderInput, FileUncheckedCreateWithoutFolderInput>
  }

  export type FileUpdateWithWhereUniqueWithoutFolderInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutFolderInput, FileUncheckedUpdateWithoutFolderInput>
  }

  export type FileUpdateManyWithWhereWithoutFolderInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFolderInput>
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionCreateNestedManyWithoutUserInput
    folders?: FolderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    isEmailVerified?: boolean
    emailVerifyToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type FolderCreateWithoutFilesInput = {
    id?: string
    name: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
    parent?: FolderCreateNestedOneWithoutChildrenInput
    children?: FolderCreateNestedManyWithoutParentInput
  }

  export type FolderUncheckedCreateWithoutFilesInput = {
    id?: string
    name: string
    userId: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: FolderUncheckedCreateNestedManyWithoutParentInput
  }

  export type FolderCreateOrConnectWithoutFilesInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUpdateManyWithoutUserNestedInput
    folders?: FolderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderUpsertWithoutFilesInput = {
    update: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
    create: XOR<FolderCreateWithoutFilesInput, FolderUncheckedCreateWithoutFilesInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutFilesInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutFilesInput, FolderUncheckedUpdateWithoutFilesInput>
  }

  export type FolderUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
  }

  export type FolderUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserSubscriptionCreateManyPackageInput = {
    id?: string
    userId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type UserSubscriptionUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSubscriptionCreateManyUserInput = {
    id?: string
    packageId: string
    startDate?: Date | string
    endDate?: Date | string | null
    isActive?: boolean
  }

  export type FolderCreateManyUserInput = {
    id?: string
    name: string
    parentId?: string | null
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateManyUserInput = {
    id?: string
    name: string
    originalName: string
    folderId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    package?: SubscriptionPackageUpdateOneRequiredWithoutUserSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FolderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: FolderUpdateOneWithoutChildrenNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    folderId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderCreateManyParentInput = {
    id?: string
    name: string
    userId: string
    depth?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateManyFolderInput = {
    id?: string
    name: string
    originalName: string
    userId: string
    fileType: $Enums.FileType
    mimeType: string
    sizeMB: number
    storageKey: string
    storageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    children?: FolderUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FolderUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeMB?: FloatFieldUpdateOperationsInput | number
    storageKey?: StringFieldUpdateOperationsInput | string
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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