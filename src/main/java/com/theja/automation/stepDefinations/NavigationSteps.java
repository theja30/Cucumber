package com.theja.automation.stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.theja.automation.core.TestBase;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class NavigationSteps  extends TestBase {

	

	@Then("^navigate to the first link$")
	public void navigate_to_the_first_link() {
		WebElement links = driver
				.findElement(By.xpath("//div[@id='search']//div[@class='g' and position()=1]//div[@class='r']/a"));
		driver.navigate().to(links.getAttribute("href"));
	}
	

	
	@Then("^navigate to \"([^\"]*)\" page$")
	public void navigate_to_page(String pageNumber) {
		WebElement links = driver
				.findElement(By.xpath("//div[@id='navcnt']//td[@class='cur']"));
		if(!pageNumber.equalsIgnoreCase(links.getText())){
		 links = driver
				.findElement(By.xpath("//div[@id='navcnt']//a[@aria-label='Page "+pageNumber+"']"));
		driver.navigate().to(links.getAttribute("href"));
		}
		else
		{
			System.out.println("already in the specified page");
		}
	}


}
