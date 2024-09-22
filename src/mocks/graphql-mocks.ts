import {
  CreateInventoryItem,
  CreateUser,
  IngredientType,
  InventoryItemInput,
  InventoryItemType,
  Mutation,
  ObtainJsonWebToken,
  PageInfo,
  ProductType,
  QuantitativeUnitInput,
  Query,
  RecipeType,
  RecipeTypeConnection,
  RecipeTypeEdge,
  Refresh,
  TagType,
  UnitType,
  UpdateItemQuantity,
  UserType,
  Verify,
} from './graphql';

export const aCreateInventoryItem = (
  overrides?: Partial<CreateInventoryItem>,
): CreateInventoryItem => {
  return {
    inventoryItem:
      overrides && overrides.hasOwnProperty('inventoryItem')
        ? overrides.inventoryItem!
        : anInventoryItemType(),
  };
};

export const aCreateUser = (overrides?: Partial<CreateUser>): CreateUser => {
  return {
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : aUserType(),
  };
};

export const anIngredientType = (
  overrides?: Partial<IngredientType>,
): IngredientType => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '0487f5c3-a589-4f5d-8f01-c463bb966aa8',
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : aProductType(),
    recipes:
      overrides && overrides.hasOwnProperty('recipes')
        ? overrides.recipes!
        : aRecipeTypeConnection(),
    unit:
      overrides && overrides.hasOwnProperty('unit')
        ? overrides.unit!
        : aUnitType(),
  };
};

export const anInventoryItemInput = (
  overrides?: Partial<InventoryItemInput>,
): InventoryItemInput => {
  return {
    expirationDate:
      overrides && overrides.hasOwnProperty('expirationDate')
        ? overrides.expirationDate!
        : 'tergiversatio',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 4884,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 2242,
    unit:
      overrides && overrides.hasOwnProperty('unit')
        ? overrides.unit!
        : aQuantitativeUnitInput(),
  };
};

export const anInventoryItemType = (
  overrides?: Partial<InventoryItemType>,
): InventoryItemType => {
  return {
    expirationDate:
      overrides && overrides.hasOwnProperty('expirationDate')
        ? overrides.expirationDate!
        : '2021-12-21T07:54:30.280Z',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '4997ab6f-9a7e-4233-8d39-0c4f7f43972b',
    person:
      overrides && overrides.hasOwnProperty('person')
        ? overrides.person!
        : [aUserType()],
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : aProductType(),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 2472,
    unit:
      overrides && overrides.hasOwnProperty('unit')
        ? overrides.unit!
        : aUnitType(),
  };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
  return {
    createInventoryItem:
      overrides && overrides.hasOwnProperty('createInventoryItem')
        ? overrides.createInventoryItem!
        : aCreateInventoryItem(),
    createUser:
      overrides && overrides.hasOwnProperty('createUser')
        ? overrides.createUser!
        : aCreateUser(),
    refreshToken:
      overrides && overrides.hasOwnProperty('refreshToken')
        ? overrides.refreshToken!
        : aRefresh(),
    tokenAuth:
      overrides && overrides.hasOwnProperty('tokenAuth')
        ? overrides.tokenAuth!
        : anObtainJsonWebToken(),
    updateItemQuantity:
      overrides && overrides.hasOwnProperty('updateItemQuantity')
        ? overrides.updateItemQuantity!
        : anUpdateItemQuantity(),
    verifyToken:
      overrides && overrides.hasOwnProperty('verifyToken')
        ? overrides.verifyToken!
        : aVerify(),
  };
};

export const anObtainJsonWebToken = (
  overrides?: Partial<ObtainJsonWebToken>,
): ObtainJsonWebToken => {
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : 'thema',
    refreshExpiresIn:
      overrides && overrides.hasOwnProperty('refreshExpiresIn')
        ? overrides.refreshExpiresIn!
        : 9921,
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : 'quisquam',
  };
};

export const aPageInfo = (overrides?: Partial<PageInfo>): PageInfo => {
  return {
    endCursor:
      overrides && overrides.hasOwnProperty('endCursor')
        ? overrides.endCursor!
        : 'tabgo',
    hasNextPage:
      overrides && overrides.hasOwnProperty('hasNextPage')
        ? overrides.hasNextPage!
        : true,
    hasPreviousPage:
      overrides && overrides.hasOwnProperty('hasPreviousPage')
        ? overrides.hasPreviousPage!
        : false,
    startCursor:
      overrides && overrides.hasOwnProperty('startCursor')
        ? overrides.startCursor!
        : 'tripudio',
  };
};

export const aProductType = (overrides?: Partial<ProductType>): ProductType => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '95fc6b8e-0b93-41d3-aaf8-ca666ed9fef0',
    ingredientSet:
      overrides && overrides.hasOwnProperty('ingredientSet')
        ? overrides.ingredientSet!
        : [anIngredientType()],
    inventoryitemSet:
      overrides && overrides.hasOwnProperty('inventoryitemSet')
        ? overrides.inventoryitemSet!
        : [anInventoryItemType()],
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'uxor',
  };
};

