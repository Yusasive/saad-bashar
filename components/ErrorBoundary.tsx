"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error | null; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    // In production, you might want to log to an error reporting service
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-3xl font-semibold text-white">
              Something went wrong
            </h1>
            <p className="text-[#CDCDCD] text-lg">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={this.resetError}
                className="bg-[#34C759] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2FB04A] transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="block w-full bg-[#1E1E1E] text-[#F3F3F3] px-6 py-3 rounded-lg font-semibold hover:bg-[#2A2A2A] transition-colors"
              >
                Refresh Page
              </button>
            </div>
            {typeof window !== "undefined" && 
             process.env.NODE_ENV === "development" && 
             this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-[#CDCDCD] cursor-pointer">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-4 bg-[#1E1E1E] rounded text-sm text-red-400 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack && (
                    <>
                      {"\n\n"}
                      {this.state.error.stack}
                    </>
                  )}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

