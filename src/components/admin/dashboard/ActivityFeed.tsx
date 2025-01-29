import React from 'react';
import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'completed assessment',
    timestamp: new Date(2024, 1, 15, 14, 30)
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'connected with professional',
    timestamp: new Date(2024, 1, 15, 13, 45)
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'purchased test',
    timestamp: new Date(2024, 1, 15, 12, 15)
  }
];

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, index) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {index !== activities.length - 1 && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center ring-8 ring-white">
                      <span className="text-pink-600 text-sm font-medium">
                        {activity.user.charAt(0)}
                      </span>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">
                          {activity.user}
                        </span>{' '}
                        {activity.action}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {format(activity.timestamp, 'h:mm a')}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}