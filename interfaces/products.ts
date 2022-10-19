export type InterfaceSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type InterfaceType = "shirts" | "pants" | "hoodies" | "hats";

export interface InterfaceProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: InterfaceSize[];
  slug: string;
  tags: string[];
  title: string;
  type: InterfaceType;
  gender: "men" | "women" | "kid" | "unisex";
}
