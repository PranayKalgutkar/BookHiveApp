export interface UserFile {
    fileId: number,
    fileName: string,
    fileContentType: string,
    fileSize: number,
    fileDataBase64String: string
    fileDataByte: Uint8Array | null,
    fileFor: string,
    foreignKeyReferenceId: number,
    foreignKeyReferenceTo: number,
    createdOn?: Date | null,
    createdBy: string
}
