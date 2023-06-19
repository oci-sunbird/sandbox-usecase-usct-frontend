export namespace DriverPOC {
    export interface Candidate {
        id: string;
        firstName: string;
        lastName: string;
        eligiblePackages: number[];
        idCode: string;
        dateOfBirth: string;
        household: any[];
        benefitPackage: {
            id: number;
            status: string;
        };
        dateOfPayment?: string;
    }
    export interface Package {
        name: string;
        description: string;
        id: number;
    }
    export interface PaymentInformation
}