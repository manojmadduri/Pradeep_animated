import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Message sent successfully!", contact });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to send message" 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: error.message || "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
