package com.theja.automation.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.theja.automation.managers.PageObjectManager;
import com.theja.automation.pages.HomePage;
import com.theja.automation.pages.SearchPage;

public class TestBase {
	
	private WebDriver driver;
	private PageObjectManager pageObjectManager;
	
	public TestBase()
	{
		System.setProperty("webdriver.chrome.driver", "/Users/Theja/Documents/Study/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		pageObjectManager = new PageObjectManager(driver);
	}
	
	/*public static void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "/Users/Theja/Documents/Study/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}*/

	public PageObjectManager getPageObjectManager()
	{
		return pageObjectManager;
	}
	public void quitBrowser()
	{
		driver.quit();
	}
}
