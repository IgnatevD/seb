export declare const specialtiesIntro: {
    title: string;
    subtitle: string;
};
export type EducationLevel = 'Бакалавр' | 'Магістр ОПП' | 'Магістр ОНП' | 'Доктор філософії';
export declare const educationLevels: EducationLevel[];
export declare const specialtiesByLevel: Record<EducationLevel, Array<{
    title: string;
    code: string;
    features: string[];
    description: string;
}>>;
