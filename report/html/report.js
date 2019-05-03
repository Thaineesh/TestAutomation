$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login application",
  "description": "",
  "id": "login-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SIT"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Register  in a application",
  "description": "",
  "id": "login-application;register--in-a-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "cick register buttton",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-application;register--in-a-application;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 11,
      "id": "login-application;register--in-a-application;;1"
    },
    {
      "cells": [
        "JK",
        "RJ"
      ],
      "line": 12,
      "id": "login-application;register--in-a-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Register  in a application",
  "description": "",
  "id": "login-application;register--in-a-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Register",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"JK\" and \"RJ\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "cick register buttton",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.login()"
});
formatter.result({
  "duration": 36845232894,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.title()"
});
formatter.result({
  "duration": 6545770962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JK",
      "offset": 13
    },
    {
      "val": "RJ",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.enterDet(String,String)"
});
formatter.result({
  "duration": 854737784,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.register()"
});
formatter.result({
  "duration": 241975653,
  "status": "passed"
});
});