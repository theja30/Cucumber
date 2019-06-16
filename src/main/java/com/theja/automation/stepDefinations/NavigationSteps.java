package com.theja.automation.stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.theja.automation.core.TestBase;
import com.theja.automation.pages.HomePage;
import com.theja.automation.pages.SearchPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class NavigationSteps {

	TestBase testBase;
	SearchPage searchPage;
	
	public NavigationSteps(TestBase context)
	{
		testBase=context;
		searchPage= testBase.getPageObjectManager().getSearchPage();
	}
	
	@Then("^navigate to the first link$")
	public void navigate_to_the_first_link() {
		/*WebElement links = driver
				.findElement(By.xpath("//div[@id='search']//div[@class='g' and position()=1]//div[@class='r']/a"));
		driver.navigate().to(links.getAttribute("href"));*/
		//searchPage =new SearchPage();
		searchPage.navigateToFirstLink();
	}
	

	
	@Then("^navigate to \"([^\"]*)\" page$")
	public void navigate_to_page(String pageNumber) {
		/*WebElement links = driver
				.findElement(By.xpath("//div[@id='navcnt']//td[@class='cur']"));
		if(!pageNumber.equalsIgnoreCase(links.getText())){
		 links = driver
				.findElement(By.xpath("//div[@id='navcnt']//a[@aria-label='Page "+pageNumber+"']"));
		driver.navigate().to(links.getAttribute("href"));
		}
		else
		{
			System.out.println("already in the specified page");
		}*/
		//searchPage =new SearchPage();
		searchPage.navigateToPage(pageNumber);
	}


}
