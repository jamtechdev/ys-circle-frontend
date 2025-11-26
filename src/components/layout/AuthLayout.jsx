export default function AuthLayout({ children }) {
  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-100">
      <div className="tw-w-full tw-max-w-md tw-px-4">
        {children}
      </div>
    </div>
  )
}
