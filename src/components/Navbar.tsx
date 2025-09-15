@@ .. @@
 import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { Menu, X, Rocket, ChevronDown } from 'lucide-react';
+import { useAuth } from '../contexts/AuthContext';

 const Navbar = () => {
+  const { isAuthenticated, user, logout } = useAuth();
   const [isOpen, setIsOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const location = useLocation();

   const isActive = (path: string) => location.pathname === path;

-  const navItems = [
-    { name: 'Home', path: '/' },
-    { name: 'Dashboard', path: '/dashboard' },
-    { name: 'Marketplace', path: '/marketplace' },
-    { name: 'Franchise', path: '/franchise' },
-    { name: 'Community', path: '/community' },
-    { name: 'Investors', path: '/investors' },
-    { name: 'Marketing', path: '/marketing' },
-    { name: 'About', path: '/about' },
-  ];
+  const getNavItems = () => {
+    const baseItems = [
+      { name: 'Home', path: '/' },
+      { name: 'About', path: '/about' },
+    ];
+
+    if (isAuthenticated && user) {
+      const dashboardPath = `/dashboard/${user.role}`;
+      const roleSpecificItems = [
+        { name: 'Dashboard', path: dashboardPath },
+        { name: 'Marketplace', path: '/marketplace' },
+        { name: 'Community', path: '/community' },
+      ];
+
+      // Add role-specific navigation items
+      if (user.role === 'entrepreneur') {
+        roleSpecificItems.push(
+          { name: 'Franchise', path: '/franchise' },
+          { name: 'Investors', path: '/investors' },
+          { name: 'Marketing', path: '/marketing' }
+        );
+      } else if (user.role === 'investor') {
+        roleSpecificItems.push(
+          { name: 'Franchise', path: '/franchise' }
+        );
+      }
+
+      return [...baseItems, ...roleSpecificItems];
+    }
+
+    return [
+      ...baseItems,
+      { name: 'Marketplace', path: '/marketplace' },
+      { name: 'Franchise', path: '/franchise' },
+      { name: 'Community', path: '/community' },
+      { name: 'Investors', path: '/investors' },
+      { name: 'Marketing', path: '/marketing' },
+    ];
+  };
+
+  const navItems = getNavItems();
+
+  const handleLogout = () => {
+    logout();
+    setIsOpen(false);
+  };

@@ .. @@
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-8">
             {navItems.map((item) => (
               <Link
                 key={item.name}
                 to={item.path}
                 className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                   isActive(item.path)
                     ? 'text-blue-600 border-b-2 border-blue-600'
                     : 'text-gray-700 hover:text-blue-600'
                 }`}
               >
                 {item.name}
               </Link>
             ))}
             
             <div className="flex items-center space-x-4">
-              <Link
-                to="/login"
-                className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
-              >
-                Login
-              </Link>
-              <Link
-                to="/signup"
-                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
-              >
-                Get Started
-              </Link>
+              {isAuthenticated && user ? (
+                <div className="relative">
+                  <button
+                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
+                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
+                  >
+                    <span>Hi, {user.firstName}</span>
+                    <ChevronDown className="h-4 w-4" />
+                  </button>
+                  {isDropdownOpen && (
+                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
+                      <Link
+                        to={`/dashboard/${user.role}`}
+                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
+                        onClick={() => setIsDropdownOpen(false)}
+                      >
+                        Dashboard
+                      </Link>
+                      <button
+                        onClick={handleLogout}
+                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
+                      >
+                        Logout
+                      </button>
+                    </div>
+                  )}
+                </div>
+              ) : (
+                <>
+                  <Link
+                    to="/login"
+                    className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
+                  >
+                    Login
+                  </Link>
+                  <Link
+                    to="/signup"
+                    className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
+                  >
+                    Get Started
+                  </Link>
+                </>
+              )}
             </div>
           </div>

@@ .. @@
               ))}
               <div className="pt-4 space-y-2">
-                <Link
-                  to="/login"
-                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md"
-                  onClick={() => setIsOpen(false)}
-                >
-                  Login
-                </Link>
-                <Link
-                  to="/signup"
-                  className="block px-3 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md text-center"
-                  onClick={() => setIsOpen(false)}
-                >
-                  Get Started
-                </Link>
+                {isAuthenticated && user ? (
+                  <>
+                    <Link
+                      to={`/dashboard/${user.role}`}
+                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md"
+                      onClick={() => setIsOpen(false)}
+                    >
+                      Dashboard
+                    </Link>
+                    <button
+                      onClick={handleLogout}
+                      className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md"
+                    >
+                      Logout
+                    </button>
+                  </>
+                ) : (
+                  <>
+                    <Link
+                      to="/login"
+                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md"
+                      onClick={() => setIsOpen(false)}
+                    >
+                      Login
+                    </Link>
+                    <Link
+                      to="/signup"
+                      className="block px-3 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md text-center"
+                      onClick={() => setIsOpen(false)}
+                    >
+                      Get Started
+                    </Link>
+                  </>
+                )}
               </div>
             </div>
           </div>