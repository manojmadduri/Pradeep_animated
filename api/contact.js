export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // TODO: Add your email service integration here
    // For now, just log the contact form data
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 100));

    return res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}