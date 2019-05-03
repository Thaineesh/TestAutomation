package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
	static WebDriver driver;
	
@Given ("^user is on Login Page$")
public void login(){

System.setProperty("webdriver.chrome.driver","C:\\Users\\win7\\Downloads\\chromedriver.exe");		
driver=new ChromeDriver();
driver.get("http://demo.automationtesting.in/Windows.html");
}	

@When("^title of login page is Register$")
public void title(){
	driver.findElement(By.xpath("//a[@href='Register.html']")).click();
	String title= driver.getTitle();
	System.out.println(title);
		
}

@When("^user enters \"(.*)\" and \"(.*)\"$")
public void enterDet(String firstname,String lastname){
	driver.findElement(By.xpath("//input[@ng-model='FirstName']")).sendKeys(firstname);
	driver.findElement(By.xpath("//input[@ng-model='LastName']")).sendKeys(lastname);
	
}
@Then ("^cick register buttton$")
public void register(){
driver.findElement(By.xpath("//button[@id='submitbtn']")).click();
}




}
