import { Registry } from "miragejs"
import Schema from "miragejs/orm/schema"

import { factories } from "./factories"
import { models } from "./models"

type AppRegistry = Registry<typeof models, typeof factories>
export type AppSchema = Schema<AppRegistry>

export type TCitizen = {
    id: string;
    fullName: string;
    dateOfBirth: Date;
    phoneNumber: string;
    occupation: string;
    idCode: string;
    email: string;
    socialCode: string;
    fullAddress: string;
}

export type TCandidates = {

}

export type TBeneficiaryCases = {
    
}