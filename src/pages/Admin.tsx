import React, { useState } from "react";

type Notification = {
  id: string;
  message: string;
  createdAt: string;
};

const STORAGE_KEY = "academy_notifications";

const AdminPage: React.FC = () => {
  /* ---------------------------------------
     Lazy initialization (NO useEffect)
  ---------------------------------------- */
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [newNotification, setNewNotification] = useState("");

  /* ---------------------------------------
     Persist helper
  ---------------------------------------- */
  const persist = (data: Notification[]) => {
    setNotifications(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* ---------------------------------------
     Add notification
  ---------------------------------------- */
  const handleAdd = () => {
    if (!newNotification.trim()) return;

    const updated: Notification[] = [
      {
        id: crypto.randomUUID(),
        message: newNotification.trim(),
        createdAt: new Date().toISOString(),
      },
      ...notifications,
    ];

    persist(updated);
    setNewNotification("");
  };

  /* ---------------------------------------
     Delete notification
  ---------------------------------------- */
  const handleDelete = (id: string) => {
    const updated = notifications.filter((n) => n.id !== id);
    persist(updated);
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <p className="text-text-secondary mt-1">
            Manage academy notifications
          </p>
        </div>

        {/* Notifications Manager */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            📢 Notifications
          </h2>

          {/* Add */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              value={newNotification}
              onChange={(e) => setNewNotification(e.target.value)}
              placeholder="Enter new notification..."
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={handleAdd}
              className="bg-accent text-surface px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
            >
              + Add
            </button>
          </div>

          {/* List */}
          <ul className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-text-secondary text-sm">
                No notifications yet.
              </p>
            ) : (
              notifications.map((note) => (
                <li
                  key={note.id}
                  className="border border-border rounded-lg p-3 flex items-center justify-between bg-background"
                >
                  <span className="text-text-secondary text-sm">
                    {note.message}
                  </span>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
