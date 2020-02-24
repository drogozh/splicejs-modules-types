import {Element} from './view';
export class ComponentBase {
    node:HTMLElement;
    getElement(name:string): Element;
    getComponent<T>(name:string): T;
    applyContent(content:any): void;
    reflow(x?:number,y?:number,w?:number,h?:number,b?:boolean);
}


export function ComponentFactory(require:any,scope:any) : any;
export interface Component<T extends ComponentBase> {
    new(): T;
}