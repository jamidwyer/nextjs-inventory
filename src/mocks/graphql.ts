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

export type DeleteInventoryItem = {
  __typename?: 'DeleteInventoryItem';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type IngredientType = {
  __typename?: 'IngredientType';
  id: Scalars['ID']['output'];
  product: ProductType;
  quantity?: Maybe<Scalars['String']['output']>;
  recipe?: Maybe<RecipeType>;
  unit: UnitType;
};

export type InventoryItemInput = {
  expirationDate: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  unitId?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryItemType = {
  __typename?: 'InventoryItemType';
  expirationDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  person: UserType;
  product: ProductType;
  quantity: Scalars['Int']['output'];
  unit: UnitType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInventoryItem?: Maybe<CreateInventoryItem>;
  createUser?: Maybe<CreateUser>;
  deleteInventoryItem?: Maybe<DeleteInventoryItem>;
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

export type MutationDeleteInventoryItemArgs = {
  id: Scalars['ID']['input'];
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
  recipeSet: RecipeTypeConnection;
};

export type ProductTypeRecipeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ingredient_Product_Id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  inventoryItems?: Maybe<Array<Maybe<InventoryItemType>>>;
  me?: Maybe<UserType>;
  product?: Maybe<ProductType>;
  products?: Maybe<Array<Maybe<ProductType>>>;
  recipe?: Maybe<RecipeType>;
  recipes?: Maybe<RecipeTypeConnection>;
  units?: Maybe<Array<Maybe<UnitType>>>;
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
  ingredient_Product_Id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RecipeType = Node & {
  __typename?: 'RecipeType';
  cookTime?: Maybe<Scalars['Int']['output']>;
  estimatedCost?: Maybe<Scalars['Decimal']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  ingredientSet: Array<IngredientType>;
  ingredients: Array<ProductType>;
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
  ingredient_Product_Id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
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

export type GetUnitsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUnitsQuery = {
  __typename?: 'Query';
  units?: Array<{
    __typename?: 'UnitType';
    id: string;
    name: string;
  } | null> | null;
};

export type CreateInventoryItemMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  unitId?: InputMaybe<Scalars['Int']['input']>;
  expirationDate: Scalars['String']['input'];
}>;

export type CreateInventoryItemMutation = {
  __typename?: 'Mutation';
  createInventoryItem?: {
    __typename?: 'CreateInventoryItem';
    inventoryItem?: { __typename?: 'InventoryItemType'; id: string } | null;
  } | null;
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

export type DeleteInventoryItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteInventoryItemMutation = {
  __typename?: 'Mutation';
  deleteInventoryItem?: {
    __typename?: 'DeleteInventoryItem';
    success?: boolean | null;
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

export type GetRecipesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetRecipesQuery = {
  __typename?: 'Query';
  recipes?: {
    __typename?: 'RecipeTypeConnection';
    edges: Array<{
      __typename?: 'RecipeTypeEdge';
      node?: { __typename?: 'RecipeType'; id: string; name: string } | null;
    } | null>;
  } | null;
};

export type GetRecipeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetRecipeQuery = {
  __typename?: 'Query';
  recipe?: {
    __typename?: 'RecipeType';
    instructions: string;
    name: string;
    ingredientSet: Array<{
      __typename?: 'IngredientType';
      quantity?: string | null;
      unit: { __typename?: 'UnitType'; name: string };
      product: { __typename?: 'ProductType'; name: string };
    }>;
  } | null;
};

export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      name
    }
  }
`;
export const GetUnitsDocument = gql`
  query GetUnits {
    units {
      id
      name
    }
  }
`;
export const CreateInventoryItemDocument = gql`
  mutation CreateInventoryItem(
    $id: Int!
    $quantity: Int!
    $unitId: Int
    $expirationDate: String!
  ) {
    createInventoryItem(
      newInventoryItem: {
        id: $id
        quantity: $quantity
        unitId: $unitId
        expirationDate: $expirationDate
      }
    ) {
      inventoryItem {
        id
      }
    }
  }
`;
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
export const DeleteInventoryItemDocument = gql`
  mutation DeleteInventoryItem($id: ID!) {
    deleteInventoryItem(id: $id) {
      success
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
export const GetRecipesDocument = gql`
  query GetRecipes($id: ID) {
    recipes(ingredient_Product_Id: $id) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
export const GetRecipeDocument = gql`
  query GetRecipe($id: Int) {
    recipe(id: $id) {
      ingredientSet {
        unit {
          name
        }
        quantity
        product {
          name
        }
      }
      instructions
      name
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
    GetUnits(
      variables?: GetUnitsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUnitsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUnitsQuery>(GetUnitsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUnits',
        'query',
        variables,
      );
    },
    CreateInventoryItem(
      variables: CreateInventoryItemMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateInventoryItemMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateInventoryItemMutation>(
            CreateInventoryItemDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'CreateInventoryItem',
        'mutation',
        variables,
      );
    },
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
    DeleteInventoryItem(
      variables: DeleteInventoryItemMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteInventoryItemMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteInventoryItemMutation>(
            DeleteInventoryItemDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'DeleteInventoryItem',
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
    GetRecipes(
      variables?: GetRecipesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetRecipesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetRecipesQuery>(GetRecipesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetRecipes',
        'query',
        variables,
      );
    },
    GetRecipe(
      variables?: GetRecipeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetRecipeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetRecipeQuery>(GetRecipeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetRecipe',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
