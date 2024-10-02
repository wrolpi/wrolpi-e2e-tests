describe('eBook Tests', () => {
    it('should contain the string "FuturePress" in epub.html', () => {
        const baseUrl = Cypress.config('baseUrl');

        // Directly request the epub.html file
        cy.request(`${baseUrl}/epub/epub.html`)
            .then((response) => {
                // Assert that the request was successful
                expect(response.status).to.eq(200);

                // Check if the body contains author info.
                expect(response.body).to.contain('FuturePress');
            });
    });
});