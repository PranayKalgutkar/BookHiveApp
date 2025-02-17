import { UserFile } from "./user-file";

export interface UserInfo {
    userId: number,
    fullName: string,
    adharCardNo: string,
    emailId: string,
    mobileNo: string,
    foreignKeyReferenceId: number, // Will Bind as Foreign Key to Ownership, SecurityTenure, TenantAgreement
    userFiles?: UserFile[],
    createdOn?: Date | null,
    createdBy?: string
}