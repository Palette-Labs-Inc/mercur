/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductCategoryRequest } from './ProductCategoryRequest';
import type { ProductCollectionRequest } from './ProductCollectionRequest';
import type { ProductTagRequest } from './ProductTagRequest';
import type { ProductTypeRequest } from './ProductTypeRequest';
import type { ReviewRemoveRequest } from './ReviewRemoveRequest';
export type VendorUpdateRequestData = {
    /**
     * The resource to be updated
     */
    request: (ProductCollectionRequest | ProductCategoryRequest | ReviewRemoveRequest | ProductTypeRequest | ProductTagRequest);
};

