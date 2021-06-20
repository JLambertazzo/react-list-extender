/// <reference types="react" />
interface ListExtenderProps {
    placeholder?: string;
    validators?: [(value: string, index?: number, list?: {
        [key: number]: string;
    }) => boolean];
    values?: string[];
}
export declare const ListExtender: ({ placeholder, validators, values, }: ListExtenderProps) => JSX.Element;
export default ListExtender;
