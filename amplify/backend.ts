import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import {paymentWebhook} from './funtions/paymentWebhook/resource'
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  auth,
  data,
  storage,
  paymentWebhook,
});

backend.paymentWebhook.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['ses:sendemail', 'ses:SendRawEmail'],
    resources: ['*']
  })
)