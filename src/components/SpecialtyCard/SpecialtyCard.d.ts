interface SpecialtyCardProps {
    title: string;
    code: string;
    features?: string[];
    description: string;
    onSelect?: () => void;
}
export default function SpecialtyCard({ title, code, features, description, onSelect, }: SpecialtyCardProps): import("react/jsx-runtime").JSX.Element;
export {};
