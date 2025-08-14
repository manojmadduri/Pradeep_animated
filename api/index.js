import express from "express";
import { createServer } from "http";
import { randomUUID } from "crypto";

// Memory storage for contacts
class MemStorage {
  constructor() {
    this.contacts = new Map();
  }

  async createContact(insertContact) {
    const id = randomUUID();
    const contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts() {
    return Array.from(this.contacts.values());
  }
}

const storage = new MemStorage();

// Validation function
function validateContact(data) {
  const { name, email, subject, message } = data;
  
  if (!name || !email || !subject || !message) {
    throw new Error('Missing required fields: name, email, subject, and message are required');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  
  return { name, email, subject, message };
}

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

// API Routes
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = validateContact(req.body);
    const contact = await storage.createContact(validatedData);
    res.json({ success: true, message: "Message sent successfully!", contact });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to send message"
    });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch contacts"
    });
  }
});

// Serve static files from dist/public
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', 'dist', 'public');

// Serve static assets
app.use('/assets', express.static(path.join(publicPath, 'assets')));

// Serve index.html for all other routes (SPA fallback)
app.get('*', (req, res) => {
  const indexPath = path.join(publicPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('File not found');
  }
});

export default app;