import {
  HttpErrorResponse
} from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from "@angular/core";
import {
  IWidgetContext,
  IWidgetInstance,
  IWidgetSettingsComponent,
  IWidgetSettingsContext2,
  IWidgetSettingsInstance2,
  widgetContextInjectionToken,
  widgetInstanceInjectionToken,
  WidgetState
} from "lime";
import {
  Observable
} from "rxjs";
import {
  CampaignWorkspaceComponent
} from "../components/campaign-workspace.component";
import {
  DateTimePipe
} from "../date.pipe";
import {
  ICampaign,
  ICampaignStage,
  ICampaignStep
} from "../model/campaigns";
import {
  CampaignWorkspaceService
} from "../services/campaign-workspace.service";
import {
  DataService
} from "../services/data.service";

@Component({
  providers: [DateTimePipe],
  selector: "campaigns-list",
  template: `
  <div class="card-content">
    <div class="card-group-action cmpgn-sort-filter-container" [hidden]="!viewContent">
      <soho-toolbar-flex>
        <soho-toolbar-flex-section [isButtonSet]="true" style="text-align: right; padding: 0 4px;">
          <div class="cmpgn-filterby-container">
            <span>Filtered By</span>
            <button soho-menu-button class="btn-menu custom-cmpgn-icon" icon="filter"></button>
            <ul class="popupmenu">
              <li soho-popupmenu-item class="heading">Category</li>
              <li soho-popupmenu-item isSelectable="true"
                [isChecked] = "selectedFilter === 'My Campaigns'"
                (click)="onSelectFilter('My Campaigns')"><a href="#">My Campaigns</a></li>
              <li soho-popupmenu-item isSelectable="true"
                [isChecked] = "selectedFilter === 'Open Campaigns'"
                (click)="onSelectFilter('Open Campaigns')"><a href="#">Open Campaigns</a></li>
              <li soho-popupmenu-item isSelectable="true"
                [isChecked] = "selectedFilter === 'All Campaigns'"
                (click)="onSelectFilter('All Campaigns')"><a href="#">All Campaigns</a></li>
            </ul>
          </div>
          <div class="cmpgn-sortby-container">
            <span>Sort By</span>
            <button soho-button="icon" icon="sort-down" (click)="toggleSort(sortBy, true)"> Sort Down </button>
          </div>
          <div class="cmpgn-dropdownmenu-container">
          <button soho-menu-button class="btn-menu cmpgn-btn-style"></button>
          <ul class="popupmenu is-selectable">
            <li class="heading">Organize By</li>
            <li *ngFor="let op of opts" [ngClass]="{'is-checked': op === 'Start Date'}" ><a (click)="toggle(op)">{{op}}</a></li>
            <li class="separator"></li>
            <li class="heading">Sort By</li>
            <li *ngFor="let sortBy of sortByOpts" [ngClass]="{'is-checked': sortBy==='Latest to Oldest'}" ><a (click)="toggleSort(sortBy)">{{sortBy}}</a></li>
          </ul>
          </div>
        </soho-toolbar-flex-section>
      </soho-toolbar-flex>
    </div>
    <div class="emptystatemessage-container" [hidden]="!isErrorState">
      <div soho-emptymessage
        [title]="'Something went wrong'"
        [info]="'Check your connection and try again.'"
        [icon]="'icon-empty-error-loading'"
        [color]="'azure'"
      >
      </div>
    </div>
    <div class="completedstatemessage-container" [hidden]="!completedState">
      <div soho-emptymessage
        [title]="'No campaigns yet'"
        [info]="'Once you add some, you will see them here.'"
        [icon]="'icon-empty-no-events'"
        [color]="'azure'"
      >
      </div>
    </div>
    <div class="list-content">
      <ng-container *ngFor="let campaign of container">
        <div class="row cmpgns">
          <div class="cmpgn-container">

          <soho-accordion [rerouteOnLinkClick]="false" class="accordion">
            <soho-accordion-header class="accordion-header cmpgn-accordion-header" style="height: 50%;">

            <a (click)="showDialogWorkspace(campaign.ID, campaign.workspaceTitle, true, false, '', '', selectedFilter)" ng-reflect-href="/my-nonworking-link" href="/my-nonworking-link">

              <div class="three columns col-mb-style-left col-cmpgns">
                <h1 class="cmpgn-name">{{ campaign.Name }}</h1>
              </div>

              <div class="two columns col-mb-style-right col-cmpgns">
                <p class="cmpgn-status text-small">{{ campaign.Status }}</p>
              </div>

              <div class="two columns col-mb-style-left-2 one-col-wdgt">
                <div class="cmpgn-date-container">
                    <p class="cmpgn-start-date"><span class="text-small">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>
                    <p class="cmpgn-end-date"><span class="text-small">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>
                  </div>
              </div>

              <div class="two columns col-mb-style-left-2 two-col-left">
                <div class="cmpgn-date-container">
                    <p class="cmpgn-start-date"><span class="text-small">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>
                    <p class="cmpgn-end-date"><span class="text-small">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>
                  </div>
              </div>

              <div class="two columns col-mb-style-right-2">
                <div class="cmpgn-date-launch-container">
                  <div *ngIf="campaign.DerLaunchStatus === 'STRINGS(sCampaignIsLaunched)'; else unLaunched">
                    <p class="cmpgn-launch"><span class="text-small">Launched</span> {{ campaign.LaunchedOn | dateTimeFormat | date }}</p>
                  </div>
                  <ng-template #unLaunched>
                    <p class="cmpgn-unlaunched text-small">Unlaunched</p>
                  </ng-template>
                </div>
              </div>

              <div class="btm-container">
                <div class="one columns text-position col-4-mb-styles">
                  <p class="cmpgn-stages">{{ campaign.DerStageCount }}</p>
                  <div class="cmpgn-lbl-container">
                    <ng-container *ngIf="campaign.DerStageCount > 1; else StageText">
                      <p class="cmpgn-lbl-stages text-small">Stages</p>
                    </ng-container>
                    <ng-template #StageText>
                    <p class="cmpgn-lbl-stages text-small">Stage</p>
                    </ng-template>
                  </div>
                </div>

                <div class="one columns text-position col-4-mb-styles">
                  <p class="cmpgn-steps">{{ campaign.DerStepCount }}</p>
                  <div class="cmpgn-lbl-container">
                    <ng-container *ngIf="campaign.DerStepCount > 1; else StepLabel">
                      <p class="cmpgn-lbl-steps text-small">Steps</p>
                    </ng-container>
                    <ng-template #StepLabel>
                      <p class="cmpgn-lbl-steps text-small">Step</p>
                    </ng-template>
                  </div>
                </div>

                <div class="one columns text-position col-4-mb-styles">
                  <p class="cmpgn-targets">{{ campaign.DerTargetCount }}</p>
                  <div class="cmpgn-lbl-container">
                    <ng-container *ngIf="campaign.DerTargetCount > 1; else TargetText">
                      <p class="cmpgn-lbl-targets text-small">Targets</p>
                    </ng-container>
                    <ng-template #TargetText>
                      <p class="cmpgn-lbl-targets text-small">Target</p>
                    </ng-template>
                  </div>
                </div>
              </div>

            </a>
            </soho-accordion-header>
            <soho-accordion-pane>
            <div class="accordion-content cmpgn-accordion-content padding-right padding-bottom padding-top">
              <ng-container *ngFor="let stage of campaign.Stages">
                <div class="row cmpgns stage">
                  <a href="#" (click)="showDialogWorkspace(campaignID, campaign.workspaceTitle, false, true, stage.StageID, stage.StageCampaignID, selectedFilter)">
                    <div class="three columns col-left cmpgn-custom-style">
                      <h1>{{ stage.StageDescription }}</h1>
                    </div>
                    <div class="two columns col-right cmpgn-margin">
                      <p class="stage-status text-small">{{ stage.StageStatus }}</p>
                    </div>

                    <div class="mb-view">
                      <div class="four columns col-1">
                        <p class="stage-startdate text-small">{{ stage.StageStartDate | dateTimeFormat | date }} <span class="dash">-</span> {{ stage.StageEndDate | dateTimeFormat | date }}</p>
                        <p class="stage-stepscount text-small">
                          <span class="divider">|</span> {{ stage.StageDerCampaignTaskCount }}
                          <ng-container *ngIf="stage.StageDerCampaignTaskCount > 1; else StepText">
                            <span>Steps</span>
                          </ng-container>
                          <ng-template #StepText>
                            <span>Step</span>
                          </ng-template>
                        </p>
                      </div>
                    </div><!-- .mb-view for mobile view only -->

                    <div class="two-col-wdgt-view">
                      <div class="four columns col-1">
                        <p class="stage-startdate text-small"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>
                        <p class="stage-enddate"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>
                        <p class="stage-stepscount text-small"><span class="divider">|</span> {{ stage.StageDerCampaignTaskCount }}
                          <ng-container *ngIf="stage.StageDerCampaignTaskCount > 1; else StepTextWdgt">
                            <span> Steps</span>
                          </ng-container>
                          <ng-template #StepTextWdgt>
                            <span> Step</span>
                          </ng-template>
                        </p>
                      </div>
                    </div><!-- .two-col-wdgt-view -->

                    <div class="md-view">
                      <div class="two columns col">
                        <p class="stage-startdate"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>
                      </div>
                      <div class="two columns col cmpgn-cstm-mrgn">
                        <p class="stage-enddate"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>
                      </div>
                      <div class="three columns text-position col">
                        <p class="stage-stepscount">{{ stage.StageDerCampaignTaskCount }}
                          <ng-container *ngIf="stage.StageDerCampaignTaskCount > 1; else StepTextMd">
                            <span> Steps</span>
                          </ng-container>
                          <ng-template #StepTextMd>
                            <span> Step</span>
                          </ng-template>
                        </p>
                      </div>
                    </div><!-- .md-view -->
                  </a>
                </div>
              </ng-container><!-- stage -->
            </div>
            </soho-accordion-pane>
          </soho-accordion>

          </div><!-- .cmpgn-container -->
        </div><!-- .row.cmpgns -->
      </ng-container>
    </div>
  </div>`,
  styles: [`
    :host ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {
      width: 40px;
      right: 0;
      position: relative;
    }
    .card-content {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card-group-action {
      flex: 0 0 auto;
    }
    .list-content {
      overflow: auto;
      z-index: 1;
    }
    .list-content h1.cmpgn-name {
      font-weight: 600;
      margin-bottom: 5px;
      white-space: normal;
    }
    .cmpgn-status, .cmpgn-lbl-stages, .cmpgn-lbl-steps, .cmpgn-lbl-targets, .cmpgn-end-date span,
    .cmpgn-start-date span, .stage-status, .stage-startdate span, .stage-enddate span,
    .stage-stepscount span, .cmpgn-unlaunched, .mb-view .stage-stepscount,
    .mb-view .stage-startdate {
      color: #999;
      font-weight: 200;
    }
    .list-content p.cmpgn-launch {
      display: inline-block;
    }
    .cmpgn-icon-container {
      display: inline-block;
      margin-right: 5px;
      vertical-align: top;
    }
    .cmpgn-stages, .cmpgn-steps, .cmpgn-targets {
      font-weight: 600;
    }
    .list-content .row.cmpgns {
      max-width: 100%;
      padding-right: 0;
    }
    .emptystatemessage-container,
    .completedstatemessage-container {
      margin: auto;
    }
    .emptystatemessage-btn-container {
      text-align: center;
    }
    .cmpgn-container {
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid #999;
    }
    :host ::ng-deep .accordion-header > a > span {
      width: 100% !important;
    }
    .cmpgn-accordion-header {
      border-bottom-color: transparent;
    }
    .text-position {
      text-align: center;
    }
    .cmpgn-sort-filter-container button.btn-menu {
      min-width: auto;
    }
    .cmpgn-start-date span, .stage-startdate span {
      margin-right: 10px;
    }
    .cmpgn-end-date {
      margin-top: 0;
    }
    .mb-view .divider {
      margin-right: 10px;
    }
    .cmpgn-end-date span, .stage-enddate span {
      margin-right: 15px;
    }
    .cmpgns.stage {
      border-top: 1px solid #999;
      padding-top: 10px;
      margin-top: 10px;
    }
    .padding-right {
      padding-right: 20px;
    }
    .padding-bottom {
      padding-bottom: 0;
    }
    .stage p {
      font-size: 12px !important;
    }
    .stage h1 {
      font-size: 14px;
    }
    .cmpgn-launch span {
      color: #999;
      display: block;
      margin-bottom: 6px;
      font-weight: 200;
    }
    .mb-view {
      display: none;
    }
    .mb-view .dash {
      margin: 0 10px;
    }
    .two-col-wdgt-view {
      display: none;
    }
    .cmpgn-sort-filter-container .heading {
      font-weight: 200;
    }
    :host ::ng-deep .cmpgn-sort-filter-container .btn-menu:focus:not(.hide-focus) {
      box-shadow: none;
    }
    .cmpgn-sort-filter-container .cmpgn-icon-dropdown {
      padding: 0;
      margin-right: 0;
      position: relative;
      top: 2px;
    }
    .cmpgn-sortby-container,
    .cmpgn-dropdownmenu-container,
    .cmpgn-filterby-container {
      display: inline-block;
    }
    .cmpgn-dropdownmenu-container {
      border-left: 1px solid #5c5c5c;
      height: 20px;
      overflow-y: hidden;
      position: relative;
      top: 6px;
      padding-left: 5px;
      margin-left: 5px;
    }
    .cmpgn-sort-filter-container
    .cmpgn-btn-style.btn-menu {
      bottom: 7px;
      position: relative;
    }
    .cmpgn-btn-style {
      padding-right: 0;
    }
    .cmpgn-icon-filter {
      position: relative;
      top: 4px;
      padding-left: 5px;
    }
    .cmpgn-sortby-container span,
    .cmpgn-filterby-container span {
      font-size: 12px;
      color: #5c5c5c;
      font-weight: 200;
    }
    :host ::ng-deep .cmpgn-icon-filter svg.icon:not(.cmpgn-icon) {
      display: none;
    }
    .cmpgn-accordion-content .row.cmpgns.stage:last-child {
      margin-bottom: 0;
    }
    :host ::ng-deep .accordion-header.is-focused:not(.hide-focus),
    :host ::ng-deep .accordion-header > [class^="btn"]:focus:not(.hide-focus) {
      border-color: transparent;
      box-shadow: none;
    }
    :host-context ::ng-deep .modal-content .modal-body-wrapper {
      overflow-x: hidden !important;
    }

    /** One Column Widget */
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-startdate {
      display: inline-block;
      margin-right: 10px;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    ::ng-deep .accordion-header > a {
      margin-top: 10px;
      padding: 0 0 0 20px;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-stepscount {
      display: inline-block;
      margin-top: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 {
      width: 100%;
      margin-left: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-2 {
      margin-left: 0;
      width: 25%;
    }

    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view {
      display: block !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .two-col-wdgt-view {
      display: none !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .md-view {
      display: none;
    }

    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .accordion-header {
      margin-top: -14px;
    }

    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {
      position: relative;
      top: 42px !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-left {
      width: 75%;
      padding: 0;
      margin-left: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-right {
      width: 25%;
      padding: 0;
      margin-left: 0;
      text-align: right;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .padding-right {
      padding-right: 20px;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-4-mb-styles {
      margin-left: 0;
      margin-right: 50px;
      padding: 0;
      width: 13.33333%;

    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .btm-container {
      clear: both;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left {
      float: left;
      width: 80%;
      padding: 0;
      margin-left: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right {
      float: right;
      width: 20%;
      text-align: right;
      padding-right: 0;
      z-index: 1;
      position: absolute;
      right: 19px;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left-2 {
      padding: 0 0 10px 0;
      width: 55%;
      float: left;
      margin-left: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right-2 {
      float: left;
      width: 45%;
      padding: 0 0 10px 0;
      margin-left: 0;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .one-col-wdgt {
      display: inline-block !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .two-col-left {
      display: none !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .cmpgn-end-date span,
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .cmpgn-start-date span {
      display: inline-block !important;
      padding-bottom: 0 !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .cmpgn-start-date {
      display: block !important;
    }
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .cmpgn-custom-style,
    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
    .cmpgn-margin {
      margin-right: 0 !important;
    }

    /**************** Two Column Widget ****************/
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view {
      display: block;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .one-col-wdgt {
      display: none;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-left {
      display: block;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .mb-view {
      display: none;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .col-mb-style-left {
      float: left;
      width: 80%;
      padding: 0;
      margin-left: 0;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .col-mb-style-right {
      float: right;
      width: 20%;
      text-align: right;
      padding-right: 0;
      z-index: 1;
      position: absolute;
      right: 19px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-left {
      padding: 0 0 10px 0;
      width: 40%;
      float: left;
      margin-left: 0;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .col-mb-style-right-2 {
      width: 25%;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-start-date {
      display: inline-block;
      width: 120px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-end-date {
      display: inline-block;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-end-date span,
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-start-date span  {
      display: block;
      padding-bottom: 6px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {
      position: relative;
      top: 18px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    ::ng-deep .accordion-header > a {
      margin-top: 10px;
      padding: 0 0 0 20px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .padding-right {
      padding-right: 20px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .stage .col-left {
      width: 75%;
      padding: 0;
      margin-left: 0;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .stage .col-right {
      width: 25%;
      padding: 0;
      margin-left: 0;
      text-align: right;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .md-view {
      display: none;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .col-1 {
      width: 100%;
      margin-left: 0;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .stage-startdate {
      display: inline-block;
      width: 120px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .stage-enddate {
      display: inline-block;
      margin-top: 0;
      width: 200px;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .stage-stepscount {
      display: inline-block;
      margin-top: 0;
      width: 235px;
      text-align: right;
      color: #999;
      font-weight: 200;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .stage-startdate,
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .stage-enddate {
      color: #999;
      font-weight: 200;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .two-col-wdgt-view .divider {
      display: none;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .col-cmpgns.columns {
      margin-right: 0 !important;
    }
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-style,
    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))
    .cmpgn-margin {
      margin-right: 0 !important;
    }

    /**************** Three Column Widget *****************/
    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .one-col-wdgt {
      display: none;
    }

    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .col-cmpgns.columns {
      margin-left: 0;
      margin-right: 20px;
    }
    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .cmpgn-custom-style {
      margin-left: 0;
      margin-right: 10px;
    }
    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .cmpgn-margin {
      margin-right: 15px;
      margin-left: 0;
    }
    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .cmpgn-cstm-mrgn {
      margin-left: 15px;
    }
    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))
    .cmpgn-accordion-content.padding-top {
      padding-top: 0;
    }

    /**************** Four Column Widget *****************/
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .one-col-wdgt {
      display: none;
    }
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .col-cmpgns.columns {
      margin-left: 0;
      margin-right: 20px;
    }
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .cmpgn-custom-style {
      margin-right: 10px;
      margin-left: 0;
    }
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .cmpgn-margin {
      margin-right: 15px;
      margin-left: 0;
    }
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .cmpgn-cstm-mrgn {
      margin-left: 15px;
    }
    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
    .cmpgn-accordion-content.padding-top {
      padding-top: 0;
    }

    /** Media Queries */
    @media (max-width: 740px) {
      .mb-view {
        display: inline-block;
      }
      .mb-view .col-1 {
        padding: 0;
      }
      .btm-container {
        clear: both;
      }
      .col-4-mb-styles {
        margin-left: 0;
        width: 33.33333%;
      }
      .col-mb-style-left {
        float: left;
        width: 80%;
        padding: 0;
      }
      .col-mb-style-right {
        float: right;
        width: 20%;
        text-align: right;
        padding-right: 0;
        z-index: 1;
        position: absolute;
        right: 19px;
      }
      .col-mb-style-left-2 {
        padding: 0 0 10px 0;
        width: 55%;
        float: left;
      }
      .col-mb-style-right-2 {
        float: left;
        width: 45%;
        padding: 0 0 10px 0;
        margin-left: 0;
      }
      .stage .col-left {
        width: 80%;
        padding: 0;
      }
      .stage .col-right {
        width: 20%;
        padding: 0;
      }
      .col-4-mb-styles {
        margin-left: 0;
        margin-right: 25px;
        padding-left: 0;
        width: 23.33333%;
      }
      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
      .col-cmpgns.columns {
        margin-right: 0;
      }
    }
    @media (min-width: 741px) and (max-width: 766px) {
      .btm-container .col-4-mb-styles {
        width: calc(8.33333333333% - 20px);
        margin-left: 20px;
        padding: 0;
      }
      .text-position {
        text-align: center;
      }
      .two-col-wdgt-view .col-1 {
        padding: 0;
      }
    }
    @media (min-width: 741px) and (max-width: 1120px) {
      .two-col-wdgt-view {
        display: block;
      }
      .one-col-wdgt {
        display: none;
      }
      .two-col-left {
        display: block;
      }
      .mb-view {
        display: none;
      }
      .col-mb-style-left {
        float: left;
        width: 80%;
        padding: 0;
        margin-left: 0;
      }
      .col-mb-style-right {
        float: right;
        width: 20%;
        text-align: right;
        padding-right: 0;
        z-index: 1;
        position: absolute;
        right: 19px;
      }
      .two-col-left {
        padding: 0 0 10px 0;
        width: 40%;
        float: left;
        margin-left: 0;
      }
      .col-mb-style-right-2 {
        width: 25%;
      }
      .cmpgn-start-date {
        display: inline-block;
        width: 120px;
      }
      .cmpgn-end-date {
        display: inline-block;
      }
      .cmpgn-end-date span,  .cmpgn-start-date span  {
        display: block;
        padding-bottom: 6px;
      }
      :host ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {
        position: relative;
        top: 7px;
      }
      :host ::ng-deep .is-safari .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {
        position: relative !important;
        top: 20px !important;
        width: 40px !important;
      }
      :host ::ng-deep .accordion-header > a {
        margin-top: 10px;
        padding: 0 0 0 20px;
      }
      :host ::ng-deep .is-safari .accordion-header > a {
        margin-top: 10px;
        padding: 0 0 0 20px;
      }
      .padding-right {
        padding-right: 20px;
      }
      .stage .col-left {
        width: 75%;
        padding: 0;
        margin-left: 0;
      }
      .stage .col-right {
        width: 25%;
        padding: 0;
        margin-left: 0;
        text-align: right;
      }
      .md-view {
        display: none;
      }
      .two-col-wdgt-view .col-1 {
        width: 100%;
        margin-left: 0;
      }
      .two-col-wdgt-view .stage-startdate {
        display: inline-block;
        width: 120px;
      }
      .two-col-wdgt-view .stage-enddate {
        display: inline-block;
        margin-top: 0;
        width: 200px;
      }
      .two-col-wdgt-view .stage-stepscount {
        display: inline-block;
        margin-top: 0;
        width: 235px;
        text-align: right;
        color: #999;
        font-weight: 200;
      }
      .two-col-wdgt-view .stage-startdate,
      .two-col-wdgt-view .stage-enddate {
        color: #999;
        font-weight: 200;
      }
      .two-col-wdgt-view .divider {
        display: none;
      }
      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
      .col-cmpgns.columns,
      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
      .cmpgn-margin,
      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))
      .cmpgn-custom-style {
        margin-right: 0;
      }

    }
    @media (min-width: 993px) and (max-width: 1120px) {

    }
    @media(min-width: 1121px) and (max-width: 1500px) {
      .col-cmpgns.columns {
        margin-left: 0;
        margin-right: 20px;
      }
    }
  `]
})

