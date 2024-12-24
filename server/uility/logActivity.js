// utils/ActivityLogger.js
const ActivityModel = require('../Models/ActivityModel');

/**
 * Logs an activity to the database.
 * 
 * @param {String} userId - The ID of the user performing the activity.
 * @param {String} type - The type of activity (e.g., "Post", "Comment").
 * @param {String} title - A brief description of the activity (e.g., post title or comment content).
 * @param {String} action - The action performed (e.g., "created", "updated", "deleted").
 */
const logActivity = async (userId, type, title, action) => {
  try {
    await ActivityModel.create({
      userId,
      type,
      title,
      action,
    });
    console.log(`Activity logged: ${action} ${type} - ${title}`);
  } catch (error) {
    console.error('Error logging activity:', error.message);
  }
};

module.exports = { logActivity };
