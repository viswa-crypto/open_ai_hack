@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import { AuthProvider } from './contexts/AuthContext';
+import ProtectedRoute from './components/ProtectedRoute';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
 import ChatBot from './components/ChatBot';
 import Home from './pages/Home';
 import Login from './pages/Login';
 import Signup from './pages/Signup';
-import Dashboard from './pages/Dashboard';
+import EntrepreneurDashboard from './pages/dashboards/EntrepreneurDashboard';
+import SupplierDashboard from './pages/dashboards/SupplierDashboard';
+import InvestorDashboard from './pages/dashboards/InvestorDashboard';
 import Marketplace from './pages/Marketplace';
 import Franchise from './pages/Franchise';
 import Community from './pages/Community';
 import Investors from './pages/Investors';
 import Marketing from './pages/Marketing';
 import About from './pages/About';

 function App() {
   return (
-    <Router>
-      <div className="min-h-screen bg-white">
-        <Navbar />
-        <main>
-          <Routes>
-            <Route path="/" element={<Home />} />
-            <Route path="/login" element={<Login />} />
-            <Route path="/signup" element={<Signup />} />
-            <Route path="/dashboard" element={<Dashboard />} />
-            <Route path="/marketplace" element={<Marketplace />} />
-            <Route path="/franchise" element={<Franchise />} />
-            <Route path="/community" element={<Community />} />
-            <Route path="/investors" element={<Investors />} />
-            <Route path="/marketing" element={<Marketing />} />
-            <Route path="/about" element={<About />} />
-          </Routes>
-        </main>
-        <Footer />
-        <ChatBot />
-      </div>
-    </Router>
+    <AuthProvider>
+      <Router>
+        <div className="min-h-screen bg-white">
+          <Navbar />
+          <main>
+            <Routes>
+              <Route path="/" element={<Home />} />
+              <Route path="/login" element={<Login />} />
+              <Route path="/signup" element={<Signup />} />
+              
+              {/* Role-based Dashboard Routes */}
+              <Route 
+                path="/dashboard/entrepreneur" 
+                element={
+                  <ProtectedRoute allowedRoles={['entrepreneur']}>
+                    <EntrepreneurDashboard />
+                  </ProtectedRoute>
+                } 
+              />
+              <Route 
+                path="/dashboard/supplier" 
+                element={
+                  <ProtectedRoute allowedRoles={['supplier']}>
+                    <SupplierDashboard />
+                  </ProtectedRoute>
+                } 
+              />
+              <Route 
+                path="/dashboard/investor" 
+                element={
+                  <ProtectedRoute allowedRoles={['investor']}>
+                    <InvestorDashboard />
+                  </ProtectedRoute>
+                } 
+              />
+              
+              {/* Protected Routes */}
+              <Route 
+                path="/marketplace" 
+                element={
+                  <ProtectedRoute>
+                    <Marketplace />
+                  </ProtectedRoute>
+                } 
+              />
+              <Route 
+                path="/community" 
+                element={
+                  <ProtectedRoute>
+                    <Community />
+                  </ProtectedRoute>
+                } 
+              />
+              
+              {/* Role-specific Protected Routes */}
+              <Route 
+                path="/franchise" 
+                element={
+                  <ProtectedRoute allowedRoles={['entrepreneur', 'investor']}>
+                    <Franchise />
+                  </ProtectedRoute>
+                } 
+              />
+              <Route 
+                path="/investors" 
+                element={
+                  <ProtectedRoute allowedRoles={['entrepreneur']}>
+                    <Investors />
+                  </ProtectedRoute>
+                } 
+              />
+              <Route 
+                path="/marketing" 
+                element={
+                  <ProtectedRoute allowedRoles={['entrepreneur']}>
+                    <Marketing />
+                  </ProtectedRoute>
+                } 
+              />
+              
+              {/* Public Routes */}
+              <Route path="/about" element={<About />} />
+            </Routes>
+          </main>
+          <Footer />
+          <ChatBot />
+        </div>
+      </Router>
+    </AuthProvider>
   );
 }

 export default App;