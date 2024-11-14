describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/login')
      // Clear localStorage before each test to do log out
      cy.window().then((win) => {
        win.localStorage.clear() 
      })
    })
  
    it('should display login form with all elements', () => {
      // Check if all elements are present
      cy.get('h2').should('contain', 'Login')
      cy.get('input[name="email"]').should('be.visible')
      cy.get('input[name="password"]').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
    })
  
    it('should login successfully as teacher', () => {
     
      // Perform login
      cy.get('input[name="email"]').type('lea-schmitz@schule.de')
      cy.get('input[name="password"]').type('1234567890')
      cy.get('form').submit()
  
      // Wait for the login request
      cy.wait(2000)
  
      // Check if token is stored in localStorage
      cy.window().its('localStorage')
        .invoke('getItem', 'ecotoken')
        .should('exist')
  
      // Verify navigation to teacher dashboard
      cy.url().should('include', '/lehrerdash')
    })
  
    it('should login successfully as student', () => {
  
      cy.get('input[name="email"]').type('lea-schmitz@mail.com')
      cy.get('input[name="password"]').type('1234567890')
      cy.get('form').submit()
  
      cy.wait(2000)
      cy.url().should('include', '/dashboard')
    })
  
    it('should show error for invalid credentials', () => {
      cy.intercept('POST', 'http://localhost:8080/login', {
        statusCode: 401,
        body: {
          error: 'Invalid credentials'
        }
      }).as('loginRequest')
  
      cy.get('input[name="email"]').type('wrong@example.com')
      cy.get('input[name="password"]').type('wrongpassword')
      cy.get('form').submit()
  
      cy.wait('@loginRequest')
      cy.get('.text-red-500').should('contain', 'Ungültige E-Mail oder Passwort')
    })
  
    it('should show error for server error', () => {
      cy.intercept('POST', 'http://localhost:8080/login', {
        statusCode: 500
      }).as('loginRequest')
  
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('form').submit()
  
      cy.wait('@loginRequest')
      cy.get('.text-red-500').should('contain', 'Serverfehler')
    })
  
    it('should show error for network error', () => {
      cy.intercept('POST', 'http://localhost:8080/login', {
        forceNetworkError: true
      }).as('loginRequest')
  
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('form').submit()
  
      cy.get('.text-red-500').should('contain', 'Keine Antwort vom Server')
    })
  
    it('should validate required fields', () => {
      cy.get('form').submit()
      cy.get('input[name="email"]:invalid').should('exist')
      cy.get('input[name="password"]:invalid').should('exist')
    })
  })