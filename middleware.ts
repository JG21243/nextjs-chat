import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Optional: Configure beforeAuth, afterAuth, publicRoutes, etc.
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};