Feature: Orange HRM - Assign Leave functionality

        Background:
                Given I navigate to HRM page
                And I enter username 'Admin' in HRM
                And I enter password 'admin123' in HRM
                And I click on Login button in HRM
                And I validate subscriber link on home page

        Scenario: Validate Assign Leave Functionality
                And I click on Timesheets button
                And I select value 'Ruchi Parikh' from Employee name auto suggest dropdown in Timesheets page
                And I click on view button in Timesheets page
                # And I click on add timesheet button in Timesheets page
                # And I select date from From Date date picker in Timesheets page
                And I click on edit button in Timesheets page
                And I select value 'Global Corp and Co - Global Software phase - 1' from Project name auto suggest dropdown in Timesheets page
                And I select value 'Bug Fixes' from activity name dropdown in Timesheets page
                And I enter time in timesheet in Timesheets page
                And I click on save button in Timesheets page