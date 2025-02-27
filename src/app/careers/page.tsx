import Link from 'next/link';
import { Mail } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Customer Support Executive', role: 'Support Specialist', experience: '2+ years', isActive: true },
  { id: 2, title: 'Data Analyst', role: 'Data Specialist', experience: '3+ years', isActive: true },
  { id: 3, title: 'Software Developer', role: 'Full Stack Developer', experience: '2+ years', isActive: true },
  { id: 4, title: 'IT Support Specialist', role: 'Tech Support', experience: '1+ year', isActive: true },
  { id: 5, title: 'HR & Finance Professional', role: 'HR/Finance', experience: '3+ years', isActive: false },
  { id: 6, title: 'Business Development Manager', role: 'BD Manager', experience: '4+ years', isActive: true },
];
export default function CareersTable() {
  return (
    <main className='bg-gray-50 dark:bg-zinc-900'>
    <div className='max-w-7xl mx-auto p-4 sm:p-8'>
      <h2 className='text-center text-4xl dark:text-yellow-400 text-orange-500 font-semibold'>Current Openings</h2>
      <h3 className='text-neutral-900 text-center text-2xl mt-2 mb-12 dark:text-neutral-300 font-medium'>Explore our latest job opportunities and take the next step in your career with {" "}<span className='font-bold text-orange-500 text-3xl'>IGTL.</span></h3>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300">
                <th className="px-6 py-3">Job Title</th>
                <th className="px-6 py-3 hidden md:table-cell">Role</th>
                <th className="px-6 py-3 hidden md:table-cell">Experience</th>
                <th className="px-6 py-3 text-center hidden md:table-cell">Status</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 dark:text-white">{job.title}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 md:hidden">{job.role} • {job.experience}</span>
                      <span className="text-xs my-2 md:hidden">
                        {job.isActive ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">
                            Closed
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-gray-500 dark:text-gray-300">{job.role}</td>
                  <td className="px-6 py-4 hidden md:table-cell text-gray-500 dark:text-gray-300">{job.experience}</td>
                  <td className="px-6 py-4 hidden md:table-cell text-center">
                    {job.isActive ? (
                      <span className="px-2.5 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                        Closed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <Link href="/contact">
                        <button
                          disabled={!job.isActive}
                          className={`flex items-center justify-center px-3 py-1.5 rounded-md text-xs font-medium text-white transition-colors ${
                            job.isActive ? 'bg-orange-500 hover:bg-opacity-90 dark:bg-yellow-600 ' : 'bg-gray-400 cursor-not-allowed'
                          }`}
                          aria-label={job.isActive ? `Apply for ${job.title}` : `Applications closed for ${job.title}`}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {job.isActive ? 'Apply' : 'Closed'}
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          For any questions, please contact us at{' '}
          <a href="mailto:careers@infigtl.com" className="text-orange-500 hover:underline">
            careers@infigtl.com
          </a>
        </p>
      </div>
    </div>
    </main>
  );
}
