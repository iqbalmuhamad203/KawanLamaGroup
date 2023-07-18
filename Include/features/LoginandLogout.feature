Feature: Login and logout feature

  Scenario Outline: Verify that a user can log in with a valid username and password then log out
    Given User already open website Cura Heroku App in browser
    When The user clicks the navigation hamburger button
    And User click Login button
    And User enter username  <username>
    And User enter password <password>
    And User click the Login button
    Then User should be logged in
    And The user clicks the navigation hamburger button for logout
    Then User click the Logout button
    And Verify user should be logged out
    

    Examples: 
      | username | password           |
      | John Doe | g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM |
