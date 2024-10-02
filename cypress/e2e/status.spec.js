describe('Status Page Tests', () => {
    it('displays the correct CPU temperature', () => {
        // Intercept the API call to /api/status
        cy.intercept('GET', '/api/status').as('getStatus');

        // Navigate to the status page where the API call will be triggered
        cy.visit('/admin/status');

        // Wait for the API response
        cy.wait('@getStatus').then((interception) => {
            // Ensure the request was successful
            expect(interception.response.statusCode).to.eq(200);

            // Parse the response body to get the temperature
            const temperature = interception.response.body.cpu_info.temperature;

            // Assert that the temperature is displayed in the correct div
            cy.get('div.statistic').first()
                .contains(`div.value`, temperature.toString())
                .should('be.visible')
                .and('contain', temperature);
        });
    });
});