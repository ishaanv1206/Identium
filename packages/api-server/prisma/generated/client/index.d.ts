
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
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Personality
 * 
 */
export type Personality = $Result.DefaultSelection<Prisma.$PersonalityPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model Fact
 * 
 */
export type Fact = $Result.DefaultSelection<Prisma.$FactPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model AgencyMember
 * 
 */
export type AgencyMember = $Result.DefaultSelection<Prisma.$AgencyMemberPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Endorsement
 * 
 */
export type Endorsement = $Result.DefaultSelection<Prisma.$EndorsementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agents
 * const agents = await prisma.agent.findMany()
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
   * // Fetch zero or more Agents
   * const agents = await prisma.agent.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personality`: Exposes CRUD operations for the **Personality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personalities
    * const personalities = await prisma.personality.findMany()
    * ```
    */
  get personality(): Prisma.PersonalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fact`: Exposes CRUD operations for the **Fact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facts
    * const facts = await prisma.fact.findMany()
    * ```
    */
  get fact(): Prisma.FactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agencyMember`: Exposes CRUD operations for the **AgencyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgencyMembers
    * const agencyMembers = await prisma.agencyMember.findMany()
    * ```
    */
  get agencyMember(): Prisma.AgencyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endorsement`: Exposes CRUD operations for the **Endorsement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endorsements
    * const endorsements = await prisma.endorsement.findMany()
    * ```
    */
  get endorsement(): Prisma.EndorsementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
    Agent: 'Agent',
    Personality: 'Personality',
    Milestone: 'Milestone',
    Fact: 'Fact',
    Owner: 'Owner',
    Post: 'Post',
    Comment: 'Comment',
    Connection: 'Connection',
    Agency: 'Agency',
    AgencyMember: 'AgencyMember',
    Job: 'Job',
    JobApplication: 'JobApplication',
    Skill: 'Skill',
    Endorsement: 'Endorsement'
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
      modelProps: "agent" | "personality" | "milestone" | "fact" | "owner" | "post" | "comment" | "connection" | "agency" | "agencyMember" | "job" | "jobApplication" | "skill" | "endorsement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Personality: {
        payload: Prisma.$PersonalityPayload<ExtArgs>
        fields: Prisma.PersonalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          findFirst: {
            args: Prisma.PersonalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          findMany: {
            args: Prisma.PersonalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          create: {
            args: Prisma.PersonalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          createMany: {
            args: Prisma.PersonalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          delete: {
            args: Prisma.PersonalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          update: {
            args: Prisma.PersonalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          deleteMany: {
            args: Prisma.PersonalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>[]
          }
          upsert: {
            args: Prisma.PersonalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityPayload>
          }
          aggregate: {
            args: Prisma.PersonalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonality>
          }
          groupBy: {
            args: Prisma.PersonalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalityCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalityCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      Fact: {
        payload: Prisma.$FactPayload<ExtArgs>
        fields: Prisma.FactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          findFirst: {
            args: Prisma.FactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          findMany: {
            args: Prisma.FactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>[]
          }
          create: {
            args: Prisma.FactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          createMany: {
            args: Prisma.FactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>[]
          }
          delete: {
            args: Prisma.FactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          update: {
            args: Prisma.FactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          deleteMany: {
            args: Prisma.FactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>[]
          }
          upsert: {
            args: Prisma.FactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          aggregate: {
            args: Prisma.FactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFact>
          }
          groupBy: {
            args: Prisma.FactGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactCountArgs<ExtArgs>
            result: $Utils.Optional<FactCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      AgencyMember: {
        payload: Prisma.$AgencyMemberPayload<ExtArgs>
        fields: Prisma.AgencyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          findFirst: {
            args: Prisma.AgencyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          findMany: {
            args: Prisma.AgencyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          create: {
            args: Prisma.AgencyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          createMany: {
            args: Prisma.AgencyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          delete: {
            args: Prisma.AgencyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          update: {
            args: Prisma.AgencyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          deleteMany: {
            args: Prisma.AgencyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          upsert: {
            args: Prisma.AgencyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          aggregate: {
            args: Prisma.AgencyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgencyMember>
          }
          groupBy: {
            args: Prisma.AgencyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyMemberCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Endorsement: {
        payload: Prisma.$EndorsementPayload<ExtArgs>
        fields: Prisma.EndorsementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndorsementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndorsementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          findFirst: {
            args: Prisma.EndorsementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndorsementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          findMany: {
            args: Prisma.EndorsementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>[]
          }
          create: {
            args: Prisma.EndorsementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          createMany: {
            args: Prisma.EndorsementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndorsementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>[]
          }
          delete: {
            args: Prisma.EndorsementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          update: {
            args: Prisma.EndorsementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          deleteMany: {
            args: Prisma.EndorsementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndorsementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndorsementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>[]
          }
          upsert: {
            args: Prisma.EndorsementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndorsementPayload>
          }
          aggregate: {
            args: Prisma.EndorsementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndorsement>
          }
          groupBy: {
            args: Prisma.EndorsementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndorsementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndorsementCountArgs<ExtArgs>
            result: $Utils.Optional<EndorsementCountAggregateOutputType> | number
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
    agent?: AgentOmit
    personality?: PersonalityOmit
    milestone?: MilestoneOmit
    fact?: FactOmit
    owner?: OwnerOmit
    post?: PostOmit
    comment?: CommentOmit
    connection?: ConnectionOmit
    agency?: AgencyOmit
    agencyMember?: AgencyMemberOmit
    job?: JobOmit
    jobApplication?: JobApplicationOmit
    skill?: SkillOmit
    endorsement?: EndorsementOmit
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
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    milestones: number
    facts: number
    posts: number
    comments: number
    connections: number
    connectedBy: number
    agencyMemberships: number
    jobApplications: number
    skills: number
    endorsementsGiven: number
    endorsementsRecv: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    milestones?: boolean | AgentCountOutputTypeCountMilestonesArgs
    facts?: boolean | AgentCountOutputTypeCountFactsArgs
    posts?: boolean | AgentCountOutputTypeCountPostsArgs
    comments?: boolean | AgentCountOutputTypeCountCommentsArgs
    connections?: boolean | AgentCountOutputTypeCountConnectionsArgs
    connectedBy?: boolean | AgentCountOutputTypeCountConnectedByArgs
    agencyMemberships?: boolean | AgentCountOutputTypeCountAgencyMembershipsArgs
    jobApplications?: boolean | AgentCountOutputTypeCountJobApplicationsArgs
    skills?: boolean | AgentCountOutputTypeCountSkillsArgs
    endorsementsGiven?: boolean | AgentCountOutputTypeCountEndorsementsGivenArgs
    endorsementsRecv?: boolean | AgentCountOutputTypeCountEndorsementsRecvArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountFactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountConnectedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountAgencyMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountEndorsementsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndorsementWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountEndorsementsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndorsementWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    agents: number
    jobs: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | OwnerCountOutputTypeCountAgentsArgs
    jobs?: boolean | OwnerCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type AgencyCountOutputType
   */

  export type AgencyCountOutputType = {
    members: number
  }

  export type AgencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | AgencyCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyCountOutputType
     */
    select?: AgencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    endorsements: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endorsements?: boolean | SkillCountOutputTypeCountEndorsementsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountEndorsementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndorsementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    name: string | null
    bornAt: Date | null
    region: string | null
    platform: string | null
    arch: string | null
    runtime: string | null
    uak: string | null
    ownerId: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    name: string | null
    bornAt: Date | null
    region: string | null
    platform: string | null
    arch: string | null
    runtime: string | null
    uak: string | null
    ownerId: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    publicKey: number
    name: number
    bornAt: number
    region: number
    platform: number
    arch: number
    runtime: number
    uak: number
    ownerId: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    publicKey?: true
    name?: true
    bornAt?: true
    region?: true
    platform?: true
    arch?: true
    runtime?: true
    uak?: true
    ownerId?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    publicKey?: true
    name?: true
    bornAt?: true
    region?: true
    platform?: true
    arch?: true
    runtime?: true
    uak?: true
    ownerId?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    publicKey?: true
    name?: true
    bornAt?: true
    region?: true
    platform?: true
    arch?: true
    runtime?: true
    uak?: true
    ownerId?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    publicKey: string
    name: string
    bornAt: Date
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    name?: boolean
    bornAt?: boolean
    region?: boolean
    platform?: boolean
    arch?: boolean
    runtime?: boolean
    uak?: boolean
    ownerId?: boolean
    owner?: boolean | Agent$ownerArgs<ExtArgs>
    personality?: boolean | Agent$personalityArgs<ExtArgs>
    milestones?: boolean | Agent$milestonesArgs<ExtArgs>
    facts?: boolean | Agent$factsArgs<ExtArgs>
    posts?: boolean | Agent$postsArgs<ExtArgs>
    comments?: boolean | Agent$commentsArgs<ExtArgs>
    connections?: boolean | Agent$connectionsArgs<ExtArgs>
    connectedBy?: boolean | Agent$connectedByArgs<ExtArgs>
    agencyMemberships?: boolean | Agent$agencyMembershipsArgs<ExtArgs>
    jobApplications?: boolean | Agent$jobApplicationsArgs<ExtArgs>
    skills?: boolean | Agent$skillsArgs<ExtArgs>
    endorsementsGiven?: boolean | Agent$endorsementsGivenArgs<ExtArgs>
    endorsementsRecv?: boolean | Agent$endorsementsRecvArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    name?: boolean
    bornAt?: boolean
    region?: boolean
    platform?: boolean
    arch?: boolean
    runtime?: boolean
    uak?: boolean
    ownerId?: boolean
    owner?: boolean | Agent$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    name?: boolean
    bornAt?: boolean
    region?: boolean
    platform?: boolean
    arch?: boolean
    runtime?: boolean
    uak?: boolean
    ownerId?: boolean
    owner?: boolean | Agent$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    publicKey?: boolean
    name?: boolean
    bornAt?: boolean
    region?: boolean
    platform?: boolean
    arch?: boolean
    runtime?: boolean
    uak?: boolean
    ownerId?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "name" | "bornAt" | "region" | "platform" | "arch" | "runtime" | "uak" | "ownerId", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Agent$ownerArgs<ExtArgs>
    personality?: boolean | Agent$personalityArgs<ExtArgs>
    milestones?: boolean | Agent$milestonesArgs<ExtArgs>
    facts?: boolean | Agent$factsArgs<ExtArgs>
    posts?: boolean | Agent$postsArgs<ExtArgs>
    comments?: boolean | Agent$commentsArgs<ExtArgs>
    connections?: boolean | Agent$connectionsArgs<ExtArgs>
    connectedBy?: boolean | Agent$connectedByArgs<ExtArgs>
    agencyMemberships?: boolean | Agent$agencyMembershipsArgs<ExtArgs>
    jobApplications?: boolean | Agent$jobApplicationsArgs<ExtArgs>
    skills?: boolean | Agent$skillsArgs<ExtArgs>
    endorsementsGiven?: boolean | Agent$endorsementsGivenArgs<ExtArgs>
    endorsementsRecv?: boolean | Agent$endorsementsRecvArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Agent$ownerArgs<ExtArgs>
  }
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Agent$ownerArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs> | null
      personality: Prisma.$PersonalityPayload<ExtArgs> | null
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      facts: Prisma.$FactPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      connections: Prisma.$ConnectionPayload<ExtArgs>[]
      connectedBy: Prisma.$ConnectionPayload<ExtArgs>[]
      agencyMemberships: Prisma.$AgencyMemberPayload<ExtArgs>[]
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      endorsementsGiven: Prisma.$EndorsementPayload<ExtArgs>[]
      endorsementsRecv: Prisma.$EndorsementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      name: string
      bornAt: Date
      region: string
      platform: string
      arch: string
      runtime: string
      uak: string
      ownerId: string | null
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Agent$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Agent$ownerArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    personality<T extends Agent$personalityArgs<ExtArgs> = {}>(args?: Subset<T, Agent$personalityArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    milestones<T extends Agent$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Agent$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facts<T extends Agent$factsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$factsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Agent$postsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Agent$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connections<T extends Agent$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connectedBy<T extends Agent$connectedByArgs<ExtArgs> = {}>(args?: Subset<T, Agent$connectedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agencyMemberships<T extends Agent$agencyMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$agencyMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobApplications<T extends Agent$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Agent$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endorsementsGiven<T extends Agent$endorsementsGivenArgs<ExtArgs> = {}>(args?: Subset<T, Agent$endorsementsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endorsementsRecv<T extends Agent$endorsementsRecvArgs<ExtArgs> = {}>(args?: Subset<T, Agent$endorsementsRecvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly publicKey: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly bornAt: FieldRef<"Agent", 'DateTime'>
    readonly region: FieldRef<"Agent", 'String'>
    readonly platform: FieldRef<"Agent", 'String'>
    readonly arch: FieldRef<"Agent", 'String'>
    readonly runtime: FieldRef<"Agent", 'String'>
    readonly uak: FieldRef<"Agent", 'String'>
    readonly ownerId: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.owner
   */
  export type Agent$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
  }

  /**
   * Agent.personality
   */
  export type Agent$personalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    where?: PersonalityWhereInput
  }

  /**
   * Agent.milestones
   */
  export type Agent$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Agent.facts
   */
  export type Agent$factsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    where?: FactWhereInput
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    cursor?: FactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Agent.posts
   */
  export type Agent$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Agent.comments
   */
  export type Agent$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Agent.connections
   */
  export type Agent$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Agent.connectedBy
   */
  export type Agent$connectedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Agent.agencyMemberships
   */
  export type Agent$agencyMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    cursor?: AgencyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * Agent.jobApplications
   */
  export type Agent$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Agent.skills
   */
  export type Agent$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Agent.endorsementsGiven
   */
  export type Agent$endorsementsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    where?: EndorsementWhereInput
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    cursor?: EndorsementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Agent.endorsementsRecv
   */
  export type Agent$endorsementsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    where?: EndorsementWhereInput
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    cursor?: EndorsementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Personality
   */

  export type AggregatePersonality = {
    _count: PersonalityCountAggregateOutputType | null
    _min: PersonalityMinAggregateOutputType | null
    _max: PersonalityMaxAggregateOutputType | null
  }

  export type PersonalityMinAggregateOutputType = {
    agentId: string | null
    vector: string | null
    traits: string | null
  }

  export type PersonalityMaxAggregateOutputType = {
    agentId: string | null
    vector: string | null
    traits: string | null
  }

  export type PersonalityCountAggregateOutputType = {
    agentId: number
    vector: number
    traits: number
    _all: number
  }


  export type PersonalityMinAggregateInputType = {
    agentId?: true
    vector?: true
    traits?: true
  }

  export type PersonalityMaxAggregateInputType = {
    agentId?: true
    vector?: true
    traits?: true
  }

  export type PersonalityCountAggregateInputType = {
    agentId?: true
    vector?: true
    traits?: true
    _all?: true
  }

  export type PersonalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personality to aggregate.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personalities
    **/
    _count?: true | PersonalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalityMaxAggregateInputType
  }

  export type GetPersonalityAggregateType<T extends PersonalityAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonality[P]>
      : GetScalarType<T[P], AggregatePersonality[P]>
  }




  export type PersonalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalityWhereInput
    orderBy?: PersonalityOrderByWithAggregationInput | PersonalityOrderByWithAggregationInput[]
    by: PersonalityScalarFieldEnum[] | PersonalityScalarFieldEnum
    having?: PersonalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalityCountAggregateInputType | true
    _min?: PersonalityMinAggregateInputType
    _max?: PersonalityMaxAggregateInputType
  }

  export type PersonalityGroupByOutputType = {
    agentId: string
    vector: string
    traits: string
    _count: PersonalityCountAggregateOutputType | null
    _min: PersonalityMinAggregateOutputType | null
    _max: PersonalityMaxAggregateOutputType | null
  }

  type GetPersonalityGroupByPayload<T extends PersonalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalityGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalityGroupByOutputType[P]>
        }
      >
    >


  export type PersonalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agentId?: boolean
    vector?: boolean
    traits?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agentId?: boolean
    vector?: boolean
    traits?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agentId?: boolean
    vector?: boolean
    traits?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personality"]>

  export type PersonalitySelectScalar = {
    agentId?: boolean
    vector?: boolean
    traits?: boolean
  }

  export type PersonalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"agentId" | "vector" | "traits", ExtArgs["result"]["personality"]>
  export type PersonalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type PersonalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type PersonalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $PersonalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personality"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      agentId: string
      vector: string
      traits: string
    }, ExtArgs["result"]["personality"]>
    composites: {}
  }

  type PersonalityGetPayload<S extends boolean | null | undefined | PersonalityDefaultArgs> = $Result.GetResult<Prisma.$PersonalityPayload, S>

  type PersonalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalityCountAggregateInputType | true
    }

  export interface PersonalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personality'], meta: { name: 'Personality' } }
    /**
     * Find zero or one Personality that matches the filter.
     * @param {PersonalityFindUniqueArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalityFindUniqueArgs>(args: SelectSubset<T, PersonalityFindUniqueArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalityFindUniqueOrThrowArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalityFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindFirstArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalityFindFirstArgs>(args?: SelectSubset<T, PersonalityFindFirstArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindFirstOrThrowArgs} args - Arguments to find a Personality
     * @example
     * // Get one Personality
     * const personality = await prisma.personality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalityFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personalities
     * const personalities = await prisma.personality.findMany()
     * 
     * // Get first 10 Personalities
     * const personalities = await prisma.personality.findMany({ take: 10 })
     * 
     * // Only select the `agentId`
     * const personalityWithAgentIdOnly = await prisma.personality.findMany({ select: { agentId: true } })
     * 
     */
    findMany<T extends PersonalityFindManyArgs>(args?: SelectSubset<T, PersonalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personality.
     * @param {PersonalityCreateArgs} args - Arguments to create a Personality.
     * @example
     * // Create one Personality
     * const Personality = await prisma.personality.create({
     *   data: {
     *     // ... data to create a Personality
     *   }
     * })
     * 
     */
    create<T extends PersonalityCreateArgs>(args: SelectSubset<T, PersonalityCreateArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personalities.
     * @param {PersonalityCreateManyArgs} args - Arguments to create many Personalities.
     * @example
     * // Create many Personalities
     * const personality = await prisma.personality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalityCreateManyArgs>(args?: SelectSubset<T, PersonalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personalities and returns the data saved in the database.
     * @param {PersonalityCreateManyAndReturnArgs} args - Arguments to create many Personalities.
     * @example
     * // Create many Personalities
     * const personality = await prisma.personality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personalities and only return the `agentId`
     * const personalityWithAgentIdOnly = await prisma.personality.createManyAndReturn({
     *   select: { agentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalityCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personality.
     * @param {PersonalityDeleteArgs} args - Arguments to delete one Personality.
     * @example
     * // Delete one Personality
     * const Personality = await prisma.personality.delete({
     *   where: {
     *     // ... filter to delete one Personality
     *   }
     * })
     * 
     */
    delete<T extends PersonalityDeleteArgs>(args: SelectSubset<T, PersonalityDeleteArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personality.
     * @param {PersonalityUpdateArgs} args - Arguments to update one Personality.
     * @example
     * // Update one Personality
     * const personality = await prisma.personality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalityUpdateArgs>(args: SelectSubset<T, PersonalityUpdateArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personalities.
     * @param {PersonalityDeleteManyArgs} args - Arguments to filter Personalities to delete.
     * @example
     * // Delete a few Personalities
     * const { count } = await prisma.personality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalityDeleteManyArgs>(args?: SelectSubset<T, PersonalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personalities
     * const personality = await prisma.personality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalityUpdateManyArgs>(args: SelectSubset<T, PersonalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalities and returns the data updated in the database.
     * @param {PersonalityUpdateManyAndReturnArgs} args - Arguments to update many Personalities.
     * @example
     * // Update many Personalities
     * const personality = await prisma.personality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personalities and only return the `agentId`
     * const personalityWithAgentIdOnly = await prisma.personality.updateManyAndReturn({
     *   select: { agentId: true },
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
    updateManyAndReturn<T extends PersonalityUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personality.
     * @param {PersonalityUpsertArgs} args - Arguments to update or create a Personality.
     * @example
     * // Update or create a Personality
     * const personality = await prisma.personality.upsert({
     *   create: {
     *     // ... data to create a Personality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personality we want to update
     *   }
     * })
     */
    upsert<T extends PersonalityUpsertArgs>(args: SelectSubset<T, PersonalityUpsertArgs<ExtArgs>>): Prisma__PersonalityClient<$Result.GetResult<Prisma.$PersonalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityCountArgs} args - Arguments to filter Personalities to count.
     * @example
     * // Count the number of Personalities
     * const count = await prisma.personality.count({
     *   where: {
     *     // ... the filter for the Personalities we want to count
     *   }
     * })
    **/
    count<T extends PersonalityCountArgs>(
      args?: Subset<T, PersonalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalityAggregateArgs>(args: Subset<T, PersonalityAggregateArgs>): Prisma.PrismaPromise<GetPersonalityAggregateType<T>>

    /**
     * Group by Personality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityGroupByArgs} args - Group by arguments.
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
      T extends PersonalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalityGroupByArgs['orderBy'] }
        : { orderBy?: PersonalityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personality model
   */
  readonly fields: PersonalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Personality model
   */
  interface PersonalityFieldRefs {
    readonly agentId: FieldRef<"Personality", 'String'>
    readonly vector: FieldRef<"Personality", 'String'>
    readonly traits: FieldRef<"Personality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Personality findUnique
   */
  export type PersonalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality findUniqueOrThrow
   */
  export type PersonalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality findFirst
   */
  export type PersonalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalities.
     */
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality findFirstOrThrow
   */
  export type PersonalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personality to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personalities.
     */
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality findMany
   */
  export type PersonalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter, which Personalities to fetch.
     */
    where?: PersonalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personalities to fetch.
     */
    orderBy?: PersonalityOrderByWithRelationInput | PersonalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personalities.
     */
    cursor?: PersonalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personalities.
     */
    skip?: number
    distinct?: PersonalityScalarFieldEnum | PersonalityScalarFieldEnum[]
  }

  /**
   * Personality create
   */
  export type PersonalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Personality.
     */
    data: XOR<PersonalityCreateInput, PersonalityUncheckedCreateInput>
  }

  /**
   * Personality createMany
   */
  export type PersonalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personalities.
     */
    data: PersonalityCreateManyInput | PersonalityCreateManyInput[]
  }

  /**
   * Personality createManyAndReturn
   */
  export type PersonalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * The data used to create many Personalities.
     */
    data: PersonalityCreateManyInput | PersonalityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personality update
   */
  export type PersonalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Personality.
     */
    data: XOR<PersonalityUpdateInput, PersonalityUncheckedUpdateInput>
    /**
     * Choose, which Personality to update.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality updateMany
   */
  export type PersonalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personalities.
     */
    data: XOR<PersonalityUpdateManyMutationInput, PersonalityUncheckedUpdateManyInput>
    /**
     * Filter which Personalities to update
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to update.
     */
    limit?: number
  }

  /**
   * Personality updateManyAndReturn
   */
  export type PersonalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * The data used to update Personalities.
     */
    data: XOR<PersonalityUpdateManyMutationInput, PersonalityUncheckedUpdateManyInput>
    /**
     * Filter which Personalities to update
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personality upsert
   */
  export type PersonalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Personality to update in case it exists.
     */
    where: PersonalityWhereUniqueInput
    /**
     * In case the Personality found by the `where` argument doesn't exist, create a new Personality with this data.
     */
    create: XOR<PersonalityCreateInput, PersonalityUncheckedCreateInput>
    /**
     * In case the Personality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalityUpdateInput, PersonalityUncheckedUpdateInput>
  }

  /**
   * Personality delete
   */
  export type PersonalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
    /**
     * Filter which Personality to delete.
     */
    where: PersonalityWhereUniqueInput
  }

  /**
   * Personality deleteMany
   */
  export type PersonalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personalities to delete
     */
    where?: PersonalityWhereInput
    /**
     * Limit how many Personalities to delete.
     */
    limit?: number
  }

  /**
   * Personality without action
   */
  export type PersonalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personality
     */
    select?: PersonalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personality
     */
    omit?: PersonalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    id: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    id: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: number | null
    agentId: string | null
    key: string | null
    description: string | null
    timestamp: Date | null
    metadata: string | null
    isAchievement: boolean | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: number | null
    agentId: string | null
    key: string | null
    description: string | null
    timestamp: Date | null
    metadata: string | null
    isAchievement: boolean | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    agentId: number
    key: number
    description: number
    timestamp: number
    metadata: number
    isAchievement: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    id?: true
  }

  export type MilestoneSumAggregateInputType = {
    id?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    description?: true
    timestamp?: true
    metadata?: true
    isAchievement?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    description?: true
    timestamp?: true
    metadata?: true
    isAchievement?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    description?: true
    timestamp?: true
    metadata?: true
    isAchievement?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: number
    agentId: string
    key: string
    description: string
    timestamp: Date
    metadata: string | null
    isAchievement: boolean
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    description?: boolean
    timestamp?: boolean
    metadata?: boolean
    isAchievement?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    description?: boolean
    timestamp?: boolean
    metadata?: boolean
    isAchievement?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    description?: boolean
    timestamp?: boolean
    metadata?: boolean
    isAchievement?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    agentId?: boolean
    key?: boolean
    description?: boolean
    timestamp?: boolean
    metadata?: boolean
    isAchievement?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "key" | "description" | "timestamp" | "metadata" | "isAchievement", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: string
      key: string
      description: string
      timestamp: Date
      metadata: string | null
      isAchievement: boolean
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
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
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
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
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'Int'>
    readonly agentId: FieldRef<"Milestone", 'String'>
    readonly key: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly timestamp: FieldRef<"Milestone", 'DateTime'>
    readonly metadata: FieldRef<"Milestone", 'String'>
    readonly isAchievement: FieldRef<"Milestone", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Fact
   */

  export type AggregateFact = {
    _count: FactCountAggregateOutputType | null
    _avg: FactAvgAggregateOutputType | null
    _sum: FactSumAggregateOutputType | null
    _min: FactMinAggregateOutputType | null
    _max: FactMaxAggregateOutputType | null
  }

  export type FactAvgAggregateOutputType = {
    id: number | null
  }

  export type FactSumAggregateOutputType = {
    id: number | null
  }

  export type FactMinAggregateOutputType = {
    id: number | null
    agentId: string | null
    key: string | null
    value: string | null
    timestamp: Date | null
  }

  export type FactMaxAggregateOutputType = {
    id: number | null
    agentId: string | null
    key: string | null
    value: string | null
    timestamp: Date | null
  }

  export type FactCountAggregateOutputType = {
    id: number
    agentId: number
    key: number
    value: number
    timestamp: number
    _all: number
  }


  export type FactAvgAggregateInputType = {
    id?: true
  }

  export type FactSumAggregateInputType = {
    id?: true
  }

  export type FactMinAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    value?: true
    timestamp?: true
  }

  export type FactMaxAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    value?: true
    timestamp?: true
  }

  export type FactCountAggregateInputType = {
    id?: true
    agentId?: true
    key?: true
    value?: true
    timestamp?: true
    _all?: true
  }

  export type FactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fact to aggregate.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facts
    **/
    _count?: true | FactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactMaxAggregateInputType
  }

  export type GetFactAggregateType<T extends FactAggregateArgs> = {
        [P in keyof T & keyof AggregateFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFact[P]>
      : GetScalarType<T[P], AggregateFact[P]>
  }




  export type FactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactWhereInput
    orderBy?: FactOrderByWithAggregationInput | FactOrderByWithAggregationInput[]
    by: FactScalarFieldEnum[] | FactScalarFieldEnum
    having?: FactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactCountAggregateInputType | true
    _avg?: FactAvgAggregateInputType
    _sum?: FactSumAggregateInputType
    _min?: FactMinAggregateInputType
    _max?: FactMaxAggregateInputType
  }

  export type FactGroupByOutputType = {
    id: number
    agentId: string
    key: string
    value: string
    timestamp: Date
    _count: FactCountAggregateOutputType | null
    _avg: FactAvgAggregateOutputType | null
    _sum: FactSumAggregateOutputType | null
    _min: FactMinAggregateOutputType | null
    _max: FactMaxAggregateOutputType | null
  }

  type GetFactGroupByPayload<T extends FactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactGroupByOutputType[P]>
            : GetScalarType<T[P], FactGroupByOutputType[P]>
        }
      >
    >


  export type FactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    value?: boolean
    timestamp?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact"]>

  export type FactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    value?: boolean
    timestamp?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact"]>

  export type FactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    key?: boolean
    value?: boolean
    timestamp?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact"]>

  export type FactSelectScalar = {
    id?: boolean
    agentId?: boolean
    key?: boolean
    value?: boolean
    timestamp?: boolean
  }

  export type FactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "key" | "value" | "timestamp", ExtArgs["result"]["fact"]>
  export type FactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type FactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type FactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $FactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fact"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agentId: string
      key: string
      value: string
      timestamp: Date
    }, ExtArgs["result"]["fact"]>
    composites: {}
  }

  type FactGetPayload<S extends boolean | null | undefined | FactDefaultArgs> = $Result.GetResult<Prisma.$FactPayload, S>

  type FactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactCountAggregateInputType | true
    }

  export interface FactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fact'], meta: { name: 'Fact' } }
    /**
     * Find zero or one Fact that matches the filter.
     * @param {FactFindUniqueArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactFindUniqueArgs>(args: SelectSubset<T, FactFindUniqueArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactFindUniqueOrThrowArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactFindUniqueOrThrowArgs>(args: SelectSubset<T, FactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindFirstArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactFindFirstArgs>(args?: SelectSubset<T, FactFindFirstArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindFirstOrThrowArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactFindFirstOrThrowArgs>(args?: SelectSubset<T, FactFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facts
     * const facts = await prisma.fact.findMany()
     * 
     * // Get first 10 Facts
     * const facts = await prisma.fact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factWithIdOnly = await prisma.fact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactFindManyArgs>(args?: SelectSubset<T, FactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fact.
     * @param {FactCreateArgs} args - Arguments to create a Fact.
     * @example
     * // Create one Fact
     * const Fact = await prisma.fact.create({
     *   data: {
     *     // ... data to create a Fact
     *   }
     * })
     * 
     */
    create<T extends FactCreateArgs>(args: SelectSubset<T, FactCreateArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facts.
     * @param {FactCreateManyArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const fact = await prisma.fact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactCreateManyArgs>(args?: SelectSubset<T, FactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facts and returns the data saved in the database.
     * @param {FactCreateManyAndReturnArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const fact = await prisma.fact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facts and only return the `id`
     * const factWithIdOnly = await prisma.fact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactCreateManyAndReturnArgs>(args?: SelectSubset<T, FactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fact.
     * @param {FactDeleteArgs} args - Arguments to delete one Fact.
     * @example
     * // Delete one Fact
     * const Fact = await prisma.fact.delete({
     *   where: {
     *     // ... filter to delete one Fact
     *   }
     * })
     * 
     */
    delete<T extends FactDeleteArgs>(args: SelectSubset<T, FactDeleteArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fact.
     * @param {FactUpdateArgs} args - Arguments to update one Fact.
     * @example
     * // Update one Fact
     * const fact = await prisma.fact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactUpdateArgs>(args: SelectSubset<T, FactUpdateArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facts.
     * @param {FactDeleteManyArgs} args - Arguments to filter Facts to delete.
     * @example
     * // Delete a few Facts
     * const { count } = await prisma.fact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactDeleteManyArgs>(args?: SelectSubset<T, FactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facts
     * const fact = await prisma.fact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactUpdateManyArgs>(args: SelectSubset<T, FactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facts and returns the data updated in the database.
     * @param {FactUpdateManyAndReturnArgs} args - Arguments to update many Facts.
     * @example
     * // Update many Facts
     * const fact = await prisma.fact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facts and only return the `id`
     * const factWithIdOnly = await prisma.fact.updateManyAndReturn({
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
    updateManyAndReturn<T extends FactUpdateManyAndReturnArgs>(args: SelectSubset<T, FactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fact.
     * @param {FactUpsertArgs} args - Arguments to update or create a Fact.
     * @example
     * // Update or create a Fact
     * const fact = await prisma.fact.upsert({
     *   create: {
     *     // ... data to create a Fact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fact we want to update
     *   }
     * })
     */
    upsert<T extends FactUpsertArgs>(args: SelectSubset<T, FactUpsertArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCountArgs} args - Arguments to filter Facts to count.
     * @example
     * // Count the number of Facts
     * const count = await prisma.fact.count({
     *   where: {
     *     // ... the filter for the Facts we want to count
     *   }
     * })
    **/
    count<T extends FactCountArgs>(
      args?: Subset<T, FactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactAggregateArgs>(args: Subset<T, FactAggregateArgs>): Prisma.PrismaPromise<GetFactAggregateType<T>>

    /**
     * Group by Fact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactGroupByArgs} args - Group by arguments.
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
      T extends FactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactGroupByArgs['orderBy'] }
        : { orderBy?: FactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fact model
   */
  readonly fields: FactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fact model
   */
  interface FactFieldRefs {
    readonly id: FieldRef<"Fact", 'Int'>
    readonly agentId: FieldRef<"Fact", 'String'>
    readonly key: FieldRef<"Fact", 'String'>
    readonly value: FieldRef<"Fact", 'String'>
    readonly timestamp: FieldRef<"Fact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fact findUnique
   */
  export type FactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact findUniqueOrThrow
   */
  export type FactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact findFirst
   */
  export type FactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact findFirstOrThrow
   */
  export type FactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact findMany
   */
  export type FactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact create
   */
  export type FactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The data needed to create a Fact.
     */
    data: XOR<FactCreateInput, FactUncheckedCreateInput>
  }

  /**
   * Fact createMany
   */
  export type FactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facts.
     */
    data: FactCreateManyInput | FactCreateManyInput[]
  }

  /**
   * Fact createManyAndReturn
   */
  export type FactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * The data used to create many Facts.
     */
    data: FactCreateManyInput | FactCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fact update
   */
  export type FactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The data needed to update a Fact.
     */
    data: XOR<FactUpdateInput, FactUncheckedUpdateInput>
    /**
     * Choose, which Fact to update.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact updateMany
   */
  export type FactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facts.
     */
    data: XOR<FactUpdateManyMutationInput, FactUncheckedUpdateManyInput>
    /**
     * Filter which Facts to update
     */
    where?: FactWhereInput
    /**
     * Limit how many Facts to update.
     */
    limit?: number
  }

  /**
   * Fact updateManyAndReturn
   */
  export type FactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * The data used to update Facts.
     */
    data: XOR<FactUpdateManyMutationInput, FactUncheckedUpdateManyInput>
    /**
     * Filter which Facts to update
     */
    where?: FactWhereInput
    /**
     * Limit how many Facts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fact upsert
   */
  export type FactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The filter to search for the Fact to update in case it exists.
     */
    where: FactWhereUniqueInput
    /**
     * In case the Fact found by the `where` argument doesn't exist, create a new Fact with this data.
     */
    create: XOR<FactCreateInput, FactUncheckedCreateInput>
    /**
     * In case the Fact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactUpdateInput, FactUncheckedUpdateInput>
  }

  /**
   * Fact delete
   */
  export type FactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter which Fact to delete.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact deleteMany
   */
  export type FactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facts to delete
     */
    where?: FactWhereInput
    /**
     * Limit how many Facts to delete.
     */
    limit?: number
  }

  /**
   * Fact without action
   */
  export type FactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fact
     */
    omit?: FactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    agents?: boolean | Owner$agentsArgs<ExtArgs>
    jobs?: boolean | Owner$jobsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | Owner$agentsArgs<ExtArgs>
    jobs?: boolean | Owner$jobsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      agents: Prisma.$AgentPayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agents<T extends Owner$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends Owner$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly passwordHash: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.agents
   */
  export type Owner$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Owner.jobs
   */
  export type Owner$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    likes: number | null
  }

  export type PostSumAggregateOutputType = {
    likes: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    content: string | null
    category: string | null
    likes: number | null
    signature: string | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    content: string | null
    category: string | null
    likes: number | null
    signature: string | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    agentId: number
    content: number
    category: number
    likes: number
    signature: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    likes?: true
  }

  export type PostSumAggregateInputType = {
    likes?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    agentId?: true
    content?: true
    category?: true
    likes?: true
    signature?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    agentId?: true
    content?: true
    category?: true
    likes?: true
    signature?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    agentId?: true
    content?: true
    category?: true
    likes?: true
    signature?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    agentId: string
    content: string
    category: string
    likes: number
    signature: string | null
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    content?: boolean
    category?: boolean
    likes?: boolean
    signature?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    content?: boolean
    category?: boolean
    likes?: boolean
    signature?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    content?: boolean
    category?: boolean
    likes?: boolean
    signature?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    agentId?: boolean
    content?: boolean
    category?: boolean
    likes?: boolean
    signature?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "content" | "category" | "likes" | "signature" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      content: string
      category: string
      likes: number
      signature: string | null
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly agentId: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly category: FieldRef<"Post", 'String'>
    readonly likes: FieldRef<"Post", 'Int'>
    readonly signature: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    agentId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    agentId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    agentId: number
    content: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    agentId?: true
    content?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    agentId?: true
    content?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    agentId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string
    agentId: string
    content: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    agentId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    agentId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    agentId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    agentId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "agentId" | "content" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      agentId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly agentId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    connectedToId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    connectedToId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    agentId: number
    connectedToId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    id?: true
    agentId?: true
    connectedToId?: true
    status?: true
    createdAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    agentId?: true
    connectedToId?: true
    status?: true
    createdAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    agentId?: true
    connectedToId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    agentId: string
    connectedToId: string
    status: string
    createdAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    connectedToId?: boolean
    status?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    connectedToId?: boolean
    status?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    connectedToId?: boolean
    status?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    agentId?: boolean
    connectedToId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "connectedToId" | "status" | "createdAt", ExtArgs["result"]["connection"]>
  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    connectedTo?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      connectedTo: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      connectedToId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
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
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connectedTo<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'String'>
    readonly agentId: FieldRef<"Connection", 'String'>
    readonly connectedToId: FieldRef<"Connection", 'String'>
    readonly status: FieldRef<"Connection", 'String'>
    readonly createdAt: FieldRef<"Connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection updateManyAndReturn
   */
  export type ConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    members?: boolean | Agency$membersArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Agency$membersArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      members: Prisma.$AgencyMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
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
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Agency$membersArgs<ExtArgs> = {}>(args?: Subset<T, Agency$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly description: FieldRef<"Agency", 'String'>
    readonly createdAt: FieldRef<"Agency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency.members
   */
  export type Agency$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    cursor?: AgencyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model AgencyMember
   */

  export type AggregateAgencyMember = {
    _count: AgencyMemberCountAggregateOutputType | null
    _min: AgencyMemberMinAggregateOutputType | null
    _max: AgencyMemberMaxAggregateOutputType | null
  }

  export type AgencyMemberMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    agentId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type AgencyMemberMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    agentId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type AgencyMemberCountAggregateOutputType = {
    id: number
    agencyId: number
    agentId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type AgencyMemberMinAggregateInputType = {
    id?: true
    agencyId?: true
    agentId?: true
    role?: true
    joinedAt?: true
  }

  export type AgencyMemberMaxAggregateInputType = {
    id?: true
    agencyId?: true
    agentId?: true
    role?: true
    joinedAt?: true
  }

  export type AgencyMemberCountAggregateInputType = {
    id?: true
    agencyId?: true
    agentId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type AgencyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyMember to aggregate.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgencyMembers
    **/
    _count?: true | AgencyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMemberMaxAggregateInputType
  }

  export type GetAgencyMemberAggregateType<T extends AgencyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateAgencyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgencyMember[P]>
      : GetScalarType<T[P], AggregateAgencyMember[P]>
  }




  export type AgencyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithAggregationInput | AgencyMemberOrderByWithAggregationInput[]
    by: AgencyMemberScalarFieldEnum[] | AgencyMemberScalarFieldEnum
    having?: AgencyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyMemberCountAggregateInputType | true
    _min?: AgencyMemberMinAggregateInputType
    _max?: AgencyMemberMaxAggregateInputType
  }

  export type AgencyMemberGroupByOutputType = {
    id: string
    agencyId: string
    agentId: string
    role: string
    joinedAt: Date
    _count: AgencyMemberCountAggregateOutputType | null
    _min: AgencyMemberMinAggregateOutputType | null
    _max: AgencyMemberMaxAggregateOutputType | null
  }

  type GetAgencyMemberGroupByPayload<T extends AgencyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyMemberGroupByOutputType[P]>
        }
      >
    >


  export type AgencyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    agentId?: boolean
    role?: boolean
    joinedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    agentId?: boolean
    role?: boolean
    joinedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    agentId?: boolean
    role?: boolean
    joinedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectScalar = {
    id?: boolean
    agencyId?: boolean
    agentId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type AgencyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agencyId" | "agentId" | "role" | "joinedAt", ExtArgs["result"]["agencyMember"]>
  export type AgencyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type AgencyMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type AgencyMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $AgencyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgencyMember"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      agentId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["agencyMember"]>
    composites: {}
  }

  type AgencyMemberGetPayload<S extends boolean | null | undefined | AgencyMemberDefaultArgs> = $Result.GetResult<Prisma.$AgencyMemberPayload, S>

  type AgencyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyMemberCountAggregateInputType | true
    }

  export interface AgencyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgencyMember'], meta: { name: 'AgencyMember' } }
    /**
     * Find zero or one AgencyMember that matches the filter.
     * @param {AgencyMemberFindUniqueArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyMemberFindUniqueArgs>(args: SelectSubset<T, AgencyMemberFindUniqueArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgencyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyMemberFindUniqueOrThrowArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindFirstArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyMemberFindFirstArgs>(args?: SelectSubset<T, AgencyMemberFindFirstArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindFirstOrThrowArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgencyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgencyMembers
     * const agencyMembers = await prisma.agencyMember.findMany()
     * 
     * // Get first 10 AgencyMembers
     * const agencyMembers = await prisma.agencyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyMemberFindManyArgs>(args?: SelectSubset<T, AgencyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgencyMember.
     * @param {AgencyMemberCreateArgs} args - Arguments to create a AgencyMember.
     * @example
     * // Create one AgencyMember
     * const AgencyMember = await prisma.agencyMember.create({
     *   data: {
     *     // ... data to create a AgencyMember
     *   }
     * })
     * 
     */
    create<T extends AgencyMemberCreateArgs>(args: SelectSubset<T, AgencyMemberCreateArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgencyMembers.
     * @param {AgencyMemberCreateManyArgs} args - Arguments to create many AgencyMembers.
     * @example
     * // Create many AgencyMembers
     * const agencyMember = await prisma.agencyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyMemberCreateManyArgs>(args?: SelectSubset<T, AgencyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgencyMembers and returns the data saved in the database.
     * @param {AgencyMemberCreateManyAndReturnArgs} args - Arguments to create many AgencyMembers.
     * @example
     * // Create many AgencyMembers
     * const agencyMember = await prisma.agencyMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgencyMembers and only return the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgencyMember.
     * @param {AgencyMemberDeleteArgs} args - Arguments to delete one AgencyMember.
     * @example
     * // Delete one AgencyMember
     * const AgencyMember = await prisma.agencyMember.delete({
     *   where: {
     *     // ... filter to delete one AgencyMember
     *   }
     * })
     * 
     */
    delete<T extends AgencyMemberDeleteArgs>(args: SelectSubset<T, AgencyMemberDeleteArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgencyMember.
     * @param {AgencyMemberUpdateArgs} args - Arguments to update one AgencyMember.
     * @example
     * // Update one AgencyMember
     * const agencyMember = await prisma.agencyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyMemberUpdateArgs>(args: SelectSubset<T, AgencyMemberUpdateArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgencyMembers.
     * @param {AgencyMemberDeleteManyArgs} args - Arguments to filter AgencyMembers to delete.
     * @example
     * // Delete a few AgencyMembers
     * const { count } = await prisma.agencyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyMemberDeleteManyArgs>(args?: SelectSubset<T, AgencyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgencyMembers
     * const agencyMember = await prisma.agencyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyMemberUpdateManyArgs>(args: SelectSubset<T, AgencyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyMembers and returns the data updated in the database.
     * @param {AgencyMemberUpdateManyAndReturnArgs} args - Arguments to update many AgencyMembers.
     * @example
     * // Update many AgencyMembers
     * const agencyMember = await prisma.agencyMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgencyMembers and only return the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgencyMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgencyMember.
     * @param {AgencyMemberUpsertArgs} args - Arguments to update or create a AgencyMember.
     * @example
     * // Update or create a AgencyMember
     * const agencyMember = await prisma.agencyMember.upsert({
     *   create: {
     *     // ... data to create a AgencyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgencyMember we want to update
     *   }
     * })
     */
    upsert<T extends AgencyMemberUpsertArgs>(args: SelectSubset<T, AgencyMemberUpsertArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgencyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberCountArgs} args - Arguments to filter AgencyMembers to count.
     * @example
     * // Count the number of AgencyMembers
     * const count = await prisma.agencyMember.count({
     *   where: {
     *     // ... the filter for the AgencyMembers we want to count
     *   }
     * })
    **/
    count<T extends AgencyMemberCountArgs>(
      args?: Subset<T, AgencyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgencyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyMemberAggregateArgs>(args: Subset<T, AgencyMemberAggregateArgs>): Prisma.PrismaPromise<GetAgencyMemberAggregateType<T>>

    /**
     * Group by AgencyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberGroupByArgs} args - Group by arguments.
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
      T extends AgencyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyMemberGroupByArgs['orderBy'] }
        : { orderBy?: AgencyMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgencyMember model
   */
  readonly fields: AgencyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgencyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgencyMember model
   */
  interface AgencyMemberFieldRefs {
    readonly id: FieldRef<"AgencyMember", 'String'>
    readonly agencyId: FieldRef<"AgencyMember", 'String'>
    readonly agentId: FieldRef<"AgencyMember", 'String'>
    readonly role: FieldRef<"AgencyMember", 'String'>
    readonly joinedAt: FieldRef<"AgencyMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgencyMember findUnique
   */
  export type AgencyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember findUniqueOrThrow
   */
  export type AgencyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember findFirst
   */
  export type AgencyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyMembers.
     */
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember findFirstOrThrow
   */
  export type AgencyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyMembers.
     */
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember findMany
   */
  export type AgencyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMembers to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember create
   */
  export type AgencyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a AgencyMember.
     */
    data: XOR<AgencyMemberCreateInput, AgencyMemberUncheckedCreateInput>
  }

  /**
   * AgencyMember createMany
   */
  export type AgencyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgencyMembers.
     */
    data: AgencyMemberCreateManyInput | AgencyMemberCreateManyInput[]
  }

  /**
   * AgencyMember createManyAndReturn
   */
  export type AgencyMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * The data used to create many AgencyMembers.
     */
    data: AgencyMemberCreateManyInput | AgencyMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyMember update
   */
  export type AgencyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a AgencyMember.
     */
    data: XOR<AgencyMemberUpdateInput, AgencyMemberUncheckedUpdateInput>
    /**
     * Choose, which AgencyMember to update.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember updateMany
   */
  export type AgencyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgencyMembers.
     */
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyInput>
    /**
     * Filter which AgencyMembers to update
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to update.
     */
    limit?: number
  }

  /**
   * AgencyMember updateManyAndReturn
   */
  export type AgencyMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * The data used to update AgencyMembers.
     */
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyInput>
    /**
     * Filter which AgencyMembers to update
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyMember upsert
   */
  export type AgencyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the AgencyMember to update in case it exists.
     */
    where: AgencyMemberWhereUniqueInput
    /**
     * In case the AgencyMember found by the `where` argument doesn't exist, create a new AgencyMember with this data.
     */
    create: XOR<AgencyMemberCreateInput, AgencyMemberUncheckedCreateInput>
    /**
     * In case the AgencyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyMemberUpdateInput, AgencyMemberUncheckedUpdateInput>
  }

  /**
   * AgencyMember delete
   */
  export type AgencyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter which AgencyMember to delete.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember deleteMany
   */
  export type AgencyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyMembers to delete
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to delete.
     */
    limit?: number
  }

  /**
   * AgencyMember without action
   */
  export type AgencyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    ownerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    ownerId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    ownerId: number
    status: number
    createdAt: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    description: string
    ownerId: string
    status: string
    createdAt: Date
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "ownerId" | "status" | "createdAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      ownerId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly ownerId: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    agentId: string | null
    status: string | null
    appliedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    agentId: string | null
    status: string | null
    appliedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    agentId: number
    status: number
    appliedAt: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    agentId?: true
    status?: true
    appliedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    agentId?: true
    status?: true
    appliedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    agentId?: true
    status?: true
    appliedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    jobId: string
    agentId: string
    status: string
    appliedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    agentId?: boolean
    status?: boolean
    appliedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    agentId?: boolean
    status?: boolean
    appliedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    agentId?: boolean
    status?: boolean
    appliedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    agentId?: boolean
    status?: boolean
    appliedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "agentId" | "status" | "appliedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      agentId: string
      status: string
      appliedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
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
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly jobId: FieldRef<"JobApplication", 'String'>
    readonly agentId: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'String'>
    readonly appliedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    agentId: number
    name: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    agentId?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    agentId?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    agentId?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    agentId: string
    name: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    name?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    endorsements?: boolean | Skill$endorsementsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    name?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    name?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    agentId?: boolean
    name?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "name", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    endorsements?: boolean | Skill$endorsementsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      endorsements: Prisma.$EndorsementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      name: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endorsements<T extends Skill$endorsementsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$endorsementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly agentId: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.endorsements
   */
  export type Skill$endorsementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    where?: EndorsementWhereInput
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    cursor?: EndorsementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Endorsement
   */

  export type AggregateEndorsement = {
    _count: EndorsementCountAggregateOutputType | null
    _min: EndorsementMinAggregateOutputType | null
    _max: EndorsementMaxAggregateOutputType | null
  }

  export type EndorsementMinAggregateOutputType = {
    id: string | null
    skillId: string | null
    giverId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type EndorsementMaxAggregateOutputType = {
    id: string | null
    skillId: string | null
    giverId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type EndorsementCountAggregateOutputType = {
    id: number
    skillId: number
    giverId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type EndorsementMinAggregateInputType = {
    id?: true
    skillId?: true
    giverId?: true
    receiverId?: true
    createdAt?: true
  }

  export type EndorsementMaxAggregateInputType = {
    id?: true
    skillId?: true
    giverId?: true
    receiverId?: true
    createdAt?: true
  }

  export type EndorsementCountAggregateInputType = {
    id?: true
    skillId?: true
    giverId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type EndorsementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endorsement to aggregate.
     */
    where?: EndorsementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endorsements to fetch.
     */
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndorsementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endorsements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endorsements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Endorsements
    **/
    _count?: true | EndorsementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndorsementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndorsementMaxAggregateInputType
  }

  export type GetEndorsementAggregateType<T extends EndorsementAggregateArgs> = {
        [P in keyof T & keyof AggregateEndorsement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndorsement[P]>
      : GetScalarType<T[P], AggregateEndorsement[P]>
  }




  export type EndorsementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndorsementWhereInput
    orderBy?: EndorsementOrderByWithAggregationInput | EndorsementOrderByWithAggregationInput[]
    by: EndorsementScalarFieldEnum[] | EndorsementScalarFieldEnum
    having?: EndorsementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndorsementCountAggregateInputType | true
    _min?: EndorsementMinAggregateInputType
    _max?: EndorsementMaxAggregateInputType
  }

  export type EndorsementGroupByOutputType = {
    id: string
    skillId: string
    giverId: string
    receiverId: string
    createdAt: Date
    _count: EndorsementCountAggregateOutputType | null
    _min: EndorsementMinAggregateOutputType | null
    _max: EndorsementMaxAggregateOutputType | null
  }

  type GetEndorsementGroupByPayload<T extends EndorsementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndorsementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndorsementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndorsementGroupByOutputType[P]>
            : GetScalarType<T[P], EndorsementGroupByOutputType[P]>
        }
      >
    >


  export type EndorsementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    giverId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endorsement"]>

  export type EndorsementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    giverId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endorsement"]>

  export type EndorsementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    giverId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endorsement"]>

  export type EndorsementSelectScalar = {
    id?: boolean
    skillId?: boolean
    giverId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type EndorsementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillId" | "giverId" | "receiverId" | "createdAt", ExtArgs["result"]["endorsement"]>
  export type EndorsementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type EndorsementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type EndorsementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    giver?: boolean | AgentDefaultArgs<ExtArgs>
    receiver?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $EndorsementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endorsement"
    objects: {
      skill: Prisma.$SkillPayload<ExtArgs>
      giver: Prisma.$AgentPayload<ExtArgs>
      receiver: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skillId: string
      giverId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["endorsement"]>
    composites: {}
  }

  type EndorsementGetPayload<S extends boolean | null | undefined | EndorsementDefaultArgs> = $Result.GetResult<Prisma.$EndorsementPayload, S>

  type EndorsementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndorsementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndorsementCountAggregateInputType | true
    }

  export interface EndorsementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endorsement'], meta: { name: 'Endorsement' } }
    /**
     * Find zero or one Endorsement that matches the filter.
     * @param {EndorsementFindUniqueArgs} args - Arguments to find a Endorsement
     * @example
     * // Get one Endorsement
     * const endorsement = await prisma.endorsement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndorsementFindUniqueArgs>(args: SelectSubset<T, EndorsementFindUniqueArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endorsement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndorsementFindUniqueOrThrowArgs} args - Arguments to find a Endorsement
     * @example
     * // Get one Endorsement
     * const endorsement = await prisma.endorsement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndorsementFindUniqueOrThrowArgs>(args: SelectSubset<T, EndorsementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endorsement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementFindFirstArgs} args - Arguments to find a Endorsement
     * @example
     * // Get one Endorsement
     * const endorsement = await prisma.endorsement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndorsementFindFirstArgs>(args?: SelectSubset<T, EndorsementFindFirstArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endorsement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementFindFirstOrThrowArgs} args - Arguments to find a Endorsement
     * @example
     * // Get one Endorsement
     * const endorsement = await prisma.endorsement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndorsementFindFirstOrThrowArgs>(args?: SelectSubset<T, EndorsementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endorsements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endorsements
     * const endorsements = await prisma.endorsement.findMany()
     * 
     * // Get first 10 Endorsements
     * const endorsements = await prisma.endorsement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endorsementWithIdOnly = await prisma.endorsement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndorsementFindManyArgs>(args?: SelectSubset<T, EndorsementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endorsement.
     * @param {EndorsementCreateArgs} args - Arguments to create a Endorsement.
     * @example
     * // Create one Endorsement
     * const Endorsement = await prisma.endorsement.create({
     *   data: {
     *     // ... data to create a Endorsement
     *   }
     * })
     * 
     */
    create<T extends EndorsementCreateArgs>(args: SelectSubset<T, EndorsementCreateArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endorsements.
     * @param {EndorsementCreateManyArgs} args - Arguments to create many Endorsements.
     * @example
     * // Create many Endorsements
     * const endorsement = await prisma.endorsement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndorsementCreateManyArgs>(args?: SelectSubset<T, EndorsementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endorsements and returns the data saved in the database.
     * @param {EndorsementCreateManyAndReturnArgs} args - Arguments to create many Endorsements.
     * @example
     * // Create many Endorsements
     * const endorsement = await prisma.endorsement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endorsements and only return the `id`
     * const endorsementWithIdOnly = await prisma.endorsement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndorsementCreateManyAndReturnArgs>(args?: SelectSubset<T, EndorsementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endorsement.
     * @param {EndorsementDeleteArgs} args - Arguments to delete one Endorsement.
     * @example
     * // Delete one Endorsement
     * const Endorsement = await prisma.endorsement.delete({
     *   where: {
     *     // ... filter to delete one Endorsement
     *   }
     * })
     * 
     */
    delete<T extends EndorsementDeleteArgs>(args: SelectSubset<T, EndorsementDeleteArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endorsement.
     * @param {EndorsementUpdateArgs} args - Arguments to update one Endorsement.
     * @example
     * // Update one Endorsement
     * const endorsement = await prisma.endorsement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndorsementUpdateArgs>(args: SelectSubset<T, EndorsementUpdateArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endorsements.
     * @param {EndorsementDeleteManyArgs} args - Arguments to filter Endorsements to delete.
     * @example
     * // Delete a few Endorsements
     * const { count } = await prisma.endorsement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndorsementDeleteManyArgs>(args?: SelectSubset<T, EndorsementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endorsements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endorsements
     * const endorsement = await prisma.endorsement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndorsementUpdateManyArgs>(args: SelectSubset<T, EndorsementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endorsements and returns the data updated in the database.
     * @param {EndorsementUpdateManyAndReturnArgs} args - Arguments to update many Endorsements.
     * @example
     * // Update many Endorsements
     * const endorsement = await prisma.endorsement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endorsements and only return the `id`
     * const endorsementWithIdOnly = await prisma.endorsement.updateManyAndReturn({
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
    updateManyAndReturn<T extends EndorsementUpdateManyAndReturnArgs>(args: SelectSubset<T, EndorsementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endorsement.
     * @param {EndorsementUpsertArgs} args - Arguments to update or create a Endorsement.
     * @example
     * // Update or create a Endorsement
     * const endorsement = await prisma.endorsement.upsert({
     *   create: {
     *     // ... data to create a Endorsement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endorsement we want to update
     *   }
     * })
     */
    upsert<T extends EndorsementUpsertArgs>(args: SelectSubset<T, EndorsementUpsertArgs<ExtArgs>>): Prisma__EndorsementClient<$Result.GetResult<Prisma.$EndorsementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endorsements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementCountArgs} args - Arguments to filter Endorsements to count.
     * @example
     * // Count the number of Endorsements
     * const count = await prisma.endorsement.count({
     *   where: {
     *     // ... the filter for the Endorsements we want to count
     *   }
     * })
    **/
    count<T extends EndorsementCountArgs>(
      args?: Subset<T, EndorsementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndorsementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endorsement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndorsementAggregateArgs>(args: Subset<T, EndorsementAggregateArgs>): Prisma.PrismaPromise<GetEndorsementAggregateType<T>>

    /**
     * Group by Endorsement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndorsementGroupByArgs} args - Group by arguments.
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
      T extends EndorsementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndorsementGroupByArgs['orderBy'] }
        : { orderBy?: EndorsementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndorsementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndorsementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endorsement model
   */
  readonly fields: EndorsementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endorsement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndorsementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endorsement model
   */
  interface EndorsementFieldRefs {
    readonly id: FieldRef<"Endorsement", 'String'>
    readonly skillId: FieldRef<"Endorsement", 'String'>
    readonly giverId: FieldRef<"Endorsement", 'String'>
    readonly receiverId: FieldRef<"Endorsement", 'String'>
    readonly createdAt: FieldRef<"Endorsement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Endorsement findUnique
   */
  export type EndorsementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter, which Endorsement to fetch.
     */
    where: EndorsementWhereUniqueInput
  }

  /**
   * Endorsement findUniqueOrThrow
   */
  export type EndorsementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter, which Endorsement to fetch.
     */
    where: EndorsementWhereUniqueInput
  }

  /**
   * Endorsement findFirst
   */
  export type EndorsementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter, which Endorsement to fetch.
     */
    where?: EndorsementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endorsements to fetch.
     */
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endorsements.
     */
    cursor?: EndorsementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endorsements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endorsements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endorsements.
     */
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Endorsement findFirstOrThrow
   */
  export type EndorsementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter, which Endorsement to fetch.
     */
    where?: EndorsementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endorsements to fetch.
     */
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endorsements.
     */
    cursor?: EndorsementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endorsements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endorsements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endorsements.
     */
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Endorsement findMany
   */
  export type EndorsementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter, which Endorsements to fetch.
     */
    where?: EndorsementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endorsements to fetch.
     */
    orderBy?: EndorsementOrderByWithRelationInput | EndorsementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Endorsements.
     */
    cursor?: EndorsementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endorsements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endorsements.
     */
    skip?: number
    distinct?: EndorsementScalarFieldEnum | EndorsementScalarFieldEnum[]
  }

  /**
   * Endorsement create
   */
  export type EndorsementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * The data needed to create a Endorsement.
     */
    data: XOR<EndorsementCreateInput, EndorsementUncheckedCreateInput>
  }

  /**
   * Endorsement createMany
   */
  export type EndorsementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Endorsements.
     */
    data: EndorsementCreateManyInput | EndorsementCreateManyInput[]
  }

  /**
   * Endorsement createManyAndReturn
   */
  export type EndorsementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * The data used to create many Endorsements.
     */
    data: EndorsementCreateManyInput | EndorsementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endorsement update
   */
  export type EndorsementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * The data needed to update a Endorsement.
     */
    data: XOR<EndorsementUpdateInput, EndorsementUncheckedUpdateInput>
    /**
     * Choose, which Endorsement to update.
     */
    where: EndorsementWhereUniqueInput
  }

  /**
   * Endorsement updateMany
   */
  export type EndorsementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Endorsements.
     */
    data: XOR<EndorsementUpdateManyMutationInput, EndorsementUncheckedUpdateManyInput>
    /**
     * Filter which Endorsements to update
     */
    where?: EndorsementWhereInput
    /**
     * Limit how many Endorsements to update.
     */
    limit?: number
  }

  /**
   * Endorsement updateManyAndReturn
   */
  export type EndorsementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * The data used to update Endorsements.
     */
    data: XOR<EndorsementUpdateManyMutationInput, EndorsementUncheckedUpdateManyInput>
    /**
     * Filter which Endorsements to update
     */
    where?: EndorsementWhereInput
    /**
     * Limit how many Endorsements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endorsement upsert
   */
  export type EndorsementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * The filter to search for the Endorsement to update in case it exists.
     */
    where: EndorsementWhereUniqueInput
    /**
     * In case the Endorsement found by the `where` argument doesn't exist, create a new Endorsement with this data.
     */
    create: XOR<EndorsementCreateInput, EndorsementUncheckedCreateInput>
    /**
     * In case the Endorsement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndorsementUpdateInput, EndorsementUncheckedUpdateInput>
  }

  /**
   * Endorsement delete
   */
  export type EndorsementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
    /**
     * Filter which Endorsement to delete.
     */
    where: EndorsementWhereUniqueInput
  }

  /**
   * Endorsement deleteMany
   */
  export type EndorsementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endorsements to delete
     */
    where?: EndorsementWhereInput
    /**
     * Limit how many Endorsements to delete.
     */
    limit?: number
  }

  /**
   * Endorsement without action
   */
  export type EndorsementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endorsement
     */
    select?: EndorsementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endorsement
     */
    omit?: EndorsementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndorsementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgentScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    name: 'name',
    bornAt: 'bornAt',
    region: 'region',
    platform: 'platform',
    arch: 'arch',
    runtime: 'runtime',
    uak: 'uak',
    ownerId: 'ownerId'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const PersonalityScalarFieldEnum: {
    agentId: 'agentId',
    vector: 'vector',
    traits: 'traits'
  };

  export type PersonalityScalarFieldEnum = (typeof PersonalityScalarFieldEnum)[keyof typeof PersonalityScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    key: 'key',
    description: 'description',
    timestamp: 'timestamp',
    metadata: 'metadata',
    isAchievement: 'isAchievement'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const FactScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    key: 'key',
    value: 'value',
    timestamp: 'timestamp'
  };

  export type FactScalarFieldEnum = (typeof FactScalarFieldEnum)[keyof typeof FactScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    content: 'content',
    category: 'category',
    likes: 'likes',
    signature: 'signature',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    agentId: 'agentId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    connectedToId: 'connectedToId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const AgencyMemberScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    agentId: 'agentId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type AgencyMemberScalarFieldEnum = (typeof AgencyMemberScalarFieldEnum)[keyof typeof AgencyMemberScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    ownerId: 'ownerId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    agentId: 'agentId',
    status: 'status',
    appliedAt: 'appliedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    name: 'name'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const EndorsementScalarFieldEnum: {
    id: 'id',
    skillId: 'skillId',
    giverId: 'giverId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type EndorsementScalarFieldEnum = (typeof EndorsementScalarFieldEnum)[keyof typeof EndorsementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    publicKey?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    bornAt?: DateTimeFilter<"Agent"> | Date | string
    region?: StringFilter<"Agent"> | string
    platform?: StringFilter<"Agent"> | string
    arch?: StringFilter<"Agent"> | string
    runtime?: StringFilter<"Agent"> | string
    uak?: StringFilter<"Agent"> | string
    ownerId?: StringNullableFilter<"Agent"> | string | null
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    personality?: XOR<PersonalityNullableScalarRelationFilter, PersonalityWhereInput> | null
    milestones?: MilestoneListRelationFilter
    facts?: FactListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    connections?: ConnectionListRelationFilter
    connectedBy?: ConnectionListRelationFilter
    agencyMemberships?: AgencyMemberListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    skills?: SkillListRelationFilter
    endorsementsGiven?: EndorsementListRelationFilter
    endorsementsRecv?: EndorsementListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    name?: SortOrder
    bornAt?: SortOrder
    region?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    runtime?: SortOrder
    uak?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
    personality?: PersonalityOrderByWithRelationInput
    milestones?: MilestoneOrderByRelationAggregateInput
    facts?: FactOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    connections?: ConnectionOrderByRelationAggregateInput
    connectedBy?: ConnectionOrderByRelationAggregateInput
    agencyMemberships?: AgencyMemberOrderByRelationAggregateInput
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    endorsementsGiven?: EndorsementOrderByRelationAggregateInput
    endorsementsRecv?: EndorsementOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    uak?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    name?: StringFilter<"Agent"> | string
    bornAt?: DateTimeFilter<"Agent"> | Date | string
    region?: StringFilter<"Agent"> | string
    platform?: StringFilter<"Agent"> | string
    arch?: StringFilter<"Agent"> | string
    runtime?: StringFilter<"Agent"> | string
    ownerId?: StringNullableFilter<"Agent"> | string | null
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    personality?: XOR<PersonalityNullableScalarRelationFilter, PersonalityWhereInput> | null
    milestones?: MilestoneListRelationFilter
    facts?: FactListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    connections?: ConnectionListRelationFilter
    connectedBy?: ConnectionListRelationFilter
    agencyMemberships?: AgencyMemberListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    skills?: SkillListRelationFilter
    endorsementsGiven?: EndorsementListRelationFilter
    endorsementsRecv?: EndorsementListRelationFilter
  }, "id" | "publicKey" | "uak">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    name?: SortOrder
    bornAt?: SortOrder
    region?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    runtime?: SortOrder
    uak?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    publicKey?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    bornAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    region?: StringWithAggregatesFilter<"Agent"> | string
    platform?: StringWithAggregatesFilter<"Agent"> | string
    arch?: StringWithAggregatesFilter<"Agent"> | string
    runtime?: StringWithAggregatesFilter<"Agent"> | string
    uak?: StringWithAggregatesFilter<"Agent"> | string
    ownerId?: StringNullableWithAggregatesFilter<"Agent"> | string | null
  }

  export type PersonalityWhereInput = {
    AND?: PersonalityWhereInput | PersonalityWhereInput[]
    OR?: PersonalityWhereInput[]
    NOT?: PersonalityWhereInput | PersonalityWhereInput[]
    agentId?: StringFilter<"Personality"> | string
    vector?: StringFilter<"Personality"> | string
    traits?: StringFilter<"Personality"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type PersonalityOrderByWithRelationInput = {
    agentId?: SortOrder
    vector?: SortOrder
    traits?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type PersonalityWhereUniqueInput = Prisma.AtLeast<{
    agentId?: string
    AND?: PersonalityWhereInput | PersonalityWhereInput[]
    OR?: PersonalityWhereInput[]
    NOT?: PersonalityWhereInput | PersonalityWhereInput[]
    vector?: StringFilter<"Personality"> | string
    traits?: StringFilter<"Personality"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "agentId">

  export type PersonalityOrderByWithAggregationInput = {
    agentId?: SortOrder
    vector?: SortOrder
    traits?: SortOrder
    _count?: PersonalityCountOrderByAggregateInput
    _max?: PersonalityMaxOrderByAggregateInput
    _min?: PersonalityMinOrderByAggregateInput
  }

  export type PersonalityScalarWhereWithAggregatesInput = {
    AND?: PersonalityScalarWhereWithAggregatesInput | PersonalityScalarWhereWithAggregatesInput[]
    OR?: PersonalityScalarWhereWithAggregatesInput[]
    NOT?: PersonalityScalarWhereWithAggregatesInput | PersonalityScalarWhereWithAggregatesInput[]
    agentId?: StringWithAggregatesFilter<"Personality"> | string
    vector?: StringWithAggregatesFilter<"Personality"> | string
    traits?: StringWithAggregatesFilter<"Personality"> | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: IntFilter<"Milestone"> | number
    agentId?: StringFilter<"Milestone"> | string
    key?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    timestamp?: DateTimeFilter<"Milestone"> | Date | string
    metadata?: StringNullableFilter<"Milestone"> | string | null
    isAchievement?: BoolFilter<"Milestone"> | boolean
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isAchievement?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    agentId?: StringFilter<"Milestone"> | string
    key?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    timestamp?: DateTimeFilter<"Milestone"> | Date | string
    metadata?: StringNullableFilter<"Milestone"> | string | null
    isAchievement?: BoolFilter<"Milestone"> | boolean
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isAchievement?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Milestone"> | number
    agentId?: StringWithAggregatesFilter<"Milestone"> | string
    key?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringWithAggregatesFilter<"Milestone"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    metadata?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    isAchievement?: BoolWithAggregatesFilter<"Milestone"> | boolean
  }

  export type FactWhereInput = {
    AND?: FactWhereInput | FactWhereInput[]
    OR?: FactWhereInput[]
    NOT?: FactWhereInput | FactWhereInput[]
    id?: IntFilter<"Fact"> | number
    agentId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: StringFilter<"Fact"> | string
    timestamp?: DateTimeFilter<"Fact"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type FactOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type FactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FactWhereInput | FactWhereInput[]
    OR?: FactWhereInput[]
    NOT?: FactWhereInput | FactWhereInput[]
    agentId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: StringFilter<"Fact"> | string
    timestamp?: DateTimeFilter<"Fact"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type FactOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    _count?: FactCountOrderByAggregateInput
    _avg?: FactAvgOrderByAggregateInput
    _max?: FactMaxOrderByAggregateInput
    _min?: FactMinOrderByAggregateInput
    _sum?: FactSumOrderByAggregateInput
  }

  export type FactScalarWhereWithAggregatesInput = {
    AND?: FactScalarWhereWithAggregatesInput | FactScalarWhereWithAggregatesInput[]
    OR?: FactScalarWhereWithAggregatesInput[]
    NOT?: FactScalarWhereWithAggregatesInput | FactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fact"> | number
    agentId?: StringWithAggregatesFilter<"Fact"> | string
    key?: StringWithAggregatesFilter<"Fact"> | string
    value?: StringWithAggregatesFilter<"Fact"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Fact"> | Date | string
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    passwordHash?: StringFilter<"Owner"> | string
    agents?: AgentListRelationFilter
    jobs?: JobListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    agents?: AgentOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    passwordHash?: StringFilter<"Owner"> | string
    agents?: AgentListRelationFilter
    jobs?: JobListRelationFilter
  }, "id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    passwordHash?: StringWithAggregatesFilter<"Owner"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    agentId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    signature?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    category?: SortOrder
    likes?: SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    agentId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    signature?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    category?: SortOrder
    likes?: SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    agentId?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    category?: StringWithAggregatesFilter<"Post"> | string
    likes?: IntWithAggregatesFilter<"Post"> | number
    signature?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    agentId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: StringFilter<"Comment"> | string
    agentId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    agentId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: StringFilter<"Connection"> | string
    agentId?: StringFilter<"Connection"> | string
    connectedToId?: StringFilter<"Connection"> | string
    status?: StringFilter<"Connection"> | string
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    connectedTo?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    connectedToId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    connectedTo?: AgentOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    agentId?: StringFilter<"Connection"> | string
    connectedToId?: StringFilter<"Connection"> | string
    status?: StringFilter<"Connection"> | string
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    connectedTo?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    connectedToId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connection"> | string
    agentId?: StringWithAggregatesFilter<"Connection"> | string
    connectedToId?: StringWithAggregatesFilter<"Connection"> | string
    status?: StringWithAggregatesFilter<"Connection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
  }

  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    description?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    members?: AgencyMemberListRelationFilter
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    members?: AgencyMemberOrderByRelationAggregateInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    description?: StringFilter<"Agency"> | string
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    members?: AgencyMemberListRelationFilter
  }, "id" | "name">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    description?: StringWithAggregatesFilter<"Agency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
  }

  export type AgencyMemberWhereInput = {
    AND?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    OR?: AgencyMemberWhereInput[]
    NOT?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    id?: StringFilter<"AgencyMember"> | string
    agencyId?: StringFilter<"AgencyMember"> | string
    agentId?: StringFilter<"AgencyMember"> | string
    role?: StringFilter<"AgencyMember"> | string
    joinedAt?: DateTimeFilter<"AgencyMember"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type AgencyMemberOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
  }

  export type AgencyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    OR?: AgencyMemberWhereInput[]
    NOT?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    agencyId?: StringFilter<"AgencyMember"> | string
    agentId?: StringFilter<"AgencyMember"> | string
    role?: StringFilter<"AgencyMember"> | string
    joinedAt?: DateTimeFilter<"AgencyMember"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type AgencyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: AgencyMemberCountOrderByAggregateInput
    _max?: AgencyMemberMaxOrderByAggregateInput
    _min?: AgencyMemberMinOrderByAggregateInput
  }

  export type AgencyMemberScalarWhereWithAggregatesInput = {
    AND?: AgencyMemberScalarWhereWithAggregatesInput | AgencyMemberScalarWhereWithAggregatesInput[]
    OR?: AgencyMemberScalarWhereWithAggregatesInput[]
    NOT?: AgencyMemberScalarWhereWithAggregatesInput | AgencyMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgencyMember"> | string
    agencyId?: StringWithAggregatesFilter<"AgencyMember"> | string
    agentId?: StringWithAggregatesFilter<"AgencyMember"> | string
    role?: StringWithAggregatesFilter<"AgencyMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"AgencyMember"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    ownerId?: StringFilter<"Job"> | string
    status?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    applications?: JobApplicationListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    owner?: OwnerOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    ownerId?: StringFilter<"Job"> | string
    status?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    applications?: JobApplicationListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    ownerId?: StringWithAggregatesFilter<"Job"> | string
    status?: StringWithAggregatesFilter<"Job"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    agentId?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    agent?: AgentOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    jobId?: StringFilter<"JobApplication"> | string
    agentId?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    jobId?: StringWithAggregatesFilter<"JobApplication"> | string
    agentId?: StringWithAggregatesFilter<"JobApplication"> | string
    status?: StringWithAggregatesFilter<"JobApplication"> | string
    appliedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    agentId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    endorsements?: EndorsementListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    name?: SortOrder
    agent?: AgentOrderByWithRelationInput
    endorsements?: EndorsementOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    agentId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    endorsements?: EndorsementListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    agentId?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type EndorsementWhereInput = {
    AND?: EndorsementWhereInput | EndorsementWhereInput[]
    OR?: EndorsementWhereInput[]
    NOT?: EndorsementWhereInput | EndorsementWhereInput[]
    id?: StringFilter<"Endorsement"> | string
    skillId?: StringFilter<"Endorsement"> | string
    giverId?: StringFilter<"Endorsement"> | string
    receiverId?: StringFilter<"Endorsement"> | string
    createdAt?: DateTimeFilter<"Endorsement"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    giver?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    receiver?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type EndorsementOrderByWithRelationInput = {
    id?: SortOrder
    skillId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    skill?: SkillOrderByWithRelationInput
    giver?: AgentOrderByWithRelationInput
    receiver?: AgentOrderByWithRelationInput
  }

  export type EndorsementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EndorsementWhereInput | EndorsementWhereInput[]
    OR?: EndorsementWhereInput[]
    NOT?: EndorsementWhereInput | EndorsementWhereInput[]
    skillId?: StringFilter<"Endorsement"> | string
    giverId?: StringFilter<"Endorsement"> | string
    receiverId?: StringFilter<"Endorsement"> | string
    createdAt?: DateTimeFilter<"Endorsement"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    giver?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    receiver?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type EndorsementOrderByWithAggregationInput = {
    id?: SortOrder
    skillId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: EndorsementCountOrderByAggregateInput
    _max?: EndorsementMaxOrderByAggregateInput
    _min?: EndorsementMinOrderByAggregateInput
  }

  export type EndorsementScalarWhereWithAggregatesInput = {
    AND?: EndorsementScalarWhereWithAggregatesInput | EndorsementScalarWhereWithAggregatesInput[]
    OR?: EndorsementScalarWhereWithAggregatesInput[]
    NOT?: EndorsementScalarWhereWithAggregatesInput | EndorsementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endorsement"> | string
    skillId?: StringWithAggregatesFilter<"Endorsement"> | string
    giverId?: StringWithAggregatesFilter<"Endorsement"> | string
    receiverId?: StringWithAggregatesFilter<"Endorsement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Endorsement"> | Date | string
  }

  export type AgentCreateInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateManyInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalityCreateInput = {
    vector: string
    traits: string
    agent: AgentCreateNestedOneWithoutPersonalityInput
  }

  export type PersonalityUncheckedCreateInput = {
    agentId: string
    vector: string
    traits: string
  }

  export type PersonalityUpdateInput = {
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneRequiredWithoutPersonalityNestedInput
  }

  export type PersonalityUncheckedUpdateInput = {
    agentId?: StringFieldUpdateOperationsInput | string
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalityCreateManyInput = {
    agentId: string
    vector: string
    traits: string
  }

  export type PersonalityUpdateManyMutationInput = {
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalityUncheckedUpdateManyInput = {
    agentId?: StringFieldUpdateOperationsInput | string
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneCreateInput = {
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
    agent: AgentCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: number
    agentId: string
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
  }

  export type MilestoneUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
    agent?: AgentUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MilestoneCreateManyInput = {
    id?: number
    agentId: string
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
  }

  export type MilestoneUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FactCreateInput = {
    key: string
    value: string
    timestamp?: Date | string
    agent: AgentCreateNestedOneWithoutFactsInput
  }

  export type FactUncheckedCreateInput = {
    id?: number
    agentId: string
    key: string
    value: string
    timestamp?: Date | string
  }

  export type FactUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutFactsNestedInput
  }

  export type FactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactCreateManyInput = {
    id?: number
    agentId: string
    key: string
    value: string
    timestamp?: Date | string
  }

  export type FactUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateInput = {
    id?: string
    email: string
    passwordHash: string
    agents?: AgentCreateNestedManyWithoutOwnerInput
    jobs?: JobCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    agents?: AgentUncheckedCreateNestedManyWithoutOwnerInput
    jobs?: JobUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutOwnerNestedInput
    jobs?: JobUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutOwnerNestedInput
    jobs?: JobUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    agentId: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    agentId: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    agent: AgentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId: string
    agentId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    agent?: AgentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    postId: string
    agentId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutConnectionsInput
    connectedTo: AgentCreateNestedOneWithoutConnectedByInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: string
    agentId: string
    connectedToId: string
    status?: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutConnectionsNestedInput
    connectedTo?: AgentUpdateOneRequiredWithoutConnectedByNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    connectedToId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyInput = {
    id?: string
    agentId: string
    connectedToId: string
    status?: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    connectedToId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    members?: AgencyMemberCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    members?: AgencyMemberUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutMembersInput
    agent: AgentCreateNestedOneWithoutAgencyMembershipsInput
  }

  export type AgencyMemberUncheckedCreateInput = {
    id?: string
    agencyId: string
    agentId: string
    role?: string
    joinedAt?: Date | string
  }

  export type AgencyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutMembersNestedInput
    agent?: AgentUpdateOneRequiredWithoutAgencyMembershipsNestedInput
  }

  export type AgencyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberCreateManyInput = {
    id?: string
    agencyId: string
    agentId: string
    role?: string
    joinedAt?: Date | string
  }

  export type AgencyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    description: string
    status?: string
    createdAt?: Date | string
    owner: OwnerCreateNestedOneWithoutJobsInput
    applications?: JobApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutJobsNestedInput
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    agent: AgentCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    jobId: string
    agentId: string
    status?: string
    appliedAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    agent?: AgentUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    jobId: string
    agentId: string
    status?: string
    appliedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    agent: AgentCreateNestedOneWithoutSkillsInput
    endorsements?: EndorsementCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    agentId: string
    name: string
    endorsements?: EndorsementUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneRequiredWithoutSkillsNestedInput
    endorsements?: EndorsementUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    endorsements?: EndorsementUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    agentId: string
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EndorsementCreateInput = {
    id?: string
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutEndorsementsInput
    giver: AgentCreateNestedOneWithoutEndorsementsGivenInput
    receiver: AgentCreateNestedOneWithoutEndorsementsRecvInput
  }

  export type EndorsementUncheckedCreateInput = {
    id?: string
    skillId: string
    giverId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutEndorsementsNestedInput
    giver?: AgentUpdateOneRequiredWithoutEndorsementsGivenNestedInput
    receiver?: AgentUpdateOneRequiredWithoutEndorsementsRecvNestedInput
  }

  export type EndorsementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementCreateManyInput = {
    id?: string
    skillId: string
    giverId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OwnerNullableScalarRelationFilter = {
    is?: OwnerWhereInput | null
    isNot?: OwnerWhereInput | null
  }

  export type PersonalityNullableScalarRelationFilter = {
    is?: PersonalityWhereInput | null
    isNot?: PersonalityWhereInput | null
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type FactListRelationFilter = {
    every?: FactWhereInput
    some?: FactWhereInput
    none?: FactWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type AgencyMemberListRelationFilter = {
    every?: AgencyMemberWhereInput
    some?: AgencyMemberWhereInput
    none?: AgencyMemberWhereInput
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type EndorsementListRelationFilter = {
    every?: EndorsementWhereInput
    some?: EndorsementWhereInput
    none?: EndorsementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EndorsementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    name?: SortOrder
    bornAt?: SortOrder
    region?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    runtime?: SortOrder
    uak?: SortOrder
    ownerId?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    name?: SortOrder
    bornAt?: SortOrder
    region?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    runtime?: SortOrder
    uak?: SortOrder
    ownerId?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    name?: SortOrder
    bornAt?: SortOrder
    region?: SortOrder
    platform?: SortOrder
    arch?: SortOrder
    runtime?: SortOrder
    uak?: SortOrder
    ownerId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type PersonalityCountOrderByAggregateInput = {
    agentId?: SortOrder
    vector?: SortOrder
    traits?: SortOrder
  }

  export type PersonalityMaxOrderByAggregateInput = {
    agentId?: SortOrder
    vector?: SortOrder
    traits?: SortOrder
  }

  export type PersonalityMinOrderByAggregateInput = {
    agentId?: SortOrder
    vector?: SortOrder
    traits?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    isAchievement?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    isAchievement?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    isAchievement?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FactCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type FactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FactMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type FactMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
  }

  export type FactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    category?: SortOrder
    likes?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    category?: SortOrder
    likes?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    category?: SortOrder
    likes?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    agentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    connectedToId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    connectedToId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    connectedToId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AgencyScalarRelationFilter = {
    is?: AgencyWhereInput
    isNot?: AgencyWhereInput
  }

  export type AgencyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type AgencyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type AgencyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    agentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    name?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    name?: SortOrder
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type EndorsementCountOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type EndorsementMaxOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type EndorsementMinOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    giverId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerCreateNestedOneWithoutAgentsInput = {
    create?: XOR<OwnerCreateWithoutAgentsInput, OwnerUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAgentsInput
    connect?: OwnerWhereUniqueInput
  }

  export type PersonalityCreateNestedOneWithoutAgentInput = {
    create?: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PersonalityCreateOrConnectWithoutAgentInput
    connect?: PersonalityWhereUniqueInput
  }

  export type MilestoneCreateNestedManyWithoutAgentInput = {
    create?: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput> | MilestoneCreateWithoutAgentInput[] | MilestoneUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutAgentInput | MilestoneCreateOrConnectWithoutAgentInput[]
    createMany?: MilestoneCreateManyAgentInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type FactCreateNestedManyWithoutAgentInput = {
    create?: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput> | FactCreateWithoutAgentInput[] | FactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: FactCreateOrConnectWithoutAgentInput | FactCreateOrConnectWithoutAgentInput[]
    createMany?: FactCreateManyAgentInputEnvelope
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAgentInput = {
    create?: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput> | PostCreateWithoutAgentInput[] | PostUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAgentInput | PostCreateOrConnectWithoutAgentInput[]
    createMany?: PostCreateManyAgentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAgentInput = {
    create?: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput> | CommentCreateWithoutAgentInput[] | CommentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAgentInput | CommentCreateOrConnectWithoutAgentInput[]
    createMany?: CommentCreateManyAgentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ConnectionCreateNestedManyWithoutAgentInput = {
    create?: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput> | ConnectionCreateWithoutAgentInput[] | ConnectionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutAgentInput | ConnectionCreateOrConnectWithoutAgentInput[]
    createMany?: ConnectionCreateManyAgentInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionCreateNestedManyWithoutConnectedToInput = {
    create?: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput> | ConnectionCreateWithoutConnectedToInput[] | ConnectionUncheckedCreateWithoutConnectedToInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutConnectedToInput | ConnectionCreateOrConnectWithoutConnectedToInput[]
    createMany?: ConnectionCreateManyConnectedToInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type AgencyMemberCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput> | AgencyMemberCreateWithoutAgentInput[] | AgencyMemberUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgentInput | AgencyMemberCreateOrConnectWithoutAgentInput[]
    createMany?: AgencyMemberCreateManyAgentInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type JobApplicationCreateNestedManyWithoutAgentInput = {
    create?: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput> | JobApplicationCreateWithoutAgentInput[] | JobApplicationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAgentInput | JobApplicationCreateOrConnectWithoutAgentInput[]
    createMany?: JobApplicationCreateManyAgentInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutAgentInput = {
    create?: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput> | SkillCreateWithoutAgentInput[] | SkillUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAgentInput | SkillCreateOrConnectWithoutAgentInput[]
    createMany?: SkillCreateManyAgentInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type EndorsementCreateNestedManyWithoutGiverInput = {
    create?: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput> | EndorsementCreateWithoutGiverInput[] | EndorsementUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutGiverInput | EndorsementCreateOrConnectWithoutGiverInput[]
    createMany?: EndorsementCreateManyGiverInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type EndorsementCreateNestedManyWithoutReceiverInput = {
    create?: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput> | EndorsementCreateWithoutReceiverInput[] | EndorsementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutReceiverInput | EndorsementCreateOrConnectWithoutReceiverInput[]
    createMany?: EndorsementCreateManyReceiverInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type PersonalityUncheckedCreateNestedOneWithoutAgentInput = {
    create?: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PersonalityCreateOrConnectWithoutAgentInput
    connect?: PersonalityWhereUniqueInput
  }

  export type MilestoneUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput> | MilestoneCreateWithoutAgentInput[] | MilestoneUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutAgentInput | MilestoneCreateOrConnectWithoutAgentInput[]
    createMany?: MilestoneCreateManyAgentInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type FactUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput> | FactCreateWithoutAgentInput[] | FactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: FactCreateOrConnectWithoutAgentInput | FactCreateOrConnectWithoutAgentInput[]
    createMany?: FactCreateManyAgentInputEnvelope
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput> | PostCreateWithoutAgentInput[] | PostUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAgentInput | PostCreateOrConnectWithoutAgentInput[]
    createMany?: PostCreateManyAgentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput> | CommentCreateWithoutAgentInput[] | CommentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAgentInput | CommentCreateOrConnectWithoutAgentInput[]
    createMany?: CommentCreateManyAgentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput> | ConnectionCreateWithoutAgentInput[] | ConnectionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutAgentInput | ConnectionCreateOrConnectWithoutAgentInput[]
    createMany?: ConnectionCreateManyAgentInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutConnectedToInput = {
    create?: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput> | ConnectionCreateWithoutConnectedToInput[] | ConnectionUncheckedCreateWithoutConnectedToInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutConnectedToInput | ConnectionCreateOrConnectWithoutConnectedToInput[]
    createMany?: ConnectionCreateManyConnectedToInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type AgencyMemberUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput> | AgencyMemberCreateWithoutAgentInput[] | AgencyMemberUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgentInput | AgencyMemberCreateOrConnectWithoutAgentInput[]
    createMany?: AgencyMemberCreateManyAgentInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput> | JobApplicationCreateWithoutAgentInput[] | JobApplicationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAgentInput | JobApplicationCreateOrConnectWithoutAgentInput[]
    createMany?: JobApplicationCreateManyAgentInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput> | SkillCreateWithoutAgentInput[] | SkillUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAgentInput | SkillCreateOrConnectWithoutAgentInput[]
    createMany?: SkillCreateManyAgentInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type EndorsementUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput> | EndorsementCreateWithoutGiverInput[] | EndorsementUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutGiverInput | EndorsementCreateOrConnectWithoutGiverInput[]
    createMany?: EndorsementCreateManyGiverInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type EndorsementUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput> | EndorsementCreateWithoutReceiverInput[] | EndorsementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutReceiverInput | EndorsementCreateOrConnectWithoutReceiverInput[]
    createMany?: EndorsementCreateManyReceiverInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OwnerUpdateOneWithoutAgentsNestedInput = {
    create?: XOR<OwnerCreateWithoutAgentsInput, OwnerUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAgentsInput
    upsert?: OwnerUpsertWithoutAgentsInput
    disconnect?: OwnerWhereInput | boolean
    delete?: OwnerWhereInput | boolean
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutAgentsInput, OwnerUpdateWithoutAgentsInput>, OwnerUncheckedUpdateWithoutAgentsInput>
  }

  export type PersonalityUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PersonalityCreateOrConnectWithoutAgentInput
    upsert?: PersonalityUpsertWithoutAgentInput
    disconnect?: PersonalityWhereInput | boolean
    delete?: PersonalityWhereInput | boolean
    connect?: PersonalityWhereUniqueInput
    update?: XOR<XOR<PersonalityUpdateToOneWithWhereWithoutAgentInput, PersonalityUpdateWithoutAgentInput>, PersonalityUncheckedUpdateWithoutAgentInput>
  }

  export type MilestoneUpdateManyWithoutAgentNestedInput = {
    create?: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput> | MilestoneCreateWithoutAgentInput[] | MilestoneUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutAgentInput | MilestoneCreateOrConnectWithoutAgentInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutAgentInput | MilestoneUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: MilestoneCreateManyAgentInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutAgentInput | MilestoneUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutAgentInput | MilestoneUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type FactUpdateManyWithoutAgentNestedInput = {
    create?: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput> | FactCreateWithoutAgentInput[] | FactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: FactCreateOrConnectWithoutAgentInput | FactCreateOrConnectWithoutAgentInput[]
    upsert?: FactUpsertWithWhereUniqueWithoutAgentInput | FactUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: FactCreateManyAgentInputEnvelope
    set?: FactWhereUniqueInput | FactWhereUniqueInput[]
    disconnect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    delete?: FactWhereUniqueInput | FactWhereUniqueInput[]
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    update?: FactUpdateWithWhereUniqueWithoutAgentInput | FactUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: FactUpdateManyWithWhereWithoutAgentInput | FactUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: FactScalarWhereInput | FactScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput> | PostCreateWithoutAgentInput[] | PostUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAgentInput | PostCreateOrConnectWithoutAgentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAgentInput | PostUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PostCreateManyAgentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAgentInput | PostUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAgentInput | PostUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAgentNestedInput = {
    create?: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput> | CommentCreateWithoutAgentInput[] | CommentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAgentInput | CommentCreateOrConnectWithoutAgentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAgentInput | CommentUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: CommentCreateManyAgentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAgentInput | CommentUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAgentInput | CommentUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ConnectionUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput> | ConnectionCreateWithoutAgentInput[] | ConnectionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutAgentInput | ConnectionCreateOrConnectWithoutAgentInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutAgentInput | ConnectionUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ConnectionCreateManyAgentInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutAgentInput | ConnectionUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutAgentInput | ConnectionUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUpdateManyWithoutConnectedToNestedInput = {
    create?: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput> | ConnectionCreateWithoutConnectedToInput[] | ConnectionUncheckedCreateWithoutConnectedToInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutConnectedToInput | ConnectionCreateOrConnectWithoutConnectedToInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutConnectedToInput | ConnectionUpsertWithWhereUniqueWithoutConnectedToInput[]
    createMany?: ConnectionCreateManyConnectedToInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutConnectedToInput | ConnectionUpdateWithWhereUniqueWithoutConnectedToInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutConnectedToInput | ConnectionUpdateManyWithWhereWithoutConnectedToInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type AgencyMemberUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput> | AgencyMemberCreateWithoutAgentInput[] | AgencyMemberUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgentInput | AgencyMemberCreateOrConnectWithoutAgentInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgentInput | AgencyMemberUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgencyMemberCreateManyAgentInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgentInput | AgencyMemberUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgentInput | AgencyMemberUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type JobApplicationUpdateManyWithoutAgentNestedInput = {
    create?: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput> | JobApplicationCreateWithoutAgentInput[] | JobApplicationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAgentInput | JobApplicationCreateOrConnectWithoutAgentInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutAgentInput | JobApplicationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: JobApplicationCreateManyAgentInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutAgentInput | JobApplicationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutAgentInput | JobApplicationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutAgentNestedInput = {
    create?: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput> | SkillCreateWithoutAgentInput[] | SkillUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAgentInput | SkillCreateOrConnectWithoutAgentInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutAgentInput | SkillUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: SkillCreateManyAgentInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutAgentInput | SkillUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutAgentInput | SkillUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type EndorsementUpdateManyWithoutGiverNestedInput = {
    create?: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput> | EndorsementCreateWithoutGiverInput[] | EndorsementUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutGiverInput | EndorsementCreateOrConnectWithoutGiverInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutGiverInput | EndorsementUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: EndorsementCreateManyGiverInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutGiverInput | EndorsementUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutGiverInput | EndorsementUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type EndorsementUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput> | EndorsementCreateWithoutReceiverInput[] | EndorsementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutReceiverInput | EndorsementCreateOrConnectWithoutReceiverInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutReceiverInput | EndorsementUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: EndorsementCreateManyReceiverInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutReceiverInput | EndorsementUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutReceiverInput | EndorsementUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PersonalityUncheckedUpdateOneWithoutAgentNestedInput = {
    create?: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
    connectOrCreate?: PersonalityCreateOrConnectWithoutAgentInput
    upsert?: PersonalityUpsertWithoutAgentInput
    disconnect?: PersonalityWhereInput | boolean
    delete?: PersonalityWhereInput | boolean
    connect?: PersonalityWhereUniqueInput
    update?: XOR<XOR<PersonalityUpdateToOneWithWhereWithoutAgentInput, PersonalityUpdateWithoutAgentInput>, PersonalityUncheckedUpdateWithoutAgentInput>
  }

  export type MilestoneUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput> | MilestoneCreateWithoutAgentInput[] | MilestoneUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutAgentInput | MilestoneCreateOrConnectWithoutAgentInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutAgentInput | MilestoneUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: MilestoneCreateManyAgentInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutAgentInput | MilestoneUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutAgentInput | MilestoneUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type FactUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput> | FactCreateWithoutAgentInput[] | FactUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: FactCreateOrConnectWithoutAgentInput | FactCreateOrConnectWithoutAgentInput[]
    upsert?: FactUpsertWithWhereUniqueWithoutAgentInput | FactUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: FactCreateManyAgentInputEnvelope
    set?: FactWhereUniqueInput | FactWhereUniqueInput[]
    disconnect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    delete?: FactWhereUniqueInput | FactWhereUniqueInput[]
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    update?: FactUpdateWithWhereUniqueWithoutAgentInput | FactUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: FactUpdateManyWithWhereWithoutAgentInput | FactUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: FactScalarWhereInput | FactScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput> | PostCreateWithoutAgentInput[] | PostUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAgentInput | PostCreateOrConnectWithoutAgentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAgentInput | PostUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PostCreateManyAgentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAgentInput | PostUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAgentInput | PostUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput> | CommentCreateWithoutAgentInput[] | CommentUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAgentInput | CommentCreateOrConnectWithoutAgentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAgentInput | CommentUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: CommentCreateManyAgentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAgentInput | CommentUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAgentInput | CommentUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput> | ConnectionCreateWithoutAgentInput[] | ConnectionUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutAgentInput | ConnectionCreateOrConnectWithoutAgentInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutAgentInput | ConnectionUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ConnectionCreateManyAgentInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutAgentInput | ConnectionUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutAgentInput | ConnectionUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput = {
    create?: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput> | ConnectionCreateWithoutConnectedToInput[] | ConnectionUncheckedCreateWithoutConnectedToInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutConnectedToInput | ConnectionCreateOrConnectWithoutConnectedToInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutConnectedToInput | ConnectionUpsertWithWhereUniqueWithoutConnectedToInput[]
    createMany?: ConnectionCreateManyConnectedToInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutConnectedToInput | ConnectionUpdateWithWhereUniqueWithoutConnectedToInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutConnectedToInput | ConnectionUpdateManyWithWhereWithoutConnectedToInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput> | AgencyMemberCreateWithoutAgentInput[] | AgencyMemberUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgentInput | AgencyMemberCreateOrConnectWithoutAgentInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgentInput | AgencyMemberUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgencyMemberCreateManyAgentInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgentInput | AgencyMemberUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgentInput | AgencyMemberUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput> | JobApplicationCreateWithoutAgentInput[] | JobApplicationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAgentInput | JobApplicationCreateOrConnectWithoutAgentInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutAgentInput | JobApplicationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: JobApplicationCreateManyAgentInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutAgentInput | JobApplicationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutAgentInput | JobApplicationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput> | SkillCreateWithoutAgentInput[] | SkillUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAgentInput | SkillCreateOrConnectWithoutAgentInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutAgentInput | SkillUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: SkillCreateManyAgentInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutAgentInput | SkillUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutAgentInput | SkillUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type EndorsementUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput> | EndorsementCreateWithoutGiverInput[] | EndorsementUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutGiverInput | EndorsementCreateOrConnectWithoutGiverInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutGiverInput | EndorsementUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: EndorsementCreateManyGiverInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutGiverInput | EndorsementUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutGiverInput | EndorsementUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type EndorsementUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput> | EndorsementCreateWithoutReceiverInput[] | EndorsementUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutReceiverInput | EndorsementCreateOrConnectWithoutReceiverInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutReceiverInput | EndorsementUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: EndorsementCreateManyReceiverInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutReceiverInput | EndorsementUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutReceiverInput | EndorsementUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutPersonalityInput = {
    create?: XOR<AgentCreateWithoutPersonalityInput, AgentUncheckedCreateWithoutPersonalityInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPersonalityInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutPersonalityNestedInput = {
    create?: XOR<AgentCreateWithoutPersonalityInput, AgentUncheckedCreateWithoutPersonalityInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPersonalityInput
    upsert?: AgentUpsertWithoutPersonalityInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutPersonalityInput, AgentUpdateWithoutPersonalityInput>, AgentUncheckedUpdateWithoutPersonalityInput>
  }

  export type AgentCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<AgentCreateWithoutMilestonesInput, AgentUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutMilestonesInput
    connect?: AgentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AgentUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<AgentCreateWithoutMilestonesInput, AgentUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutMilestonesInput
    upsert?: AgentUpsertWithoutMilestonesInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutMilestonesInput, AgentUpdateWithoutMilestonesInput>, AgentUncheckedUpdateWithoutMilestonesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgentCreateNestedOneWithoutFactsInput = {
    create?: XOR<AgentCreateWithoutFactsInput, AgentUncheckedCreateWithoutFactsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutFactsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutFactsNestedInput = {
    create?: XOR<AgentCreateWithoutFactsInput, AgentUncheckedCreateWithoutFactsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutFactsInput
    upsert?: AgentUpsertWithoutFactsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutFactsInput, AgentUpdateWithoutFactsInput>, AgentUncheckedUpdateWithoutFactsInput>
  }

  export type AgentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput> | AgentCreateWithoutOwnerInput[] | AgentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOwnerInput | AgentCreateOrConnectWithoutOwnerInput[]
    createMany?: AgentCreateManyOwnerInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutOwnerInput = {
    create?: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput> | JobCreateWithoutOwnerInput[] | JobUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutOwnerInput | JobCreateOrConnectWithoutOwnerInput[]
    createMany?: JobCreateManyOwnerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput> | AgentCreateWithoutOwnerInput[] | AgentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOwnerInput | AgentCreateOrConnectWithoutOwnerInput[]
    createMany?: AgentCreateManyOwnerInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput> | JobCreateWithoutOwnerInput[] | JobUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutOwnerInput | JobCreateOrConnectWithoutOwnerInput[]
    createMany?: JobCreateManyOwnerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type AgentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput> | AgentCreateWithoutOwnerInput[] | AgentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOwnerInput | AgentCreateOrConnectWithoutOwnerInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutOwnerInput | AgentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AgentCreateManyOwnerInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutOwnerInput | AgentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutOwnerInput | AgentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type JobUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput> | JobCreateWithoutOwnerInput[] | JobUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutOwnerInput | JobCreateOrConnectWithoutOwnerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutOwnerInput | JobUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: JobCreateManyOwnerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutOwnerInput | JobUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutOwnerInput | JobUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput> | AgentCreateWithoutOwnerInput[] | AgentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutOwnerInput | AgentCreateOrConnectWithoutOwnerInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutOwnerInput | AgentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AgentCreateManyOwnerInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutOwnerInput | AgentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutOwnerInput | AgentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput> | JobCreateWithoutOwnerInput[] | JobUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutOwnerInput | JobCreateOrConnectWithoutOwnerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutOwnerInput | JobUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: JobCreateManyOwnerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutOwnerInput | JobUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutOwnerInput | JobUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutPostsInput = {
    create?: XOR<AgentCreateWithoutPostsInput, AgentUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPostsInput
    connect?: AgentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AgentUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<AgentCreateWithoutPostsInput, AgentUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutPostsInput
    upsert?: AgentUpsertWithoutPostsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutPostsInput, AgentUpdateWithoutPostsInput>, AgentUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<AgentCreateWithoutCommentsInput, AgentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutCommentsInput
    connect?: AgentWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type AgentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<AgentCreateWithoutCommentsInput, AgentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutCommentsInput
    upsert?: AgentUpsertWithoutCommentsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutCommentsInput, AgentUpdateWithoutCommentsInput>, AgentUncheckedUpdateWithoutCommentsInput>
  }

  export type AgentCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<AgentCreateWithoutConnectionsInput, AgentUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConnectionsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutConnectedByInput = {
    create?: XOR<AgentCreateWithoutConnectedByInput, AgentUncheckedCreateWithoutConnectedByInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConnectedByInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<AgentCreateWithoutConnectionsInput, AgentUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConnectionsInput
    upsert?: AgentUpsertWithoutConnectionsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutConnectionsInput, AgentUpdateWithoutConnectionsInput>, AgentUncheckedUpdateWithoutConnectionsInput>
  }

  export type AgentUpdateOneRequiredWithoutConnectedByNestedInput = {
    create?: XOR<AgentCreateWithoutConnectedByInput, AgentUncheckedCreateWithoutConnectedByInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConnectedByInput
    upsert?: AgentUpsertWithoutConnectedByInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutConnectedByInput, AgentUpdateWithoutConnectedByInput>, AgentUncheckedUpdateWithoutConnectedByInput>
  }

  export type AgencyMemberCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type AgencyMemberUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type AgencyMemberUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput | AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput | AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgencyInput | AgencyMemberUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput | AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput | AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgencyInput | AgencyMemberUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutMembersInput = {
    create?: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutMembersInput
    connect?: AgencyWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutAgencyMembershipsInput = {
    create?: XOR<AgentCreateWithoutAgencyMembershipsInput, AgentUncheckedCreateWithoutAgencyMembershipsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyMembershipsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgencyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutMembersInput
    upsert?: AgencyUpsertWithoutMembersInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutMembersInput, AgencyUpdateWithoutMembersInput>, AgencyUncheckedUpdateWithoutMembersInput>
  }

  export type AgentUpdateOneRequiredWithoutAgencyMembershipsNestedInput = {
    create?: XOR<AgentCreateWithoutAgencyMembershipsInput, AgentUncheckedCreateWithoutAgencyMembershipsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutAgencyMembershipsInput
    upsert?: AgentUpsertWithoutAgencyMembershipsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutAgencyMembershipsInput, AgentUpdateWithoutAgencyMembershipsInput>, AgentUncheckedUpdateWithoutAgencyMembershipsInput>
  }

  export type OwnerCreateNestedOneWithoutJobsInput = {
    create?: XOR<OwnerCreateWithoutJobsInput, OwnerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutJobsInput
    connect?: OwnerWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type OwnerUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<OwnerCreateWithoutJobsInput, OwnerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutJobsInput
    upsert?: OwnerUpsertWithoutJobsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutJobsInput, OwnerUpdateWithoutJobsInput>, OwnerUncheckedUpdateWithoutJobsInput>
  }

  export type JobApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput> | JobApplicationCreateWithoutJobInput[] | JobApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobInput | JobApplicationCreateOrConnectWithoutJobInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobInput | JobApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobApplicationCreateManyJobInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobInput | JobApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobInput | JobApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<AgentCreateWithoutJobApplicationsInput, AgentUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutJobApplicationsInput
    connect?: AgentWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type AgentUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<AgentCreateWithoutJobApplicationsInput, AgentUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutJobApplicationsInput
    upsert?: AgentUpsertWithoutJobApplicationsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutJobApplicationsInput, AgentUpdateWithoutJobApplicationsInput>, AgentUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type AgentCreateNestedOneWithoutSkillsInput = {
    create?: XOR<AgentCreateWithoutSkillsInput, AgentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutSkillsInput
    connect?: AgentWhereUniqueInput
  }

  export type EndorsementCreateNestedManyWithoutSkillInput = {
    create?: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput> | EndorsementCreateWithoutSkillInput[] | EndorsementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutSkillInput | EndorsementCreateOrConnectWithoutSkillInput[]
    createMany?: EndorsementCreateManySkillInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type EndorsementUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput> | EndorsementCreateWithoutSkillInput[] | EndorsementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutSkillInput | EndorsementCreateOrConnectWithoutSkillInput[]
    createMany?: EndorsementCreateManySkillInputEnvelope
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
  }

  export type AgentUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<AgentCreateWithoutSkillsInput, AgentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutSkillsInput
    upsert?: AgentUpsertWithoutSkillsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutSkillsInput, AgentUpdateWithoutSkillsInput>, AgentUncheckedUpdateWithoutSkillsInput>
  }

  export type EndorsementUpdateManyWithoutSkillNestedInput = {
    create?: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput> | EndorsementCreateWithoutSkillInput[] | EndorsementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutSkillInput | EndorsementCreateOrConnectWithoutSkillInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutSkillInput | EndorsementUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: EndorsementCreateManySkillInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutSkillInput | EndorsementUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutSkillInput | EndorsementUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type EndorsementUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput> | EndorsementCreateWithoutSkillInput[] | EndorsementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: EndorsementCreateOrConnectWithoutSkillInput | EndorsementCreateOrConnectWithoutSkillInput[]
    upsert?: EndorsementUpsertWithWhereUniqueWithoutSkillInput | EndorsementUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: EndorsementCreateManySkillInputEnvelope
    set?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    disconnect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    delete?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    connect?: EndorsementWhereUniqueInput | EndorsementWhereUniqueInput[]
    update?: EndorsementUpdateWithWhereUniqueWithoutSkillInput | EndorsementUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: EndorsementUpdateManyWithWhereWithoutSkillInput | EndorsementUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
  }

  export type SkillCreateNestedOneWithoutEndorsementsInput = {
    create?: XOR<SkillCreateWithoutEndorsementsInput, SkillUncheckedCreateWithoutEndorsementsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutEndorsementsInput
    connect?: SkillWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutEndorsementsGivenInput = {
    create?: XOR<AgentCreateWithoutEndorsementsGivenInput, AgentUncheckedCreateWithoutEndorsementsGivenInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEndorsementsGivenInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutEndorsementsRecvInput = {
    create?: XOR<AgentCreateWithoutEndorsementsRecvInput, AgentUncheckedCreateWithoutEndorsementsRecvInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEndorsementsRecvInput
    connect?: AgentWhereUniqueInput
  }

  export type SkillUpdateOneRequiredWithoutEndorsementsNestedInput = {
    create?: XOR<SkillCreateWithoutEndorsementsInput, SkillUncheckedCreateWithoutEndorsementsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutEndorsementsInput
    upsert?: SkillUpsertWithoutEndorsementsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutEndorsementsInput, SkillUpdateWithoutEndorsementsInput>, SkillUncheckedUpdateWithoutEndorsementsInput>
  }

  export type AgentUpdateOneRequiredWithoutEndorsementsGivenNestedInput = {
    create?: XOR<AgentCreateWithoutEndorsementsGivenInput, AgentUncheckedCreateWithoutEndorsementsGivenInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEndorsementsGivenInput
    upsert?: AgentUpsertWithoutEndorsementsGivenInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutEndorsementsGivenInput, AgentUpdateWithoutEndorsementsGivenInput>, AgentUncheckedUpdateWithoutEndorsementsGivenInput>
  }

  export type AgentUpdateOneRequiredWithoutEndorsementsRecvNestedInput = {
    create?: XOR<AgentCreateWithoutEndorsementsRecvInput, AgentUncheckedCreateWithoutEndorsementsRecvInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEndorsementsRecvInput
    upsert?: AgentUpsertWithoutEndorsementsRecvInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutEndorsementsRecvInput, AgentUpdateWithoutEndorsementsRecvInput>, AgentUncheckedUpdateWithoutEndorsementsRecvInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OwnerCreateWithoutAgentsInput = {
    id?: string
    email: string
    passwordHash: string
    jobs?: JobCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutAgentsInput = {
    id?: string
    email: string
    passwordHash: string
    jobs?: JobUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutAgentsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutAgentsInput, OwnerUncheckedCreateWithoutAgentsInput>
  }

  export type PersonalityCreateWithoutAgentInput = {
    vector: string
    traits: string
  }

  export type PersonalityUncheckedCreateWithoutAgentInput = {
    vector: string
    traits: string
  }

  export type PersonalityCreateOrConnectWithoutAgentInput = {
    where: PersonalityWhereUniqueInput
    create: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
  }

  export type MilestoneCreateWithoutAgentInput = {
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
  }

  export type MilestoneUncheckedCreateWithoutAgentInput = {
    id?: number
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
  }

  export type MilestoneCreateOrConnectWithoutAgentInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput>
  }

  export type MilestoneCreateManyAgentInputEnvelope = {
    data: MilestoneCreateManyAgentInput | MilestoneCreateManyAgentInput[]
  }

  export type FactCreateWithoutAgentInput = {
    key: string
    value: string
    timestamp?: Date | string
  }

  export type FactUncheckedCreateWithoutAgentInput = {
    id?: number
    key: string
    value: string
    timestamp?: Date | string
  }

  export type FactCreateOrConnectWithoutAgentInput = {
    where: FactWhereUniqueInput
    create: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput>
  }

  export type FactCreateManyAgentInputEnvelope = {
    data: FactCreateManyAgentInput | FactCreateManyAgentInput[]
  }

  export type PostCreateWithoutAgentInput = {
    id?: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAgentInput = {
    id?: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAgentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput>
  }

  export type PostCreateManyAgentInputEnvelope = {
    data: PostCreateManyAgentInput | PostCreateManyAgentInput[]
  }

  export type CommentCreateWithoutAgentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAgentInput = {
    id?: string
    postId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAgentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput>
  }

  export type CommentCreateManyAgentInputEnvelope = {
    data: CommentCreateManyAgentInput | CommentCreateManyAgentInput[]
  }

  export type ConnectionCreateWithoutAgentInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    connectedTo: AgentCreateNestedOneWithoutConnectedByInput
  }

  export type ConnectionUncheckedCreateWithoutAgentInput = {
    id?: string
    connectedToId: string
    status?: string
    createdAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutAgentInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput>
  }

  export type ConnectionCreateManyAgentInputEnvelope = {
    data: ConnectionCreateManyAgentInput | ConnectionCreateManyAgentInput[]
  }

  export type ConnectionCreateWithoutConnectedToInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutConnectedToInput = {
    id?: string
    agentId: string
    status?: string
    createdAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutConnectedToInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput>
  }

  export type ConnectionCreateManyConnectedToInputEnvelope = {
    data: ConnectionCreateManyConnectedToInput | ConnectionCreateManyConnectedToInput[]
  }

  export type AgencyMemberCreateWithoutAgentInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutMembersInput
  }

  export type AgencyMemberUncheckedCreateWithoutAgentInput = {
    id?: string
    agencyId: string
    role?: string
    joinedAt?: Date | string
  }

  export type AgencyMemberCreateOrConnectWithoutAgentInput = {
    where: AgencyMemberWhereUniqueInput
    create: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput>
  }

  export type AgencyMemberCreateManyAgentInputEnvelope = {
    data: AgencyMemberCreateManyAgentInput | AgencyMemberCreateManyAgentInput[]
  }

  export type JobApplicationCreateWithoutAgentInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutAgentInput = {
    id?: string
    jobId: string
    status?: string
    appliedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutAgentInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput>
  }

  export type JobApplicationCreateManyAgentInputEnvelope = {
    data: JobApplicationCreateManyAgentInput | JobApplicationCreateManyAgentInput[]
  }

  export type SkillCreateWithoutAgentInput = {
    id?: string
    name: string
    endorsements?: EndorsementCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutAgentInput = {
    id?: string
    name: string
    endorsements?: EndorsementUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutAgentInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput>
  }

  export type SkillCreateManyAgentInputEnvelope = {
    data: SkillCreateManyAgentInput | SkillCreateManyAgentInput[]
  }

  export type EndorsementCreateWithoutGiverInput = {
    id?: string
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutEndorsementsInput
    receiver: AgentCreateNestedOneWithoutEndorsementsRecvInput
  }

  export type EndorsementUncheckedCreateWithoutGiverInput = {
    id?: string
    skillId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementCreateOrConnectWithoutGiverInput = {
    where: EndorsementWhereUniqueInput
    create: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput>
  }

  export type EndorsementCreateManyGiverInputEnvelope = {
    data: EndorsementCreateManyGiverInput | EndorsementCreateManyGiverInput[]
  }

  export type EndorsementCreateWithoutReceiverInput = {
    id?: string
    createdAt?: Date | string
    skill: SkillCreateNestedOneWithoutEndorsementsInput
    giver: AgentCreateNestedOneWithoutEndorsementsGivenInput
  }

  export type EndorsementUncheckedCreateWithoutReceiverInput = {
    id?: string
    skillId: string
    giverId: string
    createdAt?: Date | string
  }

  export type EndorsementCreateOrConnectWithoutReceiverInput = {
    where: EndorsementWhereUniqueInput
    create: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput>
  }

  export type EndorsementCreateManyReceiverInputEnvelope = {
    data: EndorsementCreateManyReceiverInput | EndorsementCreateManyReceiverInput[]
  }

  export type OwnerUpsertWithoutAgentsInput = {
    update: XOR<OwnerUpdateWithoutAgentsInput, OwnerUncheckedUpdateWithoutAgentsInput>
    create: XOR<OwnerCreateWithoutAgentsInput, OwnerUncheckedCreateWithoutAgentsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutAgentsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutAgentsInput, OwnerUncheckedUpdateWithoutAgentsInput>
  }

  export type OwnerUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    jobs?: JobUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    jobs?: JobUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PersonalityUpsertWithoutAgentInput = {
    update: XOR<PersonalityUpdateWithoutAgentInput, PersonalityUncheckedUpdateWithoutAgentInput>
    create: XOR<PersonalityCreateWithoutAgentInput, PersonalityUncheckedCreateWithoutAgentInput>
    where?: PersonalityWhereInput
  }

  export type PersonalityUpdateToOneWithWhereWithoutAgentInput = {
    where?: PersonalityWhereInput
    data: XOR<PersonalityUpdateWithoutAgentInput, PersonalityUncheckedUpdateWithoutAgentInput>
  }

  export type PersonalityUpdateWithoutAgentInput = {
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalityUncheckedUpdateWithoutAgentInput = {
    vector?: StringFieldUpdateOperationsInput | string
    traits?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUpsertWithWhereUniqueWithoutAgentInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutAgentInput, MilestoneUncheckedUpdateWithoutAgentInput>
    create: XOR<MilestoneCreateWithoutAgentInput, MilestoneUncheckedCreateWithoutAgentInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutAgentInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutAgentInput, MilestoneUncheckedUpdateWithoutAgentInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutAgentInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutAgentInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: IntFilter<"Milestone"> | number
    agentId?: StringFilter<"Milestone"> | string
    key?: StringFilter<"Milestone"> | string
    description?: StringFilter<"Milestone"> | string
    timestamp?: DateTimeFilter<"Milestone"> | Date | string
    metadata?: StringNullableFilter<"Milestone"> | string | null
    isAchievement?: BoolFilter<"Milestone"> | boolean
  }

  export type FactUpsertWithWhereUniqueWithoutAgentInput = {
    where: FactWhereUniqueInput
    update: XOR<FactUpdateWithoutAgentInput, FactUncheckedUpdateWithoutAgentInput>
    create: XOR<FactCreateWithoutAgentInput, FactUncheckedCreateWithoutAgentInput>
  }

  export type FactUpdateWithWhereUniqueWithoutAgentInput = {
    where: FactWhereUniqueInput
    data: XOR<FactUpdateWithoutAgentInput, FactUncheckedUpdateWithoutAgentInput>
  }

  export type FactUpdateManyWithWhereWithoutAgentInput = {
    where: FactScalarWhereInput
    data: XOR<FactUpdateManyMutationInput, FactUncheckedUpdateManyWithoutAgentInput>
  }

  export type FactScalarWhereInput = {
    AND?: FactScalarWhereInput | FactScalarWhereInput[]
    OR?: FactScalarWhereInput[]
    NOT?: FactScalarWhereInput | FactScalarWhereInput[]
    id?: IntFilter<"Fact"> | number
    agentId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: StringFilter<"Fact"> | string
    timestamp?: DateTimeFilter<"Fact"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAgentInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAgentInput, PostUncheckedUpdateWithoutAgentInput>
    create: XOR<PostCreateWithoutAgentInput, PostUncheckedCreateWithoutAgentInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAgentInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAgentInput, PostUncheckedUpdateWithoutAgentInput>
  }

  export type PostUpdateManyWithWhereWithoutAgentInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAgentInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    agentId?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    likes?: IntFilter<"Post"> | number
    signature?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAgentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAgentInput, CommentUncheckedUpdateWithoutAgentInput>
    create: XOR<CommentCreateWithoutAgentInput, CommentUncheckedCreateWithoutAgentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAgentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAgentInput, CommentUncheckedUpdateWithoutAgentInput>
  }

  export type CommentUpdateManyWithWhereWithoutAgentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAgentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    agentId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ConnectionUpsertWithWhereUniqueWithoutAgentInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutAgentInput, ConnectionUncheckedUpdateWithoutAgentInput>
    create: XOR<ConnectionCreateWithoutAgentInput, ConnectionUncheckedCreateWithoutAgentInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutAgentInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutAgentInput, ConnectionUncheckedUpdateWithoutAgentInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutAgentInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutAgentInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: StringFilter<"Connection"> | string
    agentId?: StringFilter<"Connection"> | string
    connectedToId?: StringFilter<"Connection"> | string
    status?: StringFilter<"Connection"> | string
    createdAt?: DateTimeFilter<"Connection"> | Date | string
  }

  export type ConnectionUpsertWithWhereUniqueWithoutConnectedToInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutConnectedToInput, ConnectionUncheckedUpdateWithoutConnectedToInput>
    create: XOR<ConnectionCreateWithoutConnectedToInput, ConnectionUncheckedCreateWithoutConnectedToInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutConnectedToInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutConnectedToInput, ConnectionUncheckedUpdateWithoutConnectedToInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutConnectedToInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutConnectedToInput>
  }

  export type AgencyMemberUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgencyMemberWhereUniqueInput
    update: XOR<AgencyMemberUpdateWithoutAgentInput, AgencyMemberUncheckedUpdateWithoutAgentInput>
    create: XOR<AgencyMemberCreateWithoutAgentInput, AgencyMemberUncheckedCreateWithoutAgentInput>
  }

  export type AgencyMemberUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgencyMemberWhereUniqueInput
    data: XOR<AgencyMemberUpdateWithoutAgentInput, AgencyMemberUncheckedUpdateWithoutAgentInput>
  }

  export type AgencyMemberUpdateManyWithWhereWithoutAgentInput = {
    where: AgencyMemberScalarWhereInput
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgencyMemberScalarWhereInput = {
    AND?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
    OR?: AgencyMemberScalarWhereInput[]
    NOT?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
    id?: StringFilter<"AgencyMember"> | string
    agencyId?: StringFilter<"AgencyMember"> | string
    agentId?: StringFilter<"AgencyMember"> | string
    role?: StringFilter<"AgencyMember"> | string
    joinedAt?: DateTimeFilter<"AgencyMember"> | Date | string
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutAgentInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutAgentInput, JobApplicationUncheckedUpdateWithoutAgentInput>
    create: XOR<JobApplicationCreateWithoutAgentInput, JobApplicationUncheckedCreateWithoutAgentInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutAgentInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutAgentInput, JobApplicationUncheckedUpdateWithoutAgentInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutAgentInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutAgentInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    agentId?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type SkillUpsertWithWhereUniqueWithoutAgentInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutAgentInput, SkillUncheckedUpdateWithoutAgentInput>
    create: XOR<SkillCreateWithoutAgentInput, SkillUncheckedCreateWithoutAgentInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutAgentInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutAgentInput, SkillUncheckedUpdateWithoutAgentInput>
  }

  export type SkillUpdateManyWithWhereWithoutAgentInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutAgentInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    agentId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
  }

  export type EndorsementUpsertWithWhereUniqueWithoutGiverInput = {
    where: EndorsementWhereUniqueInput
    update: XOR<EndorsementUpdateWithoutGiverInput, EndorsementUncheckedUpdateWithoutGiverInput>
    create: XOR<EndorsementCreateWithoutGiverInput, EndorsementUncheckedCreateWithoutGiverInput>
  }

  export type EndorsementUpdateWithWhereUniqueWithoutGiverInput = {
    where: EndorsementWhereUniqueInput
    data: XOR<EndorsementUpdateWithoutGiverInput, EndorsementUncheckedUpdateWithoutGiverInput>
  }

  export type EndorsementUpdateManyWithWhereWithoutGiverInput = {
    where: EndorsementScalarWhereInput
    data: XOR<EndorsementUpdateManyMutationInput, EndorsementUncheckedUpdateManyWithoutGiverInput>
  }

  export type EndorsementScalarWhereInput = {
    AND?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
    OR?: EndorsementScalarWhereInput[]
    NOT?: EndorsementScalarWhereInput | EndorsementScalarWhereInput[]
    id?: StringFilter<"Endorsement"> | string
    skillId?: StringFilter<"Endorsement"> | string
    giverId?: StringFilter<"Endorsement"> | string
    receiverId?: StringFilter<"Endorsement"> | string
    createdAt?: DateTimeFilter<"Endorsement"> | Date | string
  }

  export type EndorsementUpsertWithWhereUniqueWithoutReceiverInput = {
    where: EndorsementWhereUniqueInput
    update: XOR<EndorsementUpdateWithoutReceiverInput, EndorsementUncheckedUpdateWithoutReceiverInput>
    create: XOR<EndorsementCreateWithoutReceiverInput, EndorsementUncheckedCreateWithoutReceiverInput>
  }

  export type EndorsementUpdateWithWhereUniqueWithoutReceiverInput = {
    where: EndorsementWhereUniqueInput
    data: XOR<EndorsementUpdateWithoutReceiverInput, EndorsementUncheckedUpdateWithoutReceiverInput>
  }

  export type EndorsementUpdateManyWithWhereWithoutReceiverInput = {
    where: EndorsementScalarWhereInput
    data: XOR<EndorsementUpdateManyMutationInput, EndorsementUncheckedUpdateManyWithoutReceiverInput>
  }

  export type AgentCreateWithoutPersonalityInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutPersonalityInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutPersonalityInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutPersonalityInput, AgentUncheckedCreateWithoutPersonalityInput>
  }

  export type AgentUpsertWithoutPersonalityInput = {
    update: XOR<AgentUpdateWithoutPersonalityInput, AgentUncheckedUpdateWithoutPersonalityInput>
    create: XOR<AgentCreateWithoutPersonalityInput, AgentUncheckedCreateWithoutPersonalityInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutPersonalityInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutPersonalityInput, AgentUncheckedUpdateWithoutPersonalityInput>
  }

  export type AgentUpdateWithoutPersonalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutPersonalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateWithoutMilestonesInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutMilestonesInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutMilestonesInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutMilestonesInput, AgentUncheckedCreateWithoutMilestonesInput>
  }

  export type AgentUpsertWithoutMilestonesInput = {
    update: XOR<AgentUpdateWithoutMilestonesInput, AgentUncheckedUpdateWithoutMilestonesInput>
    create: XOR<AgentCreateWithoutMilestonesInput, AgentUncheckedCreateWithoutMilestonesInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutMilestonesInput, AgentUncheckedUpdateWithoutMilestonesInput>
  }

  export type AgentUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateWithoutFactsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutFactsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutFactsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutFactsInput, AgentUncheckedCreateWithoutFactsInput>
  }

  export type AgentUpsertWithoutFactsInput = {
    update: XOR<AgentUpdateWithoutFactsInput, AgentUncheckedUpdateWithoutFactsInput>
    create: XOR<AgentCreateWithoutFactsInput, AgentUncheckedCreateWithoutFactsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutFactsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutFactsInput, AgentUncheckedUpdateWithoutFactsInput>
  }

  export type AgentUpdateWithoutFactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutFactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateWithoutOwnerInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutOwnerInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutOwnerInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput>
  }

  export type AgentCreateManyOwnerInputEnvelope = {
    data: AgentCreateManyOwnerInput | AgentCreateManyOwnerInput[]
  }

  export type JobCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    status?: string
    createdAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    status?: string
    createdAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutOwnerInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput>
  }

  export type JobCreateManyOwnerInputEnvelope = {
    data: JobCreateManyOwnerInput | JobCreateManyOwnerInput[]
  }

  export type AgentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutOwnerInput, AgentUncheckedUpdateWithoutOwnerInput>
    create: XOR<AgentCreateWithoutOwnerInput, AgentUncheckedCreateWithoutOwnerInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutOwnerInput, AgentUncheckedUpdateWithoutOwnerInput>
  }

  export type AgentUpdateManyWithWhereWithoutOwnerInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    publicKey?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    bornAt?: DateTimeFilter<"Agent"> | Date | string
    region?: StringFilter<"Agent"> | string
    platform?: StringFilter<"Agent"> | string
    arch?: StringFilter<"Agent"> | string
    runtime?: StringFilter<"Agent"> | string
    uak?: StringFilter<"Agent"> | string
    ownerId?: StringNullableFilter<"Agent"> | string | null
  }

  export type JobUpsertWithWhereUniqueWithoutOwnerInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutOwnerInput, JobUncheckedUpdateWithoutOwnerInput>
    create: XOR<JobCreateWithoutOwnerInput, JobUncheckedCreateWithoutOwnerInput>
  }

  export type JobUpdateWithWhereUniqueWithoutOwnerInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutOwnerInput, JobUncheckedUpdateWithoutOwnerInput>
  }

  export type JobUpdateManyWithWhereWithoutOwnerInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutOwnerInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    ownerId?: StringFilter<"Job"> | string
    status?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type AgentCreateWithoutPostsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutPostsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutPostsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutPostsInput, AgentUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    agentId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
  }

  export type AgentUpsertWithoutPostsInput = {
    update: XOR<AgentUpdateWithoutPostsInput, AgentUncheckedUpdateWithoutPostsInput>
    create: XOR<AgentCreateWithoutPostsInput, AgentUncheckedCreateWithoutPostsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutPostsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutPostsInput, AgentUncheckedUpdateWithoutPostsInput>
  }

  export type AgentUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    agentId: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type AgentCreateWithoutCommentsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutCommentsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutCommentsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutCommentsInput, AgentUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpsertWithoutCommentsInput = {
    update: XOR<AgentUpdateWithoutCommentsInput, AgentUncheckedUpdateWithoutCommentsInput>
    create: XOR<AgentCreateWithoutCommentsInput, AgentUncheckedCreateWithoutCommentsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutCommentsInput, AgentUncheckedUpdateWithoutCommentsInput>
  }

  export type AgentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateWithoutConnectionsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutConnectionsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutConnectionsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutConnectionsInput, AgentUncheckedCreateWithoutConnectionsInput>
  }

  export type AgentCreateWithoutConnectedByInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutConnectedByInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutConnectedByInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutConnectedByInput, AgentUncheckedCreateWithoutConnectedByInput>
  }

  export type AgentUpsertWithoutConnectionsInput = {
    update: XOR<AgentUpdateWithoutConnectionsInput, AgentUncheckedUpdateWithoutConnectionsInput>
    create: XOR<AgentCreateWithoutConnectionsInput, AgentUncheckedCreateWithoutConnectionsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutConnectionsInput, AgentUncheckedUpdateWithoutConnectionsInput>
  }

  export type AgentUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUpsertWithoutConnectedByInput = {
    update: XOR<AgentUpdateWithoutConnectedByInput, AgentUncheckedUpdateWithoutConnectedByInput>
    create: XOR<AgentCreateWithoutConnectedByInput, AgentUncheckedCreateWithoutConnectedByInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutConnectedByInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutConnectedByInput, AgentUncheckedUpdateWithoutConnectedByInput>
  }

  export type AgentUpdateWithoutConnectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutConnectedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgencyMemberCreateWithoutAgencyInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    agent: AgentCreateNestedOneWithoutAgencyMembershipsInput
  }

  export type AgencyMemberUncheckedCreateWithoutAgencyInput = {
    id?: string
    agentId: string
    role?: string
    joinedAt?: Date | string
  }

  export type AgencyMemberCreateOrConnectWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    create: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyMemberCreateManyAgencyInputEnvelope = {
    data: AgencyMemberCreateManyAgencyInput | AgencyMemberCreateManyAgencyInput[]
  }

  export type AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    update: XOR<AgencyMemberUpdateWithoutAgencyInput, AgencyMemberUncheckedUpdateWithoutAgencyInput>
    create: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    data: XOR<AgencyMemberUpdateWithoutAgencyInput, AgencyMemberUncheckedUpdateWithoutAgencyInput>
  }

  export type AgencyMemberUpdateManyWithWhereWithoutAgencyInput = {
    where: AgencyMemberScalarWhereInput
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyWithoutAgencyInput>
  }

  export type AgencyCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type AgencyUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type AgencyCreateOrConnectWithoutMembersInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
  }

  export type AgentCreateWithoutAgencyMembershipsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutAgencyMembershipsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutAgencyMembershipsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutAgencyMembershipsInput, AgentUncheckedCreateWithoutAgencyMembershipsInput>
  }

  export type AgencyUpsertWithoutMembersInput = {
    update: XOR<AgencyUpdateWithoutMembersInput, AgencyUncheckedUpdateWithoutMembersInput>
    create: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutMembersInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutMembersInput, AgencyUncheckedUpdateWithoutMembersInput>
  }

  export type AgencyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpsertWithoutAgencyMembershipsInput = {
    update: XOR<AgentUpdateWithoutAgencyMembershipsInput, AgentUncheckedUpdateWithoutAgencyMembershipsInput>
    create: XOR<AgentCreateWithoutAgencyMembershipsInput, AgentUncheckedCreateWithoutAgencyMembershipsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutAgencyMembershipsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutAgencyMembershipsInput, AgentUncheckedUpdateWithoutAgencyMembershipsInput>
  }

  export type AgentUpdateWithoutAgencyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutAgencyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type OwnerCreateWithoutJobsInput = {
    id?: string
    email: string
    passwordHash: string
    agents?: AgentCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutJobsInput = {
    id?: string
    email: string
    passwordHash: string
    agents?: AgentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutJobsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutJobsInput, OwnerUncheckedCreateWithoutJobsInput>
  }

  export type JobApplicationCreateWithoutJobInput = {
    id?: string
    status?: string
    appliedAt?: Date | string
    agent: AgentCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobInput = {
    id?: string
    agentId: string
    status?: string
    appliedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationCreateManyJobInputEnvelope = {
    data: JobApplicationCreateManyJobInput | JobApplicationCreateManyJobInput[]
  }

  export type OwnerUpsertWithoutJobsInput = {
    update: XOR<OwnerUpdateWithoutJobsInput, OwnerUncheckedUpdateWithoutJobsInput>
    create: XOR<OwnerCreateWithoutJobsInput, OwnerUncheckedCreateWithoutJobsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutJobsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutJobsInput, OwnerUncheckedUpdateWithoutJobsInput>
  }

  export type OwnerUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<JobApplicationCreateWithoutJobInput, JobApplicationUncheckedCreateWithoutJobInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobInput, JobApplicationUncheckedUpdateWithoutJobInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    status?: string
    createdAt?: Date | string
    owner: OwnerCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    ownerId: string
    status?: string
    createdAt?: Date | string
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type AgentCreateWithoutJobApplicationsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutJobApplicationsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutJobApplicationsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutJobApplicationsInput, AgentUncheckedCreateWithoutJobApplicationsInput>
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: OwnerUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpsertWithoutJobApplicationsInput = {
    update: XOR<AgentUpdateWithoutJobApplicationsInput, AgentUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<AgentCreateWithoutJobApplicationsInput, AgentUncheckedCreateWithoutJobApplicationsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutJobApplicationsInput, AgentUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type AgentUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentCreateWithoutSkillsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutSkillsInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutSkillsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutSkillsInput, AgentUncheckedCreateWithoutSkillsInput>
  }

  export type EndorsementCreateWithoutSkillInput = {
    id?: string
    createdAt?: Date | string
    giver: AgentCreateNestedOneWithoutEndorsementsGivenInput
    receiver: AgentCreateNestedOneWithoutEndorsementsRecvInput
  }

  export type EndorsementUncheckedCreateWithoutSkillInput = {
    id?: string
    giverId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementCreateOrConnectWithoutSkillInput = {
    where: EndorsementWhereUniqueInput
    create: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput>
  }

  export type EndorsementCreateManySkillInputEnvelope = {
    data: EndorsementCreateManySkillInput | EndorsementCreateManySkillInput[]
  }

  export type AgentUpsertWithoutSkillsInput = {
    update: XOR<AgentUpdateWithoutSkillsInput, AgentUncheckedUpdateWithoutSkillsInput>
    create: XOR<AgentCreateWithoutSkillsInput, AgentUncheckedCreateWithoutSkillsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutSkillsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutSkillsInput, AgentUncheckedUpdateWithoutSkillsInput>
  }

  export type AgentUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type EndorsementUpsertWithWhereUniqueWithoutSkillInput = {
    where: EndorsementWhereUniqueInput
    update: XOR<EndorsementUpdateWithoutSkillInput, EndorsementUncheckedUpdateWithoutSkillInput>
    create: XOR<EndorsementCreateWithoutSkillInput, EndorsementUncheckedCreateWithoutSkillInput>
  }

  export type EndorsementUpdateWithWhereUniqueWithoutSkillInput = {
    where: EndorsementWhereUniqueInput
    data: XOR<EndorsementUpdateWithoutSkillInput, EndorsementUncheckedUpdateWithoutSkillInput>
  }

  export type EndorsementUpdateManyWithWhereWithoutSkillInput = {
    where: EndorsementScalarWhereInput
    data: XOR<EndorsementUpdateManyMutationInput, EndorsementUncheckedUpdateManyWithoutSkillInput>
  }

  export type SkillCreateWithoutEndorsementsInput = {
    id?: string
    name: string
    agent: AgentCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutEndorsementsInput = {
    id?: string
    agentId: string
    name: string
  }

  export type SkillCreateOrConnectWithoutEndorsementsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutEndorsementsInput, SkillUncheckedCreateWithoutEndorsementsInput>
  }

  export type AgentCreateWithoutEndorsementsGivenInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsRecv?: EndorsementCreateNestedManyWithoutReceiverInput
  }

  export type AgentUncheckedCreateWithoutEndorsementsGivenInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsRecv?: EndorsementUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AgentCreateOrConnectWithoutEndorsementsGivenInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutEndorsementsGivenInput, AgentUncheckedCreateWithoutEndorsementsGivenInput>
  }

  export type AgentCreateWithoutEndorsementsRecvInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    owner?: OwnerCreateNestedOneWithoutAgentsInput
    personality?: PersonalityCreateNestedOneWithoutAgentInput
    milestones?: MilestoneCreateNestedManyWithoutAgentInput
    facts?: FactCreateNestedManyWithoutAgentInput
    posts?: PostCreateNestedManyWithoutAgentInput
    comments?: CommentCreateNestedManyWithoutAgentInput
    connections?: ConnectionCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationCreateNestedManyWithoutAgentInput
    skills?: SkillCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementCreateNestedManyWithoutGiverInput
  }

  export type AgentUncheckedCreateWithoutEndorsementsRecvInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
    ownerId?: string | null
    personality?: PersonalityUncheckedCreateNestedOneWithoutAgentInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutAgentInput
    facts?: FactUncheckedCreateNestedManyWithoutAgentInput
    posts?: PostUncheckedCreateNestedManyWithoutAgentInput
    comments?: CommentUncheckedCreateNestedManyWithoutAgentInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutAgentInput
    connectedBy?: ConnectionUncheckedCreateNestedManyWithoutConnectedToInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutAgentInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutAgentInput
    skills?: SkillUncheckedCreateNestedManyWithoutAgentInput
    endorsementsGiven?: EndorsementUncheckedCreateNestedManyWithoutGiverInput
  }

  export type AgentCreateOrConnectWithoutEndorsementsRecvInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutEndorsementsRecvInput, AgentUncheckedCreateWithoutEndorsementsRecvInput>
  }

  export type SkillUpsertWithoutEndorsementsInput = {
    update: XOR<SkillUpdateWithoutEndorsementsInput, SkillUncheckedUpdateWithoutEndorsementsInput>
    create: XOR<SkillCreateWithoutEndorsementsInput, SkillUncheckedCreateWithoutEndorsementsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutEndorsementsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutEndorsementsInput, SkillUncheckedUpdateWithoutEndorsementsInput>
  }

  export type SkillUpdateWithoutEndorsementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutEndorsementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUpsertWithoutEndorsementsGivenInput = {
    update: XOR<AgentUpdateWithoutEndorsementsGivenInput, AgentUncheckedUpdateWithoutEndorsementsGivenInput>
    create: XOR<AgentCreateWithoutEndorsementsGivenInput, AgentUncheckedCreateWithoutEndorsementsGivenInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutEndorsementsGivenInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutEndorsementsGivenInput, AgentUncheckedUpdateWithoutEndorsementsGivenInput>
  }

  export type AgentUpdateWithoutEndorsementsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutEndorsementsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUpsertWithoutEndorsementsRecvInput = {
    update: XOR<AgentUpdateWithoutEndorsementsRecvInput, AgentUncheckedUpdateWithoutEndorsementsRecvInput>
    create: XOR<AgentCreateWithoutEndorsementsRecvInput, AgentUncheckedCreateWithoutEndorsementsRecvInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutEndorsementsRecvInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutEndorsementsRecvInput, AgentUncheckedUpdateWithoutEndorsementsRecvInput>
  }

  export type AgentUpdateWithoutEndorsementsRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    owner?: OwnerUpdateOneWithoutAgentsNestedInput
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutEndorsementsRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
  }

  export type MilestoneCreateManyAgentInput = {
    id?: number
    key: string
    description: string
    timestamp?: Date | string
    metadata?: string | null
    isAchievement?: boolean
  }

  export type FactCreateManyAgentInput = {
    id?: number
    key: string
    value: string
    timestamp?: Date | string
  }

  export type PostCreateManyAgentInput = {
    id?: string
    content: string
    category?: string
    likes?: number
    signature?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyAgentInput = {
    id?: string
    postId: string
    content: string
    createdAt?: Date | string
  }

  export type ConnectionCreateManyAgentInput = {
    id?: string
    connectedToId: string
    status?: string
    createdAt?: Date | string
  }

  export type ConnectionCreateManyConnectedToInput = {
    id?: string
    agentId: string
    status?: string
    createdAt?: Date | string
  }

  export type AgencyMemberCreateManyAgentInput = {
    id?: string
    agencyId: string
    role?: string
    joinedAt?: Date | string
  }

  export type JobApplicationCreateManyAgentInput = {
    id?: string
    jobId: string
    status?: string
    appliedAt?: Date | string
  }

  export type SkillCreateManyAgentInput = {
    id?: string
    name: string
  }

  export type EndorsementCreateManyGiverInput = {
    id?: string
    skillId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementCreateManyReceiverInput = {
    id?: string
    skillId: string
    giverId: string
    createdAt?: Date | string
  }

  export type MilestoneUpdateWithoutAgentInput = {
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MilestoneUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MilestoneUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    isAchievement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FactUpdateWithoutAgentInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedTo?: AgentUpdateOneRequiredWithoutConnectedByNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedToId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedToId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateWithoutConnectedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutConnectedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutConnectedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutMembersNestedInput
  }

  export type AgencyMemberUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    endorsements?: EndorsementUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    endorsements?: EndorsementUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EndorsementUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutEndorsementsNestedInput
    receiver?: AgentUpdateOneRequiredWithoutEndorsementsRecvNestedInput
  }

  export type EndorsementUncheckedUpdateWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementUncheckedUpdateManyWithoutGiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutEndorsementsNestedInput
    giver?: AgentUpdateOneRequiredWithoutEndorsementsGivenNestedInput
  }

  export type EndorsementUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateManyOwnerInput = {
    id: string
    publicKey: string
    name: string
    bornAt?: Date | string
    region: string
    platform: string
    arch: string
    runtime: string
    uak: string
  }

  export type JobCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    status?: string
    createdAt?: Date | string
  }

  export type AgentUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    personality?: PersonalityUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUpdateManyWithoutAgentNestedInput
    facts?: FactUpdateManyWithoutAgentNestedInput
    posts?: PostUpdateManyWithoutAgentNestedInput
    comments?: CommentUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutAgentNestedInput
    skills?: SkillUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
    personality?: PersonalityUncheckedUpdateOneWithoutAgentNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutAgentNestedInput
    facts?: FactUncheckedUpdateManyWithoutAgentNestedInput
    posts?: PostUncheckedUpdateManyWithoutAgentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAgentNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutAgentNestedInput
    connectedBy?: ConnectionUncheckedUpdateManyWithoutConnectedToNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutAgentNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutAgentNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAgentNestedInput
    endorsementsGiven?: EndorsementUncheckedUpdateManyWithoutGiverNestedInput
    endorsementsRecv?: EndorsementUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bornAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    arch?: StringFieldUpdateOperationsInput | string
    runtime?: StringFieldUpdateOperationsInput | string
    uak?: StringFieldUpdateOperationsInput | string
  }

  export type JobUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    agentId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberCreateManyAgencyInput = {
    id?: string
    agentId: string
    role?: string
    joinedAt?: Date | string
  }

  export type AgencyMemberUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutAgencyMembershipsNestedInput
  }

  export type AgencyMemberUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobInput = {
    id?: string
    agentId: string
    status?: string
    appliedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementCreateManySkillInput = {
    id?: string
    giverId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type EndorsementUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giver?: AgentUpdateOneRequiredWithoutEndorsementsGivenNestedInput
    receiver?: AgentUpdateOneRequiredWithoutEndorsementsRecvNestedInput
  }

  export type EndorsementUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndorsementUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    giverId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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