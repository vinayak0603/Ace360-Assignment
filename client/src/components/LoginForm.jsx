import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Loader2, Eye, EyeOff, ShoppingBag } from 'lucide-react';

const LoginForm = () => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await login(formData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const fillTestCredentials = () => {
    setFormData({ username: 'emmaj', password: 'emmajpass' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white/90 p-6 rounded-xl shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-600 mt-2 text-sm">Sign in to access your premium dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className={`mt-1 w-full h-11 px-3 border rounded-lg focus:outline-none ${
                errors.username ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
              }`}
            />
            {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full h-11 px-3 pr-12 border rounded-lg focus:outline-none ${
                  errors.password ? 'border-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Signing In...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="my-6 relative text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="bg-white px-3 text-sm text-gray-500 relative z-10">Quick access</span>
        </div>

        <button
          type="button"
          onClick={fillTestCredentials}
          className="w-full h-10 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
        >
          Use Test Credentials
        </button>

        <div className="text-xs text-gray-500 text-center mt-4 space-y-1">
          <p>Test credentials:</p>
          <p>
            Username: <span className="font-mono bg-gray-100 px-1 rounded">emmaj</span>
          </p>
          <p>
            Password: <span className="font-mono bg-gray-100 px-1 rounded">emmajpass</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
