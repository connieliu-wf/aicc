import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

// Function to generate a consistent color based on the fallback text
const getAvatarColor = (fallback?: string): string => {
  const colors = [
    'var(--blue-bg)',
    'var(--green-bg)', 
    'var(--purple-bg)',
    'var(--orange-bg)',
    'var(--red-bg)',
    'var(--pink-bg)',
    'var(--yellow-bg)'
  ]
  
  if (!fallback) return colors[0]
  
  // Generate a consistent hash from the fallback text with better distribution
  let hash = 0
  for (let i = 0; i < fallback.length; i++) {
    const char = fallback.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  // Use the hash to select a color consistently
  const colorIndex = Math.abs(hash) % colors.length
  return colors[colorIndex]
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false)
    
    const sizeClasses = {
      sm: "h-5 w-5 body-text",
      md: "h-6 w-6 body-text",
      lg: "h-8 w-8 body-text"
    }

    const avatarColor = getAvatarColor(fallback)

    return (
      <div
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full border-0",
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            onError={() => setImgError(true)}
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          <div 
            className="flex h-full w-full items-center justify-center rounded-full text-white"
            style={{ backgroundColor: avatarColor }}
          >
            {fallback ? fallback.substring(0, 2).toUpperCase() : "?"}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: Array<{
    src?: string
    alt?: string
    fallback?: string
  }>
  max?: number
  size?: "sm" | "md" | "lg"
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, avatars, max = 5, size = "md", ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = avatars.length > max ? avatars.length - max : 0
    
    return (
      <div 
        className={cn("flex items-center", className)} 
        ref={ref} 
        {...props}
      >
        {visibleAvatars.map((avatar, index) => (
          <div 
            key={index} 
            className="relative" 
            style={{ 
              marginLeft: index === 0 ? 0 : "-4px",
              zIndex: visibleAvatars.length - index // Higher z-index for leftmost avatars
            }}
          >
            <Avatar 
              src={avatar.src} 
              alt={avatar.alt} 
              fallback={avatar.fallback}
              size={size}
              className={cn(
                "border-0 h-6 w-6",
                index !== 0 && "relative"
              )}
            />
          </div>
        ))}
        
        {remainingCount > 0 && (
          <div 
            className="relative" 
            style={{ 
              marginLeft: "-4px",
              zIndex: 0 // Lowest z-index for the +N avatar
            }}
          >
            <div 
              className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--text-secondary)] body-text"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              +{remainingCount}
            </div>
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup } 