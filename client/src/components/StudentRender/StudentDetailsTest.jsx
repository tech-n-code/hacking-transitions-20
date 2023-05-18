describe('StudentDetail Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('displays the student name correctly', () => {
      const studentdata = [
        {
          firstname: 'John',
          lastname: 'Doe',
        },
      ];
  
      cy.get('.column2').contains('Name').next().should('contain', 'John Doe');
    });
  
    it('displays the branch correctly', () => {
      const branchdata = [
        {
          id: 1,
          name: 'Computer Science',
        },
      ];
      const studentdata = [
        {
          branch_id: 1,
        },
      ];
  
      cy.wrap(branchdata).as('branchdata');
      cy.wrap(studentdata).as('studentdata');
  
      cy.get('@studentdata').then((studentdata) => {
        const foundBranch = cy
          .get('@branchdata')
          .then((branchdata) => branchdata.find((branch) => branch.id === studentdata[0].branch_id));
  
        cy.get('.column2').contains('Branch').next().should('contain', foundBranch.name);
      });
    });
  
    // Add more test cases for other parts of the component
  });
  