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
  "duration": 6648193931,
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
  "duration": 1086756829,
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
  "duration": 14260456,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5572070771,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 39750,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 156901852,
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
  "duration": 3717363650,
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
  "duration": 1128919639,
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
  "duration": 11337703,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5294831023,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 39428,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 160061831,
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
  "duration": 3940454220,
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
  "duration": 1041145453,
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
  "duration": 14134924,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 12542780902,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 41171,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 120811967,
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
  "duration": 4944832192,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_enter_searchString_Home_page(DataTable)"
});
formatter.result({
  "duration": 2123370274,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.validate_if_the_searches_of_searchString_are_opened(DataTable)"
});
formatter.result({
  "duration": 8433283,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5260825662,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 27239,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 136417466,
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
  "duration": 3810395578,
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
  "duration": 1587341643,
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
  "duration": 8836320,
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
  "duration": 947538377,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 2933393721,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 41073,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 133605560,
  "status": "passed"
});
});