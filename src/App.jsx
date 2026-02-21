import React from "react";
import { useState } from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/ToDoList";
import FilterControls from "./components/FilterControls";
import SortingControls from "./components/SortingControls"; 
import NavBar from './components/NavBar';
import EventsTab from './components/EventsTab';
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('todos');
  
  return (
    <div className="app-container">
      <h1>Student Dashboard</h1>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />  {/* ← this was missing */}

      {activeTab === 'todos' && (
        <div className="tab-content">
          <AddTodo />
          <FilterControls />
          <SortingControls />
          <TodoList />
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="tab-content">
          <EventsTab />
        </div>
      )}

      {activeTab === 'finances' && (
        <div className="tab-content">
          <p>Finances coming soon</p>
        </div>
      )}
    </div>
  );
}

export default App;