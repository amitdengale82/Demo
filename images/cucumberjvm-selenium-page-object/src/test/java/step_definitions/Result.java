package step_definitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.FinalResultPage;
import pageobjects.SearchResultPage;


public class Result {
	
	public WebDriver driver;
	
	
	public Result()
    {
    	driver = Hooks.driver;
    	
    }
	//This is used for verifying the Result page
	@Then("^I go to the search result page$")
    public void i_google_resultpage() throws Throwable {
		SearchResultPage searchPageobj = new SearchResultPage(driver);
		searchPageobj.verifyPage();    	
    }
	
	//This is used for verifying the first result
	@Then("^the first result is \"([^\"]*)\"$")
    public void i_check_first_result(String result) throws Throwable {
		SearchResultPage searchPageobj = new SearchResultPage(driver);
		searchPageobj.verifyResult(result);    	
    }
	
	//This is used for Clicking on the first result
	@When("^I click on the first result link$")
    public void i_search_text() throws Throwable {
		SearchResultPage searchPageobj = new SearchResultPage(driver);
		searchPageobj.clickingResult();    	
    }
	
	//This is used for verifying the last result page
	@Then("^I go to the \"([^\"]*)\" page$")
    public void i_goto_finalResult(String title) throws Throwable {
		FinalResultPage homePage = new FinalResultPage(driver);
        homePage.verifyFinalResult(title);    	
    }
	
	
	
	
	
	
	
	
	

}
