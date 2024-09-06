export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
};

export type CreateInventoryItem = {
  __typename?: 'CreateInventoryItem';
  inventoryItem?: Maybe<InventoryItemType>;
};

export type IngredientType = {
  __typename?: 'IngredientType';
  id: Scalars['ID']['output'];
  product: ProductType;
  recipes: RecipeTypeConnection;
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
};

export type Mutation = {
  __typename?: 'Mutation';
  createInventoryItem?: Maybe<CreateInventoryItem>;
  updateItemQuantity?: Maybe<UpdateItemQuantity>;
};


export type MutationCreateInventoryItemArgs = {
  newInventoryItem: InventoryItemInput;
};


export type MutationUpdateItemQuantityArgs = {
  id: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
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
  tag?: Maybe<TagType>;
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

export type TagType = {
  __typename?: 'TagType';
  id: Scalars['ID']['output'];
  recipes: RecipeTypeConnection;
  value?: Maybe<Scalars['String']['output']>;
};


export type TagTypeRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  password: Scalars['String']['output'];
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
