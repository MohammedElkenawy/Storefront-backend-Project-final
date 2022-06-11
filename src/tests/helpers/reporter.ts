import {
	DisplayProcessor,
	SpecReporter,
	StacktraceOption,
} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
	public displayJasmineStarted(info: SuiteInfo, log: string): string {
		return `${log}`;
	}
}

const reporter = new SpecReporter({
	spec: {
		displayStacktrace: StacktraceOption.NONE,
	},
	customProcessors: [CustomProcessor],
});

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(reporter);
