package com.theja.automation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.theja.automation.core.TestBase;

public class SearchPage extends TestBase{

	@FindBy(xpath="//div[@id='navcnt']//td[@class='cur']")
	WebElement currentPage;


	@FindBy(xpath="//div[@id='search']//div[@class='g' and position()=1]//div[@class='r']/a")
	WebElement firstLink;


	//Initializing the Page Objects:
	public SearchPage(){
		PageFactory.initElements(driver, this);
	}

	public String getTitle()
	{
		return driver.getTitle();
	}
	
	public void navigateToFirstLink()
	{
		driver.navigate().to(firstLink.getAttribute("href"));
	}
	
	public SearchPage navigateToPage(String pageNumber) {
		if(!pageNumber.equalsIgnoreCase(currentPage.getText())){
			WebElement links = driver
				.findElement(By.xpath("//div[@id='navcnt']//a[@aria-label='Page "+pageNumber+"']"));
		driver.navigate().to(links.getAttribute("href"));
		return new SearchPage();
		}
		else
		{
			System.out.println("already in the specified page");
			return this;
		}
	}
}
