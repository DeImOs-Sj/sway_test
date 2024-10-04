/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
  Forc version: 0.64.0
  Fuel-Core version: 0.36.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { TestContract } from "./TestContract";

const bytecode = decompressBytecode("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");

export class TestContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, TestContract.abi, accountOrProvider);
  }

  deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: TestContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<TestContract>> {
    const factory = new TestContractFactory(wallet);
    return factory.deploy(options);
  }
}