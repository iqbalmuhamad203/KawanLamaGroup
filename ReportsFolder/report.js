$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/LoginandLogout.feature");
formatter.feature({
  "name": "Login and logout feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that a user can log in with a valid username and password then log out",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already open website Cura Heroku App in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "The user clicks the navigation hamburger button",
  "keyword": "When "
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter username  \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "The user clicks the navigation hamburger button for logout",
  "keyword": "And "
});
formatter.step({
  "name": "User click the Logout button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify user should be logged out",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John Doe",
        "g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that a user can log in with a valid username and password then log out",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already open website Cura Heroku App in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginandLogoutSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the navigation hamburger button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickNavigationHamburgerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username  John Doe",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLoginButton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginandLogoutSteps.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the navigation hamburger button for logout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickNavigationHamburgerButton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user should be logged out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.verifyUserShouldbeLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/MakeAppointment.feature");
formatter.feature({
  "name": "Make an appointment with valid information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that a user can make an appointment with valid information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already open website Cura Heroku App in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "The user clicks the navigation hamburger button",
  "keyword": "When "
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter username  \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "User selects the Facilities provided and chooses Seul Cura Healthcare Center",
  "keyword": "And "
});
formatter.step({
  "name": "Click the checkbox of  Apply for hospital readmission",
  "keyword": "And "
});
formatter.step({
  "name": "Selects the Healthcare Program provided and chooses Medicare",
  "keyword": "And "
});
formatter.step({
  "name": "Selects the Visit Date provided and choose the date of 22-06-2023",
  "keyword": "And "
});
formatter.step({
  "name": "Add a comment to the text area I want to check my healthy",
  "keyword": "And "
});
formatter.step({
  "name": "Click the Book  Appointment button",
  "keyword": "Then "
});
formatter.step({
  "name": "User will be redirected to the confirmation page Confirm Appointment",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the confirmation page is appropriate",
  "keyword": "Then "
});
formatter.step({
  "name": "The user clicks the navigation hamburger button for logout",
  "keyword": "And "
});
formatter.step({
  "name": "User click the Logout button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify user should be logged out",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John Doe",
        "g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that a user can make an appointment with valid information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already open website Cura Heroku App in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginandLogoutSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the navigation hamburger button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickNavigationHamburgerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username  John Doe",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLoginButton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginandLogoutSteps.verifyLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects the Facilities provided and chooses Seul Cura Healthcare Center",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.selectsFacilities()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the checkbox of  Apply for hospital readmission",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.clickCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selects the Healthcare Program provided and chooses Medicare",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.selectstheHealthcareProgram()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selects the Visit Date provided and choose the date of 22-06-2023",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.selectstheVisitDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add a comment to the text area I want to check my healthy",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.addComment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Book  Appointment button",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeAppointment.clickBookAppointmentbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be redirected to the confirmation page Confirm Appointment",
  "keyword": "And "
});
formatter.match({
  "location": "MakeAppointment.confirmationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the confirmation page is appropriate",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeAppointment.confirmationPageisAppropriate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the navigation hamburger button for logout",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickNavigationHamburgerButton2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginandLogoutSteps.clickLogoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user should be logged out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginandLogoutSteps.verifyUserShouldbeLoggedOut()"
});
formatter.result({
  "status": "passed"
});
});