import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  Decimal: { input: any; output: any };
  GenericScalar: { input: any; output: any };
};

export type CreateInventoryItem = {
  __typename?: 'CreateInventoryItem';
  inventoryItem?: Maybe<InventoryItemType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};

export type IngredientType = {
  __typename?: 'IngredientType';
  id: Scalars['ID']['output'];
  product: ProductType;
  recipes: RecipeTypeConnection;
  unit: UnitType;
};

export type IngredientTypeRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryItemInput = {
  expirationDate: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  unit?: InputMaybe<QuantitativeUnitInput>;
};

export type InventoryItemType = {
  __typename?: 'InventoryItemType';
  expirationDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  person: Array<UserType>;
  product: ProductType;
  quantity: Scalars['Int']['output'];
  unit: UnitType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInventoryItem?: Maybe<CreateInventoryItem>;
  createUser?: Maybe<CreateUser>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateItemQuantity?: Maybe<UpdateItemQuantity>;
  verifyToken?: Maybe<Verify>;
};

export type MutationCreateInventoryItemArgs = {
  newInventoryItem: InventoryItemInput;
};

export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTokenAuthArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationUpdateItemQuantityArgs = {
  id: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID']['output'];
  ingredientSet: Array<IngredientType>;
  inventoryitemSet: Array<InventoryItemType>;
  name: Scalars['String']['output'];
};

export type QuantitativeUnitInput = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  inventoryItems?: Maybe<Array<Maybe<InventoryItemType>>>;
  me?: Maybe<UserType>;
  product?: Maybe<ProductType>;
  products?: Maybe<Array<Maybe<ProductType>>>;
  recipe?: Maybe<RecipeType>;
  recipes?: Maybe<RecipeTypeConnection>;
  tag?: Maybe<TagType>;
  tags?: Maybe<Array<Maybe<TagType>>>;
  viewer?: Maybe<Query>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRecipeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryTagArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeType = Node & {
  __typename?: 'RecipeType';
  cookTime?: Maybe<Scalars['Int']['output']>;
  estimatedCost?: Maybe<Scalars['Decimal']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  ingredients: Array<IngredientType>;
  instructions: Scalars['String']['output'];
  name: Scalars['String']['output'];
  prepTime?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
  user?: Maybe<UserType>;
};

export type RecipeTypeConnection = {
  __typename?: 'RecipeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RecipeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RecipeType` and its cursor. */
export type RecipeTypeEdge = {
  __typename?: 'RecipeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RecipeType>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type TagType = {
  __typename?: 'TagType';
  id: Scalars['ID']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type UnitType = {
  __typename?: 'UnitType';
  id: Scalars['ID']['output'];
  ingredientSet: Array<IngredientType>;
  inventoryitemSet: Array<InventoryItemType>;
  name: Scalars['String']['output'];
};

export type UpdateItemQuantity = {
  __typename?: 'UpdateItemQuantity';
  inventoryItem?: Maybe<InventoryItemType>;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inventoryitemSet: Array<InventoryItemType>;
  isActive: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  recipeSet: RecipeTypeConnection;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserTypeRecipeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type GetInventoryQueryVariables = Exact<{ [key: string]: never }>;

export type GetInventoryQuery = {
  __typename?: 'Query';
  inventoryItems?: Array<{
    __typename?: 'InventoryItemType';
    id: string;
    quantity: number;
    expirationDate?: any | null;
    product: { __typename?: 'ProductType'; id: string; name: string };
    unit: { __typename?: 'UnitType'; name: string };
  } | null> | null;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: 'Query';
  products?: Array<{
    __typename?: 'ProductType';
    id: string;
    name: string;
  } | null> | null;
};

export type UpdateItemQuantityMutationVariables = Exact<{
  id: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;

export type UpdateItemQuantityMutation = {
  __typename?: 'Mutation';
  updateItemQuantity?: {
    __typename?: 'UpdateItemQuantity';
    inventoryItem?: {
      __typename?: 'InventoryItemType';
      id: string;
      quantity: number;
      unit: { __typename?: 'UnitType'; name: string };
    } | null;
  } | null;
};

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = {
  __typename?: 'Query';
  viewer?: {
    __typename?: 'Query';
    me?: {
      __typename?: 'UserType';
      id: string;
      email: string;
      username?: string | null;
    } | null;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?: {
    __typename?: 'CreateUser';
    user?: { __typename?: 'UserType'; username?: string | null } | null;
  } | null;
};

export type TokenAuthMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;

export type TokenAuthMutation = {
  __typename?: 'Mutation';
  tokenAuth?: {
    __typename?: 'ObtainJSONWebToken';
    payload: any;
    token: string;
    refreshExpiresIn: number;
  } | null;
};

export const GetInventoryDocument = gql`
  query GetInventory {
    inventoryItems {
      id
      quantity
      expirationDate
      product {
        id
        name
      }
      unit {
        name
      }
    }
  }
`;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      name
    }
  }
`;
export const UpdateItemQuantityDocument = gql`
  mutation UpdateItemQuantity($id: String!, $quantity: Int!) {
    updateItemQuantity(id: $id, quantity: $quantity) {
      inventoryItem {
        id
        quantity
        unit {
          name
        }
      }
    }
  }
`;
export const ViewerDocument = gql`
  query Viewer {
    viewer {
      me {
        id
        email
        username
      }
    }
  }
`;
export const CreateUserDocument = gql`
  mutation CreateUser($username: String, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      user {
        username
      }
    }
  }
`;
export const TokenAuthDocument = gql`
  mutation TokenAuth($password: String!, $email: String!) {
    tokenAuth(password: $password, email: $email) {
      payload
      token
      refreshExpiresIn
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetInventory(
      variables?: GetInventoryQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetInventoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetInventoryQuery>(GetInventoryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetInventory',
        'query',
        variables,
      );
    },
    GetProducts(
      variables?: GetProductsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductsQuery>(GetProductsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetProducts',
        'query',
        variables,
      );
    },
    UpdateItemQuantity(
      variables: UpdateItemQuantityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateItemQuantityMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateItemQuantityMutation>(
            UpdateItemQuantityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'UpdateItemQuantity',
        'mutation',
        variables,
      );
    },
    Viewer(
      variables?: ViewerQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<ViewerQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ViewerQuery>(ViewerDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Viewer',
        'query',
        variables,
      );
    },
    CreateUser(
      variables: CreateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUserMutation>(CreateUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateUser',
        'mutation',
        variables,
      );
    },
    TokenAuth(
      variables: TokenAuthMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<TokenAuthMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TokenAuthMutation>(TokenAuthDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'TokenAuth',
        'mutation',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
