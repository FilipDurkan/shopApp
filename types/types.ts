declare interface Product {
  brandId: number;
  brandName: string;
  brandSlug: string;
  breadcrumb: Breadcrumb[];
  categoryTagNames: string[];
  colors: string[];
  clickOutAllowed: boolean;
  cpc: number;
  deepLink: string;
  description: string;
  epc: number;
  genders: string[];
  hasCoupon: boolean;
  lowestPrice: number;
  mainImageUrl: string;
  additionalImages: string[];
  materials: string | null;
  name: string;
  originalPrice: number;
  pageTags: string[];
  price: number;
  productId: string;
  productLines: any[]; // Assuming this is an empty array, but could be further refined if necessary.
  retailerId: number;
  retailerName: string;
  retailerScore: number;
  shippingCost: number | null;
  shippingInfo: string | null;
  sizes: Size[];
  discountCoupon?: DiscountCoupon; // Optional as not all products have this field.
}

interface Breadcrumb {
  label: string;
  slug: string;
}

interface Size {
  id: string;
  name: string;
}

interface DiscountCoupon {
  title: string;
  code: string;
  description: string;
  amount: number;
  amount_type: string;
}
