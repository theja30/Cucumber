package com.theja.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.theja.automation.core.TestBase;

public class HomePage extends TestBase {
	
	@FindBy(name="q")
	WebElement searchBox;
	
	@FindBy(name="btnK")
	WebElement searchButton;
	
	//Initializing the Page Objects:
		public HomePage(){
			PageFactory.initElements(driver, this);
		}
		
		public void navigateToHomePage()
		{
			driver.get("https://www.google.com");
		}
		
		public SearchPage searchGivenString(String searchString)
		{
			searchBox.sendKeys(searchString);
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", searchButton);
			return new SearchPage();
		
		}
		
		public String getTitle()
		{
			return driver.getTitle();
		}

}
