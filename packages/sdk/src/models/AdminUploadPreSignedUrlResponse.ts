/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The result of the pre-signed URL upload request.
 */
export type AdminUploadPreSignedUrlResponse = {
    /**
     * The file's pre-signed upload URL.
     */
    url: string;
    /**
     * The file's filename.
     */
    filename: string;
    /**
     * The file's orignal name.
     */
    originalname: string;
    /**
     * The file's mime type.
     */
    mime_type: string;
    /**
     * The file's extension.
     */
    extension: string;
    /**
     * The file's size in bytes.
     */
    size: number;
};

