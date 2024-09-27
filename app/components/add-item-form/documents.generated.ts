import * as Types from '../../../components/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  __typename?: 'Query';
  products?: Array<{
    __typename?: 'ProductType';
    id: string;
    name: string;
  } | null> | null;
};

export type GetUnitsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUnitsQuery = {
  __typename?: 'Query';
  units?: Array<{
    __typename?: 'UnitType';
    id: string;
    name: string;
  } | null> | null;
};

export type CreateInventoryItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
  quantity: Types.Scalars['Int']['input'];
  unitId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  expirationDate: Types.Scalars['String']['input'];
}>;

export type CreateInventoryItemMutation = {
  __typename?: 'Mutation';
  createInventoryItem?: {
    __typename?: 'CreateInventoryItem';
    inventoryItem?: { __typename?: 'InventoryItemType'; id: string } | null;
  } | null;
};

export const GetProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProducts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetUnitsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUnits' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'units' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUnitsQuery, GetUnitsQueryVariables>;
export const CreateInventoryItemDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateInventoryItem' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'quantity' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'unitId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'expirationDate' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInventoryItem' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newInventoryItem' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'quantity' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'unitId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'unitId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'expirationDate' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'expirationDate' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'inventoryItem' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInventoryItemMutation,
  CreateInventoryItemMutationVariables
>;
