type CategoryProps = {
    text: string;
}
type ProductProps = {
    name: string;
    price: number;
    image: string;
    description: string;
    chips: CategoryProps[];
    rating: number;
    ratingCount: number;

}