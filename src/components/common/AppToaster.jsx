import { Toaster } from 'react-hot-toast';

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#ffffff',
          color: '#1f2937',
          border: '1px solid #e5e7eb',
          padding: '10px 14px',
          borderRadius: '6px',
          fontSize: '14px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        },
        success: {
          iconTheme: {
            primary: '#22c55e',
            secondary: '#ecfdf5',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fef2f2',
          },
        },
      }}
    />
  );
}
