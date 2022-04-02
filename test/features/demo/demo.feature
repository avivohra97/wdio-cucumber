Feature: Demo Feature

    Feature Description om how to write
@demo
Scenario Outline: Run demo feature
    Given Google page is opened
    When I search <searchItem>
    Then I click on the first search result
    Then url should match <ExpectedURL>

    Examples:
    | searchItem| ExpectedURL |
    | WDIO      |  https://webdriver.io/ |