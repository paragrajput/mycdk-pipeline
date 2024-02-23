import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { MyDockerBuild } from './mycdk-pipeline-DockerBuild-stack';

export class MycdkPipelineStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);
      const lambdaStack = new MyDockerBuild(this, 'DockerBuild');
      
    }
}
