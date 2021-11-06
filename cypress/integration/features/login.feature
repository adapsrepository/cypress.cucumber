Feature: Orange HRM Login

        Scenario: Validate login
                Given I navigate to Orange HRM page
                And I enter username 'admin'
                And I enter password 'admin123'
                When I click on Login button
                Then I validate home page

        Scenario: Login with common action
                Given I navigate to Orange HRM page with required login
                Then I validate home page