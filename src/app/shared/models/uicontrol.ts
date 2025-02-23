export interface UIControl {
}

export type MenuItem = {
    icon : string;
    label : string;
    route? : string;
    subItems? : MenuItem[];
}