export class CampaignsListComponent implements OnInit {
  campaigns: ICampaign[];
  campaignStages: ICampaignStage[];
  campaignSteps: ICampaignStep[];
  container: ICampaign[] = [];
  dataJoin: any;
  itemName: string = "Items"; // Object name of item list
  isErrorState: boolean;
  completedState: boolean;
  viewContent: boolean = false;
  selectedSort: string;
  selectedDateSort: string;
  selectedFilter: string;
  dataUrl: string;
  op: string;
  opts: string[] = ["Start Date", "End Date"];
  sortBy: string;
  sortByOpts: string[] = ["Latest to Oldest", "Oldest to Latest"];
  totalResults: number;
  private dataSet: any;
  private dataSetChildStage: any;
  private dataSetChildStep: any;

  constructor(
    @Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
    @Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
    private campaignWorkspaceService: CampaignWorkspaceService,
    private dataService: DataService,
    private dateTimePipe: DateTimePipe,
    private viewRef: ViewContainerRef
  ) {
    this.dataService.init(widgetContext);
    this.dataService.getMongooseConfig();
  }

  ngOnInit(): void {
    this.op = "Start Date";
    this.sortBy = "Latest to Oldest";
    this.removeDropdownIcon();
    this.setBusy(true);
    this.setContent();
    this.widgetInstance.actions[0].execute = () => this.webbAppLink();
    console.log("this -->", this);
  }

