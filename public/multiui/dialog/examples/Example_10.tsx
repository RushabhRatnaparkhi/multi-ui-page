"use client";
import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_10";

type AnimationType = "slideUp" | "fadeInOut" | "scaleIn" | "rotateZoom";

export default function Example_10() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("slideUp");

  const animations: AnimationType[] = ["slideUp", "fadeInOut", "scaleIn", "rotateZoom"];
  const animationColors = {
    slideUp: "from-purple-500 to-pink-500",
    fadeInOut: "from-pink-500 to-red-500",
    scaleIn: "from-red-500 to-orange-500",
    rotateZoom: "from-orange-500 to-yellow-500",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Cyberpunk Dialog
        </h2>
        <p className="text-cyan-300">
          A futuristic dialog with animated borders and neon effects.
        </p>
        <div className="flex flex-wrap gap-3">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${
                currentAnimation === animation
                  ? animationColors[animation]
                  : "from-gray-800 to-gray-900"
              } hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 border border-cyan-500/30`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Launch Cyberpunk Dialog
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Neon Dreams
            </StyledDialogHeader>
            <StyledDialogDescription>
              Step into the future with our cyberpunk-inspired dialog. 
              Experience the {currentAnimation} animation with neon accents and pulsing borders.
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-pink-400 font-semibold">
                Dialog_10 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-200">
                <li>Double animated borders with neon glow</li>
                <li>Cyberpunk-inspired color scheme</li>
                <li>Enhanced backdrop blur effect</li>
                <li>Gradient buttons with hover effects</li>
                <li>Futuristic typography and styling</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-800 text-cyan-300 py-2 px-4 rounded-full hover:bg-gray-700 border border-cyan-500/30 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Welcome to the future!");
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-6 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Proceed
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <style jsx global>{`
        .neon-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
                       0 0 20px rgba(0, 255, 255, 0.3),
                       0 0 30px rgba(0, 255, 255, 0.2);
        }
      `}</style>

      <div className="mt-8 p-6 rounded-xl bg-black/50 border-2 border-dotted border-cyan-500">
        <h3 className="text-cyan-400 font-bold mb-2 neon-text">About this Dialog</h3>
        <p className="text-cyan-200">
          Dialog_10 pushes the boundaries of modern UI design with its cyberpunk aesthetic.
          It features animated double borders, neon text effects, and a dark futuristic theme.
          The combination of cyan and pink accents creates a striking visual experience that
          stands out in any application.
        </p>
      </div>
    </div>
  );
}
