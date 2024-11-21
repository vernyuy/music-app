/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { verifyPaymentWebhook} from './utils/verifyPaymentWebhook'
// import {generatePresignedUrl} from './utils/generatePresignedUrl'
// import {sendHTMLEmail} from './utils/sendHTMLEmail'

// const proseeddFields = async (
//     fieldsDate: [{label: string; value: string}]
// ) => {
//     const email = fieldsDate.find((field)=> field.label === 'email')!.value
//     const firstName = fieldsDate.find((field)=> field.label === 'firstName')!.value

//     console.log(email, firstName)

//     const url = await generatePresignedUrl(
//         env.SONG_STORAGE_BUCKET_NAME,
//         env.SONG_PATH,
//         3600
//     )

//     await  sendHTMLEmail(
//         env.VERIFIED_SES_FROM_EMAIL,
//         [email],
//         'Your song has arrived',
//         `
//         <html>
//         <body>
//         <h1> Hello from My music! </h1>
//         <p> Hey ${firstName}, thanks so much for your purchase! </p>
//         <p>Here is <a href="${url}">your song </a> Hope you enjoy!</p>
//         </body>
//         </html>
//         `
//     )

//     export const handler = async (event: {
//         body: string,
//         headers: {['payment-signature']: string}
//     }) => {
//         const validateWebhookPayload = await verifyPaymentWebhook(
//             event.body,
//             event.headers['payment-signature'],
//             env.SIGNATURE
//         )

//         switch (validateWebhookPayload.eventType){
//             case 'FROM_RESPONSE':
//                 await processFields(validateWebhookPayload.data.fields)
//                 break
//             default:
//                 break
//         }
//     }
//     return 'Function end!'
// }

import type { APIGatewayProxyHandler } from "aws-lambda";
import { sendHTMLEmail } from "./sendHTMLEmail";
// import {env} from '$amplify/env/main'

export const handler = async (event: any) => {
  console.log("event", event);
  const body: any = JSON.parse(event.body)
  console.log(body)
  console.log(body.data.object.customer_details)
  await  sendHTMLEmail(
    process.env.VERIFIED_SES_FROM_EMAIL!,
    body.data.object.customer_details.email,
    'Your song has arrived',
    `
    <html>
    <body>
    <h1> Hello from My music! </h1>
    <p> Hey ${body.data.object.customer_details.name}, thanks so much for your purchase! </p>
    <p>Here is <a href="${body.data.object.customer_details.name}">your song </a> Hope you enjoy!</p>
    </body>
    </html>
    `
)
  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify("Hello from myFunction!"),
  };
};