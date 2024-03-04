//state management tool --> for ,aking of globat states , similar use sa that of context Api

import { create } from "zustand";

// Creating a custom hook for managing conversation-related state
const useConversation = create((set) => ({
  selectedConversation: null, // Initial value for the selected conversation
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }), // Setter function for updating the selected conversation
  messages: [], // Initial value for the messages array
  setMessages: (messages) => set({ messages }), // Setter function for updating the messages array
}));

// Exporting the useConversation custom hook for use in components
export default useConversation;


// Zustand is a state management library for React that provides a simple and flexible API for managing 
// state in your applications. It is similar to the React Context API in that it allows you to create and 
// consume global state in your components, but it comes with some differences and additional features.
