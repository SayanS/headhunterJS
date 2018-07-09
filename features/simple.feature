Feature: Global search for vacancies

  Scenario: Check results of Global Search
    Given Home page is opened
    When Enter "text" into Global Search field
    When Ckick on Global Search button
    Then Search results page should be opened with title "text"