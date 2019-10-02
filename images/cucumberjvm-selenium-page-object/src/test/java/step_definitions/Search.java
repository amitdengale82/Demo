package step_definitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageobjects.HomePage;

public class Search {
	
	public WebDriver driver;
	
	
	public Search()
    {
    	driver = Hooks.driver;
    	
    }
		
	//This is used for verifying the Home page
	@Given("^I am on homepage$")
    public void i_open_google_website() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
    	driver.get("http://google.com");
    	HomePage homePage = new HomePage(driver);
    	homePage.verifyImage();
    	
    }
	
	//This is used for verifying the Entering the search criteria
	@When("^I type \"([^\"]*)\" into the search field$")
    public void i_search_text(String serachText) throws Throwable {
		HomePage homePage = new HomePage(driver);
        homePage.searchCompleteString(serachText);    	
    }
	
	//This is used for clicking the search button
	@When("^I click the Google Search button$")
    public void i_click_search() throws Throwable {
		HomePage homePage = new HomePage(driver);
		homePage.submitSearch();    	
    }
	
	//This is used for verifying that the suggestion list is present or not
	@When("^the Suggestions list is displayed$")
    public void suggestion_list() throws Throwable {
		HomePage homePage = new HomePage(driver);
		homePage.suggestionList();    	
    }
	
	//This is used for selecting first option from the result
	@When("^I click on the first suggestion in the list$")
    public void i_select_first_item_from_list() throws Throwable {
		HomePage homePage = new HomePage(driver);
		homePage.selectItem();    	
    }
	
	
	
	
	
	
	
	
	
	

}
