export interface ICampaign {
  ID: string;
  Name: string;
  Status: string;
  LaunchedOn: Date;
  DerLaunchStatus: number;
  DerManagerName: string;
  StartDate: Date;
  EndDate: Date;
  DerTargetCount: number;
  DerStageCount: number;
  DerStepCount: number;
  Owner: string;
  Description: string;
  Objectives: string;
  CallToAction: string;
  LeadSource: string;
  Type: string;
  SecCodeID: string;
  [key: string]: any;
}

export interface ICampaignStage {
  ID: string;
  CampaignID: string;
  Description: string;
  Status: string;
  DerCampaignTaskCount: string;
  StartDate: Date;
  EndDate: Date;
  Type: string;
  [key: string]: any;
}

export interface ICampaignStep {
  ID: string;
  CampaignID: string;
  Description: string;
  Status: string;
  DueDate: Date;
  DateAssigned: Date;
  CampaignStageID: string;
  PercentComplete: number;
  Priority: string;
  StepType: string;
  [key: string]: any;
}
