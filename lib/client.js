import sanityClient from "@sanity/client";
import imageUrlbuilder from '@sanity/image-url';



export const client =sanityClient({
    projectId:'zr2gg866',
    dataset:'production',
    apiversion:'2023-04-05',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    
})
const builder = imageUrlbuilder(client);

export const urlfor =(source) => builder.image(source);