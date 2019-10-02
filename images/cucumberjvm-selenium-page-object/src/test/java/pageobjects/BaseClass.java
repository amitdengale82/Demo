package pageobjects;


import org.openqa.selenium.WebDriver;



public class BaseClass {
	public static WebDriver driver;
	public static int timeOut = Integer.parseInt("60");
	
		
	public  BaseClass(WebDriver driver){
		BaseClass.driver = driver;
		
		
		
	}

}
