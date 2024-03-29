export interface ProductInterface {
  id: number;
  label: string;
  price: number;
  brandId: number;
  stock: number;
}

export interface ReviewInterface {
  date: string;
  stars: number;
  text?: string;
  isVerified: boolean;
  reply?: string;
}

export interface BrandInterface {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  inStock: boolean;
  productType: string;
  description: string[];
  categoryId: number[];
  sold: number;
  stars: number;
  reviews: number;
}

export interface NewsInterface {
  date: string;
  title: string;
  description: string;
  more: string;
}

export interface QuestionInterface {
  question: string;
  answer: string;
}

export interface CartItemInterface {
  id: number;
  qty: number;
  brand: BrandInterface | undefined;
  item: ProductInterface | undefined;
}

export interface CustomerDetailInterface {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  zipCode: number | string;
}

export interface PaymentMethodInterface {
  cardNumber: string;
  expiryDate: string;
  ccv: string;
}
