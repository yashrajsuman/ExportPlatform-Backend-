// routes/notification.js
const express = require('express');
const router = express.Router();
const NotificationService = require('../services/notificationService');

// Create a new notification
router.post('/create', async (req, res) => {
    try {
        const { user_id, message } = req.body;
        const notification = await NotificationService.createNotification(user_id, message);
        res.json({ success: true, notification });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch notifications for a user
router.get('/user/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        const notifications = await NotificationService.getNotifications(user_id);
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Mark notification as read
router.put('/read/:notification_id', async (req, res) => {
    try {
        const { notification_id } = req.params;
        const notification = await NotificationService.markAsRead(notification_id);
        res.json({ success: true, notification });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
