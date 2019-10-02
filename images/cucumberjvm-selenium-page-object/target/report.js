$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/cucumberjvm-selenium-page-object/src/test/resources/features/GoogleHome.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14008060487,
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
  "duration": 8788734777,
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
  "duration": 850301544,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search()"
});
formatter.result({
  "duration": 2511193753,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_google_resultpage()"
});
formatter.result({
  "duration": 80828602,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027All\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d76.0.3809.12 (220b19a666554bdcac56dff9ffd44c300842c933-refs/branch-heads/3809@{#83}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027DengalePC\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51038}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.12 (220b19a666554bdcac56dff9ffd44c300842c933-refs/branch-heads/3809@{#83}), userDataDir\u003dC:\\Users\\Dengale\\AppData\\Local\\Temp\\scoped_dir8172_1639245212}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bad8e41ba29da14d51528372525c0b00\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat pageobjects.SearchResultPage.\u003cinit\u003e(SearchResultPage.java:18)\r\n\tat step_definitions.Result.i_google_resultpage(Result.java:24)\r\n\tat ✽.Then I go to the search result page(E:/cucumberjvm-selenium-page-object/src/test/resources/features/GoogleHome.feature:7)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Result.i_search_text()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.google.com/sorry/index?continue\u003dhttps://www.google.com/search%3Fsource%3Dhp%26ei%3DLpeUXejwBIvSvwSfpZzgDA%26q%3DThe%2Bname%2Bof%2Bthe%2Bwind%26oq%3DThe%2Bname%2Bof%2Bthe%2Bwind%26gs_l%3Dpsy-ab.12..0l10.3203.3628..3973...0.0..1.188.988.0j7......0....1..gws-wiz.......0i131.CvmDIRdT468%26ved%3D0ahUKEwjov8v-yP3kAhUL6Y8KHZ8SB8wQ4dUDCAY\u0026q\u003dEgQt-uIaGLau0uwFIhkA8aeDS1Oe4oPpb0rjtAsnZ2p9CWat2g9BMgFy");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2318555294,
  "status": "passed"
});
formatter.before({
  "duration": 6000782444,
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
  "duration": 2333072382,
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
  "duration": 438717104,
  "status": "passed"
});
formatter.match({
  "location": "Search.suggestion_list()"
});
formatter.result({
  "duration": 265635231,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_select_first_item_from_list()"
});
formatter.result({
  "duration": 4939907807,
  "status": "passed"
});
formatter.match({
  "location": "Result.i_google_resultpage()"
});
formatter.result({
  "duration": 75397061,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027All\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d76.0.3809.12 (220b19a666554bdcac56dff9ffd44c300842c933-refs/branch-heads/3809@{#83}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 48 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027DengalePC\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:51074}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.12 (220b19a666554bdcac56dff9ffd44c300842c933-refs/branch-heads/3809@{#83}), userDataDir\u003dC:\\Users\\Dengale\\AppData\\Local\\Temp\\scoped_dir7936_280833892}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d76.0.3809.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 900009d823635c38d152b5a89472a9cd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat pageobjects.SearchResultPage.\u003cinit\u003e(SearchResultPage.java:18)\r\n\tat step_definitions.Result.i_google_resultpage(Result.java:24)\r\n\tat ✽.Then I go to the search result page(E:/cucumberjvm-selenium-page-object/src/test/resources/features/GoogleHome.feature:17)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Result.i_search_text()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.google.com/sorry/index?continue\u003dhttps://www.google.com/search%3Fsource%3Dhp%26ei%3DQZeUXf60It2PwgPm5ZngBA%26q%3Dthe%2Bname%2Bof%2Bthe%2Bwind%26oq%3DThe%2Bname%2Bof%2Bthe%2Bw%26gs_l%3Dpsy-ab.1.0.0l10.927.1179..3691...0.0..1.211.630.0j3j1......0....1..gws-wiz.beoB0KAsz2U\u0026q\u003dEgQt-uIaGMau0uwFIhkA8aeDS2dUaTzhDCgrjWcO_uZ2-9FHREO6MgFy");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2206804144,
  "status": "passed"
});
});