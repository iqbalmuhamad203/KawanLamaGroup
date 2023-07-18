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



class MakeAppointment {


	@And("User selects the Facilities provided and chooses Seul Cura Healthcare Center")
	def selectsFacilities() {
		println ("\n I am ready selectsFacilities")
		WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CURA Healthcare Service/select_Tokyo CURA Healthcare Center        _5b4107'),
				'Hongkong CURA Healthcare Center', true)
	}


	@And("Click the checkbox of  Apply for hospital readmission")
	def clickCheckbox() {
		println ("\n I am ready clickCheckbox")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Apply for hospital readmission_hospit_63901f'))
	}

	@And("Selects the Healthcare Program provided and chooses Medicare")
	def selectstheHealthcareProgram() {
		println ("\n I am ready selectstheHealthcareProgram")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Medicare_programs'))
	}

	@And("Selects the Visit Date provided and choose the date of 22-06-2023")
	def selectstheVisitDate() {
		println ("\n I am ready selectstheVisitDate")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/input_Visit Date (Required)_visit_date'))
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/td_22'))
	}


	@And("Add a comment to the text area I want to check my healthy")
	def addComment() {
		println ("\n I am ready addComment")
		WebUI.setText(findTestObject('Object Repository/Page_CURA Healthcare Service/textarea_Comment_comment'), 'I need check')
	}


	@Then("Click the Book  Appointment button")
	def clickBookAppointmentbutton() {
		println ("\n I am ready clickBookAppointmentbutton")
		WebUI.click(findTestObject('Object Repository/Page_CURA Healthcare Service/button_Book Appointment'))
	}

	@And("User will be redirected to the confirmation page Confirm Appointment")
	def confirmationPage() {
		println ("\n I am ready confirmationPage")
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CURA Healthcare Service/h2_Appointment Confirmation'),
				3)
	}

	@Then("Verify the confirmation page is appropriate")
	def confirmationPageisAppropriate() {
		println ("\n I am ready confirmationPageisAppropriate")
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_CURA Healthcare Service/div_Appointment Confirmation               _7d61e7'),
				3)
	}
}