// services/notificationService.js
const Notification = require('../models/Notification'); // Import the Notification model

const NotificationService = {
    // Create a new notification for a user
    async createNotification(user_id, message) {
        try {
            const notification = await Notification.create({
                user_id,
                message,
                status: 'unread', // Default status is unread
            });
            return notification;
        } catch (err) {
            throw new Error("Error creating notification: " + err.message);
        }
    },

    // Fetch notifications for a user
    async getNotifications(user_id) {
        try {
            const notifications = await Notification.findAll({
                where: { user_id },
                order: [['created_at', 'DESC']], // Sort notifications by creation date, newest first
            });
            return notifications;
        } catch (err) {
            throw new Error("Error fetching notifications: " + err.message);
        }
    },

    // Mark a notification as read
    async markAsRead(notification_id) {
        try {
            const notification = await Notification.findByPk(notification_id);
            if (notification) {
                notification.status = 'read';
                await notification.save();
                return notification;
            } else {
                throw new Error("Notification not found.");
            }
        } catch (err) {
            throw new Error("Error updating notification: " + err.message);
        }
    },
};

module.exports = NotificationService;
