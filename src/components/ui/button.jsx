/* Simple Tailwind button compatible with `import { Button } from "@/components/ui/button"` */
export function Button({ className = "", ...props }) {
    return (
      <button
        className={
          "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium " +
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 " +
          className
        }
        {...props}
      />
    );
  }
  export default Button;