package com.theja.automation.stepDefinations;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.theja.automation.core.TestBase;
import com.theja.automation.pages.HomePage;
import com.theja.automation.pages.SearchPage;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleStepDefination {

	TestBase testBase;
	 HomePage homePage;
	 SearchPage searchPage;
	 
	 public GoogleStepDefination(TestBase context)
	 {
		 testBase=context;
		 homePage= testBase.getPageObjectManager().getHomePage();
		 searchPage=testBase.getPageObjectManager().getSearchPage();
	 }
	
	@Given("^user opens Google Home page$")
	public void user_opens_Google_Home_page() {
		//TestBase.initialization();
		homePage.navigateToHomePage();
		
	}

	@When("^user enter \"([^\"]*)\" Home page$")
	public void user_enter_Home_page(String searchString) throws Throwable {
		homePage.searchGivenString(searchString);
	}
	
	@Then("^validate if the searches of \"([^\"]*)\" are opened$")
	public void validate_if_the_searches_of_are_opened(String searchString) throws Throwable {
		Assert.assertEquals(searchString+" - Google Search", searchPage.getTitle());
	}

	@Then("^print Title$")
	public void print_Title() {
		//System.out.println("Title: "+ homePage.getTitle());
	}
	
	@When("^user enter searchString Home page$")
	public void user_enter_searchString_Home_page(DataTable searchStrings) throws Throwable {
		for (Map<String,String> searchString : searchStrings.asMaps(String.class,String.class))
		{
			System.out.println(searchString.get("searchString"));
			user_enter_Home_page(searchString.get("searchString"));
		}
	}

	@Then("^validate if the searches of searchString are opened$")
	public void validate_if_the_searches_of_searchString_are_opened(DataTable searchStrings) throws Throwable {
		for (Map<String,String> searchString : searchStrings.asMaps(String.class,String.class))
		{
			//System.out.println(searchString.get("searchString"));
			validate_if_the_searches_of_are_opened(searchString.get("searchString"));
		}
	}


	@Then("^quit the browser$")
	public void close_the_Browse() {
		testBase.quitBrowser();
	}
}
