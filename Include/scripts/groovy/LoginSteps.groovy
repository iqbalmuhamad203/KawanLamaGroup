import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class LoginandLogoutSteps {

	@Given("User already open website Cura Heroku App in browser")
	def navigateToLoginPage() {
		println ("\n I am ready navigateToLoginPage")
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')
	}

	@When("The user clicks the navigation hamburger button")
	def clickNavigationHamburgerButton() {
		println ("\n I am ready click clickNavigationHamburgerButton")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_CURA Healthcare_menu-toggle'))
	}

	@And("User click Login button")
	def clickLoginButton() {
		println ("\n I am ready click clickLoginButton")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_Login'))
	}

	@And("User enter username (.*)")
	def enterUsername(String username) {
		println ("\n I am ready enterUsername")
		println ("Username: "+username)
		WebUI.setText(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Username_username'), 'John Doe')
	}

	@And("User enter password (.*)")
	def enterPassword(String password) {
		println ("\n I am ready enterPassword")
		println ("Password: "+password)
		WebUI.setEncryptedText(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Password_password'), 'g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM')

		WebUI.delay(3)
	}

	@And("User click the Login button")
	def clickLoginButton2() {
		println ("\n I am ready clickLoginButton2")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/button_Login'))
	}

	@Then("User should be logged in")
	def verifyLogin() {
		println ("\n I am ready verifyLogin")
		WebUI.verifyElementPresent(findTestObject('Page_CURA Healthcare Service/h2_Make Appointment'), 3)

		WebUI.delay(3)
	}

	@And("The user clicks the navigation hamburger button for logout")
	def clickNavigationHamburgerButton2() {
		println ("\n I am ready click clickNavigationHamburgerButton2")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_CURA Healthcare_menu-toggle'))
	}

	@Then("User click the Logout button")
	def clickLogoutButton() {
		println ("\n I am ready clickLogoutButton")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/a_Logout'))
	}

	@And("Verify user should be logged out")
	def verifyUserShouldbeLoggedOut() {
		println ("\n I am ready verifyUserShouldbeLoggedOut")
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CURA Healthcare Service/h1_CURA Healthcare Service'), 3)

		WebUI.closeBrowser()
	}
}






