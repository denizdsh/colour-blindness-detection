import { extendTailwindMerge } from "tailwind-merge";

export default extendTailwindMerge({
  theme: {
    borderRadius: [{ theme: ["default", "sm", "md", "lg", "xl", "circle"] }],
  },
});
