import Parcel from "./products/parcel";
import Commissions from "./commissions";
import variation from "./products/variation";
import SingleVariationDetails from "./products/single_variation";
import MultipleVariationDetails from "./products/multiple_variation";

export default interface Products {
    thumbnail_image: string;
    cover_image: string[];
    name: string;
    description: string;
    category: string|null;
    no_reseller: boolean;
    // Sales
    price: number;
    stock: number;
    has_variations: boolean;
    fulfilled_by_merchant: boolean;
    // variation
    variation1?: variation;
    variation2?: variation;
    variation_details?: SingleVariationDetails[] | MultipleVariationDetails[];
    // shipping
    weight: number;
    parcel_size: Parcel;
    // others
    storage_type: string;
    start_date: string;
    end_date?: string;
    expiry_date?: string;
    no_end_date: boolean;
    // Invisible fields
    moderation_status: 'pending'|'success'|'rejected';
    publish_status: 'pending'|'published'|'rejected'|'ended';
    commission: Commissions;
    uid: string;
}