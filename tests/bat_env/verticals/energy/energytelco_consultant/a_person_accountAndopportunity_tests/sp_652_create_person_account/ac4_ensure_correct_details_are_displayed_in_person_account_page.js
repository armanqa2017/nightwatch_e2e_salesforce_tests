module.exports = {
    tags: ['bat_sp_652_ac4', 'bat_sp_652' , 'sp_652','bat_energytelco_sp_652_ac4', 'bat_energytelco_sp_652', 'energytelco_sp_652'],

    'Log in as Energy Telco Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energytelcoConsultant.username, data.energy.bat.energytelcoConsultant.password);
    },
    
    'GIVEN I have created a new person': function(browser) 
    {
        account
            .navigate()
            .click_newAccount()
            .waitForElementVisible('@salutationDropdown', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_salutationDropdown()
                        .click_salutationMr()
                        .verify.elementPresent('@firstName', 'First Name Field is Present?')
                        .setValue('@firstName', energy.energytelco.account_info.first_name )
                        .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                        .setValue('@lastName', energy.energytelco.account_info.last_name)
                        .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                        .click_contactMethod()
                        .waitForElementVisible('@emailPreferred', 15000)
                        .click_emailPreferred()
                        .setValue('@homePhone', energy.energytelco.account_info.home_phone )
                        .verify.elementPresent('@email', 'Email Field is Present?')
                        .setValue('@email', energy.energytelco.account_info.email)
                        .click_save()
                        .pause(5000);
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .click_salutationDropdown()
                            .click_salutationMr()
                            .verify.elementPresent('@firstName', 'First Name Field is Present?')
                            .setValue('@firstName', energy.energytelco.account_info.first_name )
                            .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                            .setValue('@lastName', energy.energytelco.account_info.last_name)
                            .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                            .click_contactMethod()
                            .waitForElementVisible('@emailPreferred', 15000)
                            .click_emailPreferred()
                            .setValue('@homePhone', energy.energytelco.account_info.home_phone )
                            .verify.elementPresent('@email', 'Email Field is Present?')
                            .setValue('@email', energy.energytelco.account_info.email)
                            .click_save()
                            .pause(5000);
                    }
            })
    },

    'THEN I shall be able to view the following details': function (browser) 
    {
       account
        .waitForElementVisible('@selectedTab', 30000, function (result)
        {
            if (result.value)
            {
                account
                    .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                    .verify.containsText('@selectedTab', energy.energytelco.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
                browser
                    .getText('[class="slds-page-header__detail-block forceHighlightsDesktopListRecordItem"]', function (result0){
                        console.log(result0.value)
                    });
                browser
                    .getText('[title=\"Energy Telco Automated Test0\"]', function(result1){
                    console.log(result1.value)
                    });
                browser
                    .getText('[class="emailuiFormattedEmail"]', function(result2){
                        console.log(result2.value)
                    });
                browser
                    .keys(browser.Keys.PAGEDOWN)
                    .getText('div[class="slds-form-element slds-form-element_readonly slds-form-element_edit slds-grow slds-hint-parent override--slds-form-element"]', function (result4){
                        console.log(result4.value)
                    });
                browser
                    .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4_ensure_correct_details_displayed_account_page.png')
                account
                    .click_telcocloseTab();
            }
                else
                {
                    console.log('Refreshing the browser ...')
                    browser
                        .refresh()
                    account
                        .waitForElementVisible('@selectedTab', 30000)
                        .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                        .verify.containsText('@selectedTab', energy.energytelco.account_info.account_name , 'The Created Account is Correctly Displayed in a Default Tab ?')
                    browser
                        .getText('[class="slds-page-header__detail-block forceHighlightsDesktopListRecordItem"]', function (result0){
                            console.log(result0.value)
                        });
                    browser
                        .getText('[title=\"Energy Telco Automated Test0\"]', function(result1){
                        console.log(result1.value)
                        });
                    browser
                        .getText('[class="emailuiFormattedEmail"]', function(result2){
                        console.log(result2.value)
                        });
                    browser
                        .keys(browser.Keys.PAGEDOWN)
                        .getText('div[class="slds-form-element slds-form-element_readonly slds-form-element_edit slds-grow slds-hint-parent override--slds-form-element"]', function (result4){
                        console.log(result4.value)
                        });
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energytelco_consultant/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4_ensure_correct_details_displayed_account_page.png')
                    account
                        .click_telcocloseTab();
                }
        })

    }
};