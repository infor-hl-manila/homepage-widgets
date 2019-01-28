﻿import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, NgModule } from "@angular/core";
import { IWidgetComponent, IWidgetContext2, IWidgetInstance2, Log, WidgetState } from "lime";
import { IUserContext, userContextProviders, UserContextService } from "sample-shared-usercontext";

@Component({
	providers: userContextProviders,
	template: `
	<div class="lm-padding-lg">
		<p class="lm-text-align-c lm-italic-text lm-info-text">
			User context will be loaded only once and shared among all widgets using the specified shared module
		</p>
		<div *ngIf="userContext" class="lm-margin-xl-t">
			<p>
				<label>Name</label>
				<span>{{userContext.name}}</span>
			</p>
			<p>
				<label>User ID</label>
				<span>{{userContext.userId}}</span>
			</p>
			<p>
				<label>Department</label>
				<span>{{userContext.department}}</span>
			</p>
			<p>
				<label>Area</label>
				<span>{{userContext.area}}</span>
			</p>
		</div>
	</div>
	`,
	styles: [
		`
	p > label{margin-bottom:5px;font-weight:bold;}`
	]
})
export class SharedModuleSampleOneComponent implements AfterViewInit, IWidgetComponent {
	@Input()
	widgetContext: IWidgetContext2;
	@Input()
	widgetInstance: IWidgetInstance2;

	userContext: IUserContext;

	constructor(private readonly userContextService: UserContextService) {
	}

	ngAfterViewInit(): void {
		this.getAndSetUserContext();
	}

	private getAndSetUserContext(): void {
		this.setBusy(true);
		this.userContextService.getUserContext(this.widgetContext).subscribe((result: IUserContext) => {
				this.userContext = result;
			},
			(onError) => {
				Log.error(`Failed to get User Context ${onError}`);
			},
			() => {
				this.setBusy(false);
			});
	}

	private setBusy(isBusy: boolean): void {
		this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
	}
}

@NgModule({
	imports: [CommonModule],
	declarations: [SharedModuleSampleOneComponent],
	entryComponents: [SharedModuleSampleOneComponent]
})
export class SharedModuleSampleOneModule {
}