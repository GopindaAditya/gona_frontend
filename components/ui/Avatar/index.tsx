import React from "react";
type AvatarProps = {
    src?: string;
    name?: string;
    size?: "sm" | "md" | "lg";
  };
  
  export default function Avatar({
    src,
    name = "User",
    size = "md",
  }: AvatarProps) {
    const sizeClasses =
      size === "sm" ? "w-8 h-8" : size === "lg" ? "w-14 h-14" : "w-10 h-10";
  
    return (
      <div className="flex items-center gap-3">
        <div
          className={`rounded-full bg-center bg-cover ${sizeClasses}`}
          style={{
            backgroundImage: `url(${
              src ||
              "https://www.gravatar.com/avatar/?d=mp"
            })`,
          }}
        ></div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    );
  }
  