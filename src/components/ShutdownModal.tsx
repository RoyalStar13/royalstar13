import React from 'react';
import { Power, X } from 'lucide-react';

interface ShutdownModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ShutdownModal({ onConfirm, onCancel }: ShutdownModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6 w-full max-w-md transform animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Power className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-bold text-white">System Shutdown</h2>
          </div>
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-300 mb-6">
          Are you sure you want to shut down the system? All unsaved progress will be lost.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Shut Down</span>
            <Power className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}