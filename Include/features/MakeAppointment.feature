Feature: Make an appointment with valid information

  Scenario Outline: Verify that a user can make an appointment with valid information
    Given User already open website Cura Heroku App in browser
    When The user clicks the navigation hamburger button
    And User click Login button
    And User enter username  <username>
    And User enter password <password>
    And User click the Login button
    Then User should be logged in
		And  User selects the Facilities provided and chooses Seul Cura Healthcare Center
		And Click the checkbox of  Apply for hospital readmission
		And Selects the Healthcare Program provided and chooses Medicare
		And Selects the Visit Date provided and choose the date of 22-06-2023
		And Add a comment to the text area I want to check my healthy
		Then Click the Book  Appointment button
		And User will be redirected to the confirmation page Confirm Appointment
		Then Verify the confirmation page is appropriate
    And The user clicks the navigation hamburger button for logout
    Then User click the Logout button
    And Verify user should be logged out
    

    Examples: 
      | username | password           |
      | John Doe | g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM |

      