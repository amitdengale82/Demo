package pageobjects;



import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import helpers.Log;


public class HomePage extends BaseClass{
	
	public HomePage(WebDriver driver) {
		super(driver);
				
	}
	
	WebElement serachInputtext  = driver.findElement(By.name("q"));
	WebElement serachButton  = driver.findElement(By.xpath("(//input[@name='btnK'])[1]"));
	String acutalURL = driver.getCurrentUrl();
	WebElement suggestList = driver.findElement(By.xpath("//ul[@role='listbox']"));
	List<WebElement> firstListItem = driver.findElements(By.xpath("//ul[@role='listbox']/li//span"));
	
	
	public void verifyImage() {
		serachButton.isDisplayed();
		Assert.assertTrue(acutalURL.contains("https://www.google.com/"));
		Log.info("Google submit button is present");		
	}
	
	public void searchCompleteString(String search) {
		serachInputtext.sendKeys(search);
		Log.info("Enter the search string "+search);		
	}
	
	public void submitSearch() {
		try {
			new WebDriverWait(driver,timeOut).until(ExpectedConditions.visibilityOf(serachButton));
			serachButton.click();
			Log.info("Clicked the submit button");
		} catch (Exception e) {
			Log.error("Submit button not present" + e);
		}
	}
	
	public void suggestionList() {
		try {
			suggestList.isDisplayed();
		} catch (Exception e) {
			Log.error("Suggestion list is not present" + e);
		}
				
	}
	
	public void selectItem() {
		try {
			Thread.sleep(2000);
			firstListItem.get(0).click();
			Log.info("Selected first Item");
		} catch (InterruptedException e) {
			Log.error("List did not appeared "+e);
		}
		
				
	}
	
	
	
	

		
	
	
		
			
	

}
