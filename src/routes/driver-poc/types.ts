export namespace DriverPOC {
    export interface Candidate {
        id: string;
        firstName: string;
        lastName: string;
        eligiblePackages: string[];
        idCode: string;
        dateOfBirth: string;
        household: any[];
        benefitPackage: {
            id: string;
            status: string;
        };
        dateOfPayment?: string;
    }
    export interface Package {
        name: string;
        description: string;
        id: string;
    }
    export interface PaymentInformation
}