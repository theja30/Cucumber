package com.theja.automation.managers;

import org.openqa.selenium.WebDriver;

import com.theja.automation.pages.HomePage;
import com.theja.automation.pages.SearchPage;

public class PageObjectManager {
	
	private WebDriver driver;
	private HomePage homePage;
	private SearchPage searchPage;
	
	
	public PageObjectManager(WebDriver driver) {
		 
		 this.driver = driver;
		 
		 }
	
	public HomePage getHomePage()
	{
		return (homePage == null) ? homePage = new HomePage(driver) : homePage;
	}
	
	public SearchPage getSearchPage()
	{
		return (searchPage == null) ? searchPage = new SearchPage(driver) : searchPage;
	}

}
