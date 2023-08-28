export interface post{
    _id: string;
    title: string;
    athor: {
        name: string;
        image: string;
    };
       description: string;
       mainImage: {
        asset: {
            url: string;
        };
       };
        slug: {
            current: string;
        };
        body: [object];     
}