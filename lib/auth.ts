// Import PrismaAdapter dari @next-auth/prisma-adapter
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Import tipe NextAuthOptions dari next-auth
import type {
  NextAuthOptions,
  User as NextAuthUserWithStringId,
} from "next-auth";

import GoogleProvider from "next-auth/providers/google";

// Import instance PrismaClient
import { prisma } from "@/config/db";

// Membuat variabel untuk konfigurasi NextAuth nya
export const authOptions: NextAuthOptions = {
  // Gunakan Prisma sebagai adapter
  adapter: PrismaAdapter(prisma),

  // Definisikan provider Github untuk otentikasi
  providers: [
    GoogleProvider({
      // Credential Google dari env
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // debug: true,
};
