/// <reference types="react" />
interface ListExtenderProps {
    placeholder?: string;
    validators?: [(value: string, index?: number, list?: {
        [key: number]: string;
    }) => boolean];
}
export declare const ListExtender: ({ placeholder, validators, }: ListExtenderProps) => JSX.Element;
export default ListExtender;
