export default interface variation {
    name: string;
    options: variationOption[];
}

interface variationOption {
    name: string;
    img?: string;
}