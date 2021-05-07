import { SvelteComponentTyped } from 'svelte';
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
declare const _ButtonProps: {
    buttonText?: string;
};
declare const _ButtonEvents: {
    [evt: string]: CustomEvent<any>;
};
declare const _ButtonSlots: {};
export declare type ButtonProps = typeof _ButtonProps;
export declare type ButtonEvents = typeof _ButtonEvents;
export declare type ButtonSlots = typeof _ButtonSlots;
export {};
