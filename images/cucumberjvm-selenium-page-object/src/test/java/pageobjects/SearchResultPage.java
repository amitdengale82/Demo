package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import helpers.Log;

public class SearchResultPage extends BaseClass{
	
	public SearchResultPage(WebDriver driver) {
		super(driver);
	}
	
		
	WebElement serachInputtext  = driver.findElement(By.name("q"));
	WebElement allResults = driver.findElement(By.xpath("//div[text()='All']"));
	WebElement searchResult = driver.findElement(By.xpath("(//div[@id='search']//h3)[1]"));
	String acutalTitle = driver.getTitle();
	
	public void verifyPage() {
		
		allResults.isDisplayed();
		Log.info("Search Results are displayed");		
	}
	
	public void verifyResult(String expectedResult) {
		String actualResult = searchResult.getText();
		Assert.assertEquals(actualResult, expectedResult);
		Log.info("First Search Results are displayed and matching");		
	}
		
	public void clickingResult() {
		searchResult.isDisplayed();
		searchResult.click();
		Log.info("First Search Results are displayed and clicked");		
	}
	
	
	
	
	
	


}
