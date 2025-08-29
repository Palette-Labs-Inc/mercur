/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The details of the file to upload.
 */
export type AdminUploadPreSignedUrl = {
    /**
     * The file's original name.
     */
    originalname: string;
    /**
     * The file's size in bytes.
     */
    size: number;
    /**
     * The file's mime type.
     */
    mime_type: string;
    /**
     * The access level of the file. If `private`, the file will not be publicly accessible. The default value depends on the configured File Module Provider.
     */
    access?: 'public' | 'private';
};

