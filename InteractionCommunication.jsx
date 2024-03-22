router.post('/events/:id/comments', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event comment creation logic
  });
  
  router.get('/events/:id/comments', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event comment retrieval logic
  });
  
  router.post('/events/:id/messages', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event message creation logic
  });
  
  router.get('/events/:id/messages', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Implement event message retrieval logic
  });