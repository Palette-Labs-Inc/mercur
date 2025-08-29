/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthCallbackResponse } from '../models/AuthCallbackResponse';
import type { AuthResponse } from '../models/AuthResponse';
import type { AuthStoreSessionResponse } from '../models/AuthStoreSessionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Authenticate Customer
     * Authenticate a customer and receive the JWT token to be used in the header of subsequent requests.
     *
     * When used with a third-party provider, such as Google, the request returns a `location` property. You redirect to the specified URL in your storefront to continue authentication with the third-party service.
     *
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postActorTypeAuthProvider(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<(AuthResponse | AuthCallbackResponse)> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/customer/{auth_provider}',
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
     * This API route is used by your storefront or frontend application when a third-party provider redirects to it after authentication. It validates the authentication with the third-party provider and, if successful, returns an authentication token. All query parameters received from the third-party provider, such as `code`, `state`, and `error`, must be passed as query parameters to this route.
     * You can decode the JWT token using libraries like [react-jwt](https://www.npmjs.com/package/react-jwt) in the storefront. If the decoded data doesn't  have an `actor_id` property, then you must register the customer using the Create Customer API route passing the token in the request's Authorization header.
     *
     * @param authProvider The provider used for authentication.
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static postActorTypeAuthProviderCallback(
        authProvider: string,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/customer/{auth_provider}/callback',
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
     * This API route retrieves a registration JWT token of a customer that hasn't been registered yet. The token is used in the header of requests that create a customer.
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static postActorTypeAuthProviderRegister(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/customer/{auth_provider}/register',
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
     * Generate Reset Password Token for Customer
     * Generate a reset password token for a customer. This API route doesn't reset the customer password or send them the reset instructions in a notification.
     *
     * Instead, This API route emits the `auth.password_reset` event, passing it the token as a payload. You can listen to that event in a subscriber as explained in [this guide](https://docs.medusajs.com/resources/commerce-modules/auth/reset-password), then send the customer a notification. The notification is sent using a [Notification Module Provider](https://docs.medusajs.com/resources/infrastructure-modules/notification), and it should have a URL that accepts a `token` query parameter, allowing the customer to reset their password from the storefront.
     *
     *
     * Use the generated token to update the customer's password using the [Reset Password API route](https://docs.medusajs.com/api/store#auth_postactor_typeauth_providerupdate).
     *
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postActorTypeAuthProviderResetPassword(
        authProvider: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/customer/{auth_provider}/reset-password',
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
     * Reset a Customer's Password
     * Reset a customer's password using a reset-password token generated with the [Generate Reset Password Token API route](https://docs.medusajs.com/api/store#auth_postactor_typeauth_providerresetpassword). You pass the token as a bearer token in the request's Authorization header.
     * @param authProvider The provider used for authentication.
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postActorTypeAuthProviderUpdate(
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
            url: '/auth/customer/{auth_provider}/update',
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
     * Set Authentication Session
     * Set the cookie session ID of a customer. The customer must be previously authenticated with the `/auth/customer/{provider}` API route first, as the JWT token is required in the header of the request.
     * @returns AuthStoreSessionResponse OK
     * @throws ApiError
     */
    public static postSession(): CancelablePromise<AuthStoreSessionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/session',
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
     * Delete Authentication Session
     * Deletes the cookie session ID previously set for authentication.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSession(): CancelablePromise<{
        /**
         * Whether the session was deleted successfully.
         */
        success: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/session',
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
     * Refresh Authentication Token
     * Refresh the authentication token of a customer. This is useful after authenticating a customer with a third-party service to ensure the token holds the new user's details, or when you don't want customers to re-login every day.
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static postAdminAuthTokenRefresh(): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/refresh',
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
