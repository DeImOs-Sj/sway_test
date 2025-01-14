/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
  Forc version: 0.64.0
  Fuel-Core version: 0.36.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
  StrSlice,
} from "fuels";

import type { Option, Enum } from "./common";

export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;
export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type TransferEventInput = {
  token: AssetIdInput;
  from: IdentityInput;
  to: IdentityInput;
  amount: BigNumberish;
};
export type TransferEventOutput = {
  token: AssetIdOutput;
  from: IdentityOutput;
  to: IdentityOutput;
  amount: BN;
};

const abi = {
  programType: "contract",
  specVersion: "1",
  encodingVersion: "1",
  concreteTypes: [
    {
      type: "()",
      concreteTypeId:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
    },
    {
      type: "bool",
      concreteTypeId:
        "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
    },
    {
      type: "enum std::identity::Identity",
      concreteTypeId:
        "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      metadataTypeId: 1,
    },
    {
      type: "enum std::option::Option<struct std::asset_id::AssetId>",
      concreteTypeId:
        "191bf2140761b3c5ab6c43992d162bb3dc9d7f2272b2ee5f5eeea411ddedcd32",
      metadataTypeId: 2,
      typeArguments: [
        "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      ],
    },
    {
      type: "str",
      concreteTypeId:
        "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a",
    },
    {
      type: "struct TransferEvent",
      concreteTypeId:
        "a6230b7a08f198b6dd0fa8299d16a3879c8d0373c87422af40b1b558e5885994",
      metadataTypeId: 4,
    },
    {
      type: "struct std::asset_id::AssetId",
      concreteTypeId:
        "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      metadataTypeId: 6,
    },
    {
      type: "u64",
      concreteTypeId:
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
    },
  ],
  metadataTypes: [
    {
      type: "b256",
      metadataTypeId: 0,
    },
    {
      type: "enum std::identity::Identity",
      metadataTypeId: 1,
      components: [
        {
          name: "Address",
          typeId: 5,
        },
        {
          name: "ContractId",
          typeId: 7,
        },
      ],
    },
    {
      type: "enum std::option::Option",
      metadataTypeId: 2,
      components: [
        {
          name: "None",
          typeId:
            "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
        },
        {
          name: "Some",
          typeId: 3,
        },
      ],
      typeParameters: [3],
    },
    {
      type: "generic T",
      metadataTypeId: 3,
    },
    {
      type: "struct TransferEvent",
      metadataTypeId: 4,
      components: [
        {
          name: "token",
          typeId: 6,
        },
        {
          name: "from",
          typeId: 1,
        },
        {
          name: "to",
          typeId: 1,
        },
        {
          name: "amount",
          typeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
    },
    {
      type: "struct std::address::Address",
      metadataTypeId: 5,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
    {
      type: "struct std::asset_id::AssetId",
      metadataTypeId: 6,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
    {
      type: "struct std::contract_id::ContractId",
      metadataTypeId: 7,
      components: [
        {
          name: "bits",
          typeId: 0,
        },
      ],
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "amount",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
      ],
      name: "deposit_funds",
      output:
        "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      attributes: [
        {
          name: "storage",
          arguments: ["write"],
        },
      ],
    },
    {
      inputs: [],
      name: "get_contract_balance",
      output:
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "recipient",
          concreteTypeId:
            "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
        },
        {
          name: "amount",
          concreteTypeId:
            "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
        },
        {
          name: "asset",
          concreteTypeId:
            "191bf2140761b3c5ab6c43992d162bb3dc9d7f2272b2ee5f5eeea411ddedcd32",
        },
      ],
      name: "transfer",
      output:
        "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: "10098701174489624218",
      concreteTypeId:
        "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a",
    },
    {
      logId: "11971424853244876982",
      concreteTypeId:
        "a6230b7a08f198b6dd0fa8299d16a3879c8d0373c87422af40b1b558e5885994",
    },
  ],
  messagesTypes: [],
  configurables: [],
};

const storageSlots: StorageSlot[] = [
  {
    key: "63a60e5d8a026ee74ad811c1d1c1a301e57d0baa431b3796e1628f4219d08948",
    value: "0000000000000000000000000000000000000000000000000000000000000000",
  },
];

export class TestContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    deposit_funds: FunctionFragment;
    get_contract_balance: FunctionFragment;
    transfer: FunctionFragment;
  };
}

export class TestContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: TestContractInterface;
  declare functions: {
    deposit_funds: InvokeFunction<[amount: BigNumberish], boolean>;
    get_contract_balance: InvokeFunction<[], BN>;
    transfer: InvokeFunction<
      [
        recipient: IdentityInput,
        amount: BigNumberish,
        asset?: Option<AssetIdInput>,
      ],
      void
    >;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ) {
    super(id, abi, accountOrProvider);
  }
}
