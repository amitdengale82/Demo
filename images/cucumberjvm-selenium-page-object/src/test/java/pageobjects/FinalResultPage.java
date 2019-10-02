package pageobjects;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import helpers.Log;

public class FinalResultPage extends BaseClass {
	
	public FinalResultPage(WebDriver driver) {
		super(driver);
	}
	
	
	String acutalTitle = driver.getTitle();
	
	public void verifyFinalResult(String expectedTitle) {
		Assert.assertEquals(acutalTitle, expectedTitle);		
		Log.info("Verified the title of the result Page");		
	}
	
	

}
