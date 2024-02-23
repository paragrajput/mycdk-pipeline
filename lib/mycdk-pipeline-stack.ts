import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { MycdkPipelineStage } from './mycdk-pipeline-stage';

export class MycdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const source = CodePipelineSource.gitHub('paragrajput/mycdk-pipeline','master');
    const pipeline = new CodePipeline(this, 'MyPipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: source,
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
      // pipeline.addStage(new MycdkPipelineStage (this,"DockerBuild",{
      //   env:{ account:"634842168668",region:"ap-south-1"}
      // }));
  }
}