  removeDropdownIcon(): void {
    const el = this.widgetContext.getElement();
    const dropdownEl: any = el[0].getElementsByClassName("custom-cmpgn-icon");

    for (const i of dropdownEl) {
      i.innerHTML = `<svg soho-icon="" class="icon" aria-hidden="true" focusable="false" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-filter"></use></svg>`;
    }
  }

  showDialogWorkspace(ID: string, title: string, showCampaign: boolean, showStage: boolean, StageID: string, StageCampaignID: string, selectedFilter: string ): void {
    this.campaignWorkspaceService.open({
      component: CampaignWorkspaceComponent,
      viewRef: this.viewRef,
      title: title,
      props: {
        widgetContext: this.widgetContext,
        campaignID: ID,
        showCampaign: showCampaign,
        showStage: showStage,
        stageID: StageID,
        campaignID2: StageCampaignID,
        selectedFilter: selectedFilter
      }
    });
  }

  webbAppLink(): void {
    const form = encodeURIComponent(`CRMCampaign(SETVARVALUES(VarAppliedNamedFilter=${this.selectedFilter},InitialCommand=Refresh))`);
    const url = `?LogicalId={logicalId}&form=${form}`;
    this.widgetContext.launch( {url: url});
  }

  toggle(ob: any) {
    console.log(ob);
    this.sort(ob, this.sortBy);
  }

