package helpers;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
	@CucumberOptions(plugin = { "pretty", "html:target/cucumber",
			"json:target/cucumber.json", "html:target/site/cucumber-pretty",
			"rerun:target/rerun.txt" },
	        features = "src/test/resources/features/GoogleHome.feature",
	        glue = "step_definitions"
	)
	public class RunCukesTest { // NOSONAR SonarLint does not know about @RunWith(Cucumber.class)
	}


