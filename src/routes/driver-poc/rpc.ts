import { DriverPOC } from "./types";

const mockHouseholdDate = [
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
  },
];

const mockCandidateList: DriverPOC.Candidate[] = [
  {
    id: "1",
    firstName: "Guy",
    lastName: "Man",
    eligiblePackages: ["UBI", "TPA", "CFS"],
    idCode: "111-111-111-111a",
    dateOfBirth: "1994-03-10",
    household: mockHouseholdDate,
    benefitPackage: {
      id: "UBI",
      status: "ACTION_REQUIRED",
    },
  },
  {
    id: "2",
    firstName: "Other",
    lastName: "Guy",
    eligiblePackages: [],
    idCode: "222-222-222-222b",
    dateOfBirth: "1994-03-10",
    household: mockHouseholdDate,
    benefitPackage: {
      id: "UBI",
      status: "ACTION_REQUIRED",
    },
  },
  {
    id: "3",
    firstName: "Another",
    lastName: "Person",
    eligiblePackages: ["TPA"],
    idCode: "333-333-333-333c",
    dateOfBirth: "1994-03-10",
    household: mockHouseholdDate,
    benefitPackage: {
      id: "UBI",
      status: "ACTION_REQUIRED",
    },
  },
];

const mockPackages: DriverPOC.Package[] = [
  {
    id: "UBI",
    name: "Universal Basic Income (UBI)",
    description:
      "Providing a fixed cash transfer to all eligible individuals, regardless of income, for a minimum standard of living.",
  },
  {
    id: "TPA",
    name: "Targeted Poverty Alleviation (TPA)",
    description:
      "Offering additional financial assistance to those living below the poverty line to alleviate poverty effectively",
  },
  {
    id: "SP",
    name: "Social Pension",
    description:
      "Ensuring economic security during retirement by providing regular cash transfers to elderly citizens.",
  },
  {
    id: "CFS",
    name: "Child and Family Support (CFS)",
    description:
      "Providing financial assistance to families with children to improve child well-being and reduce child poverty.",
  },
];

export default class RPC {
  private readonly apiEndpoint: string;
  constructor({ apiEndpoint = import.meta.env.VITE_API_ENDPOINT as string }) {
    this.apiEndpoint = apiEndpoint;
  }
  async getCandidateList(callback: Function) {
    const request = fetch(`${this.apiEndpoint}/candidates`).then(async (res) =>
      // callback(await res.json())
      callback(mockCandidateList)
    );
    return request;
  }
  async getPackages(callback: Function) {
    const request = fetch(`${this.apiEndpoint}/packages`).then(async (res) =>
      // callback(await res.json())
      callback(mockPackages)
    );
    return request;
  }
  async getCandidateInfo(id: string, callback: Function) {
    const request = fetch(`${this.apiEndpoint}/user/${id}`).then(async (res) =>
      // callback(await res.json())
      callback(mockCandidateList.find((candidate) => candidate.id === id))
    );
    return request;
  }
  async enrollCandidate(
    candidateId: string,
    packageId: string,
    callback: Function
  ) {
    const request = fetch(`${this.apiEndpoint}/candidate/enroll`).then(
      async (res) =>
        // callback(await res.json())
        setTimeout(() => {
          callback(true);
        }, 1500)
    );
    return request;
  }
  async getBeneficiariesList(callback: Function) {
    const request = fetch(`${this.apiEndpoint}/beneficaries`).then(
      async (res) =>
        // callback(await res.json())
        callback(mockCandidateList)
    );
    return request;
  }
  async validateBeneficiaries(
    candidates: DriverPOC.Candidate[],
    callback: Function
  ) {
    const request = fetch(`${this.apiEndpoint}/beneficaries/validate}`).then(
      async (res) =>
        // callback(await res.json())
        setTimeout(() => {
          callback(
            candidates.map((c) => {
              return {
                ...c,
                dateOfPayment: new Date(Date.now()).toISOString(),
              };
            })
          );
        }, 1500)
    );
    return request;
  }
  async executePayments(candidates: DriverPOC.Candidate[], callback: Function) {
    const request = fetch(`${this.apiEndpoint}/payments/execute`).then(
      async (res) => setTimeout(() => callback(true), 1500)
    );
    return request;
  }
}
