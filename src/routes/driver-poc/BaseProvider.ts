import { DriverPOC } from './types';

export default abstract class BaseProvider {
  abstract getCandidateList(): Promise<DriverPOC.Candidate[]>;
  abstract getPackages(): Promise<DriverPOC.Package[]>;
  abstract getCandidateInfo(id: number): Promise<DriverPOC.Candidate>;
  abstract enrollCandidate(
    candidate: DriverPOC.Candidate,
    enrolledPackage: DriverPOC.Package
  ): Promise<DriverPOC.Beneficiary>;
  abstract getBeneficiariesList(): Promise<DriverPOC.Beneficiary[]>;
  abstract validateBeneficiaries(
    beneficiares: DriverPOC.Beneficiary[]
  ): Promise<DriverPOC.Beneficiary[]>;
  abstract executePayments(
    beneficiaries: DriverPOC.Beneficiary[]
  ): Promise<string>;
  abstract login(email: string, password: string): Promise<string>;
  abstract getRoles(): Promise<string>;
  abstract createCandidate(candidate: DriverPOC.Candidate): Promise<DriverPOC.Candidate>;
  abstract updateCandidate(candidate: DriverPOC.Candidate): Promise<DriverPOC.Candidate>;
  abstract deleteCandidate(id: number): Promise<string>;
}
