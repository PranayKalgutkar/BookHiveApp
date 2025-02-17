import { UserFile } from "./user-file";

export interface OpenTab {
    indexNumber: number;
    userFiles?: UserFile[]
}