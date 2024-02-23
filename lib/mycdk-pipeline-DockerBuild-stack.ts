import * as cdk from 'aws-cdk-lib';
import { DockerImageAsset } from 'aws-cdk-lib/aws-ecr-assets';
import { Construct } from 'constructs';
import path = require('path');

export class MyDockerBuild extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      const asset = new DockerImageAsset(this, 'BuildDockerImage', {
        directory: path.join(__dirname, 'my-image'),
        // buildArgs: {
        //   HTTP_PROXY: 'http://10.20.30.2:1234',
        // },
        // invalidation: {
        //   buildArgs: false,
        // },
      });
    }
}