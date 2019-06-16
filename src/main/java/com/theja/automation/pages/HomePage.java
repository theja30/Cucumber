package com.theja.automation.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage  {
	
	private WebDriver driver;
	
	@FindBy(name="q")
	WebElement searchBox;
	
	@FindBy(name="btnK")
	WebElement searchButton;
	
	//Initializing the Page Objects:
		public HomePage(WebDriver driver){
			this.driver=driver;
			PageFactory.initElements(driver, this);
		}
		
		public void navigateToHomePage()
		{
			driver.get("https://www.google.com");
		}
		
		public void searchGivenString(String searchString)
		{
			searchBox.sendKeys(searchString);
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", searchButton);
		
		}
		
		public String getTitle()
		{
			return driver.getTitle();
		}

}
