@@ .. @@
 import React, { useState } from 'react';
-import { Link } from 'react-router-dom';
+import { Link, useNavigate } from 'react-router-dom';
 import { Eye, EyeOff, Rocket, Mail, Lock, User, Building } from 'lucide-react';
+import { useAuth } from '../contexts/AuthContext';
+import { UserRole } from '../types/auth';

 const Signup = () => {
+  const navigate = useNavigate();
+  const { signup, isLoading, error, clearError } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
-  const [userType, setUserType] = useState('entrepreneur');
+  const [userType, setUserType] = useState<UserRole>('entrepreneur');
   const [formData, setFormData] = useState({
     firstName: '',
     lastName: '',
     email: '',
     company: '',
     password: '',
     confirmPassword: '',
     agreeToTerms: false,
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value, type, checked } = e.target;
+    if (error) clearError();
     setFormData({
       ...formData,
       [name]: type === 'checkbox' ? checked : value,
     });
   };

-  const handleSubmit = (e: React.FormEvent) => {
+  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
-    // Handle signup logic here
-    console.log('Signup attempt:', { ...formData, userType });
+    
+    try {
+      await signup({
+        ...formData,
+        role: userType
+      });
+      
+      // Redirect to appropriate dashboard
+      navigate(`/dashboard/${userType}`, { replace: true });
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
         {/* Signup Form */}
         <form onSubmit={handleSubmit} className="space-y-6">
@@ .. @@
           <button
             type="submit"
+            disabled={isLoading || !formData.agreeToTerms}
-            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
+            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
           >
-            Create Account
+            {isLoading ? 'Creating Account...' : 'Create Account'}
           </button>