export const aQuantitativeUnitInput = (
  overrides?: Partial<QuantitativeUnitInput>,
): QuantitativeUnitInput => {
  return {
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 6050,
  };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
  return {
    inventoryItems:
      overrides && overrides.hasOwnProperty('inventoryItems')
        ? overrides.inventoryItems!
        : [anInventoryItemType()],
    me:
      overrides && overrides.hasOwnProperty('me') ? overrides.me! : aUserType(),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : aProductType(),
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : [aProductType()],
    recipe:
      overrides && overrides.hasOwnProperty('recipe')
        ? overrides.recipe!
        : aRecipeType(),
    recipes:
      overrides && overrides.hasOwnProperty('recipes')
        ? overrides.recipes!
        : aRecipeTypeConnection(),
    tag:
      overrides && overrides.hasOwnProperty('tag')
        ? overrides.tag!
        : aTagType(),
    tags:
      overrides && overrides.hasOwnProperty('tags')
        ? overrides.tags!
        : [aTagType()],
    viewer:
      overrides && overrides.hasOwnProperty('viewer')
        ? overrides.viewer!
        : aQuery(),
  };
};

export const aRecipeType = (overrides?: Partial<RecipeType>): RecipeType => {
  return {
    cookTime:
      overrides && overrides.hasOwnProperty('cookTime')
        ? overrides.cookTime!
        : 6977,
    estimatedCost:
      overrides && overrides.hasOwnProperty('estimatedCost')
        ? overrides.estimatedCost!
        : 'desparatus',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'c8229646-b73b-49f1-b3ba-9cf96c95dee2',
    ingredients:
      overrides && overrides.hasOwnProperty('ingredients')
        ? overrides.ingredients!
        : [anIngredientType()],
    instructions:
      overrides && overrides.hasOwnProperty('instructions')
        ? overrides.instructions!
        : 'absens',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'suffragium',
    prepTime:
      overrides && overrides.hasOwnProperty('prepTime')
        ? overrides.prepTime!
        : 7461,
    url:
      overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'super',
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : aUserType(),
  };
};

export const aRecipeTypeConnection = (
  overrides?: Partial<RecipeTypeConnection>,
): RecipeTypeConnection => {
  return {
    edges:
      overrides && overrides.hasOwnProperty('edges')
        ? overrides.edges!
        : [aRecipeTypeEdge()],
    pageInfo:
      overrides && overrides.hasOwnProperty('pageInfo')
        ? overrides.pageInfo!
        : aPageInfo(),
  };
};

export const aRecipeTypeEdge = (
  overrides?: Partial<RecipeTypeEdge>,
): RecipeTypeEdge => {
  return {
    cursor:
      overrides && overrides.hasOwnProperty('cursor')
        ? overrides.cursor!
        : 'aedificium',
    node:
      overrides && overrides.hasOwnProperty('node')
        ? overrides.node!
        : aRecipeType(),
  };
};

export const aRefresh = (overrides?: Partial<Refresh>): Refresh => {
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : 'vigilo',
    refreshExpiresIn:
      overrides && overrides.hasOwnProperty('refreshExpiresIn')
        ? overrides.refreshExpiresIn!
        : 5209,
    token:
      overrides && overrides.hasOwnProperty('token')
        ? overrides.token!
        : 'sumptus',
  };
};

export const aTagType = (overrides?: Partial<TagType>): TagType => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '11dbce62-74ce-4b27-85f9-bcc78df8278d',
    value:
      overrides && overrides.hasOwnProperty('value')
        ? overrides.value!
        : 'adipisci',
  };
};

export const aUnitType = (overrides?: Partial<UnitType>): UnitType => {
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '10ecc51b-942f-4cc1-a4cc-417253b064ed',
    ingredientSet:
      overrides && overrides.hasOwnProperty('ingredientSet')
        ? overrides.ingredientSet!
        : [anIngredientType()],
    inventoryitemSet:
      overrides && overrides.hasOwnProperty('inventoryitemSet')
        ? overrides.inventoryitemSet!
        : [anInventoryItemType()],
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'succurro',
  };
};

export const anUpdateItemQuantity = (
  overrides?: Partial<UpdateItemQuantity>,
): UpdateItemQuantity => {
  return {
    inventoryItem:
      overrides && overrides.hasOwnProperty('inventoryItem')
        ? overrides.inventoryItem!
        : anInventoryItemType(),
  };
};

export const aUserType = (overrides?: Partial<UserType>): UserType => {
  return {
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'sordeo',
    firstName:
      overrides && overrides.hasOwnProperty('firstName')
        ? overrides.firstName!
        : 'creptio',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '48c1bbb3-b280-4cca-be7c-bf9a963ddfb4',
    inventoryitemSet:
      overrides && overrides.hasOwnProperty('inventoryitemSet')
        ? overrides.inventoryitemSet!
        : [anInventoryItemType()],
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : true,
    isStaff:
      overrides && overrides.hasOwnProperty('isStaff')
        ? overrides.isStaff!
        : false,
    isSuperuser:
      overrides && overrides.hasOwnProperty('isSuperuser')
        ? overrides.isSuperuser!
        : true,
    lastLogin:
      overrides && overrides.hasOwnProperty('lastLogin')
        ? overrides.lastLogin!
        : 'quidem',
    lastName:
      overrides && overrides.hasOwnProperty('lastName')
        ? overrides.lastName!
        : 'antea',
    recipeSet:
      overrides && overrides.hasOwnProperty('recipeSet')
        ? overrides.recipeSet!
        : aRecipeTypeConnection(),
    username:
      overrides && overrides.hasOwnProperty('username')
        ? overrides.username!
        : 'angustus',
  };
};

export const aVerify = (overrides?: Partial<Verify>): Verify => {
  return {
    payload:
      overrides && overrides.hasOwnProperty('payload')
        ? overrides.payload!
        : 'solium',
  };
};
