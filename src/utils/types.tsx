export interface ProductInterface {
    name: string;
    price: number;
    picture: string;
    isInStock: boolean;
}

export interface CustomerInterface {

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
}

export interface NewsInterface {
    date: string;
    title: string;
    description: string;
    more: string;
}
