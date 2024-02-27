import { ContactPerson, CustomerType } from '@oxytrack/database';
import { CreateAmbulance, CreateAmbulance201Response } from '@oxytrack/tenent-contract';
import { prisma } from './../../index';

export const createAmbulance = async (ambulanceData: CreateAmbulance): Promise<CreateAmbulance201Response> => {
    //TODO: need to check transactions
    const transaction = await prisma.$transaction(async () => {
        const ambulance = await prisma.ambulance.create({
            data: {
                ambulanceName: ambulanceData.ambulanceName,
                ambulanceNumber: ambulanceData.ambulanceNumber,
                emailAddress: ambulanceData.emailAddress,
                description: ambulanceData.description
            }
        });

        let contactPersons: ContactPerson[] = []

        await Promise.all((ambulanceData.contactPersons!).map(async (contactPerson, index) => {
            contactPersons[index] = await prisma.contactPerson.create({
                data: {
                    contactName: contactPerson.contactName,
                    mobileNumber: contactPerson.mobileNumber,
                    active: contactPerson.active
                }
            })
        }))

        await prisma.contactPersonToCustomer.createMany({
            data: contactPersons.map(contactPerson => {
                return {
                    contactPersonId: contactPerson.id,
                    customer: CustomerType.AMBULANCE,
                    customerId: ambulance.id
                }
            })
        })

        return { ...ambulance, contactPersons: contactPersons };
    })

    return transaction;
}