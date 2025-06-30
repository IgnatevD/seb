export interface StaffMember {
    name: string;
    role: string;
    photoUrl?: string;
}
export declare const facultyInfo: {
    sectionTitle: string;
    deanateTitle: string;
    departmentsTitle: string;
    description: {
        title: string;
        intro: {
            text: string;
        };
        directionsTitle: string;
        directions: string[];
        benefitsTitle: string;
        benefits: string[];
        conclusion: string;
    };
    deanate: StaffMember[];
    departments: StaffMember[];
};
