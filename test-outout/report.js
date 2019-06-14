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
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Navathej\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate if the searches of \"Navathej\" are opened",
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
  "location": "GoogleStepDefination.opn_browser()"
});
formatter.result({
  "duration": 2716561786,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1460033080,
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
  "duration": 1483362615,
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
  "duration": 11989540,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 3350238265,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 10234011,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 135129197,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter \"\u003csearchString\u003e\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "validate if the searches of \"\u003csearchString\u003e\" are opened",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 21,
      "id": "google-tests;google-search-test-by-using-examples;;1"
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 22,
      "id": "google-tests;google-search-test-by-using-examples;;2"
    },
    {
      "cells": [
        "Manjeera"
      ],
      "line": 23,
      "id": "google-tests;google-search-test-by-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter \"Navathej\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "validate if the searches of \"Navathej\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.opn_browser()"
});
formatter.result({
  "duration": 1528522956,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1135710634,
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
  "duration": 981606191,
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
  "duration": 9447706,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 3291621816,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 10880112,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 131774343,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enter \"Manjeera\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "validate if the searches of \"Manjeera\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.opn_browser()"
});
formatter.result({
  "duration": 1556626165,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1413079298,
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
  "duration": 3750245268,
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
  "duration": 7914013,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 7235954799,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 21401378,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 184519911,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Google Search Test By using Data Map",
  "description": "",
  "id": "google-tests;google-search-test-by-using-data-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user enter searchString Home page",
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
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "validate if the searches of searchString are opened",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 32
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.opn_browser()"
});
formatter.result({
  "duration": 1592970680,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1367138677,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_enter_searchString_Home_page(DataTable)"
});
formatter.result({
  "duration": 1308717117,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.validate_if_the_searches_of_searchString_are_opened(DataTable)"
});
formatter.result({
  "duration": 8165142,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 6419212661,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 7923001,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 126970250,
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
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Navathej\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate if the searches of \"Navathej\" are opened",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "navigate to \"2\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "print Title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.opn_browser()"
});
formatter.result({
  "duration": 1529106233,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1466768329,
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
  "duration": 985777006,
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
  "duration": 9481170,
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
  "duration": 776963391,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 2384392991,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 11754259,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.close_the_Browse()"
});
formatter.result({
  "duration": 137852646,
  "status": "passed"
});
});