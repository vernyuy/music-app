import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import {GetObjectCommand, S3Client} from '@aws-sdk/client-s3'
const s3Client = new S3Client()
export const generateSignedUrl = async (
    Bucket: string,
    key: string,
    expiration: number
)=>{
    const url = await getSignedUrl(
        s3Client,
        new GetObjectCommand({
            Bucket: Bucket,
            Key: key
        }),{
            expiresIn: expiration
        }
    )
    return url;
}