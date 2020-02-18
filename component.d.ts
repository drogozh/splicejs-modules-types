import {Element} from './view';
export class ComponentBase {
    getElement(name:string): Element;
    applyContent(content:any): void;

}


export function ComponentFactory(require:any,scope:any) : any;
export interface Component<T extends ComponentBase> {
    new(): T;
}