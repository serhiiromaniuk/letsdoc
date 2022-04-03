const AWS = require('aws-sdk');
const uuid = require('uuid');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});

const domain_zone = 'letsdoc.serhiiromaniuk.com'

const route53 = new AWS.Route53();

run();

async function run(Id = '/change/C042115911ARX4MGPCQ1T') {
  const change = route53.getChange({Id}, function(err, data) {
    if (err) return console.error(err);
    console.log(data);
    // {
    //   ChangeInfo: {
    //     Id: '/change/C0516378WCNJPSK0Y9O1',
    //     Status: 'INSYNC',
    //     SubmittedAt: 2022-04-02T18:39:32.778Z
    //   }
    // }
  })
}
