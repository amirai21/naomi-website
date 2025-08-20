/* Minimal Card API: Card, CardHeader, CardContent */
export function Card({ className = "", children, ...props }) {
    return (
      <div
        className={"rounded-lg border bg-white shadow-sm " + className}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardHeader({ className = "", children, ...props }) {
    return (
      <div className={"border-b px-4 py-3 " + className} {...props}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ className = "", children, ...props }) {
    return (
      <div className={"px-4 py-3 " + className} {...props}>
        {children}
      </div>
    );
  }
  
  export default Card;