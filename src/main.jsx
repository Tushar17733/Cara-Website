import { createRoot } from 'react-dom/client';
import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.jsx';

const clerkPublishableKey = "pk_test_YWxsb3dlZC1wdXAtODYuY2xlcmsuYWNjb3VudHMuZGV2JA";

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
      <App />
  </ClerkProvider>
);
