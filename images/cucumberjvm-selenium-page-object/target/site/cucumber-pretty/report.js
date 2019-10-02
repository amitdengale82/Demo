$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/GoogleHome.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6053183066,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User can search with \"Google Search\"",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\"google-search\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I type \"The name of the wind\" into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I go to the search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the first result is \"The Name of the Wind - Wikipedia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I go to the \"The Name of the Wind - Wikipedia\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_open_google_website()"
});
formatter.result({
  "duration": 5206773278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The name of the wind",
      "offset": 8
    }
  ],
  "location": "Search.i_search_text(String)"
});
formatter.result({
  "duration": 285348302,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search()"
});
formatter.result({
  "duration": 3773889657,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_google_resultpage()"
});
formatter.result({
  "duration": 95933563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Name of the Wind - Wikipedia",
      "offset": 21
    }
  ],
  "location": "Result.i_check_first_result(String)"
});
formatter.result({
  "duration": 71970751,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_search_text()"
});
formatter.result({
  "duration": 3134233890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Name of the Wind - Wikipedia",
      "offset": 13
    }
  ],
  "location": "Result.i_goto_finalResult(String)"
});
formatter.result({
  "duration": 86292405,
  "status": "passed"
});
formatter.after({
  "duration": 1487624587,
  "status": "passed"
});
formatter.before({
  "duration": 4578631095,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I type \"The name of the w\" into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the Suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I go to the search result page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the first result is \"The Name of the Wind - Wikipedia\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I go to the \"The Name of the Wind - Wikipedia\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_open_google_website()"
});
formatter.result({
  "duration": 6468160655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The name of the w",
      "offset": 8
    }
  ],
  "location": "Search.i_search_text(String)"
});
formatter.result({
  "duration": 238155184,
  "status": "passed"
});
formatter.match({
  "location": "Search.suggestion_list()"
});
formatter.result({
  "duration": 2077578587,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_select_first_item_from_list()"
});
formatter.result({
  "duration": 9116943314,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_google_resultpage()"
});
formatter.result({
  "duration": 110245401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Name of the Wind - Wikipedia",
      "offset": 21
    }
  ],
  "location": "Result.i_check_first_result(String)"
});
formatter.result({
  "duration": 64137451,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_search_text()"
});
formatter.result({
  "duration": 3332490069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Name of the Wind - Wikipedia",
      "offset": 13
    }
  ],
  "location": "Result.i_goto_finalResult(String)"
});
formatter.result({
  "duration": 84733751,
  "status": "passed"
});
formatter.after({
  "duration": 1476681907,
  "status": "passed"
});
});