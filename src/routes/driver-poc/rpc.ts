import { createContext } from "react";
import RPCProviderFactory from "./RPCProviderFactory";
import { DriverPOC } from "./types";

export default class RPC {
  RPCProviderFactory: RPCProviderFactory = new RPCProviderFactory();
  getCandidateList = () => {
    return this.RPCProviderFactory.getProvider(
      "getCandidateList"
    ).getCandidateList();
  };
  getPackages = () => {
    return this.RPCProviderFactory.getProvider("getPackages").getPackages();
  };
  getCandidateInfo = (id: number) => {
    return this.RPCProviderFactory.getProvider(
      "getCandidateInfo"
    ).getCandidateInfo(id);
  };
  enrollCandidate = (
    person: DriverPOC.Person,
    selectedPackage: DriverPOC.Package
  ) => {
    return this.RPCProviderFactory.getProvider(
      "enrollCandidate"
    ).enrollCandidate(person, selectedPackage);
  };
  getBeneficiariesList = () => {
    return this.RPCProviderFactory.getProvider(
      "getBeneficiariesList"
    ).getBeneficiariesList();
  };
  validateBeneficiaries = () => {};
  executePayments = () => {};
}

export const RPCContext = createContext(new RPC());
