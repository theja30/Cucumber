$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Google Tests",
  "description": "",
  "id": "google-tests",
  "keyword": "Feature"
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
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 3961506107,
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
  "duration": 2308218824,
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
  "duration": 24103693,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5892302237,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 29288,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 133220507,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"\u003csearchString\u003e\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "validate if the searches of \"\u003csearchString\u003e\" are opened",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 19,
      "id": "google-tests;google-search-test-by-using-examples;;1"
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 20,
      "id": "google-tests;google-search-test-by-using-examples;;2"
    },
    {
      "cells": [
        "Manjeera"
      ],
      "line": 21,
      "id": "google-tests;google-search-test-by-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"Navathej\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "validate if the searches of \"Navathej\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 3005953988,
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
  "duration": 1926543307,
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
  "duration": 8395590,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 3243551054,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 42031,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 108540434,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"Manjeera\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "validate if the searches of \"Manjeera\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 2800265739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manjeera",
      "offset": 12
    }
  ],
  "location": "GoogleStepDefination.user_enter_Home_page(String)"
});
formatter.result({
  "duration": 1387874894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manjeera",
      "offset": 29
    }
  ],
  "location": "GoogleStepDefination.validate_if_the_searches_of_are_opened(String)"
});
formatter.result({
  "duration": 10690135,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 9105620548,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 43209,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 156831283,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Google Search Test By using Data Map",
  "description": "",
  "id": "google-tests;google-search-test-by-using-data-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enter searchString Home page",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 26
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "validate if the searches of searchString are opened",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 29
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 3068379624,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_enter_searchString_Home_page(DataTable)"
});
formatter.result({
  "duration": 1274803819,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.validate_if_the_searches_of_searchString_are_opened(DataTable)"
});
formatter.result({
  "duration": 96985201,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5525071379,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 24343,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 108724158,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Tests",
  "description": "",
  "id": "google-tests",
  "keyword": "Feature"
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
formatter.step({
  "line": 10,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 2776433954,
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
  "duration": 891172242,
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
  "duration": 9796460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "NavigationSteps.navigate_to_page(String)"
});
formatter.result({
  "duration": 706497117,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 1427167441,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 48850,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 119562670,
  "status": "passed"
});
});