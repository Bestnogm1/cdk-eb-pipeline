import { Construct } from "constructs";
import { AwsCodePipeline } from "../../lib/AwsPipeline/Pipeline";

export interface PipelineLayersProps {
  applicationName?: string;
  environmentName?: string;
}
export class PipelineLayers extends Construct {
  constructor(scope: Construct, id: string, props?: PipelineLayersProps) {
    super(scope, id);
    new AwsCodePipeline(this, "Pipeline", {
      githubOwner: "Bestnogm1",
      githubRepo: "elasticBeanstalkNodejs",
      branch: "main",
      //! The connectionArn is the ARN of the CodeStar connection
      //! that you created in the AWS console
      connectionArn: "codeconnections",
      applicationName: props?.applicationName || "",
      environmentName: props?.environmentName || "",
    });
  }
}
