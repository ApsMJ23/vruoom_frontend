export type AddClientPayload = {
    client: {
        businessName: string;
        TypeOfFirm: string;
        TypeOfSite: string;
        address: string;
        AverageSaleVolumeMS: number;
        AverageSaleVolumeHSD: number;
        AutomationType: string;
        HoursOfOperation: string;
    };
    employees:{
        mobileNo: string;
        whatsappNo: string;
        role: string;
    }
};
