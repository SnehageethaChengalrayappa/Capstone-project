router.post('/events/:id/register', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event registration logic
  });
  
  router.delete('/events/:id/unregister', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event unregistration logic
  });
  
  router.get('/events/:id/attendees', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event attendeelist retrieval logic
  });