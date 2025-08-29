/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthCallbackResponse } from '../models/AuthCallbackResponse';
import type { AuthResponse } from '../models/AuthResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Authenticate Seller
     * Authenticate a seller and receive the JWT token to be used in the header of subsequent requests.
     *
     * When used with a third-party provider, such as Google, the request returns a `location` property. You redirect to the specified URL in your frontend to continue authentication with the third-party service.
     *
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postSellerTypeAuthProvider(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<(AuthResponse | AuthCallbackResponse)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/seller/{auth_provider}',
            path: {
                'auth_provider': authProvider,
            },
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
     * Retrieve Registration JWT Token
     * This API route retrieves a registration JWT token of a seller that hasn't been registered yet. The token is used in the header of requests that create a seller, such as the Accept Invite API route.
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static postSellerTypeAuthProviderRegister(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/seller/{auth_provider}/register',
            path: {
                'auth_provider': authProvider,
            },
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
}
