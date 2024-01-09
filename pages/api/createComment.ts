// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@sanity/client';

const clint = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  || "khp4u6oz",
    useCdn: true,
    token: process.env.Sanity_API_TOKEN ||"skam3HTzO17mnc2G2aIlekFtWF9s2HkodlSNhuoUu1qlwk21krTr9jTnXytpepsZKdRVdcgzN1QENmH4PmdCLKIowS2RdSqaVa0HH8gojMGfdkEXUfwiqUNog1AzAxlhCGaCyL9bT8ftpb1srXfhDZxoIcF8oBuZwKGFhhrv051eBovpDRz4"
});

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
     const { _id, name,email, comment} = JSON.parse(req.body);

     try{
        await clint.create({
            _type: "comment",
            post:{
                _type: 'refrence',
                _ref:_id,
            },
            name,
            email,
            comment,
        });
     }catch(err){
        return res.status(500).json({message: `couldn't submit Comment`,err})
     }
     console.log("comment submitted")
    return res.status(200).json({ message: "comment submitted!"});
    }