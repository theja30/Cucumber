Feature: Google Tests 

Scenario: Google Search Test by passing string directly 
	Given user opens Google Home page 
	When user enter "Navathej" Home page 
	Then validate if the searches of "Navathej" are opened 
	Then navigate to "2" page
	Then navigate to the first link 
	Then print Title 
	Then quit the browser	