  sort(ob: any, sortBy: any, reverse?: boolean) {
    this.container.sort((c1: any, c2: any) => {
      let dateA: Date;
      let dateB: Date;

      switch (ob) {
        case "Start Date": {
          this.op = "Start Date";
          dateA = new Date(this.dateTimePipe.transform(c1.StartDate));
          dateB = new Date(this.dateTimePipe.transform(c2.StartDate));
          break;
        }
        case "End Date": {
          this.op = "End Date";
          dateA = new Date(this.dateTimePipe.transform(c1.EndDate));
          dateB = new Date(this.dateTimePipe.transform(c2.EndDate));
          break;
        }
      }

      switch (sortBy) {
        case "Oldest to Latest": {
          this.sortBy = "Oldest to Latest";
          return !reverse ? +dateA.getTime() - +dateB.getTime() : 1;
        }
        case "Latest to Oldest": {
          this.sortBy = "Latest to Oldest";
          return !reverse ? +dateB.getTime() - +dateA.getTime() : 1;
        }
      }
      return 0;
    });
    console.log({ob: ob, sortBy: sortBy});
  }

  toggleSort(sortBy: any, reverse?: boolean): void {
    console.log(sortBy);
    this.sort(this.op, sortBy, reverse);
  }

  setContent(): void {
    this.onSelectFilter("My Campaigns");
  }

