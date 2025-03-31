describe(`User Interaction Test`, () => {
  beforeEach(() => {
    // Visit your application's URL before each test
    cy.visit(`http://localhost:5500`); // Update with your app's actual URL
  });

  it(`Types name, selects a choice, and verifies history log`, () => {
    const name = `Yahya Gilany`;
    const choice = `rock`;  // Ensure the value matches the option value in the dropdown

    // Type the name in the input field
    cy.get(`input[name="username"]`).type(name);

    // Click the start game button
    cy.get(`#start-game-button`).click();

    // Ensure the game screen is visible
    cy.get(`#game-screen`).should(`be.visible`);

    // Select an option from the dropdown (update 'choices' to 'user-selection')
    cy.get(`select[name="user-selection"]`).select(choice);

    // Click the submit button
    cy.get(`#go-button`).click();

    // Wait for the game history to update
    cy.wait(1000);  // Wait for 1 second to allow the history to update

    // Ensure the game history is populated with the correct content
    cy.get(`#game-history`)
      .should(`not.have.text`, ``) // Ensure it's not empty
      .should(`contain`, name) // Verify that the user's name is in the history
      .should(`contain`, choice); // Verify that the user's selection is in the history

    // Optionally, verify the number of tries (assuming the history log appends after each try)
    cy.get(`#game-history`).should(`be.visible`); // Ensures it's visible before interacting with it
  });
});
