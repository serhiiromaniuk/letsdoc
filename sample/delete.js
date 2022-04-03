const AWS = require('aws-sdk');
const uuid = require('uuid');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});

const route53 = new AWS.Route53();

run().catch(err => console.log(err));

async function run(id = '47f9135b-61ba-46aa-a9f5-89469cf9915d', domainZone = 'letsdoc.serhiiromaniuk.com' ) {
  const zones = await route53.listHostedZones().promise();
  const Name = `${id}.${domainZone}` //uuid.v4() 

  const res = await route53.changeResourceRecordSets({
    HostedZoneId: zones.HostedZones[0].Id,
    ChangeBatch: {
      Changes: [{ 
        Action: 'DELETE',
        ResourceRecordSet: {
          Name,
          Type: 'A',
          TTL: 60 * 5, // 5 minutes
          ResourceRecords: [{ Value: '1.1.1.1' }]
        }
      }]
    }
  }).promise();

  console.log(res);
}