  onSelectFilter(filter: string): void {
    this.selectedFilter = filter;
    let dataUrl = "";

    if (filter === "My Campaigns") {
      dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&filter=DerIsManagedByCurrentUser = N'1'&orderby=StartDate DESC";
    } else if (filter === "All Campaigns") {
      dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&orderby=StartDate DESC";
    } else if (filter === "Open Campaigns") {
      dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&filter=Status <> N'Inactive'&orderby=StartDate DESC";
    }
    this.setBusy(true);
    this.dataService.selectCampaigns(dataUrl);
    this.loadCampaigns(dataUrl);
  }

  private dataCollection(): void {
    this.container = [];
    this.dataJoin = [];
    const container: any[] = [];
    const parent = this.dataSet;
    const childStage = this.dataSetChildStage;
    const childStep = this.dataSetChildStep;

    if (parent && childStage && childStep) {

      childStage.map((c: any) => {
        const steps = childStep.filter((f: any) => f.StepCampaignStageID === c.StageID);

        this.dataJoin.push({...c, Steps: [...steps]});
      });

      parent.map((p: any) => {
        const stages = this.dataJoin.filter((f: any) => f.StageCampaignID === p.ID);

        this.container.push({...p, Stages: [...stages]});
      });
    }
    this.setBusy(false);
    this.completedStateMessage();
  }

