Feature: Google Homepage Search
  
  Scenario: User can search with "Google Search"
    Given I am on homepage
    When I type "The name of the wind" into the search field
    And I click the Google Search button
    Then I go to the search result page
    And the first result is "The Name of the Wind - Wikipedia"
    When I click on the first result link
    Then I go to the "The Name of the Wind - Wikipedia" page
    
  Scenario: User can search by using the suggestions
    Given I am on homepage
    When I type "The name of the w" into the search field
    And the Suggestions list is displayed
    And I click on the first suggestion in the list
    Then I go to the search result page
    And the first result is "The Name of the Wind - Wikipedia"
    When I click on the first result link
    Then I go to the "The Name of the Wind - Wikipedia" page
    
    
 