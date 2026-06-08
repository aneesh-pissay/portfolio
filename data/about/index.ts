import { profile } from "@/data/profile";

export const about = {
    name: profile.name,
    bio: [
        profile.aboutBio,
        "Outside of core work, time goes to side projects, new libraries, and studying how strong teams solve similar problems well.",
    ],
    profileImage: null as string | null,
};
