#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ElasticBeanstalkInfraPipelineStack } from "../beanstalkNodejsInfraStack";

const app = new cdk.App();

new ElasticBeanstalkInfraPipelineStack(
  app,
  "ElasticBeanstalkInfraPipelineStack",
  {
    env: { region: "us-east-1" },
    stackName: "ElasticBeanstalkInfraPipelineStack",
    description: "Elastic Beanstalk Infra Pipeline Stack",
    tags: {
      Name: "ElasticBeanstalkInfraPipelineStack",
      Environment: "Dev",
      Project: "ElasticBeanstalkInfraPipelineStack",
      Owner: "Koffi-Hessou",
    },
  }
);
