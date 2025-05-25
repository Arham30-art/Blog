'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">Login to Your Account</h2>
        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" required className="dark:bg-gray-700 dark:text-white" />
          <Input type="password" placeholder="Password" required className="dark:bg-gray-700 dark:text-white" />
          <Button type="submit" className="bg-purple-600 text-white dark:bg-purple-700">Login</Button>
        </form>
        <p className="text-sm text-center mt-4 text-black dark:text-white">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-purple-600 hover:underline dark:text-purple-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
