@SIT
Feature: Login application
Scenario Outline: Register  in a application
Given user is on Login Page
When title of login page is Register
When user enters "<firstname>" and "<lastname>"
Then cick register buttton


Examples:
|firstname|lastname|
|JK|RJ|
