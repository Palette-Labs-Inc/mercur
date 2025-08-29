/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminFileListResponse } from '../models/AdminFileListResponse';
import type { AdminFileResponse } from '../models/AdminFileResponse';
import type { AdminUploadPreSignedUrl } from '../models/AdminUploadPreSignedUrl';
import type { AdminUploadPreSignedUrlResponse } from '../models/AdminUploadPreSignedUrlResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminUploadsService {
    /**
     * Upload Files
     * Upload files to the configured File Module Provider.
     * @param requestBody
     * @returns AdminFileListResponse OK
     * @throws ApiError
     */
    public static adminPostUploads(
        requestBody?: {
            /**
             * The upload's files.
             */
            files: Array<({
                /**
                 * The file's name.
                 */
                name: string;
                /**
                 * The file's content.
                 */
                content: string;
            } | Record<string, any>)>;
        },
    ): CancelablePromise<AdminFileListResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/uploads',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get Presigned Upload URL
     * Get a presigned URL for uploading a file to the configured File Module Provider. The presigned URL can be used to upload files directly to the third-party provider. This only works if your configured provider supports presigned URLs, such as the S3 provider.
     * @param requestBody
     * @returns AdminUploadPreSignedUrlResponse OK
     * @throws ApiError
     */
    public static adminPostUploadsPresignedUrls(
        requestBody?: AdminUploadPreSignedUrl,
    ): CancelablePromise<AdminUploadPreSignedUrlResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/uploads/presigned-urls',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Get a File
     * Retrieve an uploaded file by its ID. You can expand the file's relations or select the fields that should be returned.
     * @param id The upload's ID.
     * @param fields Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default fields. without prefix it will replace the entire default fields.
     * @returns AdminFileResponse OK
     * @throws ApiError
     */
    public static adminGetUploadsId(
        id: string,
        fields?: string,
    ): CancelablePromise<AdminFileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/uploads/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
    /**
     * Delete a File
     * Delete a file. Uses the installed file module provider to delete the file.
     * @param id The file's ID.
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteUploadsId(
        id: string,
    ): CancelablePromise<{
        /**
         * The file's ID.
         */
        id: string;
        /**
         * The name of the deleted object.
         */
        object: string;
        /**
         * Whether the file was deleted.
         */
        deleted: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/uploads/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Client Error`,
                401: `User is not authorized. Must log in first`,
                404: `Not Found Error`,
                409: `Invalid State Error`,
                422: `Invalid Request Error`,
                500: `Server Error`,
            },
        });
    }
}
