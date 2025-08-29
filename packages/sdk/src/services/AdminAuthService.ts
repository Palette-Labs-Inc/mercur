/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthCallbackResponse } from '../models/AuthCallbackResponse';
import type { AuthResponse } from '../models/AuthResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAuthService {
    /**
     * Authenticate User
     * Authenticate a user and receive the JWT token to be used in the header of subsequent requests.
     *
     * When used with a third-party provider, such as Google, the request returns a `location` property. You redirect to the specified URL in your frontend to continue authentication with the third-party service.
     *
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostActorTypeAuthProvider(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<(AuthResponse | AuthCallbackResponse)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user/{auth_provider}',
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
     * Validate Authentication Callback
     * This API route is used by your dashboard or frontend application when a third-party provider redirects to it after authentication. It validates the authentication with the third-party provider and, if successful, returns an authentication token. All query parameters received from the third-party provider, such as `code`, `state`, and `error`, must be passed as query parameters to this route.
     *
     * You can decode the JWT token using libraries like [react-jwt](https://www.npmjs.com/package/react-jwt) in the frontend. If the decoded data doesn't  have an `actor_id` property, then you must create a user, typically using the Accept Invite route passing the token in the request's Authorization header.
     *
     * @param authProvider The provider used for authentication.
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static adminPostActorTypeAuthProviderCallback(
        authProvider: string,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user/{auth_provider}/callback',
            path: {
                'auth_provider': authProvider,
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
     * Retrieve Registration JWT Token
     * This API route retrieves a registration JWT token of a user that hasn't been registered yet. The token is used in the header of requests that create a user, such as the Accept Invite API route.
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static adminPostActorTypeAuthProviderRegister(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user/{auth_provider}/register',
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
     * Generate Reset Password Token for Admin User
     * Generate a reset password token for an admin user. This API route doesn't reset the admin's password or send them the reset instructions in a notification.
     *
     * Instead, This API route emits the `auth.password_reset` event, passing it the token as a payload. You can listen to that event in a subscriber as explained in [this guide](https://docs.medusajs.com/resources/commerce-modules/auth/reset-password), then send the user a notification. The notification is sent using a [Notification Module Provider](https://docs.medusajs.com/resources/infrastructure-modules/notification), and it should have the URL to reset the password in the Medusa Admin dashboard, such as `http://localhost:9000/app/reset-password?token=123`.
     *
     *
     * Use the generated token to update the user's password using the [Reset Password API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerupdate).
     *
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostActorTypeAuthProviderResetPassword(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user/{auth_provider}/reset-password',
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
     * Reset an Admin User's Password
     * Reset an admin user's password using a reset-password token generated with the [Generate Reset Password Token API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerresetpassword). You pass the token as a bearer token in the request's Authorization header.
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminPostActorTypeAuthProviderUpdate(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<{
        /**
         * Whether the password was reset successfully.
         */
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user/{auth_provider}/update',
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
