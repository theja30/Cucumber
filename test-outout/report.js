$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/theja/automation/feature/search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Tests",
  "description": "",
  "id": "google-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2542891079,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Google Search Test by passing string directly",
  "description": "",
  "id": "google-tests;google-search-test-by-passing-string-directly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Navathej\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validate if the searches of \"Navathej\" are opened",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "navigate to \"2\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "print Title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1530221715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Navathej",
      "offset": 12
    }
  ],
  "location": "GoogleStepDefination.user_enter_Home_page(String)"
});
formatter.result({
  "duration": 2262948033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Navathej",
      "offset": 29
    }
  ],
  "location": "GoogleStepDefination.validate_if_the_searches_of_are_opened(String)"
});
formatter.result({
  "duration": 12154426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "GoogleStepDefination.navigate_to_page(String)"
});
formatter.result({
  "duration": 951718969,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 3015599072,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 155689330,
  "status": "passed"
});
formatter.after({
  "duration": 141953086,
  "status": "passed"
});
});