package com.theja.automation.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.theja.automation.pages.HomePage;
import com.theja.automation.pages.SearchPage;

public class TestBase {
	
	public static WebDriver driver;
	
	public static void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "/Users/Theja/Documents/Study/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	public static void quitBrowser()
	{
		driver.quit();
	}
}
