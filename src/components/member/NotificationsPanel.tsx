import React from "react";
import memberContent from "../../content/member.json";

const NotificationsPanel: React.FC = () => {
  const notifications = memberContent.notifications;

  return (
    <div className="bg-surface border border-border rounded-2xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">
          📢 Notifications
        </h3>
        <span className="text-xs text-text-secondary">Dojo Notice Board</span>
      </div>

      {/* Notification List */}
      <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
        {notifications.length === 0 ? (
          <p className="text-text-secondary text-sm">
            No notifications at the moment.
          </p>
        ) : (
          notifications.map((note, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-3 text-sm text-text-secondary bg-background"
            >
              <div className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <p className="leading-relaxed">{note}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPanel;
