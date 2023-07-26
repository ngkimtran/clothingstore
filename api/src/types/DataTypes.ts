enum ProductType {
  normal = "normal",
  featured = "featured",
  trending = "trending",
}

type ImageDataFields = {
  data:
    | {
        id: number;
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: object;
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: string | null;
          provider: string;
          prodiver_metadata: string | null;
          size: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      }[]
    | null;
};

type ProductDataFields = {
  id: number;
  attributes: {
    title: string;
    desc: string;
    images: ImageDataFields;
    newPrice: number;
    oldPrice?: number | undefined;
    isNew: boolean;
    categories: string;
    sub_categories: string;
    type: ProductType;
  };
};

export type UserCartPropsType = ProductDataFields & {
  quantity: number;
};