  private loadCampaigns(campaignUrl: string): void {
    this.dataSet = [];
    this.dataService.selectCampaigns(campaignUrl).subscribe((response: any) => {

      this.campaigns = response.data[this.itemName];

      this.viewContent = true;

      const dataCampaign = response.data[this.itemName];
      if (dataCampaign) {
        this.totalResults = dataCampaign.length;

        for (const campaign of this.campaigns) {
          const item = {
            ID: campaign[0].Value,
            Name: campaign[1].Value,
            Status: campaign[2].Value,
            LaunchedOn: campaign[3].Value,
            DerLaunchStatus: campaign[4].Value,
            DerManagerName: campaign[5].Value,
            StartDate: campaign[6].Value,
            EndDate: campaign[7].Value,
            DerTargetCount: campaign[8].Value,
            DerStageCount: campaign[9].Value,
            DerStepCount: campaign[10].Value,
            Owner: campaign[11].Value,
            Description: campaign[12].Value,
            Objectives: campaign[13].Value,
            CallToAction: campaign[14].Value,
            LeadSource: campaign[15].Value,
            Type: campaign[16].Value,
            Code: campaign[17].Value,
            workspaceTitle: `${campaign[17].Value}: ${campaign[1].Value}`
          };
          this.dataSet.push(item);
        }
      }

      this.getCampaignStages();
    }, (error: HttpErrorResponse) => {
        this.onRequestError(error);
    });
  }

private getCampaignStages(): void {
  //Request for Campaign stage
  this.dataService.getCampaignStages().subscribe((response: any) => {
    this.dataSetChildStage = [];
    this.campaignStages = response.data[this.itemName];

    const dataCampaignStage = this.campaignStages;
    if (dataCampaignStage) {
      for (const campaignStage of dataCampaignStage) {

        // Get the task count
        let taskCount = campaignStage[4].Value.replace(/[^0-9]/g, "");

        if (campaignStage[4].Value === "STRINGS(sCRMItemCount)") {
          taskCount = "1";
        }

        const item = {
          StageID: campaignStage[0].Value,
          StageCampaignID: campaignStage[1].Value,
          StageDescription: campaignStage[2].Value,
          StageStatus: campaignStage[3].Value,
          StageDerCampaignTaskCount: taskCount,
          StageStartDate: campaignStage[5].Value,
          StageEndDate: campaignStage[6].Value
        };
        this.dataSetChildStage.push(item);
      }
    }

    this.getCampaignSteps();
  }, (error: HttpErrorResponse) => {
    this.onRequestError(error);
  });
}

private getCampaignSteps(): void {
  this.dataService.getCampaignSteps().subscribe((response: any) => {
    this.dataSetChildStep = [];
    this.campaignSteps = response.data[this.itemName];

    const dataCampaignStep = this.campaignSteps;
    if (dataCampaignStep) {
      for (const campaignStep of dataCampaignStep) {
        const item = {
          StepID: campaignStep[0].Value,
          StepCampaignID: campaignStep[1].Value,
          StepDescription: campaignStep[2].Value,
          StepStatus: campaignStep[3].Value,
          StepsDueDate: campaignStep[4].Value,
          StepDateAssigned: campaignStep[5].Value,
          StepCampaignStageID: campaignStep[6].Value,
          StepPercentComplete: campaignStep[7].Value,
          StepPriority: campaignStep[8].Value,
          StepType: campaignStep[9].Value
        };
        this.dataSetChildStep.push(item);
      }
    }
    this.dataCollection();
  }, (error: HttpErrorResponse) => {
    this.onRequestError(error);
  });
}

  private onRequestError(error: HttpErrorResponse): void {
    this.isErrorState = true;
    this.setBusy(false);
  }

  private completedStateMessage(): void {
    (this.container === undefined || this.container.length === 0) ?
      (this.completedState = true, this.viewContent = false, this.setBusy(false))
      : this.completedState = false;
  }

  private setBusy(isBusy: boolean): void {
    this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
  }
}
