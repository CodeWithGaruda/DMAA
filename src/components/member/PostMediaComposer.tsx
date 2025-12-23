import React, { useState } from "react";

const PostMediaComposer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (!file) return;

    // Placeholder for backend integration
    console.log("MEDIA SUBMITTED", {
      file,
      caption,
      status: "PENDING_APPROVAL",
    });

    setSubmitted(true);
    setFile(null);
    setPreviewUrl(null);
    setCaption("");
  };

  return (
    <div className="bg-surface border border-border rounded-2xl shadow-sm p-6">
      {/* Header */}
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        📸 Share Your Training Moment
      </h3>
      <p className="text-sm text-text-secondary mb-4">
        Upload a training photo or video. All posts require admin approval
        before appearing in the gallery.
      </p>

      {/* Upload Area */}
      {!previewUrl && (
        <label className="block border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-accent transition-colors">
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-text-secondary text-sm">
            Click to upload an image or video
          </p>
        </label>
      )}

      {/* Preview */}
      {previewUrl && (
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-border">
            {file?.type.startsWith("video") ? (
              <video
                src={previewUrl}
                controls
                className="w-full max-h-72 object-contain bg-black"
              />
            ) : (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full max-h-72 object-contain bg-background"
              />
            )}
          </div>

          {/* Caption */}
          <textarea
            placeholder="Add a short caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border border-border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-accent"
            rows={3}
          />

          {/* Submit */}
          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setFile(null);
                setPreviewUrl(null);
                setCaption("");
              }}
              className="text-sm text-text-secondary hover:text-text-primary"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="bg-accent text-surface text-sm font-semibold px-5 py-2 rounded-lg shadow hover:opacity-90"
            >
              Submit for Approval
            </button>
          </div>
        </div>
      )}

      {/* Submitted State */}
      {submitted && (
        <div className="mt-4 bg-background border border-border rounded-lg p-4 text-sm text-text-secondary">
          ✅ Your post has been submitted and is awaiting admin approval.
        </div>
      )}
    </div>
  );
};

export default PostMediaComposer;
