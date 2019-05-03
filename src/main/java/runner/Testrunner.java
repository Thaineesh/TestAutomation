package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		format = {"pretty", "html:report/html",  "json:report/json/cucumber.json"},
		tags={"@SIT"},
		features="src/main/java/features",
		glue={"stepDefinitions"}
			)
	

public class Testrunner extends AbstractTestNGCucumberTests{
	
			

}
