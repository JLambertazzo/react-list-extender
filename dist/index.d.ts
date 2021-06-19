/// <reference types="react" />
interface Props {
    placeholder?: string;
    validators?: [(value: string, index?: number, list?: {
        [key: number]: string;
    }) => boolean];
}
export declare const ListExtender: ({ placeholder, validators }: Props) => JSX.Element;
export default ListExtender;
