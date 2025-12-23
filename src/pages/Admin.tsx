import React, { useState } from "react";

/* -----------------------------
   Types
----------------------------- */
type Notification = {
  id: string;
  message: string;
  createdAt: string;
};

/* -----------------------------
   Mock Data (UI only)
----------------------------- */
const pendingMedia = [
  {
    id: 1,
    member: "Rahul Sharma",
    type: "video",
    caption: "Silambam practice – basic footwork",
    submittedAt: "Today, 10:30 AM",
  },
  {
    id: 2,
    member: "Ananya Patel",
    type: "image",
    caption: "Kung Fu stance training",
    submittedAt: "Yesterday, 6:45 PM",
  },
];

const applications = [
  {
    id: 1,
    name: "Vikram Rao",
    date: "12 Sep 2025",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sneha Iyer",
    date: "11 Sep 2025",
    status: "Pending",
  },
];

const STORAGE_KEY = "academy_notifications";

/* -----------------------------
   Admin Page
----------------------------- */
const AdminPage: React.FC = () => {
  /* Notifications (lazy init – no useEffect) */
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [newNotification, setNewNotification] = useState("");

  /* Persist helper */
  const persistNotifications = (data: Notification[]) => {
    setNotifications(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* Add notification */
  const handleAddNotification = () => {
    if (!newNotification.trim()) return;

    const updated: Notification[] = [
      {
        id: crypto.randomUUID(),
        message: newNotification.trim(),
        createdAt: new Date().toISOString(),
      },
      ...notifications,
    ];

    persistNotifications(updated);
    setNewNotification("");
  };

  /* Delete notification */
  const handleDeleteNotification = (id: string) => {
    const updated = notifications.filter((n) => n.id !== id);
    persistNotifications(updated);
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* ---------------------------------------
            Admin Snapshot
        ---------------------------------------- */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <p className="text-text-secondary mt-1">
            Manage approvals, applications, and academy notifications
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-accent text-surface font-semibold">
              Pending Media: {pendingMedia.length}
            </span>
            <span className="px-3 py-1 rounded-full bg-background border border-border text-text-secondary">
              Applications: {applications.length}
            </span>
            <span className="px-3 py-1 rounded-full bg-background border border-border text-text-secondary">
              Notifications: {notifications.length}
            </span>
          </div>
        </div>

        {/* ---------------------------------------
            Pending Media Approvals
        ---------------------------------------- */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Pending Media Approvals
          </h2>

          <div className="space-y-4">
            {pendingMedia.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="font-medium text-text-primary">{item.member}</p>
                  <p className="text-sm text-text-secondary">{item.caption}</p>
                  <p className="text-xs text-text-secondary mt-1">
                    {item.submittedAt} · {item.type.toUpperCase()}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-accent text-surface rounded-lg text-sm font-semibold hover:opacity-90">
                    Approve
                  </button>
                  <button className="px-4 py-2 border border-border text-text-secondary rounded-lg text-sm hover:text-text-primary">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------
            Membership Applications
        ---------------------------------------- */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Membership Applications
          </h2>

          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="border border-border rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-text-primary">{app.name}</p>
                  <p className="text-sm text-text-secondary">
                    Submitted on {app.date}
                  </p>
                </div>

                <button className="text-sm font-semibold text-accent hover:underline">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------
            Notifications Manager
        ---------------------------------------- */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            📢 Notifications
          </h2>

          {/* Add notification */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              value={newNotification}
              onChange={(e) => setNewNotification(e.target.value)}
              placeholder="Enter new notification..."
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={handleAddNotification}
              className="bg-accent text-surface px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
            >
              + Add
            </button>
          </div>

          {/* Notification list */}
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
                    onClick={() => handleDeleteNotification(note.id)}
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
