$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Google Tests",
  "description": "",
  "id": "google-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2536713064,
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
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "print Title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1627300295,
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
  "duration": 1131833606,
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
  "duration": 18374301,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 9073571263,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 8050887,
  "status": "passed"
});
formatter.after({
  "duration": 140185790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003csearchString\u003e\" Home page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "validate if the searches of \"\u003csearchString\u003e\" are opened",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "print Title",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 17,
      "id": "google-tests;google-search-test-by-using-examples;;1"
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 18,
      "id": "google-tests;google-search-test-by-using-examples;;2"
    },
    {
      "cells": [
        "Manjeera"
      ],
      "line": 19,
      "id": "google-tests;google-search-test-by-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1699436971,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Navathej\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "validate if the searches of \"Navathej\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "print Title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 841365383,
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
  "duration": 711278505,
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
  "duration": 10207006,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 5738141455,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 7887556,
  "status": "passed"
});
formatter.after({
  "duration": 101008768,
  "status": "passed"
});
formatter.before({
  "duration": 1652716615,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Google Search Test by using Examples",
  "description": "",
  "id": "google-tests;google-search-test-by-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Manjeera\" Home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "validate if the searches of \"Manjeera\" are opened",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "print Title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 3508129403,
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
  "duration": 3102647758,
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
  "duration": 16418774,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 8548695500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 8575103,
  "status": "passed"
});
formatter.after({
  "duration": 120320044,
  "status": "passed"
});
formatter.before({
  "duration": 1701772011,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Google Search Test By using Data Map",
  "description": "",
  "id": "google-tests;google-search-test-by-using-data-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user opens Google Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enter searchString Home page",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 24
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "validate if the searches of searchString are opened",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 27
    },
    {
      "cells": [
        "Navathej"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "navigate to the first link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "print Title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDefination.user_opens_Google_Home_page()"
});
formatter.result({
  "duration": 1602498083,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.user_enter_searchString_Home_page(DataTable)"
});
formatter.result({
  "duration": 2330383178,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.validate_if_the_searches_of_searchString_are_opened(DataTable)"
});
formatter.result({
  "duration": 8312550,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.navigate_to_the_first_link()"
});
formatter.result({
  "duration": 9227317583,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDefination.print_Title()"
});
formatter.result({
  "duration": 10028598,
  "status": "passed"
});
formatter.after({
  "duration": 276770383,
  "status": "passed"
});
});