@@ .. @@
 import React, { useState } from 'react';
-import { Link } from 'react-router-dom';
+import { Link, useNavigate, useLocation } from 'react-router-dom';
 import { Eye, EyeOff, Rocket, Mail, Lock } from 'lucide-react';
+import { useAuth } from '../contexts/AuthContext';
+import { UserRole } from '../types/auth';

 const Login = () => {
+  const navigate = useNavigate();
+  const location = useLocation();
+  const { login, isLoading, error, clearError } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
   const [userType, setUserType] = useState<UserRole>('entrepreneur');
   const [formData, setFormData] = useState({
     email: '',
     password: '',
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
+    if (error) clearError();
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

-  const handleSubmit = (e: React.FormEvent) => {
+  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
-    // Handle login logic here
-    console.log('Login attempt:', { ...formData, userType });
+    
+    try {
+      await login({
+        email: formData.email,
+        password: formData.password,
+        role: userType
+      });
+      
+      // Redirect to appropriate dashboard or previous location
+      const from = location.state?.from?.pathname || `/dashboard/${userType}`;
+      navigate(from, { replace: true });
+    } catch (error) {
+      // Error is handled by the auth context
+    }
   };

@@ .. @@
           <div className="grid grid-cols-3 gap-2">
-            {['entrepreneur', 'supplier', 'investor'].map((type) => (
+            {(['entrepreneur', 'supplier', 'investor'] as UserRole[]).map((type) => (
               <button
                 key={type}
                 type="button"
                 onClick={() => setUserType(type)}
                 className={`py-2 px-3 text-sm rounded-lg border transition-all duration-200 ${
                   userType === type
                     ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white border-transparent'
                     : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                 }`}
               >
                 {type.charAt(0).toUpperCase() + type.slice(1)}
               </button>
             ))}
           </div>
         </div>

+        {/* Error Message */}
+        {error && (
+          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
+            {error}
+          </div>
+        )}
+
         {/* Login Form */}
         <form onSubmit={handleSubmit} className="space-y-6">
@@ .. @@
           <button
             type="submit"
+            disabled={isLoading}
-            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
+            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
           >
-            Sign In
+            {isLoading ? 'Signing In...' : 'Sign In'}
           </button>