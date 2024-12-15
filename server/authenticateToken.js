const jwt = require('jsonwebtoken');

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: "Access denied. No token provided." });
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: "Invalid or expired token." });
                }

                // Check if user's role is in the allowed roles
                if (!allowedRoles.includes(user.role)) {
                    return res.status(403).json({ message: "Forbidden. You do not have access to this resource." });
                }

                req.user = user; // Attach user info to request
                next();
            });
        } catch (error) {
            res.status(500).json({ message: "Internal server error." });
        }
    };
};

module.exports = authorizeRoles;
