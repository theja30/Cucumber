Feature: Google Tests 

Scenario: Google Search Test by passing string directly 
	Given user opens Google Home page 
	When user enter "Navathej" Home page 
	Then validate if the searches of "Navathej" are opened 
	Then navigate to the first link 
	Then print Title 	
	Then quit the browser
	
Scenario Outline: Google Search Test by using Examples
	Given user opens Google Home page 
	When user enter "<searchString>" Home page 
	Then validate if the searches of "<searchString>" are opened 
	Then navigate to the first link 
	Then print Title 
	Then quit the browser
	Examples: 
		|searchString|
		|Navathej|
		|Manjeera|
				
Scenario: Google Search Test By using Data Map
	Given  user opens Google Home page 
	When  user enter searchString Home page 
		|searchString|
		|Navathej|
	Then  validate if the searches of searchString are opened 
		|searchString|
		|Navathej|
	Then  navigate to the first link 
	Then  print Title 
	Then quit the browser